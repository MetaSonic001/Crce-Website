'use client'
import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import { BookOpen, Users, Award, BarChart, Calendar } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const TeachingLearningProcessPage = () => {
  // Section data
  const sections = [
    {
      id: 'overview',
      title: 'Teaching Learning Process Overview',
      icon: <BookOpen className="h-4 w-4 md:h-5 md:w-5" />,
      content: {
        text: 'The academic calendar is prepared at the beginning of the academic year based on the academic calendar provided by the University. This calendar includes academic and co-curricular activities.',
        items: [
          'Term commencement',
          'Lesson plan and CO submission',
          'Faculty meetings',
          'Academic activities timelines',
          'Cultural, sports, and technical events',
          'Conferences and seminars',
          'Practical and oral examination schedule',
        ],
      },
    },
    {
      id: 'department',
      title: 'Department-Level Activities',
      icon: <Calendar className="h-4 w-4 md:h-5 md:w-5" />,
      content: {
        text: 'Further, the department refines the academic calendar by adding schedules for various department-level activities:',
        items: [
          'Final year project work schedule',
          'Faculty Development Programs (FDPs)',
          'Industrial visits',
          'Submission dates',
          'Co-curricular activities',
          'Department meetings',
        ],
      },
    },
    {
      id: 'faculty',
      title: 'Faculty Process',
      icon: <Users className="h-4 w-4 md:h-5 md:w-5" />,
      content: {
        text: 'Faculty members follow the process to ensure effective teaching and learning:',
        items: [
          'Formulate Course Outcomes (COs) for assigned subjects',
          'Map COs to Program Outcomes (POs) and Program Specific Outcomes (PSOs)',
          'Identify tools to measure CO attainment',
          'Collect and analyze data to assess student performance',
          'Identify weak/strong students and take appropriate actions',
        ],
      },
    },
    {
      id: 'support',
      title: 'Support for Weak and Bright Students',
      icon: <Award className="h-4 w-4 md:h-5 md:w-5" />,
      content: {
        text: 'Faculty members take various initiatives to support weak students and encourage bright students:',
        items: [
          'Regular feedback and guidance',
          'Extra practice sessions for weak students',
          'Encouragement to participate in technical competitions',
          'Motivation for publishing papers and attending seminars',
        ],
      },
    },
    {
      id: 'monitoring',
      title: 'Monitoring Academic Performance',
      icon: <BarChart className="h-4 w-4 md:h-5 md:w-5" />,
      content: {
        text: 'The academic performance is monitored regularly through various methods:',
        items: [
          'Regular monitoring by class teachers and HODs',
          'Internal assessment tests and mid-term reports',
          'Periodic evaluation of final year projects',
          'Continuous evaluation of term work',
          'Feedback collection and analysis',
          'Academic audit and departmental advisory board meetings',
        ],
      },
    },
  ]

  // Process steps for visual representation
  const processSteps = [
    {
      label: 'Planning',
      description: 'Academic calendar preparation and course allocation',
    },
    {
      label: 'Preparation',
      description: 'Lesson plans and course materials development',
    },
    {
      label: 'Delivery',
      description: 'Classroom teaching and practical sessions',
    },
    { label: 'Assessment', description: 'Continuous evaluation and feedback' },
    {
      label: 'Improvement',
      description: 'Data analysis and enhancement measures',
    },
  ]

  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] px-2 text-gray-900">
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-4 pt-18 text-[#00122a] sm:px-8 md:px-16 md:pt-36 lg:px-28">
          <h1
            className={`${zilla.className} mb-4 font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            TEACHING LEARNING PROCESS
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full p-4 px-4 md:p-0 md:px-28 md:py-16">
        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Educational Excellence Framework
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-4 text-xl font-semibold text-[#4a90e2]">
              "Structured Approach to Quality Education"
            </p>
            <p className="text-gray-700 mb-6">
              Our teaching-learning process follows a systematic approach that integrates academic planning, innovative delivery methods, continuous assessment, and performance enhancement to ensure quality education and student success.
            </p>
          </div>
        </div>

        {/* Our Teaching Learning Cycle */}
        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Our Teaching Learning Cycle
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="flex flex-wrap justify-between gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4a90e2] text-lg font-bold text-white shadow-md md:h-16 md:w-16 md:text-xl">
                    {index + 1}
                  </div>
                  <h3 className="mt-3 text-sm font-bold md:text-base">
                    {step.label}
                  </h3>
                  <p className="mt-1 max-w-[120px] text-center text-xs text-gray-600 md:text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        {sections.map((section) => (
          <div key={section.id} className="mb-16">
            <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
              {section.title}
            </h2>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              {section.content.text && (
                <p className="mb-6 text-gray-700">
                  {section.content.text}
                </p>
              )}
              <div className="space-y-4">
                {section.content.items.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-gray-700">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Continuous Improvement
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-4 text-gray-700">
              Our teaching-learning process is designed to be dynamic and responsive to changing educational needs. We continuously evaluate and improve our methods based on student feedback, industry requirements, and academic best practices.
            </p>
            <p className="text-gray-700">
              For more information about our teaching methodologies and academic processes, please contact the academic office or your respective department.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <a
            href="/teaching-learning-process.pdf"
            className="rounded-lg bg-[#4a90e2] px-8 py-4 font-semibold text-white transition-all hover:bg-[#3a7bc2] hover:shadow-lg"
            download
          >
            Download Teaching Learning Process PDF
          </a>
        </div>
      </div>
    </div>
  )
}

export default TeachingLearningProcessPage