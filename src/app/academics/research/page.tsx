'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import { useQuery } from '@tanstack/react-query'
import Navigation from '@/components/navigation'
import getDepartmentPublications from '@/app/api/publications'
import type { DepartmentPublication } from '@/app/api/publications'
import { Card, CardContent } from '@/components/Card'
import { FileText, Download, X } from 'lucide-react'
import { motion } from 'framer-motion'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface DepartmentStats {
  total: number
  published: number
  pending: number
  withLinks: number
}

const ResearchPage = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

  const {
    data: computersData,
    isLoading: computersLoading,
    isError: computersError,
  } = useQuery<DepartmentPublication[]>({
    queryKey: ['publications', 'computers'],
    queryFn: () => getDepartmentPublications('computers'),
    staleTime: 6 * 60 * 60 * 1000,
  })

  const {
    data: ecsData,
    isLoading: ecsLoading,
    isError: ecsError,
  } = useQuery<DepartmentPublication[]>({
    queryKey: ['publications', 'ecs'],
    queryFn: () => getDepartmentPublications('ecs'),
    staleTime: 6 * 60 * 60 * 1000,
  })

  const {
    data: cseData,
    isLoading: cseLoading,
    isError: cseError,
  } = useQuery<DepartmentPublication[]>({
    queryKey: ['publications', 'cse'],
    queryFn: () => getDepartmentPublications('cse'),
    staleTime: 6 * 60 * 60 * 1000,
  })

  const {
    data: mechanicalData,
    isLoading: mechanicalLoading,
    isError: mechanicalError,
  } = useQuery<DepartmentPublication[]>({
    queryKey: ['publications', 'mechanical'],
    queryFn: () => getDepartmentPublications('mechanical'),
    staleTime: 6 * 60 * 60 * 1000,
  })

  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'Research & Development', url: '/academics/research-development' },
  ]

  type SectionId =
    | 'overview'
    | 'ethics'
    | 'computers'
    | 'ecs'
    | 'cse'
    | 'mechanical'
    | 'researchCentre'
    | 'activities'

  const showSection = (sectionId: SectionId): void => {
    setActiveSection(sectionId)
  }

  const calculateStats = (
    data: DepartmentPublication[] | undefined
  ): DepartmentStats => {
    if (!data) return { total: 0, published: 0, pending: 0, withLinks: 0 }
    return {
      total: data.length,
      published: data.filter((pub) => pub.status.toLowerCase() === 'published')
        .length,
      pending: data.filter((pub) => pub.status.toLowerCase() === 'pending')
        .length,
      withLinks: data.filter((pub) => pub.link !== null).length,
    }
  }

  const computersStats = calculateStats(computersData)
  const ecsStats = calculateStats(ecsData)
  const cseStats = calculateStats(cseData)
  const mechanicalStats = calculateStats(mechanicalData)

  const overallStats = {
    total:
      computersStats.total +
      ecsStats.total +
      cseStats.total +
      mechanicalStats.total,
    published:
      computersStats.published +
      ecsStats.published +
      cseStats.published +
      mechanicalStats.published,
    pending:
      computersStats.pending +
      ecsStats.pending +
      cseStats.pending +
      mechanicalStats.pending,
    withLinks:
      computersStats.withLinks +
      ecsStats.withLinks +
      cseStats.withLinks +
      mechanicalStats.withLinks,
  }

  const isLoading =
    computersLoading || ecsLoading || cseLoading || mechanicalLoading
  const hasError = computersError || ecsError || cseError || mechanicalError

  const PublicationCard = ({
    publication,
  }: {
    publication: DepartmentPublication
  }) => (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-base font-semibold text-[#012146] sm:text-lg">
          {publication.title}
        </h3>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${publication.status.toLowerCase() === 'published'
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
            }`}
        >
          {publication.status}
        </span>
      </div>
      <p className="mb-2 text-sm text-gray-600">
        <strong>Authors:</strong> {publication.authors}
      </p>
      <p className="mb-2 text-sm text-gray-600">
        <strong>Journal:</strong> {publication.journal}
      </p>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">
          <strong>Date:</strong>{' '}
          {new Date(publication.date).toLocaleDateString()}
        </p>
        {publication.link && (
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            View Publication →
          </a>
        )}
      </div>
    </div>
  )

  const StatsCard = ({
    title,
    stats,
  }: {
    title: string
    stats: DepartmentStats
  }) => (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <h3 className="mb-3 text-base font-medium text-[#012146]">{title}</h3>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div>
          <div className="text-lg font-semibold text-gray-800">
            {stats.total}
          </div>
          <div className="text-xs text-gray-600">Total</div>
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-800">
            {stats.published}
          </div>
          <div className="text-xs text-gray-600">Published</div>
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-800">
            {stats.pending}
          </div>
          <div className="text-xs text-gray-600">Pending</div>
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-800">
            {stats.withLinks}
          </div>
          <div className="text-xs text-gray-600">Links</div>
        </div>
      </div>
    </div>
  )

  const PublicationSection = ({
    data,
    loading,
    error,
    title,
    stats,
  }: {
    data: DepartmentPublication[] | undefined
    loading: boolean
    error: boolean
    title: string
    stats: DepartmentStats
  }) => (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-[#012146] md:text-2xl">
          {title} Publications
        </h2>
        <div className="text-sm text-gray-600">
          {stats.total} total publications ({stats.published} published,{' '}
          {stats.pending} pending)
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          Error loading publications. Please try again later.
        </div>
      )}

      {data && data.length === 0 && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600">
          No publications found for this department.
        </div>
      )}

      {data && data.length > 0 && (
        <div className="space-y-4">
          {data.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      )}
    </div>
  )

  useEffect(() => {
    const handlePopState = () => {
      setSelectedPdf(null)
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

  return (
    <div className="mt-25 flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900 md:mt-44">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-12 md:pt-16">
        <div className="flex w-full flex-col px-4 pb-6 text-[#00122a] sm:px-8 md:px-16 md:pb-8 lg:px-24">
          <Navigation items={navigationItems} />
          <h1
            className={`mb-4 flex items-center justify-center text-center font-serif text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl ${zilla.className}`}
          >
            RESEARCH AND DEVELOPMENT
          </h1>
        </div>
      </div>

      {/* Page Title */}
      <motion.div
        className="mb-8 px-4 text-center sm:px-8 md:px-16 lg:px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Outreach Programmes
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-blue-600" />
      </motion.div>

      {/* Navigation Tabs */}
      <div className="container mx-auto w-full px-4 py-4 sm:px-8 md:px-16 md:py-8 lg:px-24">
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'overview', title: 'Overview' },
              { id: 'ethics', title: 'Code of Ethics' },
              { id: 'computers', title: 'Computer Engineering' },
              { id: 'ecs', title: 'ECS' },
              { id: 'cse', title: 'CSE' },
              { id: 'mechanical', title: 'Mechanical' },
              { id: 'researchCentre', title: 'Research Centre Details' },
              { id: 'activities', title: 'Activities under R&D Cell' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => showSection(tab.id as SectionId)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 sm:py-2 sm:text-base ${activeSection === tab.id
                    ? 'bg-[#012146] text-white'
                    : 'border border-gray-200 bg-white text-[#012146] hover:bg-gray-50'
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="rounded-lg bg-white shadow-sm">
          {activeSection === 'overview' && (
            <div className="p-4 md:p-6">
              <Card className="shadow-md">
                <CardContent className="space-y-6 p-8">
                  <h2 className="text-2xl font-semibold">
                    Overview - Research & Development
                  </h2>

                  <p className="text-gray-700">
                    Fr. Conceicao Rodrigues College of Engineering encourages
                    multidisciplinary quality research related to science,
                    engineering and technology in the domain of Computer
                    Engineering, AI and Data Science, Electronics engineering,
                    Mechanical engineering, Sciences and Humanity. Academic
                    research, funded research projects, and the creation of
                    intellectual property in the engineering and technology
                    domains are all part of the research activities. The
                    institute strives to create a vibrant research environment
                    for faculty and students engaged in emerging area research.
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold">Vision</h3>
                    <p className="text-gray-700">
                      To foster an environment conducive to multi-disciplinary
                      research in engineering and technology
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Mission</h3>
                    <ol className="list-inside list-decimal space-y-1 text-gray-700">
                      <li>
                        To promote inventiveness and moral research among
                        faculty, students, and alumni.
                      </li>
                      <li>
                        To encourage interdisciplinary and collaborative
                        research that benefits various facets of society and
                        industry.
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Objective</h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                      <li>
                        To inspire faculty and students to realize their
                        research potential and improve their involvement in
                        research and development activities.
                      </li>
                      <li>
                        To support collaboration and interdisciplinary research
                        projects.
                      </li>
                      <li>
                        To support the students and faculty in their efforts to
                        create, protect, and leverage Intellectual Property
                        Rights.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      Academic Year 2025-26:
                    </h3>
                    <p className="mt-2 font-semibold text-gray-700">
                      Research and Development Committee:
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                      <li>Dr. Ketaki Joshi (In-charge)</li>
                      <li>Prof. Saurabh Kulkarni</li>
                      <li>Dr. Swapnali Madkey</li>
                      <li>Dr. Vijay Shelke</li>
                      <li>Dr. Dipali Koshti</li>
                      <li>Dr. Sunil Yadav</li>
                    </ul>
                  </div>

                  <div>
                    <p className="mt-2 font-semibold text-gray-700">
                      Intellectual Property Rights (IPR) Cell:
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                      <li>Dr. Dipali Koshti (Convener)</li>
                      <li>Prof. Garima Tripathi</li>
                      <li>Dr. Vijay Shelke</li>
                      <li>Prof. Binsy Joseph</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      Research Promotion Policy
                    </h3>
                    <p className="text-gray-700">
                      A research and development committee has been formed at
                      Fr. CRCE to strengthen the institute's presence in the
                      field of research by actively promoting research culture
                      and facilitating research activities.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-700">Attachments:</p>
                    <div className="mt-2 rounded-md border bg-gray-50 p-4">
                      <ul className="space-y-2">
                        <li className="flex cursor-pointer items-center gap-2 text-blue-600 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>
                            Policy Regarding International Conference and
                            FDPs.pdf
                          </span>
                        </li>
                        <li className="flex cursor-pointer items-center gap-2 text-blue-600 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>Research Promotion Policy.pdf</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'ethics' && (
            <div className="p-4 md:p-6">
              <h2 className="mb-4 text-xl font-semibold text-[#012146] md:text-2xl">
                Code of Ethics
              </h2>
              <h3 className="mb-3 text-lg font-semibold text-[#012146]">
                Preamble
              </h3>
              <p className="mb-4 text-gray-700">
                University Of Mumbai adopted notification regarding Promotion of
                Academic Integrity and Prevention of Plagiarism by UGC vide
                circular number Th./ICD/2018-19/558 dated 6th October 2018. Our
                institute has circulated the same to all teachers and makes
                every attempt to follow this in true spirit. Research students
                check their manuscript/progress seminar reports/thesis for
                similarity and their reports are kept in their personal files.
                Only original articles are allowed by supervisors for further
                processing. Awareness program for the same was conducted for all
                teachers in the institute. Every student submitting a thesis,
                dissertation, or any other such documents to our institute
                submits an undertaking indicating that the document has been
                prepared by him or her and that the document is his/her original
                work.
              </p>
              <h3 className="mt-6 mb-3 text-lg font-semibold text-[#012146]">
                Code of Ethics and Publishing your Work
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                {[
                  'The work of the authors should be original research that is transparent and written by them in their own words.',
                  'The work of the author should not infringe any intellectual property rights or any rights of others.',
                  'The authors should clearly cite the source of the materials which is taken from some other published work.',
                  'The authors should also cite their own work to avoid self-plagiarism.',
                  'The authors should also get permission from other authors to use their images or tables in their manuscript wherever applicable.',
                  'The authors should write the manuscript in such a way that the work should be transparent reproducible.',
                  'The authors manuscript should not be submitted to more than one journal at a time.',
                  'Any conflict of interest should be clearly stated while submitting the article for any publication including those of the funding agencies.',
                  'The work of the authors should be authentic, true and should not be manipulated.',
                  'The authorship of the work should be given to those who have significantly contributed to improving the quality of the manuscript.',
                  'The authors should ensure that they strictly adhere to the ethical guidelines given by their discipline where subjects like human are involved.',
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    openPdf('/Research Ethics Policy.pdf')
                  }}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Research Ethics Guidelines.pdf
                </a>
              </div>
            </div>
          )}

          {activeSection === 'computers' && (
            <div className="p-4 md:p-6">
              <PublicationSection
                data={computersData}
                loading={computersLoading}
                error={!!computersError}
                title="Computer Engineering"
                stats={computersStats}
              />
            </div>
          )}

          {activeSection === 'ecs' && (
            <div className="p-4 md:p-6">
              <PublicationSection
                data={ecsData}
                loading={ecsLoading}
                error={!!ecsError}
                title="ECS"
                stats={ecsStats}
              />
            </div>
          )}

          {activeSection === 'cse' && (
            <div className="p-4 md:p-6">
              <PublicationSection
                data={cseData}
                loading={cseLoading}
                error={!!cseError}
                title="CSE"
                stats={cseStats}
              />
            </div>
          )}

          {activeSection === 'mechanical' && (
            <div className="p-4 md:p-6">
              <PublicationSection
                data={mechanicalData}
                loading={mechanicalLoading}
                error={!!mechanicalError}
                title="Mechanical"
                stats={mechanicalStats}
              />
            </div>
          )}

          {activeSection === 'researchCentre' && (
            <div className="p-4 md:p-6">
              <h2 className="mb-4 text-xl font-semibold text-[#012146] md:text-2xl">
                Research Centre Details
              </h2>
              <div className="space-y-8">
                {/* Research Centre Statistics */}
                <div className="text-center">
                  <h3 className="mb-4 text-2xl font-bold text-gray-800">Research Centre Statistics</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Research Centre</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Electronics Engineering</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Mechanical Engineering</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Computer Engineering</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Year of Introduction</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2014</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2015</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2023</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Sanctioned Intake</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">14</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">10</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">10</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">No. of Candidates pursuing Ph.D.</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">6</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">8</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">9</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">No. of Candidates Registered</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">0</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">No. of Candidates with Thesis Submitted</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">No. of Candidates with Ph.D. Awarded</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">9</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">4</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700">Total Vacancies</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700">8</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700">2</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700">1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Electronics Engineering Guides */}
                <div className="text-center">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Electronics Engineering</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Sr. No</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Name of Guide</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Designation</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">No. of Candidates with Ph.D. Awarded from the Research Centre</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">No. of Candidates with Thesis Submitted from the Research Centre</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">No. of Ph.D. Candidates currently Admitted to the Research Centre</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Total Ph.D. Candidates Admitted to date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deepak V. Bhoir</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Professor</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">02</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">02</td>
                          <td rowSpan={5} className="border border-gray-300 px-4 py-2 text-sm text-gray-700 align-middle">16</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sunil K. Surve</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Professor</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">02</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">00</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">3</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna U. Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Professor</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">00</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">01</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">03</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">4</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Surendra S Rathod</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Professor</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">00</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">01</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">5</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Professor</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">05</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mechanical Engineering Guides */}
                <div className="text-center">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Mechanical Engineering</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Sr. No</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Name of Guide</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Designation</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">No. of Candidates with Ph.D. Awarded from the Research Centre</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">No. of Candidates with Thesis Submitted from the Research Centre</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">No. of Ph.D. Candidates currently Admitted to the Research Centre</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Total Ph.D. Candidates Admitted to date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan T. Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Professor</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">04</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">05</td>
                          <td rowSpan={2} className="border border-gray-300 px-4 py-2 text-sm text-gray-700 align-middle">12</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Vasim A Shaikh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Associate Professor</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">03</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Computer Engineering Guides */}
                <div className="text-center">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Computer Engineering</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Sr. No</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Name of Guide</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Designation</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">No. of Candidates with Ph.D. Awarded from the Research Centre</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">No. of Candidates with Thesis Submitted from the Research Centre</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">No. of Ph.D. Candidates currently Admitted to the Research Centre</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Total Ph.D. Candidates Admitted to date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Professor</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">06</td>
                          <td rowSpan={3} className="border border-gray-300 px-4 py-2 text-sm text-gray-700 align-middle">09</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Ashok Kanthe</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Associate Professor</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">03</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">3</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Vijay Shelake</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Assistant Professor</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Details of Ph.D. Candidates (Electronics Engineering) */}
                <div className="text-center">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Details of Ph.D. Candidates - Electronics Engineering</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">S. No.</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Name of Ph.D. Scholar</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date of Admission</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date of Registration</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date of Thesis Submission</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date of Defense</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Supervisor</th>
                          <th colSpan={4} className="border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700">Research Advisory Committee Members</th>
                        </tr>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Convenor (HOD)</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Supervisor / Guide</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Expert 1</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Expert 2</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Monica Khanore</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Dec-13</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">20-Nov-15</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">12-Jan-21</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. B.K. Lande</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Sanjeev Ghosh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Dec-13</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">20-Nov-15</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">9-Jan-20</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">24-Dec-21</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deven Shah</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">3</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Ami Munshi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Jan-15</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Oct-16</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">24-Feb-20</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">5-May-22</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Shivraj Rathod</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">4</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Siddharth Gautam</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Jan-15</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">11-May-16</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">21-Nov-20</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">21-Jun-22</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Archana Bhise</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">5</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Nandana Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Sep-15</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2-Jan-17</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">17-Jan-20</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">17-Jan-22</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deepak Bhoir</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deepak. Bhoir</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sunil Surve</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Prof. Kishore Kinage</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">6</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Preeti Jain</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Sep-15</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">18-Apr-17</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">24-Jan-20</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2-Mar-22</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr Sunil Surve</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr.Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sunil Surve</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. N. M. Singh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. J.M.Nair</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">7</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Seema Talmale</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Sep-15</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">25-Jan-17</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">24-Jan-20</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">5-Jul-22</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr.Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. B. K. Lande</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">8</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Prashan Kasambe</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Dec-15</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">27-Mar-17</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">31-Dec-21</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">8-Jul-22</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deepak Bhoir</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sunil Surve</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Nitin Kale</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">9</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Binsy Joseph</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Feb-18</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">7-Feb-21</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deepak Bhoir</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sunil Surve</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Nitin Kale</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">10</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Sushma Nagdeote</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Feb-19</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">6-Mar-21</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deepak Bhoir</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Kishore Kinage</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">11</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Shridhar Sahu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Feb-19</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">7-May-21</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deepak Bhoir</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deepak Bhoir</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sunil Surve</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. S. S. Rathod</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">12</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Rohan Borgalli</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Feb-19</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">7-May-21</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sunil Surve</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sunil Surve</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sunil Surve</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deepak Garg</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">13</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Zafar Khan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Jun-21</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">14</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Devanand Bathe</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Jun-21</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">15</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Garima Singh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Jan-25</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Surendra Singh Rathod</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">16</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Flynn Jui</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1-Jan-25</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Research Topics (Electronics Engineering) */}
                <div className="text-center">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Research Topics - Electronics Engineering</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">S.No.</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Name of Ph.D. Scholar</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Supervisor</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Title of Thesis</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Monica Khanore</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Interference Canceller for DS-CDMA System</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Sanjeev Ghosh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Queuing Theoretic Approach to Wireless Sensor Networks for the Internet of Things</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">3</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Ami Munshi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Channel Estimation in MIMO OFDM Systems</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">4</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Siddharth Gautam</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Vertical handover decision algorithm in Vehicular Network</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">5</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Nandana Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deepak V. Bhoir</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">An automated screening system for classification of Diabetic Retinopathy and investigation if its association with pathological parameters</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">6</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Preeti Jain</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr Sunil K. Surve</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Coordination And Synchronization of Shared Resources for Multi-Agent Systems</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">7</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Seema Talmale</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Srija Unnikrishnan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Decoding Algorithm for Error Correcting Codes with Syndrome Polynomial</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">8</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Prashant Kasambe</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deepak V. Bhoir</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Performance Evaluation of MEMS Devices for various Geometric Structures</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">9</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Binsy Joseph</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deepak V. Bhoir</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Electric Vehicle Battery Management and prediction</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">10</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Sushma Nagdeote</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna U. Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">An Enhanced Digital Imaging Technique for Predictions in Cancer.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">11</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Shridhar Sahu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Deepak V. Bhoir</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">High Resolution Data Converters with Improved Accuracy for Low Power Biomedical Applications</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">12</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Rohan Borgalli</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sunil K. Surve</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Learning Algorithm for Facial Expression Recognition (FER) System</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">13</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Zafar Khan</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna U. Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Topic Yet to be Decided</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">14</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Devanand Bathe</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna U. Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Topic Yet to be Decided</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">15</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Garima Singh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Surendra Singh Rathod</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Topic Yet to be Decided</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">16</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Flynn Jui</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sapna U. Prabhu</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Topic Yet to be Decided</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Details of Ph.D. Candidates (Mechanical Engineering) */}
                <div className="text-center">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Details of Ph.D. Candidates - Mechanical Engineering</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">S. No.</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Name of Ph.D. Scholar</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date of Admission</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date of Registration</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date of Thesis Submission</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date of Defense</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Supervisor</th>
                          <th colSpan={4} className="border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700">Research Advisory Committee Members</th>
                        </tr>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Chairperson (HOD)</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">External Examiner1</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">External Examiner2</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Convenor (Guide)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Geetha Subramanian</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">30-Sep-15</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">24-Nov-17</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">18-Aug-21</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">20-Aug-24</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. P D Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Vivek Yakkundi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Ketaki Narendra Joshi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">27-Jul-16</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">26-Apr-17</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">24-Oct-19</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">12-Jun-20</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. P D Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Vivek Yakkundi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">3</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Devarkonda Satya Sundara Sudhakar</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">27-Jul-16</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">18-Dec-17</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. P D Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Vivek Yakkundi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">4</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Deepika Singh Singraur</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">27-Jul-16</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">19-Dec-17</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. S. U. Bokade</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. C. M. Chaudhari</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">5</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dipali Kisan Bhise</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">27-Jul-16</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">4-Sep-18</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">7-Dec-23</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">10-Feb-24</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. S. U. Bokade</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. C. M. Chaudhari</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">6</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">VeerBhadra Rao D. N. Miriyala</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">27-Jul-16</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">5-Oct-18</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">19-Apr-24</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">6-Jul-24</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. S U Bokade</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Ramesh Lekurwale</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">7</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Zoya Rizvi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">5-Apr-22</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Kiran Bhole</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. S.U. Bokade</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">8</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Pranit Prashant Mehta</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">23-Dec-22</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Vasim Shaikh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">9</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Samanwita Bagg</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">23-Dec-22</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Vasim Shaikh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">10</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Varad Deshpande</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">13-Sep-23</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Vasim Shaikh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">11</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Onkar Potadar</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">03-Jan-25</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">12</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Preeti Vairagi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">03-Jan-25</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Research Topics (Mechanical Engineering) */}
                <div className="text-center">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Research Topics - Mechanical Engineering</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">S.No.</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Name of Ph.D. Scholar</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Supervisor</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Title of Thesis</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Geetha Subramanian</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan T. Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Improving Operational Efficiency of Micro Small and Medium Enterprises (MSME) using Collaborative manufacturing, Cloud Technology and Industry 4.0</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Ketaki Narendra Joshi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan T. Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Design and Development of Machine Vision Systems for Inspection and Quality Control in Manufacturing Industry</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">3</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Devarkonda Satya Sundara Sudhakar</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan T. Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Investigations into interpolators for arbitrary contours on Open CNC system</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">4</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Deepika Singh Singraur</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan T. Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Performance Enhancement of Plastic Injection Molding using Conformal cooling Channels</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">5</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dipali Kisan Bhise</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan T. Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Investigation and Analysis of Micro Lubrication in Milling Operation</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">6</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">VeerBhadra Rao D. N. Miriyala</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan T. Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Performance Evaluation of Turning AISI 4340 Steel using Minimum Quantity Lubrication (MQL) with Biodegradable Metal Working Fluids (MWFs)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">7</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Zoya Rizvi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan T. Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Investigation into Nozzles used for Agricultural Drones</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">8</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Pranit Prashant Mehta</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Vasim Shaikh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Analyzing the Effectiveness of Minimum Quantity Lubrication using Cutting Fluid Derived from Vegetable oil: An Approach towards Green manufacturing</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">9</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Samanwita Bagg</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Vasim Shaikh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Investigation into a Smart Suspension using Active Magnetorheological Damper</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">10</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Varad Deshpande</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Vasim Shaikh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Topic Yet to be Decided</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">11</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Onkar Potadar</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Topic Yet to be Decided</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">12</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Preeti Vairagi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Bhushan Patil</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Topic Yet to be Decided</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Details of Ph.D. Candidates (Computer Engineering) */}
                <div className="text-center">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Details of Ph.D. Candidates - Computer Engineering</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">S. No.</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Name of Ph.D. Scholar</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date of Admission</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date of Registration</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date of Thesis Submission</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Date of Defense</th>
                          <th rowSpan={2} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Supervisor</th>
                          <th colSpan={4} className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Research Advisory Committee Members</th>
                        </tr>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Chairperson (HOD)</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">External Examiner1</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">External Examiner2</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Convenor (Guide)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Pardeshi Anandkumar Vilas</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">13-Sep-23</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. S. K. Shinde</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Narendra Shekokar</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Shah Parshvi Zankesh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">30-Sep-23</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. S. K. Shinde</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Narendra Shekokar</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">3</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Surwadkar Tushar Jagannath</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">30-Sep-23</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. S. K. Shinde</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Narendra Shekokar</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">4</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Wasnik Chitra Tukaramji</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">13-Sep-23</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. G.T. Thampi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. D.R. Kalabande</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">5</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Joshua Michael</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">3-Jan-25</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">6</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Savita Borole</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">3-Jan-25</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">7</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Urade Pratyush Prakash</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">30-Sep-23</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Ashok Kanthe</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. G.T. Thampi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. D.R. Kalabande</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">8</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Mhatre Anita Dayanand</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">30-Sep-23</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Ashok Kanthe</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. G.T. Thampi</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. D.R. Kalabande</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">9</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Ankita Amburle</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">3-Jan-25</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Ashok Kanthe</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Research Topics (Computer Engineering) */}
                <div className="text-center">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Research Topics - Computer Engineering</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">S.No.</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Name of Ph.D. Scholar</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Supervisor</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">Title of Thesis</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Pardeshi Anandkumar Vilas</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Integrating Multi-Source Data with Sentiment Analysis and Language Models to Enhance Stock Market Decision Making</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Shah Parshvi Zankesh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Design and Implement Quantum safe Cryptographic Solutions to secure IOT Data</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">3</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Surwadkar Tushar Jagannath</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Enhancing Decision-Making in Dermatological Disorders using Interpretable Artificial Intelligence for Indian Skin Diseases</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">4</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Wasnik Chitra Tukaramji</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Generative AI Driven Professional Education Model for Building Efficiencies</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">5</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Joshua Michael</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Topic Yet to be Decided</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">6</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Savita Borole</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Sujata Deshmukh</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Topic Yet to be Decided</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">7</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Urade Pratyush Prakash</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Ashok Kanthe</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Analysis of Multiple Access Techniques in Wireless Network Using Channel State Information and Machine Learning</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">8</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Mhatre Anita Dayanand</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Ashok Kanthe</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Enhancing Routing and Congestion Control in Flying Ad-Hoc Networks (FANETs) through Machine Learning and Multi-Agent Systems</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">9</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Ankita Amburle</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Dr. Ashok Kanthe</td>
                          <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Topic Yet to be Decided</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'activities' && (
            <div className="flex items-center justify-center p-4 md:p-6">
              <img
                src="/VJTI_PreincubationVisit.jpg" // Replace with actual image path in public directory
                alt="Activities under R&D Cell"
                className="h-auto max-w-full rounded-lg shadow-md"
                style={{ maxHeight: '1500px' }}
              />
            </div>
          )}
        </div>
      </div>

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
            onClick={(e) => e.stopPropagation()}
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
    </div>
  )
}

export default ResearchPage
