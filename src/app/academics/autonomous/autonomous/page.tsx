'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import { BookOpen, FileText, Download } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const rulesData = [
  {
    id: 1,
    title: 'Academic Rule Book',
    filePath: 'academic/rules/academic_rules_v2.3_2025_26.pdf',
  },
  {
    id: 2,
    title: 'Training, Internship and Placement Rule Book',
    filePath: 'academic/rules/training_intern_placement_v1.7_2025_26.pdf',
  },
  {
    id: 3,
    title: 'Student Activities Rule Book',
    filePath: 'academic/rules/student_activities_v1.4_2025_26.pdf',
  },
  {
    id: 4,
    title: 'Academic Calendar',
    filePath: 'academic/rules/academic_cal_v3.1_2025_26.pdf',
  },
  {
    id: 5,
    title: 'Internship Data Format to be maintained',
    filePath: 'academic/rules/intern_data_format_v2.0_2025_26.pdf',
  },
  {
    id: 6,
    title: 'Implementation of revised ESE pattern from AY 2025-2026',
    filePath: 'academic/rules/ese_pattern_rev_v1.2_2025_26.pdf',
  },
  {
    id: 7,
    title:
      'Implementation of Curriculum revisions for First-and Second-Year Engineering in Academic Year 2025-26',
    filePath: 'academic/rules/curriculum_rev_v1.5_2025_26.pdf',
  },
]

