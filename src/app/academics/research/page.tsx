'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import { useQuery } from '@tanstack/react-query'
import Navigation from '@/components/navigation'
import getDepartmentPublications from '@/app/api/publications'
import type { DepartmentPublication } from '@/app/api/publications'

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

  // Query for all departments
  const {
    data: computersData,
    isLoading: computersLoading,
    isError: computersError,
  } = useQuery<DepartmentPublication[]>({
    queryKey: ['publications', 'computers'],
    queryFn: () => getDepartmentPublications('computers'),
    staleTime: 6 * 60 * 60 * 1000, // 6 hours
  })

  const {
    data: ecsData,
    isLoading: ecsLoading,
    isError: ecsError,
  } = useQuery<DepartmentPublication[]>({
    queryKey: ['publications', 'ecs'],
    queryFn: () => getDepartmentPublications('ecs'),
    staleTime: 6 * 60 * 60 * 1000, // 6 hours
  })

  const {
    data: cseData,
    isLoading: cseLoading,
    isError: cseError,
  } = useQuery<DepartmentPublication[]>({
    queryKey: ['publications', 'cse'],
    queryFn: () => getDepartmentPublications('cse'),
    staleTime: 6 * 60 * 60 * 1000, // 6 hours
  })

  const {
    data: mechanicalData,
    isLoading: mechanicalLoading,
    isError: mechanicalError,
  } = useQuery<DepartmentPublication[]>({
    queryKey: ['publications', 'mechanical'],
    queryFn: () => getDepartmentPublications('mechanical'),
    staleTime: 6 * 60 * 60 * 1000, // 6 hours
  })

  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'Research & Development', url: '/academics/research-development' },
  ]

  interface NavigationItem {
    label: string
    url: string
  }

  type SectionId =
    | 'overview'
    | 'ethics'
    | 'computers'
    | 'ecs'
    | 'cse'
    | 'mechanical'

  const showSection = (sectionId: SectionId): void => {
    setActiveSection(sectionId)
  }

  // Calculate department stats
  const calculateStats = (data: DepartmentPublication[] | undefined): DepartmentStats => {
    if (!data) return { total: 0, published: 0, pending: 0, withLinks: 0 }

    return {
      total: data.length,
      published: data.filter(pub => pub.status.toLowerCase() === 'published').length,
      pending: data.filter(pub => pub.status.toLowerCase() === 'pending').length,
      withLinks: data.filter(pub => pub.link !== null).length,
    }
  }

  const computersStats = calculateStats(computersData)
  const ecsStats = calculateStats(ecsData)
  const cseStats = calculateStats(cseData)
  const mechanicalStats = calculateStats(mechanicalData)

  // Overall stats
  const overallStats = {
    total: computersStats.total + ecsStats.total + cseStats.total + mechanicalStats.total,
    published: computersStats.published + ecsStats.published + cseStats.published + mechanicalStats.published,
    pending: computersStats.pending + ecsStats.pending + cseStats.pending + mechanicalStats.pending,
    withLinks: computersStats.withLinks + ecsStats.withLinks + cseStats.withLinks + mechanicalStats.withLinks,
  }

  const isLoading = computersLoading || ecsLoading || cseLoading || mechanicalLoading
  const hasError = computersError || ecsError || cseError || mechanicalError

  const PublicationCard = ({ publication }: { publication: DepartmentPublication }) => (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-base font-semibold text-[#012146] sm:text-lg">
          {publication.title}
        </h3>
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${publication.status.toLowerCase() === 'published'
          ? 'bg-green-100 text-green-800'
          : 'bg-yellow-100 text-yellow-800'
          }`}>
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
          <strong>Date:</strong> {new Date(publication.date).toLocaleDateString()}
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

  const StatsCard = ({ title, stats }: { title: string; stats: DepartmentStats }) => (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <h3 className="mb-3 text-base font-medium text-[#012146]">{title}</h3>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div>
          <div className="text-lg font-semibold text-gray-800">{stats.total}</div>
          <div className="text-xs text-gray-600">Total</div>
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-800">{stats.published}</div>
          <div className="text-xs text-gray-600">Published</div>
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-800">{stats.pending}</div>
          <div className="text-xs text-gray-600">Pending</div>
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-800">{stats.withLinks}</div>
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
    stats
  }: {
    data: DepartmentPublication[] | undefined
    loading: boolean
    error: boolean
    title: string
    stats: DepartmentStats
  }) => (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-[#012146] md:text-2xl">{title} Publications</h2>
        <div className="text-sm text-gray-600">
          {stats.total} total publications ({stats.published} published, {stats.pending} pending)
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

  return (
    <div className="mt-25 flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900 md:mt-44">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-12 md:pt-16">
        <div className="flex w-full flex-col px-4 pb-6 text-[#00122a] sm:px-8 md:px-16 md:pb-8 lg:px-24">
          <h1
            className={`mb-4 flex items-center justify-center text-center font-serif text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            RESEARCH AND DEVELOPMENT
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full px-4 py-4 sm:px-8 md:px-16 md:py-8 lg:px-24">
        {/* Navigation Tabs */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'overview', title: 'Overview' },
              { id: 'ethics', title: 'Code of Ethics' },
              { id: 'computers', title: 'Computer Engineering' },
              { id: 'ecs', title: 'ECS' },
              { id: 'cse', title: 'CSE' },
              { id: 'mechanical', title: 'Mechanical' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => showSection(tab.id as SectionId)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 sm:py-2 sm:text-base ${activeSection === tab.id
                  ? 'bg-[#012146] text-white'
                  : 'bg-white text-[#012146] hover:bg-gray-50 border border-gray-200'
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
              <h2 className="mb-6 text-xl font-semibold text-[#012146] md:text-2xl">
                Research Overview
              </h2>

              {/* Overall Statistics */}
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-medium text-[#012146]">Overall Statistics</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-[#012146]">{overallStats.total}</div>
                    <div className="text-sm text-gray-600">Total Publications</div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-[#012146]">{overallStats.published}</div>
                    <div className="text-sm text-gray-600">Published</div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-[#012146]">{overallStats.pending}</div>
                    <div className="text-sm text-gray-600">Pending</div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-[#012146]">{overallStats.withLinks}</div>
                    <div className="text-sm text-gray-600">With Links</div>
                  </div>
                </div>
              </div>

              {/* Department-wise Breakdown */}
              <div className="mb-6">
                <h3 className="mb-4 text-lg font-medium text-[#012146]">Department-wise Breakdown</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <StatsCard title="Computer Engineering" stats={computersStats} />
                  <StatsCard title="ECS" stats={ecsStats} />
                  <StatsCard title="CSE" stats={cseStats} />
                  <StatsCard title="Mechanical" stats={mechanicalStats} />
                </div>
              </div>

              {/* Description */}
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-gray-700 leading-relaxed">
                  Our institute is committed to fostering research excellence across all departments.
                  We have <strong>{overallStats.total}</strong> publications across Computer Engineering, ECS, CSE, and Mechanical departments,
                  with <strong>{overallStats.published}</strong> already published and <strong>{overallStats.pending}</strong> currently under review.
                  {overallStats.total > 0 && (
                    <span> Approximately <strong>{Math.round((overallStats.withLinks / overallStats.total) * 100)}%</strong> of our publications have accessible links for further reading.</span>
                  )}
                </p>
              </div>
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
              <h3 className="mb-3 mt-6 text-lg font-semibold text-[#012146]">
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
        </div>
      </div>
    </div>
  )
}

export default ResearchPage

