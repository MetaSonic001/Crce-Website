'use client'
import React, { useState, useEffect } from 'react'
import { Zilla_Slab } from 'next/font/google'
import Image from 'next/image'
import { BookOpenText } from 'lucide-react'
import Link from 'next/link'
import { tabs } from './data'
import Sidebar from '@/components/QuicklinksSidebar'
import AICETExt from './AICET-Ext/AICETExt'
import AICETSub from './AICET-Sub/AICETSub'
import CodeOfConduct from './code-of-conduct/CodeOfConduct'
import CoreValues from './core-values/CoreValues'
import CommonInfrastructure from './common-infrastructure/CommonInfrastructure'
import TelephoneDirectory from './telephone-directory/TelephoneDirectory'

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
      case 'aicteextension':
        return <AICETExt />
      case 'aicetsubsquent':
        return <AICETSub />
      case 'corevalues':
        return <CoreValues />
      case 'codeofconduct':
        return <CodeOfConduct />
      case 'telephonedirectory':
        return <TelephoneDirectory />
      case 'commoninfrastructure':
        return <CommonInfrastructure />
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
    <main className="flex h-fit w-full flex-col items-center justify-center mt-28 sm:mt-36 md:mt-40 lg:mt-52">
      {/* Mobile menu toggle button */}
      <div className="w-full px-4 mb-4 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-between w-full p-3 bg-blue-50 rounded-md border border-gray-200"
        >
          <span className="font-medium">Menu - {tabs.find(tab => tab.id === activeTab)?.title || 'Overview'}</span>
          <span className="transform transition-transform duration-200">
            {mobileMenuOpen ? '▲' : '▼'}
          </span>
        </button>
      </div>
      
      <div className="flex h-fit w-full flex-col justify-center bg-gradient-to-b from-white to-[#E5F0FF] py-4 md:flex-row">
        <div className={`px-4 w-full md:w-auto md:min-w-[250px] lg:min-w-[300px] transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-24 md:top-32">
            <Sidebar
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
              AccordionContent={null}
            />
          </div>
        </div>
        <div id={activeTab} className="w-full px-4 md:px-6 lg:px-8 py-4">
          {renderContent()}
        </div>
      </div>
    </main>
  )
}