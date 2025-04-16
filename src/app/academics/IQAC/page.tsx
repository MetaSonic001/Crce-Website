'use client'
import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import { FileText, Download, Book, Award } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const IQACPage = () => {
  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'IQAC', url: '/academics/IQAC' },
  ]

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900 mt-44">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-12 md:pt-16">
        <div className="flex w-full flex-col px-4 sm:px-8 md:px-16 lg:px-24 pb-6 md:pb-8 text-[#00122a]">
          <h1 className={`mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}>
            IQAC - INTERNAL QUALITY ASSESSMENT CELL
          </h1>
          
        </div>
      </div>

      <div className="container mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-24 py-4 md:py-8">
        {/* About IQAC */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              About IQAC
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              National Assessment and Accreditation Council (NAAC), Bangalore
              proposed that every accredited institution should establish an
              Internal Quality Assurance Cell (IQAC) as a quality sustenance
              measure. Since quality enhancement is a continuous process, the
              IQAC is a part of the institution's system and works towards the
              realisation of the goals of quality enhancement and sustenance.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              The work of the IQAC is the first step towards the internalization
              and institutionalization of quality enhancement initiatives. Its
              success depends upon the sense of belongingness and participation
              in all the constituents of the institution. IQAC is a facilitative
              and participative voluntary system/unit/organ of the institution.
            </p>
          </div>
        </div>

        {/* IQAC Vision */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              IQAC Vision
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              To ensure quality culture as the prime concern for the Higher
              Education Institutions through institutionalizing and
              internalizing all the initiatives taken with internal and
              external support.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              Objectives
            </h2>
            <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
              <li>
                To develop a system for conscious, consistent and catalytic
                action to improve the academic and administrative
                performance of the institution.
              </li>
              <li>
                To promote measures for institutional functioning towards
                quality enhancement through internalization of quality
                culture and institutionalization of best practices.
              </li>
            </ul>
          </div>
        </div>

        {/* Strategies */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              Strategies
            </h2>
            <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
              {[
                'Ensuring the timely, efficient and progressive performance of academic, administrative and financial tasks;',
                'Relevant and quality academic/ research programmes;',
                'Equitable access to and affordability of academic programmes for various sections of society;',
                'Optimization and integration of modern methods of teaching and learning;',
                'The credibility of the assessment and evaluation process;',
                'Ensuring the adequacy, maintenance and proper allocation of support structure and services;',
                'Sharing of research findings and networking with other institutions in India and abroad.',
              ].map((strategy, index) => (
                <li key={index}>{strategy}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Functions */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              Functions
            </h2>
            <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
              {[
                'Development and application of quality benchmarks;',
                'Parameters for various academic and administrative activities of the institution;',
                'Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process;',
                'Collection and analysis of feedback from all stakeholders on quality-related institutional processes;',
                'Dissemination of information on various quality parameters to all stakeholders;',
                'Organization of inter and intra institutional workshops, seminars on quality-related themes and promotion of quality circles;',
                'Documentation of the various programmes/activities leading to quality improvement;',
                'Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices;',
                'Development and maintenance of an institutional database through MIS for the purpose of maintaining/enhancing the institutional quality;',
                'Periodical conduct of Academic and Administrative Audit and its follow-up;',
                'Preparation and submission of the Annual Quality Assurance Report (AQAR) as per the guidelines and parameters of the NAAC.',
              ].map((function_item, index) => (
                <li key={index}>{function_item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              Benefits
            </h2>
            <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
              {[
                'Ensure clarity and focus in institutional functioning towards quality enhancement;',
                'Ensure internalization of the quality culture;',
                'Ensure enhancement and coordination among various activities of the institution and institutionalize all good practices;',
                'Provide a sound basis for decision-making to improve institutional functioning;',
                'Act as a dynamic system for quality changes in HEIs;',
                'Build an organized methodology of documentation and internal communication.',
              ].map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* IQAC-Composition */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              IQAC-Composition
            </h2>
            <p className="mb-4 text-sm md:text-base text-gray-700">
              The composition of IQAC consists of:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 bg-white text-center text-sm md:text-base">
                <thead className="bg-[#012146] text-white">
                  <tr>
                    <th className="p-2 w-[10%]">No.</th>
                    <th className="p-2 w-[90%] text-left">Designation</th>
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
                    { id: 18, title: 'Nominee of the Student- General Secretary' },
                    { id: 19, title: 'NAAC and NBA Co-ordinator' },
                    { id: 20, title: 'NIRF Co-ordinator' },
                  ].map((item, index) => (
                    <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="p-2">{item.id}</td>
                      <td className="p-2 text-left">{item.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center">
          <a
            href="/IQAC-2023.pdf"
            className="inline-block rounded-full bg-[#4a90e2] px-6 py-3 font-semibold text-white transition-all hover:bg-[#357abd]"
            download
          >
            <span className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download IQAC 2023 PDF
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default IQACPage