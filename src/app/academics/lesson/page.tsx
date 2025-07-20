'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import { Calendar, School, FileText, BookOpen, List, Users } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const LessonPlanPage = () => {
  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'Lesson Plans', url: '/academics/lesson-plans' },
  ]

  const departments = [
    { id: 4, name: 'Computer Engineering' },
    { id: 5, name: 'Production Engineering' },
    { id: 8, name: 'Mechanical Engineering' },
    { id: 9, name: 'Electronics and Computer Science' },
    { id: 68, name: 'First Year Engineering' },
    { id: 74, name: 'Science & Humanities' },
    { id: 135, name: 'Artificial Intelligence & Data Science' },
  ]

  const lessonPlanSteps = [
    {
      title: 'Academic Calendar Planning',
      content:
        'Executive Committee (EC) approves the Institute Academic Calendar prepared on the basis of the University academic calendar at the beginning of the semester. This calendar includes semester wise schedules for Institute-level Curricular, Co-curricular and extracurricular activities.',
      icon: <Calendar className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      title: 'Department Academic Planning',
      content:
        'Program Assessment Committee (PAC) at department level plans and monitors academic activities for effective curriculum delivery. Departmental Academic Calendar is prepared by adding timelines and schedules for department-level activities and events.',
      icon: <School className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      title: 'Lesson Plan Preparation',
      content:
        'Faculty prepares Lesson Plan consisting of Course Outcomes (COs), CO-PO-PSO Mappings, Targets, Tools used for attainment, Curriculum Gaps, Content beyond Syllabus and detailed Lecture Plan/Lab Plan. PAC reviews the lesson plans.',
      icon: <FileText className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      title: 'Teaching & Learning Activities',
      content:
        'Regular classroom teaching is supplemented with Guest Lectures, Seminars, Assignments, Quizzes, Tutorials, Case Studies, hands-on-sessions, Mini projects, Industry visits, Internships, Online resources, NPTEL lectures.',
      icon: <BookOpen className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      title: 'Assessment & Feedback',
      content:
        'Internal Assessment tests, continuous evaluation, mid-term and end-term feedback, course exit surveys, and CO attainment calculation are conducted to ensure quality education.',
      icon: <List className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      title: 'Quality Assurance',
      content:
        'Academic audit is conducted yearly to evaluate curriculum delivery. Departmental Advisory Board (DAB) meeting evaluates department performance and recommends steps for curriculum enhancement.',
      icon: <Users className="h-4 w-4 md:h-5 md:w-5" />,
    },
  ]

  return (
    <div className="mt-25 flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900 md:mt-40">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-12 md:pt-16">
        <div className="flex w-full flex-col px-4 pb-6 text-[#00122a] sm:px-8 md:px-16 md:pb-8 lg:px-24">
          <h1
            className={`mb-4 flex items-center justify-center text-center font-serif text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
          
            ACADEMIC LESSON PLANS
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full px-4 py-4 sm:px-8 md:px-16 md:py-8 lg:px-24">
        {/* About Lesson Plans */}
        <div className="mb-8 rounded-lg bg-white shadow-lg">
          <div className="p-4 md:p-6">
            <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
              About Lesson Plans
            </h2>
            <p className="text-sm text-gray-700 md:text-base">
              Fr. Conceicao Rodrigues College of Engineering (FR.CRCE) is
              affiliated to the University of Mumbai. Our lesson plans are
              carefully designed to provide a comprehensive educational
              experience with regular updates based on industry needs and
              academic standards.
            </p>
          </div>
        </div>

        {/* Curriculum Delivery Process */}
        <div className="mb-8 rounded-lg bg-white shadow-lg">
          <div className="p-4 md:p-6">
            <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
              Curriculum Delivery Process
            </h2>
            <div className="space-y-4">
              {lessonPlanSteps.map((step, index) => (
                <div key={index} className="mb-4">
                  <h3 className="mb-2 text-base font-semibold text-[#012146] md:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-700 md:text-base">
                    {step.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Department Lesson Plans */}
        <div className="mb-8 rounded-lg bg-white shadow-lg">
          <div className="p-4 md:p-6">
            <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
              Department Lesson Plans
            </h2>
            <p className="mb-4 text-sm text-gray-700 md:text-base">
              Access lesson plans by department to find specific course
              information.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {departments.map((dept) => (
                <div key={dept.id}>
                  <a
                    href={`/index.php/academics/tlp/lesson-plan/category/${dept.id}-${dept.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 text-[#012146] transition-colors hover:border-[#4a90e2] hover:bg-gray-50"
                  >
                    <span className="text-sm md:text-base">{dept.name}</span>
                    <span className="text-xs text-gray-400">(0)</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center">
          <a
            href="/lesson-plans.pdf"
            className="inline-block rounded-full bg-[#4a90e2] px-6 py-3 font-semibold text-white transition-all hover:bg-[#357abd]"
            download
          >
            <span className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              Download Lesson Plan Guide
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LessonPlanPage

