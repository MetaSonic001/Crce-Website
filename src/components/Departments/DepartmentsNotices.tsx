'use client'

import React, { useEffect, useState } from 'react'
import { Zilla_Slab } from 'next/font/google'
import getDepartmentNotices, { DepartmentNotice } from '@/app/api/department'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface PageProps {
  department: string
}

const DepartmentsNotices: React.FC<PageProps> = ({ department }) => {
  const [notices, setNotices] = useState<DepartmentNotice[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDepartmentNotices(department)
        setNotices(data)
      } catch (error) {
        console.error('Error fetching department notices:', error)
        // Fallback dummy data
        setNotices([
          {
            id: 1,
            status: 'published',
            title: 'Academic Calendar Update for Semester Break',
            category: 'Examination',
            date: '2025-04-15',
            content:
              'The semester break has been rescheduled to begin from December 20, 2023 instead of December 15, 2023. Classes will resume on January 5, 2024.',
            issued_by: 'HOD',
            department: 'computers',
          },
        ])
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/4 bg-gray-300"></div>
        <h2
          className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
        >
          Department Notices
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/4 bg-gray-300"></div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          Important announcements, updates, and notifications from the Computer
          Engineering Department. Students are advised to regularly check this
          section for the latest information regarding academics, events, and
          other departmental activities.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
            <thead className="bg-[#F5F8FF]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Notice Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Content
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Issued By
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {notices.map((notice) => (
                <tr key={notice.id} className="odd:bg-white even:bg-[#F9FAFC]">
                  <td className="px-6 py-4 text-sm font-medium text-[#131929]">
                    {notice.title}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        notice.category === 'Academic'
                          ? 'bg-blue-100 text-blue-800'
                          : notice.category === 'Event'
                            ? 'bg-purple-100 text-purple-800'
                            : notice.category === 'Examination'
                              ? 'bg-red-100 text-red-800'
                              : notice.category === 'Internship'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {notice.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {notice.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {notice.content}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {notice.issued_by}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DepartmentsNotices
