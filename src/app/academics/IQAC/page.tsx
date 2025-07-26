'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import { FileText, Download, X } from 'lucide-react'
import { motion } from 'framer-motion'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function IQACPage() {
  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'IQAC', url: '/academics/IQAC' },
  ]

  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('iqac')

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

  const tabs = [
    { id: 'iqac', label: 'IQAC' },
    { id: 'composition', label: 'Composition' },
    { id: 'constitution', label: 'Constitution' },
    { id: 'roles', label: 'Roles and Responsibilities' },
    { id: 'minutes', label: 'Minutes of Meeting' },
    { id: 'activities', label: 'Activities' },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'iqac':
        return (
          <div className="space-y-5 text-justify leading-relaxed">
            <p className="text-sm text-gray-700 md:text-base">
              National Assessment and Accreditation Council (NAAC), Bangalore
              proposed that every accredited institution should establish an
              Internal Quality Assurance Cell (IQAC) as a quality sustenance
              measure. Since quality enhancement is a continuous process, the
              IQAC is a part of the institution’s system and works towards the
              realisation of the goals of quality enhancement and sustenance.
              The prime task of the IQAC is to develop a system for conscious,
              consistent and catalytic improvement in the overall performance of
              institutions.
            </p>
            <p className="text-sm text-gray-700 md:text-base">
              The work of the IQAC is the first step towards the internalization
              and institutionalization of quality enhancement initiatives. Its
              success depends upon the sense of belongingness and participation
              in all the constituents of the institution. IQAC is a facilitative
              and participative voluntary system/unit/organ of the institution.
            </p>

            <h2 className="mt-6 text-2xl font-semibold">IQAC – Vision</h2>
            <p className="text-sm text-gray-700 md:text-base">
              To ensure quality culture as the prime concern for the Higher
              Education Institutions through institutionalizing and
              internalizing all the initiatives taken with internal and external
              support.
            </p>

            <h2 className="mt-6 text-2xl font-semibold">Objective</h2>
            <p className="text-sm font-medium text-gray-700 italic md:text-base">
              The primary aim of IQAC is
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 md:text-base">
              <li>
                To develop a system for conscious, consistent and catalytic
                action to improve the academic and administrative performance of
                the institution.
              </li>
              <li>
                To promote measures for institutional functioning towards
                quality enhancement through internalization of quality culture
                and institutionalization of best practices.
              </li>
            </ul>

            <h2 className="mt-6 text-2xl font-semibold">Strategies</h2>
            <p className="text-sm font-medium text-gray-700 italic md:text-base">
              IQAC shall evolve mechanisms and procedures for
            </p>
            <ol className="list-decimal space-y-1 pl-6 text-sm text-gray-700 md:text-base">
              <li>
                Ensuring the timely, efficient and progressive performance of
                academic, administrative and financial tasks;
              </li>
              <li>Relevant and quality academic/ research programmes;</li>
              <li>
                Equitable access to and affordability of academic programmes for
                various sections of society;
              </li>
              <li>
                Optimization and integration of modern methods of teaching and
                learning;
              </li>
              <li>The credibility of the assessment and evaluation process;</li>
              <li>
                Ensuring the adequacy, maintenance and proper allocation of
                support structure and services;
              </li>
              <li>
                Sharing of research findings and networking with other
                institutions in India and abroad.
              </li>
            </ol>

            <h2 className="mt-6 text-2xl font-semibold">Functions</h2>
            <p className="text-sm font-medium text-gray-700 italic md:text-base">
              Some of the functions expected of the IQAC are:
            </p>
            <ol className="list-decimal space-y-1 pl-6 text-sm text-gray-700 md:text-base">
              <li>Development and application of quality benchmarks</li>
              <li>
                Parameters for various academic and administrative activities of
                the institution;
              </li>
              <li>
                Facilitating the creation of a learner-centric environment
                conducive to quality education and faculty maturation to adopt
                the required knowledge and technology for participatory teaching
                and learning process;
              </li>
              <li>
                Collection and analysis of feedback from all stakeholders on
                quality-related institutional processes;
              </li>
              <li>
                Dissemination of information on various quality parameters to
                all stakeholders;
              </li>
              <li>
                Organization of inter and intra institutional workshops,
                seminars on quality related themes and promotion of quality
                circles;
              </li>
              <li>
                Documentation of the various programmes/activities leading to
                quality improvement;
              </li>
              <li>
                Acting as a nodal agency of the Institution for coordinating
                quality-related activities, including adoption and dissemination
                of best practices;
              </li>
              <li>
                Development and maintenance of an institutional database through
                MIS for the purpose of maintaining/enhancing the institutional
                quality;
              </li>
              <li>
                Periodical conduct of Academic and Administrative Audit and its
                follow-up
              </li>
              <li>
                Preparation and submission of the Annual Quality Assurance
                Report (AQAR) as per the guidelines and parameters of the NAAC.
              </li>
            </ol>

            <h2 className="mt-6 text-2xl font-semibold">Benefits</h2>
            <p className="text-sm font-medium text-gray-700 italic md:text-base">
              IQAC will facilitate/contribute to
            </p>
            <ol className="list-decimal space-y-1 pl-6 text-sm text-gray-700 md:text-base">
              <li>
                Ensure clarity and focus in institutional functioning towards
                quality enhancement;
              </li>
              <li>Ensure internalization of the quality culture;</li>
              <li>
                Ensure enhancement and coordination among various activities of
                the institution and institutionalize all good practices;
              </li>
              <li>
                Provide a sound basis for decision-making to improve
                institutional functioning;
              </li>
              <li>Act as a dynamic system for quality changes in HEIs;</li>
              <li>
                Build an organized methodology of documentation and internal
                communication.
              </li>
            </ol>
          </div>
        )

      case 'composition':
        return (
          <div>
            <p className="mb-4 text-sm text-gray-700 md:text-base">
              The composition of IQAC consists of:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 bg-white text-center text-sm md:text-base">
                <thead className="bg-[#012146] text-white">
                  <tr>
                    <th className="w-[10%] p-2">No.</th>
                    <th className="w-[90%] p-2 text-left">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, title: 'Chairman' },
                    { id: 2, title: 'Member of Management' },
                    { id: 3, title: 'IQAC Co-ordinator' },
                    { id: 4, title: 'Senior Administrative Officer' },
                    { id: 5, title: 'Senior Administrative Officer' },
                    { id: 6, title: 'Senior Administrative Officer' },
                    { id: 7, title: 'Senior Administrative Officer' },
                    { id: 8, title: 'Senior Administrative Officer' },
                    { id: 9, title: 'Member- Program Co-ordinator (Comp)' },
                    { id: 10, title: 'Member- Program Co-ordinator (AI & DS)' },
                    { id: 11, title: 'Member- Program Co-ordinator (ECS)' },
                    { id: 12, title: 'Member- Program Co-ordinator (Mech)' },
                    { id: 13, title: 'Member- Program Co-ordinator (H & S)' },
                    { id: 14, title: 'Alumni' },
                    { id: 15, title: `Stakeholder's Nominee (Parent)1` },
                    { id: 16, title: 'Entrepreneur' },
                    { id: 17, title: 'Nominee from Industry' },
                    {
                      id: 18,
                      title: 'Nominee of the Student- General Secretary',
                    },
                    { id: 19, title: 'NAAC and NBA Co-ordinator' },
                    { id: 20, title: 'NIRF Co-ordinator' },
                  ].map((item, index) => (
                    <tr
                      key={item.id}
                      className={index % 2 === 0 ? 'bg-gray-50' : ''}
                    >
                      <td className="p-2">{item.id}</td>
                      <td className="p-2 text-left">{item.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )

      case 'constitution':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#012146]">
              IQAC Constitution Documents
            </h2>
            <ul className="list-disc space-y-4 pl-6">
              <li className="text-gray-700">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    openPdf('/IQAC_2025.pdf')
                  }}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  A.Y. 2025-2026
                </a>
              </li>
              <li className="text-gray-700">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    openPdf('/IQAC_2024.pdf')
                  }}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  A.Y. 2024-2025
                </a>
              </li>
              <li className="text-gray-700">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    openPdf('/IQAC-2023.pdf')
                  }}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  A.Y. 2023-2024
                </a>
              </li>
            </ul>
          </div>
        )

      case 'roles':
        return (
          <div className="space-y-6 leading-relaxed text-gray-900">
            <h2 className="mb-4 text-center text-3xl font-semibold">
              IQAC – Roles and Responsibilities
            </h2>
            <ol className="list-decimal space-y-3 pl-6 text-base">
              <li>
                <span className="font-bold text-blue-900">
                  Development and application of quality benchmarks/parameters
                  for various academic and administrative activities of the
                  institution
                </span>
              </li>
              <li>
                <span className="font-bold text-blue-900">
                  Integration and optimization of modern methods of teaching and
                  learning.
                </span>
              </li>
              <li>
                <span className="font-bold text-blue-900">
                  Dissemination of information on various quality parameters of
                  higher education
                </span>
              </li>
              <li>
                <span className="font-bold text-blue-900">
                  Documentation of the various programmes/activities leading to
                  quality improvement
                </span>
              </li>
              <li>
                <span className="font-bold text-blue-900">
                  Ensure relevance and quality of academic and research
                  programs.
                </span>
              </li>
              <li>
                <span className="font-bold text-blue-900">
                  Ensuring the adequacy, maintenance and functioning of the
                  support structure and services.
                </span>
              </li>
            </ol>
          </div>
        )

      case 'minutes':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#012146]">2023</h2>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  openPdf('/IQAC Meeting 5Mar2024 MoM.pdf')
                }}
                className="text-blue-600 underline hover:text-blue-800"
              >
                Minutes of Meeting 2023
              </a>
            </div>
          </div>
        )

      case 'activities':
        return (
          <div>
            <h2 className="text-2xl font-semibold text-[#012146]">2023</h2>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="mt-28 flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900 md:mt-40">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-12 md:pt-16">
        <div className="flex w-full flex-col px-4 pb-6 text-[#00122a] sm:px-8 md:px-16 md:pb-8 lg:px-24">
          <Navigation items={navigationItems} />
          <h1
            className={`mb-4 flex items-center justify-center text-center font-serif text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl ${zilla.className}`}
          >
            IQAC - INTERNAL QUALITY ASSESSMENT CELL
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

      {/* Tabs Layout */}
      <motion.div
        className="mx-auto flex max-w-7xl px-4 sm:px-8 md:px-16 lg:px-24"
        {...fadeIn}
      >
        {/* Left Sidebar for Tabs */}
        <div className="w-64 pr-6">
          <nav className="sticky top-[191px] space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full rounded-lg px-4 py-2 text-left font-medium ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-2xl font-semibold text-[#012146]">
              {tabs.find((tab) => tab.id === activeTab)?.label}
            </h2>
            {renderTabContent()}
          </div>
        </div>
      </motion.div>

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