const syllabusData = [
  {
    year: 'AY 2025-2026 (Autonomous)',
    implementation:
      'Implementation of curriculum revisions for First and Second year engineering in Academic Year 2025-2026',
    implementationPath: 'academic/syllabus/FESE_Curriculum_revision.pdf',
    details: [
      {
        title: 'FE',
        ce: 'CE',
        cse: 'CSE',
        ecs: 'ECS',
        mech: 'MECH',
        cePath: 'academic/syllabus/ce_fe_2025_26_complex.pdf',
        csePath: 'academic/syllabus/cse_fe_2025_26_v2.pdf',
        ecsPath: 'academic/syllabus/ecs_fe_2025_26_v3.pdf',
        mechPath: 'academic/syllabus/mech_fe_2025_26_v1.pdf',
      },
      {
        title: 'SE',
        ce: 'CE',
        cse: 'CSE',
        ecs: 'ECS',
        mech: 'MECH',
        cePath: 'academic/syllabus/ce_se_2025_26_v4.pdf',
        csePath: 'academic/syllabus/cse_se_2025_26_v1.pdf',
        ecsPath: 'academic/syllabus/ecs_se_2025_26_v2.pdf',
        mechPath: 'academic/syllabus/mech_se_2025_26_v3.pdf',
      },
      {
        title: 'TE',
        ce: 'CE',
        cse: 'AI & DS',
        ecs: 'ECS',
        mech: 'MECH',
        cePath: 'academic/syllabus/ce_te_2025_26_v5.pdf',
        csePath: 'academic/syllabus/ai_ds_te_2025_26_v1.pdf',
        ecsPath: 'academic/syllabus/ecs_te_2025_26_v4.pdf',
        mechPath: 'academic/syllabus/mech_te_2025_26_v2.pdf',
      },
      {
        title: 'BE',
        ce: 'CE',
        cse: 'AI & DS',
        ecs: 'ECS',
        mech: 'MECH',
        cePath: 'academic/syllabus/ce_be_2025_26_v3.pdf',
        csePath: 'academic/syllabus/ai_ds_be_2025_26_v2.pdf',
        ecsPath: 'academic/syllabus/ecs_be_2025_26_v1.pdf',
        mechPath: 'academic/syllabus/mech_be_2025_26_v4.pdf',
      },
      {
        title: 'M.Tech.',
        ce: 'CE',
        cse: '',
        ecs: '',
        mech: 'MECH',
        cePath: 'academic/syllabus/ce_mtech_2025_26_v1.pdf',
        mechPath: 'academic/syllabus/mech_mtech_2025_26_v2.pdf',
      },
    ],
    note: 'Available Degree Options (All Branches)',
    notePath: 'academic/syllabus/degree_options_2025_26_v1.pdf',
  },
  {
    year: 'AY 2024-2025 (Autonomous)',
    implementation:
      'Implementation of curriculum revisions for First and Second year engineering in Academic Year 2024-2025',
    implementationPath: 'academic/syllabus/curriculum_revisions_2024_25_v1.pdf',
    details: [
      {
        title: 'LLC',
        ce: 'Liberal Learning Courses for FE and SE all branches',
        cePath: 'academic/syllabus/llc_2024_25_v1.pdf',
      },
      {
        title: 'FE',
        ce: 'CE',
        cse: 'CSE',
        ecs: 'ECS',
        mech: 'MECH',
        cePath: 'academic/syllabus/ce_fe_2024_25_v2.pdf',
        csePath: 'academic/syllabus/cse_fe_2024_25_v3.pdf',
        ecsPath: 'academic/syllabus/ecs_fe_2024_25_v1.pdf',
        mechPath: 'academic/syllabus/mech_fe_2024_25_v4.pdf',
      },
      {
        title: 'SE',
        ce: 'CE',
        cse: 'AI & DS',
        ecs: 'ECS',
        mech: 'MECH',
        cePath: 'academic/syllabus/ce_se_2024_25_v1.pdf',
        csePath: 'academic/syllabus/ai_ds_se_2024_25_v2.pdf',
        ecsPath: 'academic/syllabus/ecs_se_2024_25_v3.pdf',
        mechPath: 'academic/syllabus/mech_se_2024_25_v1.pdf',
      },
      {
        title: 'TE',
        ce: 'CE',
        cse: 'AI & DS',
        ecs: 'ECS',
        mech: 'MECH',
        cePath: 'academic/syllabus/ce_te_2024_25_v4.pdf',
        csePath: 'academic/syllabus/ai_ds_te_2024_25_v1.pdf',
        ecsPath: 'academic/syllabus/ecs_te_2024_25_v2.pdf',
        mechPath: 'academic/syllabus/mech_te_2024_25_v3.pdf',
      },
      {
        title: 'BE',
        ce: 'CE',
        cse: 'AI & DS',
        ecs: 'ECS',
        mech: 'MECH',
        cePath: 'academic/syllabus/ce_be_2024_25_v3.pdf',
        csePath: 'academic/syllabus/ai_ds_be_2024_25_v2.pdf',
        ecsPath: 'academic/syllabus/ecs_be_2024_25_v1.pdf',
        mechPath: 'academic/syllabus/mech_be_2024_25_v4.pdf',
      },
      {
        title: 'M.Tech.',
        ce: 'CE',
        cse: '',
        ecs: '',
        mech: 'MECH',
        cePath: 'academic/syllabus/ce_mtech_2024_25_v1.pdf',
        mechPath: 'academic/syllabus/mech_mtech_2024_25_v2.pdf',
      },
    ],
    note: 'Honors / Minor (All Branches)',
    notePath: 'academic/syllabus/honors_minor_2024_25_v1.pdf',
    minors: [
      { code: 'CE', name: 'Computer Engineering' },
      { code: 'CSE', name: 'Computer Science and Engineering' },
      { code: 'AI & DS', name: 'Artificial Intelligence and Data Science' },
      { code: 'ECS', name: 'Electronics and Computer Science' },
      { code: 'MECH', name: 'Mechanical Engineering' },
    ],
  },
]

