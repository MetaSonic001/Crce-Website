'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import Publications from './computerpublications'
import AidsPublications from './aidspublications'
import ECSPublications from './ecspublications'
import MechPublications from './mechpublications'
import FundedPublications from './funded'
import PatentsPublications from './patents'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const ResearchPage = () => {
  const [activeSection, setActiveSection] = useState('overview')

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
    | 'research-centre'
    | 'computer'
    | 'ecs'
    | 'ai-ds'
    | 'mechanical'
    | 'patents'
    | 'funded'

  const showSection = (sectionId: SectionId): void => {
    setActiveSection(sectionId)
  }

  return (
    <div className="mt-25 flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900 md:mt-44">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-12 md:pt-16">
        <div className="flex w-full flex-col px-4 pb-6 text-[#00122a] sm:px-8 md:px-16 md:pb-8 lg:px-24">
          <h1
            className={`mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            RESEARCH AND DEVELOPMENT
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full px-4 py-4 sm:px-8 md:px-16 md:py-8 lg:px-24">
        {/* Navigation Tabs */}
        <div className="mb-4 flex flex-wrap">
          {[
            { id: 'overview', title: 'Overview' },
            { id: 'ethics', title: 'Code of Ethics' },
            { id: 'research-centre', title: 'Research Centre Details' },
            { id: 'computer', title: 'Computer Engineering' },
            { id: 'ecs', title: 'ECS' },
            { id: 'ai-ds', title: 'AI & DS' },
            { id: 'mechanical', title: 'Mechanical' },
            { id: 'patents', title: 'Patents' },
            { id: 'funded', title: 'Funded Projects' },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-3 py-2 text-center text-xs whitespace-nowrap md:px-4 md:py-3 md:text-sm lg:text-base ${
                activeSection === tab.id
                  ? 'rounded-t-lg bg-white font-semibold text-[#012146]'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => showSection(tab.id as SectionId)}
            >
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className="mb-8 rounded-tr-lg rounded-b-lg bg-white shadow-lg">
          {activeSection === 'overview' && (
            <div className="p-4 md:p-6">
              <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
                Overview
              </h2>
              <p className="mb-4 text-sm text-gray-700 md:text-base">
                Fr. Conceicao Rodrigues College of Engineering encourages
                multidisciplinary quality research related to science,
                engineering and technology in the domain of Computer
                Engineering, AI and Data Science, Electronics engineering,
                Mechanical engineering, Sciences and Humanity. Academic
                research, funded research projects, and the creation of
                intellectual property in the engineering and technology domains
                are all part of the research activities. The institute strives
                to create a vibrant research environment for faculty and
                students engaged in emerging area research.
              </p>

              <h3 className="mt-6 mb-3 text-base font-semibold text-[#012146] md:text-lg">
                Vision
              </h3>
              <p className="mb-4 text-sm text-gray-700 md:text-base">
                To foster an environment conducive to multi-disciplinary
                research in engineering and technology
              </p>

              <h3 className="mt-6 mb-3 text-base font-semibold text-[#012146] md:text-lg">
                Mission
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
                <li>
                  To promote inventiveness and moral research among faculty,
                  students, and alumni.
                </li>
                <li>
                  To encourage interdisciplinary and collaborative research that
                  benefits various facets of society and industry.
                </li>
              </ul>

              <h3 className="mt-6 mb-3 text-base font-semibold text-[#012146] md:text-lg">
                Objective
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
                <li>
                  To inspire faculty and students to realize their research
                  potential and improve their involvement in research and
                  development activities.
                </li>
                <li>
                  To support collaboration and interdisciplinary research
                  projects.
                </li>
                <li>
                  To support the students and faculty in their efforts to
                  create, protect, and leverage Intellectual Property Rights.
                </li>
              </ul>

              <h3 className="mt-6 mb-3 text-base font-semibold text-[#012146] md:text-lg">
                Research & Development Committee (2022-23)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
                {[
                  'Dr. Ketaki Joshi(In-charge)',
                  'Prof. Swapnali Mahadik',
                  'Prof. Kalpana Deorukhkar',
                  'Prof. Dipali Koshti',
                  'Dr. Sunil Yadav',
                  'Prof. Sangeeta Parshionikar',
                  'Athavva Pavar(TE Comps A)',
                  'Giann Mendonca(TE Comps B)',
                  'Vrushti Shah (TE ECS)',
                  'Asiya Shaikh (TE Mech)',
                  'Bishnu Shrestha (TE Mech)',
                  'Divya Fernandes(TE AI & DS)',
                  'Snow Doritto (TE AI & DS)',
                ].map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>

              <h3 className="mt-6 mb-3 text-base font-semibold text-[#012146] md:text-lg">
                Research Promotion Policy
              </h3>
              <p className="mb-4 text-sm text-gray-700 md:text-base">
                A research and development committee has been formed at Fr. CRCE
                to strengthen the institute's presence in the field of research
                by actively promoting research culture and facilitating research
                activities.
              </p>
              <div className="mt-4 text-center">
                <Link
                  href="https://frcrce.ac.in/attachments/article/173/Research%20Promotion%20Policy.pdf"
                  className="inline-block rounded-full bg-[#4a90e2] px-6 py-3 font-semibold text-white transition-all hover:bg-[#357abd]"
                >
                  Research Promotion Policy.pdf
                </Link>
              </div>
            </div>
          )}

          {activeSection === 'ethics' && (
            <div className="p-4 md:p-6">
              <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
                Code of Ethics
              </h2>

              <h3 className="mb-3 text-base font-semibold text-[#012146] md:text-lg">
                Preamble
              </h3>
              <p className="mb-4 text-sm text-gray-700 md:text-base">
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

              <h3 className="mt-6 mb-3 text-base font-semibold text-[#012146] md:text-lg">
                Code of Ethics and Publishing your Work
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
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

          {activeSection === 'research-centre' && (
            <div className="p-4 md:p-6">
              <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
                Research Centre Details
              </h2>

              <h3 className="mb-4 text-base font-semibold text-[#012146] md:text-lg">
                Research Centre Statistics
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 bg-white text-center text-sm md:text-base">
                  <thead className="bg-[#012146] text-white">
                    <tr>
                      <th className="p-2">Research Centre</th>
                      <th className="p-2">Electronics Engineering</th>
                      <th className="p-2">Mechanical Engineering</th>
                      <th className="p-2">Computer Engineering</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-2">Year of Introduction</td>
                      <td className="p-2">2014</td>
                      <td className="p-2">2015</td>
                      <td className="p-2">2023</td>
                    </tr>
                    <tr>
                      <td className="p-2">Sanctioned Intake</td>
                      <td className="p-2">14</td>
                      <td className="p-2">10</td>
                      <td className="p-2">10</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2">No. of Candidates pursuing Ph.D.</td>
                      <td className="p-2">7</td>
                      <td className="p-2">8</td>
                      <td className="p-2">6</td>
                    </tr>
                    <tr>
                      <td className="p-2">No. of Candidates Registered</td>
                      <td className="p-2">5</td>
                      <td className="p-2">5</td>
                      <td className="p-2">6</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2">
                        No. of Candidates with Thesis Submitted
                      </td>
                      <td className="p-2">1</td>
                      <td className="p-2">1</td>
                      <td className="p-2">-</td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        No. of Candidates with Ph.D. Awarded
                      </td>
                      <td className="p-2">7</td>
                      <td className="p-2">1</td>
                      <td className="p-2">-</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2">Total Vacancies</td>
                      <td className="p-2">7</td>
                      <td className="p-2">2</td>
                      <td className="p-2">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeSection === 'computer' && (
            <div className="p-4 md:p-6">
              <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
                Computer Engineering Research Publications
              </h2>
              <Publications />
            </div>
          )}

          {activeSection === 'ecs' && (
            <div className="p-4 md:p-6">
              <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
                Electronics and Computer Science Research Publications
              </h2>
              <ECSPublications />
            </div>
          )}

          {activeSection === 'ai-ds' && (
            <div className="p-4 md:p-6">
              <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
                Artificial Intelligence & Data Science Research Publications
              </h2>
              <AidsPublications />
            </div>
          )}

          {activeSection === 'mechanical' && (
            <div className="p-4 md:p-6">
              <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
                Mechanical Engineering Research Publications
              </h2>
              <MechPublications />
            </div>
          )}

          {activeSection === 'patents' && (
            <div className="p-4 md:p-6">
              <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
                Patents
              </h2>
              <PatentsPublications />
            </div>
          )}

          {activeSection === 'funded' && (
            <div className="p-4 md:p-6">
              <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
                Funded Research Projects
              </h2>
              <FundedPublications />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResearchPage

