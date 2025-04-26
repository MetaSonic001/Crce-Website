'use client'
import React, { useState } from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

// Tab configuration
const DEPARTMENT_INITIATIVE_TABS = [
  { id: 'sphere_activity', title: 'Sphere - activity' },
  { id: 'mentor_mentee', title: 'Mentor mentee' },
  { id: 'industry_connect', title: 'Industry connect' },
  { id: 'virtual_labs', title: 'Virtual labs' },
]

const DepartmentInitiave = () => {
  const [activeTab, setActiveTab] = useState('sphere_activity')

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'sphere_activity':
        return (
          <div>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              The Computer Engineering Department conducts various activities under Sphere to enhance student skills in technical and non-technical areas.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
                <thead className="bg-[#F5F8FF]">
                  <tr>
                    {[
                      'ACTIVITY ',
                      'SPEAKERS',
                      'EVENT COORDINATORS',
                      'PARTICPANTS',
                      'DATE',
                      
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
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-sm font-medium text-[#131929]">
                      AI & Machine Learning Workshop
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      <span className="rounded-full px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800">
                        Mr. Patil
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      GDSC
                    </td>
                    
                    <td className="px-6 py-4 text-sm text-gray-700">
                      65 students from Computer Engineering
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      10 Sep 2023 - 12 Sep 2023
                    </td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'mentor_mentee':
        return (
          <div>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              The Mentor-Mentee program facilitates guidance and support for students through dedicated faculty mentors.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
                <thead className="bg-[#F5F8FF]">
                  <tr>
                    {[
                      'PROGRAM TITLE',
                      'TYPE',
                      'DURATION',
                      'DATES',
                      'PARTICIPANTS',
                      'SPONSOR',
                      'COORDINATORS',
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
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-sm font-medium text-[#131929]">
                      Career Guidance Session
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      <span className="rounded-full px-3 py-1 text-xs font-medium bg-green-100 text-green-800">
                        Mentoring
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Semester
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Aug 2023 - Dec 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      120 final year students
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Department
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Dr. Rajesh Kumar, Prof. Meena Shah
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'industry_connect':
        return (
          <div>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              The Industry Connect initiative bridges the gap between academia and industry through collaborations, internships, and expert sessions.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
                <thead className="bg-[#F5F8FF]">
                  <tr>
                    {[
                      'PROGRAM TITLE',
                      'TYPE',
                      'DURATION',
                      'DATES',
                      'PARTICIPANTS',
                      'SPONSOR',
                      'COORDINATORS',
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
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-sm font-medium text-[#131929]">
                      Cloud Computing with AWS
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      <span className="rounded-full px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800">
                        Industry Talk
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      1 Day
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      25 Nov 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      85 students from Third Year
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Amazon Web Services
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Dr. Pankaj Agarwal, Prof. Deepti Singh
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'virtual_labs':
        return (
          <div>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Virtual Labs provide remote access to labs where students can perform experiments virtually and learn at their own pace.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
                <thead className="bg-[#F5F8FF]">
                  <tr>
                    {[
                      'PROGRAM TITLE',
                      'TYPE',
                      'DURATION',
                      'DATES',
                      'PARTICIPANTS',
                      'SPONSOR',
                      'COORDINATORS',
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
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-sm font-medium text-[#131929]">
                      Database Management Systems Lab
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      <span className="rounded-full px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800">
                        Virtual Lab
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Semester
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Jan 2023 - May 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      140 Second year students
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      MHRD
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Dr. Vikas Sharma, Prof. Neha Joshi
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      default:
        return (
          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              Select a tab to view content.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/5 bg-gray-300" />
        <h2
          className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
        >
          Department Initiatives
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/5 bg-gray-300" />
      </div>

      {/* Tabs similar to the image */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-md">
          {DEPARTMENT_INITIATIVE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 text-base font-medium transition-colors duration-200
                ${activeTab === tab.id 
                  ? 'bg-[#131929] text-white' 
                  : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
                }
                ${tab.id === (DEPARTMENT_INITIATIVE_TABS[0]?.id ?? '') ? 'rounded-l-md' : ''}
                ${tab.id === (DEPARTMENT_INITIATIVE_TABS[DEPARTMENT_INITIATIVE_TABS.length-1]?.id ?? '') ? 'rounded-r-md' : ''}
              `}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="rounded-lg bg-white p-6 shadow-md">
        {renderTabContent()}
      </div>
    </div>
  )
}

export default DepartmentInitiave