const Page = () => {
  const [activeTab, setActiveTab] = useState('syllabus')

  return (
    <div className="flex h-screen w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900">
      <div className="flex h-full w-full flex-row bg-white pt-24">
        <div className="w-1/4 bg-gray-100 p-4 shadow-lg">
          <h1
            className={`${zilla.className} mb-6 text-center text-2xl font-bold text-[#001f3f]`}
          >
            Autonomous Section
          </h1>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`w-full rounded-lg p-2 text-left font-semibold ${
                activeTab === 'syllabus'
                  ? 'bg-[#4a90e2] text-white'
                  : 'text-[#001f3f] hover:bg-gray-200'
              }`}
            >
              Syllabus
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`w-full rounded-lg p-2 text-left font-semibold ${
                activeTab === 'rules'
                  ? 'bg-[#4a90e2] text-white'
                  : 'text-[#001f3f] hover:bg-gray-200'
              }`}
            >
              Rules & Policies
            </button>
          </nav>
        </div>
        <div className="w-3/4 p-8">
          {activeTab === 'syllabus' && (
            <div>
              <h1
                className={`${zilla.className} mb-6 text-3xl font-bold text-[#001f3f]`}
              >
                Autonomous Syllabus
              </h1>
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <p className="mb-4 text-lg font-semibold text-[#4a90e2]">
                  Explore the Curriculum Journey
                </p>
                <p className="mb-6 text-gray-700">
                  Discover the structured academic paths for various engineering
                  disciplines, designed to foster innovation and excellence.
                </p>
                {syllabusData.map((yearData, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold text-[#001f3f]">
                      {yearData.year}
                    </h2>
                    {yearData.implementation && (
                      <div className="mb-4">
                        <p className="text-gray-700">
                          <a
                            href={yearData.implementationPath}
                            className="text-blue-600 hover:underline"
                          >
                            {yearData.implementation}
                          </a>
                        </p>
                      </div>
                    )}
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead className="bg-[#4a90e2] text-white">
                          <tr>
                            <th className="border border-gray-300 p-2 text-left">
                              Year
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                              CE
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                              CSE
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                              ECS
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                              MECH
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {yearData.details.map((detail, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="border border-gray-300 p-2">
                                {detail.title}
                              </td>
                              <td className="border border-gray-300 p-2">
                                {detail.ce && (
                                  <a
                                    href={detail.cePath}
                                    className="text-blue-600 hover:underline"
                                  >
                                    {detail.ce}
                                  </a>
                                )}
                              </td>
                              <td className="border border-gray-300 p-2">
                                {detail.cse && (
                                  <a
                                    href={detail.csePath}
                                    className="text-blue-600 hover:underline"
                                  >
                                    {detail.cse}
                                  </a>
                                )}
                              </td>
                              <td className="border border-gray-300 p-2">
                                {detail.ecs && (
                                  <a
                                    href={detail.ecsPath}
                                    className="text-blue-600 hover:underline"
                                  >
                                    {detail.ecs}
                                  </a>
                                )}
                              </td>
                              <td className="border border-gray-300 p-2">
                                {detail.mech && (
                                  <a
                                    href={detail.mechPath}
                                    className="text-blue-600 hover:underline"
                                  >
                                    {detail.mech}
                                  </a>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {yearData.note && yearData.notePath && (
                      <p className="mt-2 text-sm text-gray-600 italic">
                        <a
                          href={yearData.notePath}
                          className="text-blue-600 hover:underline"
                        >
                          {yearData.note}
                        </a>
                      </p>
                    )}
                    {yearData.minors && yearData.notePath && (
                      <div className="mt-4">
                        <h3 className="mb-2 text-lg font-semibold text-[#001f3f]">
                          Honors / Minor
                        </h3>
                        <p className="text-gray-700">
                          <a
                            href={yearData.notePath}
                            className="text-blue-600 hover:underline"
                          >
                            View all Honors/Minor options
                          </a>
                        </p>
                        <ul className="list-disc pl-5">
                          {yearData.minors.map((minor, idx) => (
                            <li key={idx} className="text-gray-700">
                              {`${minor.code} - ${minor.name}`}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'rules' && (
            <div>
              <h1
                className={`${zilla.className} mb-6 text-3xl font-bold text-[#001f3f]`}
              >
                Rules & Policies
              </h1>
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <p className="mb-4 text-lg font-semibold text-[#4a90e2]">
                  Building a Foundation for Success
                </p>
                <p className="mb-6 text-gray-700">
                  Fr. Conceicao Rodrigues College of Engineering upholds a
                  robust framework of rules and policies to ensure academic
                  integrity and operational excellence.
                </p>
                <div className="space-y-4">
                  {rulesData.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex items-start rounded-lg bg-gray-50 p-4 shadow-md"
                    >
                      <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <h4 className="mb-2 text-lg font-semibold text-[#001f3f]">
                          {item.title}
                        </h4>
                        <a
                          href={item.filePath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#4a90e2] hover:underline"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Download PDF
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="/rules/all_rules_compiled_v1.9_2025_26.pdf"
                    className="rounded-lg bg-[#4a90e2] px-6 py-3 font-semibold text-white transition-all hover:bg-[#3a7bc2] hover:shadow-lg"
                    download
                  >
                    Download All Rules & Policies
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Page
