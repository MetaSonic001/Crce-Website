'use server'

import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import getSyllabus from '@/app/api/syllabus'
import type { Syllabus, SyllabusResponse } from '@/app/api/syllabus'
import { Book, FileText } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface SyllabusFileDisplay {
  class: string
  name: string
  pdf: string // file ID
}

interface Course {
  name: string
  years: SyllabusFileDisplay[]
}

interface Props {
  syllabus: Syllabus[] | null
}

const SyllabusTable = ({ course }: { course: Course }) => (
  <div className="mb-8 md:mb-16 w-full max-w-2xl">
    <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
      <div className="flex items-start">
        <span className="mr-3 md:mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
          <FileText className="h-4 w-4 md:h-5 md:w-5" />
        </span>
        <div className="w-full">
          <h3 className="mb-3 text-lg md:text-xl font-semibold text-[#4a90e2]">
            {course.name}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
              <thead className="bg-[#4a90e2] text-white">
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Year</th>
                  <th className="border border-gray-300 p-2 text-left">Syllabus</th>
                </tr>
              </thead>
              <tbody>
                {course.years.map((item, index) => (
                  <tr
                    key={index}
                    className="transition-colors duration-300 hover:bg-gray-50"
                  >
                    <td className="border border-gray-300 p-2">{item.class}</td>
                    <td className="border border-gray-300 p-2">
                      <a
                        href={`${process.env.NEXT_PUBLIC_ASSET_URL || ''}/${item.pdf}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4a90e2] hover:underline"
                      >
                        {item.name}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const AutonomousSyllabus = ({ syllabus }: Props) => {
  if (!syllabus || syllabus.length === 0) {
    return (
      <div className="container mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-28 py-8 md:py-16">
        <div className="mb-8 md:mb-16">
          <div className="rounded-lg bg-red-100 p-4 md:p-6 shadow-lg">
            <p className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-red-600">
              Oops!
            </p>
            <p className="text-sm md:text-base text-red-700">
              Couldn't load the syllabus at the moment. Please check back later.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const formattedCourses: Course[] = syllabus.map((s) => {
    const years: SyllabusFileDisplay[] =
      s.documents?.map((doc) => ({
        class: s.class,
        name: doc.name,
        pdf: doc.file,
      })) || []

    return {
      name: s.class,
      years,
    }
  })

  return (
    <div className="container mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-28 py-8 md:py-16">
      <div className="mb-8 md:mb-16">
        <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
          <p className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-[#4a90e2]">
            "University of Mumbai Syllabus Information"
          </p>
          <p className="text-sm md:text-base text-gray-700">
            The following syllabus documents are available for the Academic Year 2024-2025 (Autonomous).
            Please select the appropriate course and download the PDF files.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        {formattedCourses.length > 0 ? (
          formattedCourses.map((course, index) => (
            <SyllabusTable key={index} course={course} />
          ))
        ) : (
          <div className="mb-8 md:mb-16">
            <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
              <p className="text-sm md:text-base text-gray-700">
                No syllabus files available yet.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default async function Page() {
  let syllabus: Syllabus[] | null = null

  try {
    const response: SyllabusResponse = await getSyllabus()
    syllabus = response.data
  } catch (error) {
    syllabus = null
  }

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-28 pt-36 text-[#00122a]">
          <h1
            className={`mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            AUTONOMOUS SYLLABUS
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <AutonomousSyllabus syllabus={syllabus} />
    </div>
  )
}