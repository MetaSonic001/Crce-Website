'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div
      className={`flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900 ${zilla.className}`}
    >
      {/* Heading */}
      <div className="w-full bg-white py-12">
        <h1 className="px-4 text-center text-2xl font-bold text-[#00122a] sm:text-3xl md:text-4xl">
          M.Tech Admission – 2025-26
        </h1>
      </div>

      {/* Large Images */}
      <div className="w-full px-4 py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="relative w-full" style={{ aspectRatio: '1587/2445' }}>
            <Image
              src="/Brouchure_Page1.png"
              alt="M.Tech Admission Brochure Page 1"
              fill
              className="rounded-lg object-contain"
              priority
              onLoad={() => setImageLoaded(true)}
              onError={(e) => console.log('Image 1 failed to load:', e)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-red-600">
                Image not found. Check path: /Brouchure_Page1.png
              </div>
            )}
          </div>
          <div className="relative w-full" style={{ aspectRatio: '1587/2445' }}>
            <Image
              src="/Brouchure_Page2.png"
              alt="M.Tech Admission Brochure Page 2"
              fill
              className="rounded-lg object-contain"
              priority
              onLoad={() => setImageLoaded(true)}
              onError={(e) => console.log('Image 2 failed to load:', e)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-red-600">
                Image not found. Check path: /Brouchure_Page2.png
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto w-full px-4 py-8 sm:px-8 md:px-16 md:py-12 lg:px-28">
        {/* Course */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-[#00122a]">
            Course Offered:
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-800">
            <li>Computer Engineering</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Allotment of seats for the M.Tech program will be through the
            centralized admission process.
            <br />
            <strong>
              51% of the centralized admission seats are under the Minority
              Quota.
            </strong>
          </p>
        </section>

        {/* Eligibility */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-[#00122a]">
            Eligibility
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-800">
            <li>Candidate should be an Indian National.</li>
            <li>
              Must have passed a Bachelor's Degree in Engineering/Technology
              from AICTE or a Government-approved institution with at least 50%
              marks (or 45% for reserved categories and PwD candidates from
              Maharashtra).
            </li>
            <li>
              Must have a valid GATE score in the respective qualifying branch
              for the current academic year.
            </li>
          </ul>
        </section>

        {/* Vacant Seats After CAP */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-[#00122a]">
            Vacant Seats after CAP Rounds
          </h2>
          <p className="mt-2 text-gray-700">
            These seats will be filled by the Institute as per the rules stated
            in the "Rules & Institute Information Brochure for Academic Year
            2025-26" by DTE / ARA / Govt. of Maharashtra.
          </p>
        </section>

        {/* Documents */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-[#00122a]">
            Documents Required
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-800">
            <li>
              SSC, HSC, Diploma, B.E. Mark Sheets (All Semesters) & Degree
              Certificate
            </li>
            <li>Leaving/Transfer Certificate from previous college</li>
            <li>Migration Certificate (if applicable)</li>
            <li>GATE Score Card</li>
            <li>Proof of Indian Nationality or Birth Certificate</li>
            <li>
              Maharashtra State Domicile or Birth Certificate showing birth in
              Maharashtra
            </li>
            <li>Relevant Proforma Certificates (A, E, F, F-1, F-2, D, B, C)</li>
            <li>Copy of Aadhar Card</li>
            <li>Medical Fitness Certificate from a registered practitioner</li>
            <li>
              Anti-Ragging Affidavit (www.antiragging.in) by candidate and
              parent
            </li>
            <li>
              Any other relevant document as per DTE / ARA / Govt. of
              Maharashtra
            </li>
            <li>
              Proof of Income (e.g., Form No.16) for availing financial benefits
              under EBC/Minority schemes
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
