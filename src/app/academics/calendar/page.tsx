import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import { Download } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const PDFViewerPage = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] px-2 text-gray-900">
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-4 pt-18 text-[#00122a] sm:px-8 md:px-16 md:pt-36 lg:px-28">
          <h1
            className={`${zilla.className} mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            ACADEMIC CALENDAR
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full p-4 px-4 md:p-0 md:px-28 md:py-16">
        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Academic Year 2024-25
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-4 text-xl font-semibold text-[#4a90e2]">
              "Complete Schedule for Academic Activities"
            </p>
            <p className="text-gray-700 mb-6">
              View the complete academic calendar including examination dates, holidays, and important academic events for the current academic year. This document contains all the essential dates and schedules for students and faculty.
            </p>
            
            <div className="h-[600px] md:h-[800px] w-full">
              <object
                data="/Academic-Calendar-2023-34.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
                className="border border-gray-300 rounded-lg"
              >
                <div className="flex flex-col items-center justify-center h-full bg-gray-50 rounded-lg">
                  <p className="text-gray-700 mb-4 text-center">
                    Unable to display PDF file.
                  </p>
                  <a
                    href="/Academic-Calendar-2023-34.pdf"
                    className="inline-flex items-center text-[#4a90e2] hover:underline"
                    download
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </a>
                </div>
              </object>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Important Information
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-4 text-gray-700">
              Please refer to this calendar regularly for updates on academic schedules, examination dates, and institutional holidays. All dates are subject to change as per university guidelines.
            </p>
            <p className="text-gray-700">
              For any clarifications regarding the academic calendar, please contact the academic administration office.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="/Academic-Calendar-2023-34.pdf"
            className="rounded-lg bg-[#4a90e2] px-8 py-4 font-semibold text-white transition-all hover:bg-[#3a7bc2] hover:shadow-lg"
            download
          >
            Download Academic Calendar
          </a>
        </div>
      </div>
    </div>
  )
}

export default PDFViewerPage