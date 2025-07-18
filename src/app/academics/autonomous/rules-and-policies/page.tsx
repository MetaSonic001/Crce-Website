'use client'
import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import { BookOpen, FileText, Download } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const rulesData = [
  {
    id: 1,
    title: 'Academic Rule Book',
    description:
      'Guidelines for academic procedures, attendance, examination, and grading systems',
    url: '/rules/Academic_Rule_Book_FrCRCE_2024_25.pdf',
  },
  {
    id: 2,
    title: 'Training, Internship and Placement Rule Book',
    description:
      'Policies regarding internships, industrial training, and campus placement procedures',
    url: '/rules/Rule_Book_training_internships_placement_2024_25.pdf',
  },
  {
    id: 3,
    title: 'Student Activities Rule Book',
    description:
      'Rules for participation in extracurricular activities, clubs, and student organizations',
    url: '/rules/Student_Activities_Rule_Book_2024_25.pdf',
  },
  {
    id: 4,
    title: 'Academic Calendar',
    description:
      'Schedule of academic activities, examinations, and holidays for the academic year 2024-25',
    url: '/rules/Academic_calender_2024_25.pdf',
  },
  {
    id: 5,
    title: 'SE/TE/BE MSE Exam Time-Table for ODD SEM',
    description:
      'Mid-Semester Examination schedule for Second, Third, and Final Year students',
    url: '/rules/MSE_TT_SEP-24.pdf',
  },
  {
    id: 6,
    title: 'SE/TE/BE ESE Exam Time-Table for ODD SEM',
    description:
      'End-Semester Examination schedule for Second, Third, and Final Year students',
    url: '/rules/ESE_TT_NOV-24.pdf',
  },
]

const RulesAndPoliciesPage = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] px-2 text-gray-900">
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-4 pt-18 text-[#00122a] sm:px-8 md:px-16 md:pt-36 lg:px-28">
          <h1
            className={`${zilla.className} mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            RULES & POLICIES
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full p-4 px-4 md:p-0 md:px-28 md:py-16">
        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Institutional Guidelines
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-4 text-xl font-semibold text-[#4a90e2]">
              "Creating a Structured Environment for Academic Excellence"
            </p>
            <p className="text-gray-700">
              Fr. Conceicao Rodrigues College of Engineering maintains a
              comprehensive set of rules and policies to ensure smooth
              functioning of academic and administrative processes. These
              guidelines help create a structured environment conducive to
              learning and professional development.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Important Documents
          </h2>

          <div className="space-y-4">
            {rulesData.map((item, index) => (
              <div
                key={item.id}
                className="flex items-start rounded-lg bg-white p-4 shadow-lg"
              >
                <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h4 className="mb-2 text-lg font-semibold text-[#001f3f]">
                    {item.title}
                  </h4>
                  <p className="mb-3 text-gray-700">{item.description}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#4a90e2] hover:underline"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Compliance
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-4 text-gray-700">
              All students and faculty members are expected to familiarize
              themselves with these rules and comply with them. Non-compliance
              may result in disciplinary action as per the institutional
              guidelines.
            </p>
            <p className="text-gray-700">
              For any clarifications regarding these policies, please contact
              the respective department office or the academic administration.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="/rules/All_Rules_Compiled_2024_25.pdf"
            className="rounded-lg bg-[#4a90e2] px-8 py-4 font-semibold text-white transition-all hover:bg-[#3a7bc2] hover:shadow-lg"
            download
          >
            Download All Rules & Policies
          </a>
        </div>
      </div>
    </div>
  )
}

export default RulesAndPoliciesPage