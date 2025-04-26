'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import { useQuery } from '@tanstack/react-query'
import getMentorships, { Mentorship } from '@/app/api/mentorship'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface PageProps {
  department: string
}

const fallbackData: Mentorship[] = [
  {
    id: 1,
    status: 'published',
    mentor: 'Dr. Sujata Deshmukh',
    specialization: 'Data Mining, Machine Learning, Blockchain',
    number_of_mentees: 20,
    mentee_groups: 'Senior Year (SE, TE, BE)',
    meeting_frequency: 'Bi-weekly',
    activities: 'Academic guidance, Career counseling, Research mentorship',
    department: 'computers',
  },
]

const MentorMentee: React.FC<PageProps> = ({ department }) => {
  const { data = fallbackData } = useQuery<Mentorship[]>({
    queryKey: ['mentorship', department],
    queryFn: () => getMentorships(department),
    staleTime: 60 * 1000,
  })

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/4 bg-gray-300"></div>
        <h2
          className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
        >
          Mentor-Mentee Program
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/4 bg-gray-300"></div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          The Mentor-Mentee program at the Computer Engineering Department
          provides personalized guidance to students throughout their academic
          journey. Each faculty member mentors a group of students, offering
          academic and career advice, monitoring their progress, and supporting
          their overall development.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
            <thead className="bg-[#F5F8FF]">
              <tr>
                {[
                  'Faculty Mentor',
                  'Specialization',
                  'Number of Mentees',
                  'Mentee Groups',
                  'Meeting Frequency',
                  'Mentorship Activities',
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
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                >
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-[#131929]">
                    {item.mentor}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {item.specialization}
                  </td>
                  <td className="px-6 py-4 text-center text-sm whitespace-nowrap text-gray-700">
                    {item.number_of_mentees}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {item.mentee_groups}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {item.meeting_frequency}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {item.activities}
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

export default MentorMentee
