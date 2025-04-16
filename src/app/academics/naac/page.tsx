import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const NAACAccreditationsPage = () => {
  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'NAAC Accreditations', url: '/academics/naac' },
  ]

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900 mt-44">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-12 md:pt-16">
        <div className="flex w-full flex-col px-4 sm:px-8 md:px-16 lg:px-24 pb-6 md:pb-8 text-[#00122a]">
          <h1 className={` flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}>
            NAAC ACCREDITATIONS
          </h1>
         
        </div>
      </div>

      <div className="container mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-24 py-4 md:py-8">
        {/* About NAAC */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              About NAAC
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              The National Assessment and Accreditation Council (NAAC) is an
              autonomous body established by the University Grants Commission
              (UGC) of India to assess and accredit institutions of higher
              education in the country. NAAC's assessment provides a quality
              status to the institution and helps in quality assurance of an
              institution.
            </p>
          </div>
        </div>

        {/* Our NAAC Accreditation */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              Our NAAC Accreditation
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              We are proud to announce that our institution has been accredited by
              NAAC. This accreditation is a testament to our commitment to quality
              education and continuous improvement in all aspects of our academic
              and administrative processes.
            </p>
          </div>
        </div>

        {/* NAAC Certificate */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              NAAC Certificate 2023
            </h2>
            <div className="h-[500px] w-full">
              <object
                data="/naac/NAAC_Certificate_2023.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
                className="border border-gray-300"
              >
                <p>
                  Your browser does not support PDFs. Please download the PDF to
                  view it:
                  <a href="/naac/NAAC_Certificate_2023.pdf">Download PDF</a>
                </p>
              </object>
            </div>
          </div>
        </div>

        {/* Self Study Report */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              Self Study Report (SSR) 2022-2023
            </h2>
            <p className="mb-6 text-sm md:text-base text-gray-700">
              The Self Study Report (SSR) is a comprehensive document that
              provides detailed information about our institution's performance
              across various parameters set by NAAC. It reflects our strengths,
              weaknesses, opportunities, and challenges.
            </p>
            <div className="text-center">
              <Link
                href="/naac/ssr_22_23.pdf"
                className="inline-block rounded-full bg-[#4a90e2] px-6 py-3 font-semibold text-white transition-all hover:bg-[#357abd] hover:shadow-lg"
              >
                Download SSR 2022-2023 PDF
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits of NAAC Accreditation - Simplified to text only */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              Benefits of NAAC Accreditation
            </h2>
            <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
              <li>Facilitates global recognition of the degrees offered by the institution</li>
              <li>Acts as a quality indicator for funding agencies</li>
              <li>Creates sound basis for decision-making for all educational reforms</li>
              <li>Enhances employability of graduates</li>
              <li>Promotes intra and inter-institutional interactions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NAACAccreditationsPage