'use client'

import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import { useQuery } from '@tanstack/react-query'
import getIndustrialVisits, {
  IndustrialVisit,
} from '@/app/api/industrial_visits'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface PageProps {
  department: string
}

const IndustrialVisits: React.FC<PageProps> = ({ department }) => {
  const {
    data: visitsData,
    isLoading,
    isError,
  } = useQuery<IndustrialVisit[]>({
    queryKey: ['industrial-visits', department],
    staleTime: 6 * 60 * 60 * 1000, // 6 hour cache
    queryFn: () => getIndustrialVisits(department),
  })

  const fallbackData: IndustrialVisit[] = [
    {
      id: 1,
      status: 'published',
      company: 'TCS Innovation Labs',
      location: 'Mumbai, Maharashtra',
      date: '2023-08-18',
      participants: 'Third Year Computer Engineering Students (60)',
      outcomes:
        'Exposure to industry-scale AI projects, Understanding of software development lifecycle',
      coordinators: 'Dr. Sujata Deshmukh, Ms. Merly Thomas',
      department: 'computers',
    },
  ]

  const dataToRender = visitsData ?? fallbackData

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/4 bg-gray-300"></div>
        <h2
          className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
        >
          Industrial Visits
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/4 bg-gray-300"></div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          The Computer Engineering Department regularly organizes industrial
          visits to provide students with practical exposure to industry
          environments, technologies, and practices. These visits help bridge
          the gap between theoretical knowledge and real-world applications,
          enhancing students&apos; understanding of industry expectations.
        </p>

        {isLoading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : isError ? (
          <p className="text-center text-red-500">Failed to load data.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
              <thead className="bg-[#F5F8FF]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                    Company
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                    Participants
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                    Learning Outcomes
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                    Faculty Coordinators
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dataToRender.map((data) => (
                  <tr key={data.id} className="odd:bg-white even:bg-[#F9FAFC]">
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-[#131929]">
                      {data.company}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      {data.location}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      {new Date(data.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {data.participants}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {data.outcomes}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      {data.coordinators}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default IndustrialVisits
