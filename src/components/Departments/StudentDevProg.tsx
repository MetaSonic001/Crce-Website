'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import getFdpSdp, { FdpSdp } from '@/app/api/faculty_programs'
import { useQuery } from '@tanstack/react-query'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface PageProps {
  department: string
}

const fallbackData: FdpSdp[] = [
  {
    id: 1,
    status: 'published',
    title: 'Machine Learning & Deep Learning Applications',
    type: 'FDP',
    duration: '5 Days',
    date: '2023-06-15',
    participants: '45 faculty members from various institutes',
    sponsor: 'AICTE',
    coordinators: 'Dr. Sujata Deshmukh, Dr. Sunil Surve',
    department: 'computers',
  },
]

function formatDateRange(startDate: string, duration: string): string {
  try {
    const start = new Date(startDate)
    const days = parseInt(duration)
    if (isNaN(days)) return start.toDateString()

    const end = new Date(start)
    end.setDate(start.getDate() + days - 1)

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
    return `${start.toLocaleDateString('en-IN', options)} - ${end.toLocaleDateString('en-IN', options)}`
  } catch {
    return startDate
  }
}

const StudentDevProg: React.FC<PageProps> = ({ department }) => {
  const { data = fallbackData } = useQuery<FdpSdp[]>({
    queryKey: ['fdp_sdp_programs', department],
    queryFn: () => getFdpSdp(department),
    staleTime: 60 * 1000,
  })

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/5 bg-gray-300 hidden sm:block" />
        <h2
          className={`${zilla.className} mx-4 sm:mx-8 text-center text-2xl sm:text-4xl font-bold text-[#131929]`}
        >
          Student Development Programs
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/5 bg-gray-300 hidden sm:block" />
      </div>

      <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md">
        <p className="mb-8 text-base sm:text-lg leading-relaxed text-gray-700">
          The Computer Engineering Department regularly organizes Student
          Development Programs (SDPs) to enhance the knowledge and skills of
          academic and industry professionals. These programs cover emerging
          technologies and pedagogical methods to keep pace with the evolving
          educational landscape.
        </p>

        {/* Desktop view - table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
            <thead className="bg-[#F5F8FF]">
              <tr>
                {[
                  'Program Title',
                  'Type',
                  'Duration',
                  'Dates',
                  'Participants',
                  'Sponsor',
                  'Coordinators',
                ].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((program, index) => (
                <tr
                  key={program.id}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                >
                  <td className="px-6 py-4 text-sm font-medium text-[#131929]">
                    {program.title}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        program.type === 'FDP'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {program.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {program.duration}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {formatDateRange(program.date, program.duration)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {program.participants}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {program.sponsor}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {program.coordinators}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile view - cards */}
        <div className="md:hidden space-y-6">
          {data.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow p-4 border border-gray-200">
              <h3 className="text-lg font-medium text-[#131929] mb-2">{program.title}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-500">Type:</span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      program.type === 'FDP'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {program.type}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-500">Duration:</span>
                  <span className="text-sm text-gray-700">{program.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-500">Dates:</span>
                  <span className="text-sm text-gray-700">{formatDateRange(program.date, program.duration)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-500">Participants:</span>
                  <span className="text-sm text-gray-700 text-right flex-1 ml-2">{program.participants}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-500">Sponsor:</span>
                  <span className="text-sm text-gray-700">{program.sponsor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-500">Coordinators:</span>
                  <span className="text-sm text-gray-700 text-right flex-1 ml-2">{program.coordinators}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentDevProg
