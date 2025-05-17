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
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
        <h2 className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}>
          NBA Accreditation Status
        </h2>
        <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
      </div>
      
      <div className="rounded-lg bg-white p-6 shadow-md">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          The Computer Engineering program at Fr. CRCE has been consistently accredited by the National Board of Accreditation (NBA). The NBA accreditation ensures that our program meets rigorous quality standards and prepares students effectively for their professional careers.
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
            <thead className="bg-[#F5F8FF]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Period
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Score
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Validity
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
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
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {data.period}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                      {data.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {data.score}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {data.validity}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
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