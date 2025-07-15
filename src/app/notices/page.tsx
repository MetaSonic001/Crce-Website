'use client'

import React, { useState, useMemo, useEffect, useRef } from 'react'
import {
  Calendar,
  ChevronRight,
  Bell,
  Book,
  GraduationCap,
  Search,
  Filter,
  ChevronDown,
} from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import getNotices from '@/app/api/notices'

interface Notice {
  id: number
  status: string
  date_created: string
  date_updated: string | null
  title: string
  info: string
  about: string
}

const getIconForNoticeType = (type: string) => {
  switch (type) {
    case 'exam':
      return <Book className="h-5 w-5 text-purple-600" />
    case 'holiday':
      return <Calendar className="h-5 w-5 text-green-600" />
    case 'event':
      return <Bell className="h-5 w-5 text-blue-600" />
    default:
      return <GraduationCap className="h-5 w-5 text-gray-600" />
  }
}

const getColorForNoticeType = (type: string) => {
  switch (type) {
    case 'exam':
      return 'bg-purple-100 text-purple-800 hover:bg-purple-200'
    case 'holiday':
      return 'bg-green-100 text-green-800 hover:bg-green-200'
    case 'event':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-200'
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-200'
  }
}

const NoticesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState<string>('all')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const { data, isLoading, isError, error } = useQuery<Notice[]>({
    queryKey: ['notices'],
    queryFn: async () => {
      try {
        const res = await getNotices()
        if (!res?.data || !Array.isArray(res.data)) {
          throw new Error('Invalid data format')
        }
        return res.data.filter(
          (notice): notice is Notice =>
            notice && typeof notice === 'object' && 'id' in notice
        )
      } catch (err) {
        console.error('Error fetching notices:', err)

        // Return fallback dummy data
        return [
          {
            id: 1,
            status: 'published',
            date_created: '2025-06-01',
            date_updated: null,
            title: 'Midterm Exam Schedule Released',
            info: 'The midterm exams will begin on July 15, 2025. Students are advised to check their respective department notice boards for detailed timetables.',
            about: 'exam',
          },
          {
            id: 2,
            status: 'published',
            date_created: '2025-06-03',
            date_updated: null,
            title: 'Holiday on Independence Day',
            info: 'College will remain closed on August 15, 2025 in observance of Independence Day.',
            about: 'holiday',
          },
          {
            id: 3,
            status: 'published',
            date_created: '2025-06-05',
            date_updated: null,
            title: 'Tech Talk: AI in Education',
            info: 'Join us for an expert talk on the future of AI in the classroom. The session will be conducted by industry experts.',
            about: 'event',
          },
          {
            id: 4,
            status: 'published',
            date_created: '2025-06-10',
            date_updated: null,
            title: 'Final Year Project Submission Deadline',
            info: 'All final year students must submit their project reports by July 30, 2025. Late submissions will not be accepted.',
            about: 'exam',
          },
          {
            id: 5,
            status: 'published',
            date_created: '2025-06-12',
            date_updated: null,
            title: 'Cultural Fest 2025',
            info: 'Annual cultural fest will be held from August 1-3, 2025. Registration opens soon for various competitions.',
            about: 'event',
          },
          {
            id: 6,
            status: 'published',
            date_created: '2025-06-15',
            date_updated: null,
            title: 'Monsoon Holiday',
            info: 'Due to heavy rainfall alert, college will remain closed on July 5, 2025.',
            about: 'holiday',
          },
        ]
      }
    },
  })

  // Filter and search notices
  const filteredNotices = useMemo(() => {
    if (!data) return []

    let filtered = [...data]

    // Sort by date (newest first)
    filtered.sort(
      (a, b) =>
        new Date(b.date_created).getTime() - new Date(a.date_created).getTime()
    )

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered.filter((notice) => notice.about === filterType)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (notice) =>
          notice.title.toLowerCase().includes(query) ||
          notice.info.toLowerCase().includes(query) ||
          notice.about.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [data, searchQuery, filterType])

  if (isLoading) {
    return (
      <div className="min-h-[100dvh] bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="text-lg">Loading notices...</div>
          </div>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="min-h-[100dvh] bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-500">
            Error loading notices: {(error as Error).message}
          </div>
        </div>
      </div>
    )
  }

  const noticeTypes = ['all', 'exam', 'holiday', 'event']

  return (
    <div className="mt-24 min-h-[100dvh] bg-gray-50 py-12 md:mt-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">All Notices</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Stay updated with the latest announcements, exam schedules,
            holidays, and events.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices by title, content, or type..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 transition-colors outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative sm:w-48" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 transition-colors outline-none hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  <span className="text-sm">
                    {filterType === 'all'
                      ? 'All Types'
                      : filterType.charAt(0).toUpperCase() +
                        filterType.slice(1)}
                  </span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 left-0 z-10 mt-1 rounded-md border border-gray-200 bg-white shadow-lg">
                  {noticeTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setFilterType(type)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full px-3 py-2 text-left text-sm first:rounded-t-md last:rounded-b-md hover:bg-gray-100 ${
                        filterType === type
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700'
                      }`}
                    >
                      {type === 'all'
                        ? 'All Types'
                        : type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredNotices.length} of {data?.length || 0} notices
            {searchQuery && (
              <span className="ml-2">
                for "<span className="font-medium">{searchQuery}</span>"
              </span>
            )}
            {filterType !== 'all' && (
              <span className="ml-2">
                in <span className="font-medium">{filterType}</span> category
              </span>
            )}
          </div>
        </div>

        {/* Notices Grid */}
        {filteredNotices.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="p-6 pb-3">
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getColorForNoticeType(notice.about)}`}
                    >
                      {notice.about.charAt(0).toUpperCase() +
                        notice.about.slice(1)}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      {new Date(notice.date_created).toLocaleDateString(
                        'en-US',
                        {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        }
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      {getIconForNoticeType(notice.about)}
                    </div>
                    <h3 className="line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                      {notice.title}
                    </h3>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <p className="line-clamp-3 leading-relaxed text-gray-600">
                    {notice.info}
                  </p>

                  {notice.date_updated && (
                    <div className="mt-4 text-xs text-gray-500">
                      Updated:{' '}
                      {new Date(notice.date_updated).toLocaleDateString()}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="mb-4 text-gray-400">
              <Bell className="mx-auto mb-4 h-16 w-16" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              No notices found
            </h3>
            <p className="mb-6 text-gray-500">
              {searchQuery || filterType !== 'all'
                ? 'Try adjusting your search criteria or filters.'
                : 'There are currently no notices available.'}
            </p>
            {(searchQuery || filterType !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setFilterType('all')
                }}
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors outline-none hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default NoticesPage
