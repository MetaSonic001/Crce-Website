'use client'
import React, { useState, useEffect } from 'react'
import { Zilla_Slab } from 'next/font/google'
import Image from 'next/image'
import { BookOpenText } from 'lucide-react'
import Link from 'next/link'
import { tabs } from './data'
import Sidebar from '@/components/QuicklinksSidebar'
import StrategicDevPlan from './strategic-dev-plan/StrategicDevPlan'
import ServiceRules from './service-rules/ServiceRules'
import StaffIncharge from './staff-incharge/StaffIncharge'
import Trustees from './trustees/Trustees'
import Governance from './governance/Governance'
import CollegeDevelopmentCommittee from './college-dev-committee/CollegeDevCommittee'
import GoverningCouncil from './governing-council/GoverningCouncilTabs'
import AcademicCell from './academic-cell/AcademicCell'
import LocalManagementCouncil from './local-management-council/LocalManagementCouncil'
import Irg from './irg-policy/irgpolicy'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 'overview')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case 'trustees':
        return <Trustees />
      case 'governance':
        return <Governance />
      case 'governingcouncil':
        return <GoverningCouncil />
      case 'localmanagementcouncil':
        return <LocalManagementCouncil />
      case 'collegedevelopmentcommittee':
        return <CollegeDevelopmentCommittee />
      case 'academiccell':
        return <AcademicCell />
      case 'strategicdevelopmentplan':
        return <StrategicDevPlan />
      case 'servicerules':
        return <ServiceRules />
      case 'staffincharges':
        return <StaffIncharge />
      case 'irgpolicy':
        return <Irg />
      default:
        return null
    }
  }

  // Function to handle tab change and close mobile menu when a tab is selected
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setMobileMenuOpen(false)
  }

  return (
    <main className="mt-28 flex h-fit w-full flex-col items-center justify-center sm:mt-36 md:mt-40 lg:mt-52">
      {/* Mobile menu toggle button */}
      <div className="mb-4 w-full px-4 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-blue-50 p-3"
        >
          <span className="font-medium">
            Menu -{' '}
            {tabs.find((tab) => tab.id === activeTab)?.title || 'Overview'}
          </span>
          <span className="transform transition-transform duration-200">
            {mobileMenuOpen ? '▲' : '▼'}
          </span>
        </button>
      </div>

      <div className="flex h-fit w-full flex-col justify-center bg-gradient-to-b from-white to-[#E5F0FF] py-4 md:flex-row">
        <div
          className={`w-full px-4 transition-all duration-300 md:w-auto md:min-w-[250px] lg:min-w-[300px] ${mobileMenuOpen ? 'block' : 'hidden md:block'}`}
        >
          <div className="sticky top-24 md:top-32">
            <Sidebar
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
              AccordionContent={null}
            />
          </div>
        </div>
        <div id={activeTab} className="w-full px-4 py-4 md:px-6 lg:px-8">
          {renderContent()}
        </div>
      </div>
    </main>
  )
}
