'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import Image from 'next/image'
import {
  BookOpenText,
  GraduationCap,
  School,
  UsersRound,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'
import {
  Calendar,
  ChevronRight,
  Bell,
  Book,
  GraduationCap as GradCapIcon,
} from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface Notice {
  id: string
  date: string
  title: string
  type: 'exam' | 'holiday' | 'event'
  description: string
}

const notices: Notice[] = [
  {
    id: '1',
    date: '15 Dec 2024',
    title: 'Final Exams Begin',
    type: 'exam',
    description:
      'Winter semester final examinations commence. Check your schedule for exact times and locations.',
  },
  {
    id: '2',
    date: '25 Dec 2024',
    title: 'Winter Break',
    type: 'holiday',
    description:
      'College closed for winter holidays. Classes resume on January 5th, 2025.',
  },
  {
    id: '3',
    date: '10 Jan 2025',
    title: 'New Student Orientation',
    type: 'event',
    description:
      'Welcome event for incoming students. Campus tour and information sessions included.',
  },
  {
    id: '4',
    date: '1 Feb 2025',
    title: 'Spring Course Registration Opens',
    type: 'event',
    description:
      'Registration for spring semester courses begins. Early registration advised for popular classes.',
  },
  {
    id: '5',
    date: '15 Mar 2025',
    title: 'Midterm Exams Week',
    type: 'exam',
    description:
      'Spring semester midterm examinations. Prepare early and check with your professors for specific details.',
  },
]

const getIconForNoticeType = (type: Notice['type']) => {
  switch (type) {
    case 'exam':
      return <Book className="h-6 w-6 text-purple-600" />
    case 'holiday':
      return <Calendar className="h-6 w-6 text-green-600" />
    case 'event':
      return <Bell className="h-6 w-6 text-blue-600" />
    default:
      return <GradCapIcon className="h-6 w-6 text-gray-600" />
  }
}

const getColorForNoticeType = (type: Notice['type']) => {
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

export default function Page() {
  return (
    <main className="flex h-fit w-full flex-col items-center justify-center">
      <section className="w-full bg-white md:py-16 lg:py-20">
        <div className="mx-auto w-full px-4 pt-36 text-[#00122a] sm:px-8 md:px-16 md:pt-36 lg:px-28">
          <div className="relative text-center">
            <h1
            className={`mb-4 flex items-center justify-center text-center font-serif text-2xl sm:text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
              Notices
            </h1>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md transition duration-300 ease-in-out hover:shadow-lg"
              >
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 translate-y-8 transform rounded-full bg-linear-to-br from-blue-100 to-blue-200 opacity-20 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <div className="relative z-10 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getColorForNoticeType(notice.type)}`}
                    >
                      {notice.type.charAt(0).toUpperCase() +
                        notice.type.slice(1)}
                    </span>
                    <div className="flex items-center text-sm font-medium text-gray-600">
                      <Calendar className="mr-1.5 h-4 w-4" />
                      {notice.date}
                    </div>
                  </div>
                  <div className="mb-4 flex items-center">
                    {getIconForNoticeType(notice.type)}
                    <h3 className="ml-2 text-xl font-bold text-gray-900">
                      {notice.title}
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-600">{notice.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
