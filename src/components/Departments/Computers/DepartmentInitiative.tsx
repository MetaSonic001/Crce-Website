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
  //{ id: 'sphere_activity', title: 'Sphere - activity' },
  { id: 'mentor_mentee', title: 'Mentor mentee' },
  { id: 'industry_connect', title: 'Industry connect' },
  { id: 'virtual_labs', title: 'Virtual labs' },
]

const DepartmentInitiave = () => {
  const [activeTab, setActiveTab] = useState('mentor_mentee')

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
                      AI & Machine Learning Workshop
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      <span className="rounded-full px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800">
                        Workshop
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      3 Days
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      10 Sep 2023 - 12 Sep 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      65 students from Computer Engineering
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      TechLearn
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Prof. Anita Patil, Dr. Sushma Vispute
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
                      'FACULTY MENTOR',
                      'SPECIALIZATION',
                      'NUMBER OF MENTEES',
                      'MENTEE GROUPS',
                      'MEETING FREQUENCY',
                      'MENTORSHIP ACTIVITIES',
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
                      Dr. Rajesh Kumar
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      <span className="rounded-full px-3 py-1 text-xs font-medium bg-green-100 text-green-800">
                        AI & Machine Learning
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      20
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      BE-A, BE-B
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Bi-weekly
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Career guidance, Project mentoring, Skill development
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
                      'COMPANY NAME',
                      'INDUSTRY SECTOR',
                      'COLLABORATION TYPE',
                      'DATE',
                      'STUDENT PARTICIPATION',
                      'OUTCOMES',
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
                      Amazon Web Services
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      <span className="rounded-full px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800">
                        Cloud Computing
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Industry Talk & Workshop
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      25 Nov 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      85 students from Third Year
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      3 internship offers, AWS certification preparation
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
                      'LAB NAME',
                      'SUBJECT AREA',
                      'TARGET CLASS',
                      'USAGE PERIOD',
                      'NUMBER OF EXPERIMENTS',
                      'FACULTY IN-CHARGE',
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
                        Database Systems
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Second Year B.E.
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                      Jan 2023 - May 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      12
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
          Department Initiative
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
                ${tab.id === (DEPARTMENT_INITIATIVE_TABS[DEPARTMENT_INITIATIVE_TABS.length - 1]?.id ?? '') ? 'rounded-r-md' : ''}
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
