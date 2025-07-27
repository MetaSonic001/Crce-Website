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
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
            publication.status.toLowerCase() === 'published'
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
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 sm:py-2 sm:text-base ${
                  activeSection === tab.id
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
                    openPdf('/research_ethics.pdf')
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
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          )}

          {activeSection === 'activities' && (
            <div className="flex items-center justify-center p-4 md:p-6">
              <img
                src="/research-activities.jpg" // Replace with actual image path in public directory
                alt="Activities under R&D Cell"
                className="h-auto max-w-full rounded-lg shadow-md"
                style={{ maxHeight: '600px' }}
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
