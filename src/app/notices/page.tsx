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
  X,
  ExternalLink,
  Expand
} from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import getNotices from '@/app/api/notices'
import { getIconForNoticeType } from '@/components/notices'
import { getColorForNoticeType } from '@/components/notices'
import type { Notice } from '@/app/api/notices'

const ASSET_BASE_URL = process.env.NEXT_PUBLIC_ASSET_URL || ''
const getAssetUrl = (filename: string) => `${ASSET_BASE_URL}${filename}`

const NoticesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState<string>('all')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [expandedNotice, setExpandedNotice] = useState<Notice | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

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
    staleTime: 6 * 60 * 60 * 1000,
    queryFn: async () => {
      try {
        const res = await getNotices()
        if (!res?.data || !Array.isArray(res.data)) throw new Error('Invalid data format')
        return res.data.filter(
          (notice): notice is Notice =>
            notice && typeof notice === 'object' && 'id' in notice
        )
      } catch {
        return []
      }
    },
  })

  const filteredNotices = useMemo(() => {
    if (!data) return []
    let filtered = [...data]
    filtered.sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime())
    if (filterType !== 'all') filtered = filtered.filter(n => n.about === filterType)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(n => n.title.toLowerCase().includes(query) || n.info.toLowerCase().includes(query) || n.about.toLowerCase().includes(query))
    }
    return filtered
  }, [data, searchQuery, filterType])

  const noticeTypes = ['all', 'exam', 'holiday', 'event']

  return (
    <div className="mt-24 min-h-screen bg-gray-50 py-12 md:mt-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">All Notices</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">Stay updated with the latest announcements, exam schedules, holidays, and events.</p>
        </div>

        <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices by title, content, or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative sm:w-48" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  <span className="text-sm">{filterType === 'all' ? 'All Types' : filterType.charAt(0).toUpperCase() + filterType.slice(1)}</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
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
                      className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 ${filterType === type ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                    >
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {filteredNotices.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <button onClick={() => setExpandedNotice(notice)} className="absolute right-2 top-2 z-10 text-gray-400 hover:text-blue-600">
                  <Expand className="h-4 w-4" />
                </button>
                <div className="p-6 pb-3">
                  <div className="mb-3 flex items-center justify-between">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getColorForNoticeType(notice.about)}`}>{notice.about.charAt(0).toUpperCase() + notice.about.slice(1)}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      {new Date(notice.date_created).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">{getIconForNoticeType(notice.about)}</div>
                    <h3 className="line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">{notice.title}</h3>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <p className="line-clamp-3 leading-relaxed text-gray-600">{notice.info}</p>
                  {notice.file && (
                    <div className="mt-4">
                      <a href={getAssetUrl(notice.file)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-blue-600 hover:underline">
                        <ExternalLink className="mr-1 h-4 w-4" /> View File
                      </a>
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
            <h3 className="mb-2 text-lg font-medium text-gray-900">No notices found</h3>
            <p className="mb-6 text-gray-500">{searchQuery || filterType !== 'all' ? 'Try adjusting your search criteria or filters.' : 'There are currently no notices available.'}</p>
            {(searchQuery || filterType !== 'all') && (
              <button onClick={() => { setSearchQuery(''); setFilterType('all') }} className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>

      {expandedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="relative w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl">
            <button onClick={() => setExpandedNotice(null)} className="absolute right-4 top-4 text-gray-500 hover:text-gray-800">
              <X className="h-6 w-6" />
            </button>
            <div className="mb-4 flex items-center justify-between">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getColorForNoticeType(expandedNotice.about)}`}>{expandedNotice.about.charAt(0).toUpperCase() + expandedNotice.about.slice(1)}</span>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="mr-1 h-4 w-4" />
                {new Date(expandedNotice.date_created).toLocaleDateString()}
              </div>
            </div>
            <div className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
              {getIconForNoticeType(expandedNotice.about)}
              {expandedNotice.title}
            </div>
            <div className="mb-4 text-gray-700 whitespace-pre-wrap">
              {expandedNotice.info}
            </div>
            {expandedNotice.file && (
              <a href={getAssetUrl(expandedNotice.file)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline">
                <ExternalLink className="mr-1 h-4 w-4" /> View Attached File
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default NoticesPage

