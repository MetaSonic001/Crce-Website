'use client'

import React, { useState, useEffect } from 'react'
import { Calendar, ChevronRight, Bell, Book, GraduationCap } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
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
      return <Book className="h-6 w-6 text-purple-600" />
    case 'holiday':
      return <Calendar className="h-6 w-6 text-green-600" />
    case 'event':
      return <Bell className="h-6 w-6 text-blue-600" />
    default:
      return <GraduationCap className="h-6 w-6 text-gray-600" />
  }
}

const getColorForNoticeType = (type: string) => {
  switch (type) {
    case 'exam':
      return 'bg-purple-100 text-purple-800'
    case 'holiday':
      return 'bg-green-100 text-green-800'
    case 'event':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const NoticesSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false)
  const [visibleNoticesCount, setVisibleNoticesCount] = useState(6)

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
            date_created: '2025-04-01',
            date_updated: null,
            title: 'Midterm Exam Schedule Released',
            info: 'The midterm exams will begin on April 15, 2025.',
            about: 'exam',
          },
          {
            id: 2,
            status: 'published',
            date_created: '2025-04-03',
            date_updated: null,
            title: 'Holiday on Ambedkar Jayanti',
            info: 'College will remain closed on April 14, 2025.',
            about: 'holiday',
          },
          {
            id: 3,
            status: 'published',
            date_created: '2025-04-05',
            date_updated: null,
            title: 'Tech Talk: AI in Education',
            info: 'Join us for an expert talk on the future of AI in the classroom.',
            about: 'event',
          },
        ]
      }
    },
  })

  useEffect(() => {
    const updateVisibleNoticesCount = () => {
      if (window.innerWidth < 640) {
        setVisibleNoticesCount(2)
      } else if (window.innerWidth < 768) {
        setVisibleNoticesCount(4)
      } else {
        setVisibleNoticesCount(6)
      }
    }
    updateVisibleNoticesCount()
    window.addEventListener('resize', updateVisibleNoticesCount)
    return () => window.removeEventListener('resize', updateVisibleNoticesCount)
  }, [])

  const visibleNotices = showAll
    ? (data ?? [])
    : (data ?? []).slice(0, visibleNoticesCount)

  if (isLoading) return <p>Loading...</p>
  if (isError)
    return <p className="text-red-500">Error: {(error as Error).message}</p>

  return (
    <section id="notices" className="w-full bg-white py-10 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mt-10 mb-8 text-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 border-t border-gray-300"></div>
          </div>
          <h1 className="relative z-10 inline-block bg-white px-4 font-serif text-4xl text-gray-800">
            Notices
          </h1>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {visibleNotices.map((notice) => (
            <div
              key={notice.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition duration-300 ease-in-out hover:shadow-lg"
            >
              <div className="relative z-10 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getColorForNoticeType(notice.about)}`}
                  >
                    {notice.about.charAt(0).toUpperCase() +
                      notice.about.slice(1)}
                  </span>
                  <div className="flex items-center text-sm font-medium text-gray-600">
                    <Calendar className="mr-1.5 h-4 w-4" />
                    {new Date(notice.date_created).toLocaleDateString()}
                  </div>
                </div>
                <div className="mb-4 flex items-center">
                  {getIconForNoticeType(notice.about)}
                  <h3 className="ml-2 text-xl font-bold text-gray-900">
                    {notice.title}
                  </h3>
                </div>
                <p className="mb-4 text-gray-600">{notice.info}</p>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => redirect('/notices')}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-xs hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-hidden"
            >
              View All
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default NoticesSection
