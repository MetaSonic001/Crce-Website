'use client'

import React, { useState, useEffect } from 'react'
import {
  Book,
  Calendar,
  Bell,
  GraduationCap,
  Megaphone,
  AlertTriangle,
  Newspaper,
  Scroll,
  Users,
  Briefcase,
  Building2,
  FileText,
  ClipboardCheck,
  FileSignature,
  FileCheck2,
  UserCheck,
  Mic,
  Trophy,
  Bus,
  Utensils,
  DollarSign,
  School,
  Gavel,
  Globe,
  FilePlus2,
  Star,
  Lightbulb,
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import getNotices from '@/app/api/notices'
import type { Notice } from '@/app/api/notices'

const ASSET_BASE_URL = process.env.NEXT_PUBLIC_ASSET_URL || ''
const getAssetUrl = (filename: string) => `${ASSET_BASE_URL}${filename}`

export const getIconForNoticeType = (type: string) => {
  switch (type) {
    case 'exam':
      return <Book className="h-6 w-6 text-purple-600" />
    case 'holiday':
      return <Calendar className="h-6 w-6 text-green-600" />
    case 'event':
      return <Bell className="h-6 w-6 text-blue-600" />
    case 'timetable':
      return <Calendar className="h-6 w-6 text-purple-600" />
    case 'announcement':
      return <Megaphone className="h-6 w-6 text-orange-600" />
    case 'emergency':
      return <AlertTriangle className="h-6 w-6 text-red-600" />
    case 'news':
      return <Newspaper className="h-6 w-6 text-indigo-600" />
    case 'results':
      return <Scroll className="h-6 w-6 text-yellow-600" />
    case 'staff':
      return <Users className="h-6 w-6 text-gray-700" />
    case 'placement':
      return <Briefcase className="h-6 w-6 text-blue-700" />
    case 'infrastructure':
      return <Building2 className="h-6 w-6 text-gray-600" />
    case 'syllabus':
      return <FileText className="h-6 w-6 text-teal-600" />
    case 'assignments':
      return <ClipboardCheck className="h-6 w-6 text-lime-600" />
    case 'forms':
      return <FileSignature className="h-6 w-6 text-cyan-600" />
    case 'notices':
      return <FileCheck2 className="h-6 w-6 text-sky-600" />
    case 'admission':
      return <UserCheck className="h-6 w-6 text-green-700" />
    case 'seminar':
      return <Mic className="h-6 w-6 text-pink-600" />
    case 'competition':
      return <Trophy className="h-6 w-6 text-amber-600" />
    case 'transport':
      return <Bus className="h-6 w-6 text-yellow-700" />
    case 'canteen':
      return <Utensils className="h-6 w-6 text-rose-600" />
    case 'fees':
      return <DollarSign className="h-6 w-6 text-emerald-700" />
    case 'departments':
      return <School className="h-6 w-6 text-violet-600" />
    case 'rules':
      return <Gavel className="h-6 w-6 text-red-700" />
    case 'international':
      return <Globe className="h-6 w-6 text-blue-500" />
    case 'recruitment':
      return <FilePlus2 className="h-6 w-6 text-fuchsia-600" />
    case 'achievements':
      return <Star className="h-6 w-6 text-yellow-500" />
    case 'ideas':
      return <Lightbulb className="h-6 w-6 text-orange-500" />
    case 'security':
      return <ShieldCheck className="h-6 w-6 text-gray-800" />
    default:
      return <GraduationCap className="h-6 w-6 text-gray-600" />
  }
}

export const getColorForNoticeType = (type: string) => {
  switch (type) {
    case 'exam':
      return 'bg-purple-100 text-purple-800'
    case 'holiday':
      return 'bg-green-100 text-green-800'
    case 'event':
      return 'bg-blue-100 text-blue-800'
    case 'timetable':
      return 'bg-purple-100 text-purple-800'
    case 'announcement':
      return 'bg-orange-100 text-orange-800'
    case 'emergency':
      return 'bg-red-100 text-red-800'
    case 'news':
      return 'bg-indigo-100 text-indigo-800'
    case 'results':
      return 'bg-yellow-100 text-yellow-800'
    case 'staff':
      return 'bg-gray-100 text-gray-800'
    case 'placement':
      return 'bg-blue-100 text-blue-900'
    case 'infrastructure':
      return 'bg-gray-100 text-gray-700'
    case 'syllabus':
      return 'bg-teal-100 text-teal-800'
    case 'assignments':
      return 'bg-lime-100 text-lime-800'
    case 'forms':
      return 'bg-cyan-100 text-cyan-800'
    case 'notices':
      return 'bg-sky-100 text-sky-800'
    case 'admission':
      return 'bg-green-100 text-green-900'
    case 'seminar':
      return 'bg-pink-100 text-pink-800'
    case 'competition':
      return 'bg-amber-100 text-amber-800'
    case 'transport':
      return 'bg-yellow-100 text-yellow-900'
    case 'canteen':
      return 'bg-rose-100 text-rose-800'
    case 'fees':
      return 'bg-emerald-100 text-emerald-800'
    case 'departments':
      return 'bg-violet-100 text-violet-800'
    case 'rules':
      return 'bg-red-100 text-red-900'
    case 'international':
      return 'bg-blue-100 text-blue-600'
    case 'recruitment':
      return 'bg-fuchsia-100 text-fuchsia-800'
    case 'achievements':
      return 'bg-yellow-100 text-yellow-700'
    case 'ideas':
      return 'bg-orange-100 text-orange-700'
    case 'security':
      return 'bg-gray-200 text-gray-900'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const NoticesSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false)
  const [visibleNoticesCount, setVisibleNoticesCount] = useState(6)

  const { data, isLoading, isError, error } = useQuery<Notice[]>({
    queryKey: ['notices'],
    staleTime: 60 * 60 * 1000,
    queryFn: async () => {
      try {
        const res = await getNotices()
        if (!res?.data || !Array.isArray(res.data)) throw new Error('Invalid data format')
        const notices = res.data.filter(
          (notice): notice is Notice => notice && typeof notice === 'object' && 'id' in notice
        )
        // Sort notices by date_updated (if available) or date_created, newest first
        return notices.sort((a, b) => {
          const dateA = new Date(a.date_updated || a.date_created).getTime()
          const dateB = new Date(b.date_updated || b.date_created).getTime()
          return dateB - dateA
        })
      } catch (err) {
        console.error('Error fetching notices:', err)
        return [
          {
            id: 1,
            status: 'published',
            date_created: '2025-04-01',
            date_updated: null,
            title: 'Midterm Exam Schedule Released',
            info: 'The midterm exams will begin on April 15, 2025.',
            about: 'exam'
          },
        ]
      }
    }
  })

  useEffect(() => {
    const updateVisibleNoticesCount = () => {
      if (window.innerWidth < 640) setVisibleNoticesCount(2)
      else if (window.innerWidth < 768) setVisibleNoticesCount(4)
      else setVisibleNoticesCount(6)
    }
    updateVisibleNoticesCount()
    window.addEventListener('resize', updateVisibleNoticesCount)
    return () => window.removeEventListener('resize', updateVisibleNoticesCount)
  }, [])

  const visibleNotices = showAll ? (data ?? []) : (data ?? []).slice(0, visibleNoticesCount)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p className="text-red-500">Error: {(error as Error).message}</p>

  return (
    <section id="notices" className="w-full bg-white py-10 px-4 text-black">
      <div className="container mx-auto">
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
                    {notice.about.charAt(0).toUpperCase() + notice.about.slice(1)}
                  </span>
                  <div className="flex items-center text-sm font-medium text-gray-600">
                    <Calendar className="mr-1.5 h-4 w-4" />
                    {new Date(notice.date_updated || notice.date_created).toLocaleDateString()}
                  </div>
                </div>
                <div className="mb-4 flex items-center">
                  {getIconForNoticeType(notice.about)}
                  <h3 className="ml-2 text-xl font-bold text-gray-900">{notice.title}</h3>
                </div>
                <p className="mb-4 text-gray-600">{notice.info}</p>
                {notice.file && (
                  <a
                    href={getAssetUrl(notice.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    View File
                  </a>
                )}
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

