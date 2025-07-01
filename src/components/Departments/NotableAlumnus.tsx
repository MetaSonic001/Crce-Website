'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface PageProps {
  department: string
}

const NotableAlumnus: React.FC<PageProps> = ({ department }) => {
  const alumniData = [
    {
      name: 'Rajesh Kumar',
      batch: '2005',
      currentPosition: 'Chief Technology Officer',
      company: 'TechInnovate Solutions',
      achievements:
        'Founded a successful AI startup, Holds 4 patents, Forbes 30 Under 30 in Technology',
      contribution:
        'Mentors current students, Established scholarship fund, Guest lecturer',
    },
    // other alumni data remains unchanged
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/4 bg-gray-300 hidden sm:block"></div>
        <h2
          className={`${zilla.className} mx-4 sm:mx-8 text-center text-3xl sm:text-4xl font-bold text-[#131929]`}
        >
          Notable Alumni
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/4 bg-gray-300 hidden sm:block"></div>
      </div>

      <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          The Computer Engineering Department takes pride in its alumni who have
          made significant contributions to the technology industry and
          academia. Our graduates have excelled in various domains and continue
          to maintain strong connections with the department.
        </p>

        {/* Desktop table view - hidden on mobile */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
            <thead className="bg-[#F5F8FF]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Batch
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Current Position
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Key Achievements
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Contributions to Department
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {alumniData.map((data, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                >
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-[#131929]">
                    {data.name}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {data.batch}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {data.currentPosition}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {data.company}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {data.achievements}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {data.contribution}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card view - visible only on mobile */}
        <div className="md:hidden space-y-6">
          {alumniData.map((data, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 border border-gray-100">
              <h3 className="text-xl font-bold text-[#131929] mb-2">{data.name}</h3>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Batch</p>
                  <p className="text-sm text-gray-700">{data.batch}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Company</p>
                  <p className="text-sm text-gray-700">{data.company}</p>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-xs font-semibold text-gray-500 uppercase">Current Position</p>
                <p className="text-sm text-gray-700">{data.currentPosition}</p>
              </div>
              <div className="mb-3">
                <p className="text-xs font-semibold text-gray-500 uppercase">Key Achievements</p>
                <p className="text-sm text-gray-700">{data.achievements}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Contributions</p>
                <p className="text-sm text-gray-700">{data.contribution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotableAlumnus
