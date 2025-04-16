'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import {
  Calendar,
  School,
  FileText,
  BookOpen,
  List,
  Users,
} from 'lucide-react'

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
    <div className="flex h-fit w-full flex-col bg-white text-gray-900">
      {/* Header Section - Matching the IQAC style */}
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-4 sm:px-8 md:px-16 lg:px-28 pt-8 md:pt-36 text-[#00122a]">
          <h1
            className={`mb-4 flex font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            ACADEMIC LESSON PLANS
          </h1>
          <div className="flex justify-center">
            <Navigation items={navigationItems} />
          </div>
        </div>
      </div>

      <div className="container mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-28 py-8 md:py-16">
        {/* About Lesson Plans */}
        <section className="mb-8 md:mb-16">
          <h2 className={`mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#001f3f]`}>
            About Lesson Plans
          </h2>
          <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
            <p className="mb-4 text-sm md:text-base text-gray-700">
              Fr. Conceicao Rodrigues College of Engineering (FR.CRCE) is
              affiliated to the University of Mumbai. Our lesson plans are
              carefully designed to provide a comprehensive educational experience
              with regular updates based on industry needs and academic standards.
            </p>
          </div>
        </section>

        {/* Curriculum Delivery Process */}
        <section className="mb-8 md:mb-16">
          <h2 className={`mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#001f3f]`}>
            Curriculum Delivery Process
          </h2>
          <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
            <div className="space-y-4">
              {lessonPlanSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-3 md:mr-4 flex h-6 w-6 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
                    {step.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="mb-2 text-sm md:text-base font-semibold text-[#001f3f]">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-700">{step.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Department Lesson Plans */}
        <section className="mb-8 md:mb-16">
          <h2 className={`mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#001f3f]`}>
            Department Lesson Plans
          </h2>
          <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
            <p className="mb-4 text-sm md:text-base text-gray-700">
              Access lesson plans by department to find specific course information.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {departments.map((dept, index) => (
                <div key={dept.id} className="flex items-start">
                  <span className="mr-3 md:mr-4 flex h-6 w-6 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white text-sm md:text-base">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <a
                      href={`/index.php/academics/tlp/lesson-plan/category/${dept.id}-${dept.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                      className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 text-[#001f3f] transition-colors hover:bg-gray-50 hover:border-[#4a90e2]"
                    >
                      <span className="text-sm md:text-base">{dept.name}</span>
                      <span className="text-xs text-gray-400">(0)</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <div className="flex justify-center mt-6 md:mt-10">
          <a
            href="/lesson-plans.pdf"
            className="rounded-lg bg-[#4a90e2] px-4 sm:px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white transition-all hover:bg-[#3a7bc2] hover:shadow-lg flex items-center"
            download
          >
            <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Download Lesson Plan Guide
          </a>
        </div>
      </div>
    </div>
  )
}

export default LessonPlanPage