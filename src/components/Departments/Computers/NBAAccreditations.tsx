'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const NBAAccreditations = () => {
  const accreditationData = [
    {
      period: '2022-2025',
      status: 'Accredited',
      score: '780/1000',
      validity: 'Valid till June 2025',
      remarks: 'Excellence in all parameters',
    },
    {
      period: '2019-2022',
      status: 'Accredited',
      score: '760/1000',
      validity: 'Valid till June 2022',
      remarks: 'Strong industry connections highlighted',
    },
    {
      period: '2016-2019',
      status: 'Accredited',
      score: '740/1000',
      validity: 'Valid till June 2019',
      remarks: 'Research output commended',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-8 flex items-center justify-center sm:mb-12">
        <div className="absolute left-0 top-1/2 h-px w-[10%] bg-gray-300 sm:w-1/4"></div>
        <h2 className={`${zilla.className} mx-4 text-center text-2xl font-bold text-[#131929] sm:mx-8 sm:text-4xl`}>
          NBA Accreditation Status
        </h2>
        <div className="absolute right-0 top-1/2 h-px w-[10%] bg-gray-300 sm:w-1/4"></div>
      </div>

      <div className="rounded-lg bg-white p-4 shadow-md sm:p-6">
        <p className="mb-6 text-base leading-relaxed text-gray-700 sm:mb-8 sm:text-lg">
          The Computer Engineering program at Fr. CRCE has been consistently accredited by the National Board of Accreditation (NBA). The NBA accreditation ensures that our program meets rigorous quality standards and prepares students effectively for their professional careers.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
            <thead className="bg-[#F5F8FF]">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#131929] sm:px-6 sm:py-4 sm:text-sm">
                  Period
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#131929] sm:px-6 sm:py-4 sm:text-sm">
                  Status
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#131929] sm:px-6 sm:py-4 sm:text-sm">
                  Score
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#131929] sm:px-6 sm:py-4 sm:text-sm">
                  Validity
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#131929] sm:px-6 sm:py-4 sm:text-sm">
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {accreditationData.map((data, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                >
                  <td className="whitespace-nowrap px-3 py-3 text-xs font-medium text-gray-900 sm:px-6 sm:py-4 sm:text-sm">
                    {data.period}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-xs text-gray-700 sm:px-6 sm:py-4 sm:text-sm">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 sm:px-3 sm:text-sm">
                      {data.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-xs text-gray-700 sm:px-6 sm:py-4 sm:text-sm">
                    {data.score}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-xs text-gray-700 sm:px-6 sm:py-4 sm:text-sm">
                    {data.validity}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-xs text-gray-700 sm:px-6 sm:py-4 sm:text-sm">
                    {data.remarks}
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

export default NBAAccreditations
