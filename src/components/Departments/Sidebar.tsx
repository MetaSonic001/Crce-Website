'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useMediaQuery } from '../hooks/useMediaQuery'

interface TabType {
  id: string
  title: string
}

interface DynamicSidebarProps {
  tabs: TabType[]
  activeTab: string
  onTabChange: (tabId: string) => void
  basePath: string
  className?: string
}

const DynamicSidebar: React.FC<DynamicSidebarProps> = ({
  tabs,
  activeTab,
  onTabChange,
  basePath,
  className = '',
}) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  // Reset accordion state when switching between mobile and desktop
  useEffect(() => {
    if (!isMobile) {
      setOpenAccordion(null)
    }
  }, [isMobile])

  // Set initial accordion state on mobile
  useEffect(() => {
    if (isMobile && !openAccordion) {
      setOpenAccordion(activeTab)
    }
  }, [isMobile, activeTab, openAccordion])

  const handleTabClick = (tabId: string) => {
    if (isMobile) {
      setOpenAccordion(openAccordion === tabId ? null : tabId)
    }
    onTabChange(tabId)
  }

  return (
    <div className={`sidebar-container ${className}`}>
      {/* Desktop Sidebar */}
      <div className="sticky top-0 hidden h-screen w-64 overflow-y-auto border-r border-gray-200 bg-white md:block">
        <div className="py-4">
          <h2 className="mb-4 px-4 text-lg font-semibold text-gray-800">
            Navigation
          </h2>
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={`${basePath}?tab=${tab.id}`}
                scroll={false}
                onClick={(e) => {
                  e.preventDefault()
                  handleTabClick(tab.id)
                }}
                className={`flex items-center px-4 py-3 text-sm font-medium transition-colors duration-150 ease-in-out ${
                  activeTab === tab.id
                    ? 'border-l-4 border-blue-600 bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'
                }`}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                <span className="truncate">{tab.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Accordion Sidebar */}
      <div className="w-full bg-white md:hidden">
        <div className="border-b border-gray-200 py-2">
          <h2 className="px-4 py-2 text-lg font-semibold text-gray-800">
            Navigation
          </h2>
        </div>
        <div className="accordion">
          {tabs.map((tab) => (
            <div key={tab.id} className="border-b border-gray-200">
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600'
                }`}
                aria-expanded={openAccordion === tab.id}
              >
                <span className="truncate">{tab.title}</span>
                <svg
                  className={`h-5 w-5 transition-transform ${
                    openAccordion === tab.id ? 'rotate-180 transform' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Display the actual content for active accordion in mobile */}
              {openAccordion === tab.id && activeTab === tab.id && (
                <div className="bg-gray-50 px-4 py-3">
                  <div className="text-sm">
                    {/* This will be rendered by the parent component */}
                    {/* Content for this tab should go here */}
                    <div
                      id={`mobile-content-${tab.id}`}
                      className="mobile-tab-content"
                    >
                      {/* The parent component should inject content here */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DynamicSidebar
