'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import { Download, ChevronDown, ChevronRight } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const AdmissionsPage = () => {
  // State for expanded sections
  const [expandedQuickLinks, setExpandedQuickLinks] = useState<Record<string, boolean>>({})
  const [expandedMainSections, setExpandedMainSections] = useState<Record<string, boolean>>({})

  // Quick Links data
  const quickLinksData = [
    {
      id: 'general' as const,
      title: 'General Information',
      links: [
        { label: 'About CRCE', href: '/about/about-crce' },
        { label: 'Administration', href: '/about/administration' },
        { label: 'From Director\'s Desk', href: '/about/from-directors' },
        { label: 'General Information', href: '/about/general-information' },
        { label: 'Contact Us', href: '/about/contact-us' },
      ]
    },
    {
      id: 'admissions' as const,
      title: 'Admissions',
      links: [
        { label: 'PhD Admission', href: '/admission/phd' },
        { label: 'Postgraduate Admission', href: '/admission/postgraduate' },
        { label: 'Undergraduate Admission', href: '/admission/undergrad' },
      ]
    },
    {
      id: 'academics' as const,
      title: 'Academics',
      links: [
        { label: 'Departments', href: '/academics/departments' },
        { label: 'Programs', href: '/academics/programs' },
        { label: 'Faculty', href: '/academics/faculty' },
        { label: 'Research', href: '/academics/research' },
      ]
    },
  ]

  // Main content sections
  const mainSections = [
    {
      id: 'about' as const,
      title: 'About Admissions',
      content: (
        <div>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Welcome to the admissions portal of our prestigious engineering institution. We offer comprehensive programs across undergraduate, postgraduate, and doctoral levels, designed to nurture the next generation of engineers and researchers.
          </p>
          <p className="text-sm md:text-base text-gray-700">
            Our admission process is transparent, merit-based, and aligned with national standards to ensure we attract the brightest minds to our campus. We are committed to providing equal opportunities and support to all deserving candidates through various scholarships and financial aid programs.
          </p>
        </div>
      )
    },
    {
      id: 'undergraduate' as const,
      title: 'Undergraduate Admission',
      content: (
        <div>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            We offer top-tier engineering programs for undergraduate students. Our curriculum is designed to provide a strong foundation in engineering principles while incorporating the latest technological advancements.
          </p>
          <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
            <li>Admission based on CET/JEE Main scores</li>
            <li>Centralized admission process through counseling</li>
            <li>Multiple engineering disciplines available</li>
            <li>State-of-the-art laboratories and facilities</li>
            <li>Industry-oriented curriculum</li>
          </ul>
        </div>
      )
    },
    {
      id: 'postgraduate' as const,
      title: 'Postgraduate Admission',
      content: (
        <div>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Our postgraduate programs are designed for those looking to specialize in their field of engineering. These programs focus on advanced concepts, research methodologies, and practical applications.
          </p>
          <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
            <li>Admission based on GATE scores and academic performance</li>
            <li>Experienced faculty comprising professionals and researchers</li>
            <li>Advanced research facilities and laboratories</li>
            <li>Industry partnerships and internship opportunities</li>
            <li>Thesis and project-based learning</li>
          </ul>
        </div>
      )
    },
    {
      id: 'phd' as const,
      title: 'PhD Admission',
      content: (
        <div>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Our PhD programs are designed for those passionate about research and innovation in engineering. We offer both full-time and part-time options across various engineering disciplines.
          </p>
          <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
            <li>Admission through entrance tests and interviews</li>
            <li>Research proposals and scholarly work emphasis</li>
            <li>Full-time and part-time PhD options available</li>
            <li>Research supervision by experienced faculty</li>
            <li>Access to advanced research facilities</li>
            <li>Opportunities for international collaboration</li>
          </ul>
        </div>
      )
    },
    {
      id: 'process' as const,
      title: 'Admission Process',
      content: (
        <div>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Our admission process is designed to be fair, transparent, and merit-based. Follow these step-by-step guidelines to ensure your application is complete and submitted on time.
          </p>
          <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
            <li>Check eligibility criteria for your desired program</li>
            <li>Register for entrance examinations (JEE Main/CET/GATE)</li>
            <li>Submit online application with required documents</li>
            <li>Pay application fees through online portal</li>
            <li>Attend counseling sessions as per schedule</li>
            <li>Complete document verification process</li>
            <li>Confirm admission by paying fees</li>
          </ul>
        </div>
      )
    },
    {
      id: 'financial' as const,
      title: 'Financial Aid',
      content: (
        <div>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            We offer various scholarships and financial aid programs to support deserving students. Our goal is to ensure that financial constraints do not hinder talented students from pursuing their engineering education.
          </p>
          <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
            <li>Merit-based scholarships for top performers</li>
            <li>Need-based financial assistance programs</li>
            <li>Government scholarship schemes</li>
            <li>Industry-sponsored scholarships</li>
            <li>Education loan facilitation</li>
            <li>Work-study programs for eligible students</li>
          </ul>
        </div>
      )
    },
    {
      id: 'dates' as const,
      title: 'Important Dates',
      content: (
        <div>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Stay updated with all important admission dates, deadlines, and schedules. Mark your calendar to ensure you don't miss any crucial milestones in the admission process.
          </p>
          <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
            <li>Application form release: Check official website</li>
            <li>Last date for online application submission</li>
            <li>Entrance examination dates</li>
            <li>Result declaration dates</li>
            <li>Counseling and seat allotment schedule</li>
            <li>Document verification deadlines</li>
            <li>Fee payment last dates</li>
          </ul>
        </div>
      )
    }
  ]

  const toggleQuickLink = (sectionId: string) => {
    setExpandedQuickLinks(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const toggleMainSection = (sectionId: string) => {
    setExpandedMainSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900 mt-16 md:mt-44">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-8 md:pt-12 lg:pt-16">
        <div className="flex w-full flex-col px-4 sm:px-8 md:px-16 lg:px-24 pb-4 md:pb-6 lg:pb-8 text-[#00122a]">
          <h1 className={`mb-4 flex items-center text-center font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold`}>
            ADMISSIONS & AID
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-24 py-4 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Quick Links Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className={`${zilla.className} mb-4 text-xl font-bold text-[#012146]`}>
                Quick Links
              </h2>
              <nav className="space-y-2">
                {quickLinksData.map((section) => (
                  <div key={section.id} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleQuickLink(section.id)}
                      className="flex items-center justify-between w-full py-3 text-left text-sm font-medium text-gray-700 hover:text-[#012146] transition-colors"
                    >
                      {section.title}
                      {expandedQuickLinks[section.id] ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                    {expandedQuickLinks[section.id] && (
                      <div className="pb-3 pl-4 space-y-2">
                        {section.links.map((link, index) => (
                          <Link
                            key={index}
                            href={link.href}
                            className="block text-sm text-gray-600 hover:text-[#012146] transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Main Card with Expandable Sections */}
            <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
              <div className="p-4 md:p-6">
                <h2 className={`${zilla.className} mb-6 text-xl md:text-2xl font-bold text-[#012146]`}>
                  Admission Information
                </h2>
                
                {/* Expandable Sections */}
                <div className="space-y-4">
                  {mainSections.map((section) => (
                    <div key={section.id} className="border-b border-gray-200 last:border-b-0">
                      <button
                        onClick={() => toggleMainSection(section.id)}
                        className="flex items-center justify-between w-full py-4 text-left text-base md:text-lg font-medium text-gray-700 hover:text-[#012146] transition-colors"
                      >
                        {section.title}
                        {expandedMainSections[section.id] ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </button>
                      {expandedMainSections[section.id] && (
                        <div className="pb-4 pl-4">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="text-center">
              <a
                href="/admission-brochure.pdf"
                className="inline-block rounded-full bg-[#4a90e2] px-6 py-3 font-semibold text-white transition-all hover:bg-[#357abd]"
                download
              >
                <span className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download Admission Brochure
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdmissionsPage