'use client'

import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import getInternships, { Internship } from '@/app/api/internships'
import getPlacements, { Placement } from '@/app/api/placements'

interface PageProps {
  department: string
}

const fallbackInternships: Internship[] = [
  {
    id: 1,
    status: 'published',
    user_updated: '',
    date_updated: '',
    company: 'Example Company',
    package: '20,000/month', // stipend
    position: 'Software Engineer Intern',
    location: 'Mumbai',
    year: '2023',
    department: 'computers',
  },
]

const fallbackPlacements: Placement[] = [
  {
    id: 1,
    status: 'published',
    user_updated: '',
    date_updated: '',
    company: 'Example Company',
    package: '12 LPA',
    position: 'Software Engineer',
    location: 'Bangalore',
    year: '2023',
    department: 'computers',
  },
]

const PlacementsInternshipsTab: React.FC<PageProps> = ({ department }) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'placements' | 'internships'
  >('placements')

  const {
    data: internships = fallbackInternships,
    isLoading: loadingInternships,
  } = useQuery<Internship[]>({
    queryKey: ['internships', department],
    queryFn: () => getInternships(department),
    staleTime: 1000 * 60 * 5,
  })

  const {
    data: placements = fallbackPlacements,
    isLoading: loadingPlacements,
  } = useQuery<Placement[]>({
    queryKey: ['placements', department],
    queryFn: () => getPlacements(department),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="relative mb-8 md:mb-12 flex items-center justify-center">
        <div className="hidden sm:block absolute top-1/2 left-0 h-px w-1/5 bg-gray-300"></div>
        <h2 className="mx-2 sm:mx-8 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#131929]">
          Placement & Internship Statistics
        </h2>
        <div className="hidden sm:block absolute top-1/2 right-0 h-px w-1/5 bg-gray-300"></div>
      </div>

      <div className="mb-6 md:mb-8 flex justify-center">
        <div className="inline-flex rounded-md w-full sm:w-auto">
          <button
            onClick={() => setActiveSubTab('placements')}
            className={`flex-1 sm:flex-initial rounded-l-md px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium ${
              activeSubTab === 'placements'
                ? 'bg-[#131929] text-white'
                : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            Placements
          </button>
          <button
            onClick={() => setActiveSubTab('internships')}
            className={`flex-1 sm:flex-initial rounded-r-md px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium ${
              activeSubTab === 'internships'
                ? 'bg-[#131929] text-white'
                : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            Internships
          </button>
        </div>
      </div>

      <div className="rounded-lg bg-white p-4 sm:p-6 md:p-8 shadow-md">
        {activeSubTab === 'placements' ? (
          <div>
            <p className="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-gray-700">
              Our department has an impressive placement record with students
              securing positions in top companies across the industry.
            </p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white shadow">
                <thead className="bg-[#F5F8FF]">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                      Company
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                      Position
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                      Package
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                      Location
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {placements.map((placement, index) => (
                    <tr key={placement.id ?? index} className="bg-white">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap text-gray-900">
                        {placement.company}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                        {placement.position}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                        {placement.package}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                        {placement.location}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                        {placement.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div>
            <p className="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-gray-700">
              Our students participate in internships at leading organizations
              to gain practical industry experience.
            </p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white shadow">
                <thead className="bg-[#F5F8FF]">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                      Company
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                      Position
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                      Stipend
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                      Location
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {internships.map((internship, index) => (
                    <tr key={internship.id ?? index} className="bg-white">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap text-gray-900">
                        {internship.company}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                        {internship.position}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                        {internship.package}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                        {internship.location}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                        {internship.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PlacementsInternshipsTab
