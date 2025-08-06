'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { motion } from 'framer-motion'
import { Download, X } from 'lucide-react'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Page() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('IIRS-ISRO')

  // Handle browser back button (optional, less reliable)
  useEffect(() => {
    const handlePopState = () => {
      setSelectedPdf(null) // Close modal on back navigation
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openPdf = (pdfPath: string): void => {
    setSelectedPdf(pdfPath)
    window.history.pushState(null, '', pdfPath)
  }

  const closePdf = () => {
    setSelectedPdf(null)
    window.history.back()
  }

  // Define tabs
  const tabs = [
    {
      id: 'IIRS-ISRO',
      label: 'IIRS-ISRO',
      content: 'IIRS-ISRO Outreach Programme',
    },
    // Add more tabs here as needed, e.g., { id: 'AnotherTopic', label: 'Another Topic', content: 'Another Content' }
  ]

  return (
    <main
      className={`${montserrat.variable} min-h-screen bg-gradient-to-b from-blue-50 to-white pt-[191px] font-roboto`}
    >
      {/* Page Title */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Outreach Programmes
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-blue-600" />
      </motion.div>

      {/* Tabs Layout */}
      <motion.div
        className="mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8"
        {...fadeIn}
      >
        {/* Left Sidebar for Tabs */}
        <div className="w-64 pr-6">
          <nav className="sticky top-[191px] space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full rounded-lg px-4 py-2 text-left font-medium ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {activeTab === 'IIRS-ISRO' && (
            <motion.div
              className="overflow-hidden rounded-2xl bg-white shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Banner Image */}
              <div className="relative w-full">
                <Image
                  src="/iirs-isro.png" // Ensure this is in the public directory
                  alt="IIRS-ISRO Programme Banner"
                  width={1200}
                  height={600}
                  className="w-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-6 p-8 text-gray-700">
                <p>
                  Fr. Conceicao Rodrigues College of Engineering is the Nodal
                  Center for IIRS-ISRO outreach programme for Online, Offline,
                  Live & Interactive Courses offered by IIRS-ISRO Dehradun from
                  16
                  <sup>th</sup> August 2022.
                </p>
                <p>
                  Indian Institute of Remote Sensing (IIRS) has developed
                  e-learning contents and Learning Management Systems (LMS) for
                  different certificate courses in Remote Sensing and
                  geo-spatial technology.
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li className="text-gray-700">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        openPdf(
                          '/Guidelines_for_Students_participating_courses.pdf'
                        )
                      }}
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      Students Guidelines for Participating Courses – Click here
                    </a>
                  </li>
                  <li className="text-gray-700">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        openPdf('/Annual_Course_Calendar.pdf')
                      }}
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      Annual Course Calendar IIRS Distance Learning Programme –
                      2022 – Click here
                    </a>
                  </li>
                  <li className="text-gray-700">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        openPdf(
                          '/list_of_students_completed_isro_iirs_courses_2022-23.pdf'
                        )
                      }}
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      List of students who completed ISRO-IIRS courses in
                      2022–23 – Click here
                    </a>
                  </li>
                </ul>

                {/* Coordinator Info */}
                <div className="border-t pt-6 text-sm text-gray-600">
                  <p className="font-semibold">
                    Coordinator IIRS-ISRO Outreach Programme
                  </p>
                  <p>Prof Sangeeta Parshionikar</p>
                  <p>Assistant Professor</p>
                  <p>Computer Engineering Department,</p>
                  <p>
                    Fr. Conceicao Rodrigues College of Engineering, Bandra West,
                    Mumbai
                  </p>
                  <p>
                    Email:{' '}
                    <a
                      href="mailto:sangeeta@frcrce.ac.in"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      sangeeta@frcrce.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Attachments Section */}
      {activeTab === 'IIRS-ISRO' && (
        <motion.div className="bg-white py-10" {...fadeIn}>
          <motion.div
            className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
            {...fadeIn}
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Additional Attachments:
            </h2>
            <div className="space-y-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  openPdf('/Annual_Course_Calendar_2025.pdf')
                }}
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition hover:bg-gray-100"
              >
                <Download className="h-6 w-6 text-blue-600" />
                <span className="font-medium text-blue-700 hover:text-blue-900">
                  Annual Course Calendar 2025.pdf
                </span>
              </a>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  openPdf('/IIRS_Students_2023_24.pdf')
                }}
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition hover:bg-gray-100"
              >
                <Download className="h-6 w-6 text-blue-600" />
                <span className="font-medium text-blue-700 hover:text-blue-900">
                  IIRS List of Students 2023–24.pdf
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* PDF Modal */}
      {selectedPdf && (
        <motion.div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePdf}
        >
          <motion.div
            className="relative w-full max-w-4xl rounded-lg bg-white p-6 shadow-xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={closePdf}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="h-[80vh] w-full">
              <object
                data={selectedPdf}
                type="application/pdf"
                width="100%"
                height="100%"
                className="rounded-lg border border-gray-300"
              >
                <div className="flex h-full flex-col items-center justify-center rounded-lg bg-gray-50">
                  <p className="mb-4 text-center text-gray-700">
                    Unable to display PDF file.
                  </p>
                  <a
                    href={selectedPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#4a90e2] hover:underline"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  )
}
