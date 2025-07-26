'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Search, X, Clock, ArrowRight, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';
import MiniSearch, { SearchResult as MiniSearchResult } from 'minisearch';

// Type definitions
interface SearchIndexItem {
  id: string;
  path: string;
  content: string;
}

interface SearchResult extends SearchIndexItem {
  score: number;
  match: Record<string, string[]>;
  terms: string[];
}

interface RecentSearch {
  path: string;
  content: string;
  timestamp: number;
}

interface SearchBarProps {
  placeholder?: string;
  maxResults?: number;
  maxRecentSearches?: number;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search",
  maxResults = 8,
  maxRecentSearches = 5,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [searchIndex, setSearchIndex] = useState<SearchIndexItem[]>([]);
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Load search index on component mount
  useEffect(() => {
    const loadSearchIndex = async (): Promise<void> => {
      try {
        setIsLoading(true);
        console.log('Attempting to load search index from /searchIndex.json');

        const response = await fetch('/searchIndex.json');
        console.log('Response status:', response.status, response.statusText);

        if (response.ok) {
          const data: Array<{ path: string; content: string }> = await response.json();
          console.log('Loaded search data:', data.length, 'items');

          // Transform data to include id field required by MiniSearch
          const indexedData: SearchIndexItem[] = data.map((item, index) => ({
            id: `${index}-${item.path}`,
            path: item.path,
            content: item.content
          }));
          setSearchIndex(indexedData);
          console.log('Search index set successfully');
        } else {
          console.warn('Failed to fetch search index:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Failed to load search index:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSearchIndex();
  }, []);

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('recentSearches');
      if (saved) {
        const parsed: RecentSearch[] = JSON.parse(saved);
        setRecentSearches(parsed);
      }
    } catch (error) {
      console.error('Failed to load recent searches:', error);
    }
  }, []);

  // Configure MiniSearch instance
  const miniSearch = useMemo((): MiniSearch<SearchIndexItem> | null => {
    if (searchIndex.length === 0) return null;

    const ms = new MiniSearch<SearchIndexItem>({
      fields: ['content', 'path'], // fields to index for full-text search
      storeFields: ['path', 'content'], // fields to return with search results
      searchOptions: {
        boost: { content: 2, path: 1 }, // boost content matches over path matches
        fuzzy: 0.2, // allow some typos
        prefix: true, // match prefixes
        combineWith: 'AND'
      }
    });

    // Add all documents to the search index
    ms.addAll(searchIndex);

    return ms;
  }, [searchIndex]);

  // Perform search
  const searchResults = useMemo((): SearchResult[] => {
    if (!miniSearch || !query.trim()) return [];

    try {
      const results: MiniSearchResult[] = miniSearch.search(query.trim(), {
        fuzzy: 0.2,
        prefix: true
      });

      // Transform MiniSearch results to our SearchResult type and limit results
      return results.slice(0, maxResults).map((result): SearchResult => {
        // Get the original document data
        const doc = searchIndex.find(item => item.id === result.id);
        return {
          id: result.id,
          path: doc?.path || '',
          content: doc?.content || '',
          score: result.score,
          match: result.match,
          terms: result.terms || []
        };
      });
    } catch (error) {
      console.error('Search error:', error);
      return [];
    }
  }, [miniSearch, query, maxResults, searchIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!isOpen) return;

      const totalResults = searchResults.length;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev =>
            prev < totalResults - 1 ? prev + 1 : -1
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev =>
            prev > -1 ? prev - 1 : totalResults - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && searchResults[highlightedIndex]) {
            handleResultClick(searchResults[highlightedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setHighlightedIndex(-1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, highlightedIndex, searchResults]);

  // Handle clicks outside search container
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Save recent search and navigate
  const handleResultClick = useCallback((result: SearchResult | RecentSearch): void => {
    const newSearch: RecentSearch = {
      path: result.path,
      content: result.content,
      timestamp: Date.now()
    };

    const updatedRecent = [newSearch, ...recentSearches.filter(s => s.path !== result.path)]
      .slice(0, maxRecentSearches);

    setRecentSearches(updatedRecent);

    try {
      localStorage.setItem('recentSearches', JSON.stringify(updatedRecent));
    } catch (error) {
      console.error('Failed to save recent searches:', error);
    }

    setIsOpen(false);
    setQuery('');
    setHighlightedIndex(-1);
    router.push(result.path);
  }, [recentSearches, router, maxRecentSearches]);

  // Clear recent searches
  const clearRecentSearches = (): void => {
    setRecentSearches([]);
    try {
      localStorage.removeItem('recentSearches');
    } catch (error) {
      console.error('Failed to clear recent searches:', error);
    }
  };

  // Highlight matching text based on search terms
  const highlightText = (text: string, terms: string[] = []): React.ReactNode => {
    if (!terms.length || !query.trim()) return text;

    // Create a regex pattern from search terms
    const pattern = terms
      .filter(term => term.length > 1)
      .map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|');

    if (!pattern) return text;

    try {
      const regex = new RegExp(`(${pattern})`, 'gi');
      const parts = text.split(regex);

      return parts.map((part, index) => {
        const isMatch = terms.some(term =>
          part.toLowerCase() === term.toLowerCase()
        );

        return isMatch ? (
          <mark key={index} className="bg-blue-200 text-blue-900 px-1 rounded">
            {part}
          </mark>
        ) : (
          part
        );
      });
    } catch {
      return text;
    }
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  // Handle input focus
  const handleInputFocus = (): void => {
    setIsOpen(true);
  };

  // Handle clear button click
  const handleClearClick = (): void => {
    setQuery('');
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  // Don't render if no search index is available AND not loading
  // Show component while loading or if index exists
  if (!searchIndex.length && !isLoading) {
    console.log('SearchBar: Not rendering - no search index and not loading');
    return (
      <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
        <div className="p-4 text-center text-red-500 bg-red-50 rounded-xl border border-red-200">
          <p className="text-sm">Search index not found at /searchIndex.json</p>
          <p className="text-xs mt-1 text-red-400">Check browser console for details</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`} ref={searchContainerRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={searchInputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          className="w-full pl-12 pr-12 py-3 text-lg  rounded-xl 
g-[hsl(224,37%,12%)]/90
                                        focus:outline-none focus:ring-2 focus:ring-blue-500  
                   transition-all duration-200 placeholder-gray-400"
          disabled={isLoading}
          aria-label="Search"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          role="combobox"
          aria-autocomplete="list"
        />
        {query && (
          <button
            onClick={handleClearClick}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 
                     hover:text-gray-600 transition-colors"
            aria-label="Clear search"
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl  
                      shadow-2xl shadow-gray-200/50  z-50 overflow-hidden"
          role="listbox"
          aria-label="Search results">

          {/* Loading State */}
          {isLoading && (
            <div className="p-4 text-center text-gray-500">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-2 text-sm">Loading search index...</p>
            </div>
          )}

          {/* Search Results */}
          {!isLoading && query.trim() && (
            <>
              {searchResults.length > 0 ? (
                <div className="max-h-96 overflow-y-auto">
                  <div className="p-2 border-b border-gray-100 bg-gray-50">
                    <p className="text-xs font-medium text-gray-600 px-3">
                      Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  {searchResults.map((result, index) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      className={`w-full text-left p-4 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-b-0 
                                ${highlightedIndex === index ? 'bg-blue-50' : ''}`}
                      role="option"
                      aria-selected={highlightedIndex === index}
                      type="button"
                    >
                      <div className="flex items-start space-x-3">
                        <FileText className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {highlightText(result.content, result.terms)}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 truncate">
                            {result.path}
                          </p>

                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <Search className="h-8 w-8 mx-auto mb-3 text-gray-300" />
                  <p className="text-sm">No results found for "{query}"</p>
                  <p className="text-xs mt-1 text-gray-400">Try different keywords</p>
                </div>
              )}
            </>
          )}

          {/* Recent Searches */}
          {!isLoading && !query.trim() && recentSearches.length > 0 && (
            <div className="max-h-96 overflow-y-auto">
              <div className="p-2 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                <p className="text-xs font-medium text-gray-600 px-3">Recent Searches</p>
                <button
                  onClick={clearRecentSearches}
                  className="text-xs text-blue-600 hover:text-blue-800 px-3 py-1 rounded 
                           hover:bg-blue-50 transition-colors"
                  type="button"
                  aria-label="Clear recent searches"
                >
                  Clear
                </button>
              </div>
              {recentSearches.map((recent) => (
                <button
                  key={`${recent.path}-${recent.timestamp}`}
                  onClick={() => handleResultClick(recent)}
                  className="w-full text-left p-4 hover:bg-gray-50 transition-colors 
                           border-b border-gray-50 last:border-b-0"
                  type="button"
                  role="option"
                >
                  <div className="flex items-start space-x-3">
                    <Clock className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {recent.content}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 truncate">
                        {recent.path}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !query.trim() && recentSearches.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              <Search className="h-8 w-8 mx-auto mb-3 text-gray-300" />
              <p className="text-sm">Start typing to search...</p>
              <p className="text-xs mt-1 text-gray-400">Search pages</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

