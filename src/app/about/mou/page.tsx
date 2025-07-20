'use client'
import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import { Search, ExternalLink, Filter } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface MOUData {
  organization: string
  description: string
  link: string
}

interface CategoryCounts {
  [key: string]: number
}

const MOUCollaborationPage = () => {
  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'MOU & Collaborations', url: '/academics/mou-collaborations' },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  // Define MOU data
  const mouData: MOUData[] = [
    {
      organization: 'Brillmax Private Limited',
      description:
        'The purpose of this MoU is to perform the collaborative programs for students and faculty members.',
      link: 'https://brillmax.com/',
    },
    {
      organization: 'Cloud Counselage',
      description:
        'The purpose of this MoU is to perform the collaborative programs for students and faculty members, to arrange industrial trainings and visits and to provide internships and placements to the students within FR.CRCE.',
      link: 'https://www.cloudcounselage.com/',
    },
    {
      organization: 'Conbuss Online Manufacturing Pvt. Ltd',
      description:
        'The purpose of this MoU is to perform the collaborative programs for students and faculty members in the areas of mutual interest, to provide internships to the students within FR.CRCE.',
      link: '',
    },
    {
      organization: 'Internshala',
      description:
        'The purpose of this MoU is to provide Internship opportunities to the students within Fr.CRCE.',
      link: 'https://trainings.internshala.com/',
    },
    {
      organization: 'Hyfunn',
      description:
        'The purpose of this MoU is to provide digital services for a term of 24 months and to support and sustain the management of activities for various engineering departments.',
      link: 'https://hyfunnverse.com/',
    },
    {
      organization: 'Studenting Era',
      description:
        'The purpose of this MoU is to provide free online trainings and services to the registered student and faculty members helping them to improve the skills, competencies, and employability of students.',
      link: '',
    },
    {
      organization: 'BUDSTA Analytics and Insights Pvt. Ltd.',
      description:
        'The purpose of this MoU is to provide internship opportunities to third year Engineering students within Fr.CRCE.',
      link: '',
    },
    {
      organization: 'Bennett University',
      description:
        'The purpose of this MoU is to provide support to the projects of students in terms of manpower, local support and infrastructure.',
      link: 'https://www.bennett.edu.in/',
    },
    {
      organization: 'Amazon Web Services (AWS)',
      description:
        'The purpose of this MoU is to provide guidance to students regarding the cloud usage in their project.',
      link: 'https://aws.amazon.com/training/',
    },
    {
      organization: 'Tata Consultancy Services (TCS)',
      description:
        'The purpose of this MoU is to conduct workshops for students, to conduct faculty development programs, and to provide internships to the students.',
      link: 'https://www.tcs.com/',
    },
    {
      organization: 'Christiani Sharpline Technical Training',
      description:
        'The purpose of this MoU is to provide collaborative programs with both the organizations in the areas of interest.',
      link: 'http://www.cstt.in',
    },
    {
      organization: 'D-LINK',
      description:
        'The purpose of this MoU is to provide the training to the students of Fr.CRCE.',
      link: 'https://in.dlink.com/en/consumer',
    },
    {
      organization: 'Synergy Consultants Pvt. Ltd.',
      description:
        'The purpose of this MoU is to carry out the projects jointly with Fr.CRCE and SCPL.',
      link: '',
    },
    {
      organization: 'University of Texas at EL Paso',
      description:
        'The purpose of this MoU is to promote the interest of teaching and research activities.',
      link: 'https://www.utep.edu/',
    },
    {
      organization: 'United Modelling & Simulation',
      description:
        "The purpose of this MoU is to provide the guidance for consultancy and sponsorship to the student's projects.",
      link: 'http://www.unimodsim.com/',
    },
    {
      organization: 'L. D. College of Engineering',
      description:
        'The purpose of this MoU is to provide internship opportunities to the students within Fr.CRCE and to facilitate the use of Siemens centre of excellence training facility to Fr.CRCE.',
      link: 'http://ldce.ac.in/',
    },
    {
      organization: 'Eduvance',
      description:
        'The purpose of this MoU is to conduct the workshop for students, to conduct faculty development workshops and to provide the internships to the students.',
      link: 'https://eduvance.in/',
    },
    {
      organization: 'CodeChef',
      description:
        'The purpose of this MoU is to help the students to improve their skills across a variety of topics and difficulty levels.',
      link: 'https://www.codechef.com/',
    },
    {
      organization: 'Crypto University',
      description:
        'The purpose of this MoU is to extend the cooperation for research, data sharing, and paper publication, and to provide the internships and live projects to the students.',
      link: 'https://cryptowire.in/',
    },
    {
      organization: 'EC Council',
      description:
        'The purpose of this MoU is to provide the courses related to the securities to the students.',
      link: 'https://www.eccouncil.org/',
    },
    {
      organization: 'Linux Professional Institute',
      description:
        'The purpose of this MoU is to conduct the workshops for students, to conduct faculty development workshops, and to provide the internships to the students.',
      link: 'https://www.lpi.org/',
    },
    {
      organization: 'Devfolio',
      description:
        'The purpose of this MoU is to provide the Hackathon Organizer with a cost-free SaaS platform.',
      link: 'https://devfolio.co/',
    },
    {
      organization: 'Veermata Jijabai Technological Institute (VJTI)',
      description:
        'The purpose of this MoU is to stimulate and facilitate the development of collaborative and mutually beneficial programs which serve for technological upliftment of both campuses.',
      link: 'https://vjti.ac.in/',
    },
    {
      organization: 'United Way',
      description:
        'The purpose of this MoU is to collaborate for participation in Mission Blue project activities.',
      link: 'https://www.unitedwaymumbai.org/index.htm',
    },
    {
      organization: 'Sardar Patel Institute of Technology (SPIT)',
      description:
        "The purpose of this MoU is to help each other to organize/conduct courses/training modules enabling students' mobility across both the HEI for seamless integration of skills and experiences, deputing students/staff/faculty members for conduction of courses or research, involving each other in the revision of syllabus, teaching-learning processes, external quality audits, assessment and evaluation process, jointly organizing co-curricular and extra-curricular activities, undertaking collaborative research projects.",
      link: 'https://www.spit.ac.in/',
    },
    {
      organization: 'IIRS ISRO',
      description:
        'The purpose of this collaboration is to encourage students and teachers to actively participate in IIRS outreach programs.',
      link: 'https://www.iirs.gov.in/',
    },
  ]

  // Group MOUs by category
  const categories: { [key: string]: string[] } = {
    'Technology Partners': [
      'Amazon Web Services (AWS)',
      'D-LINK',
      'EC Council',
      'Linux Professional Institute',
      'Devfolio',
      'CodeChef',
    ],
    'Educational Institutions': [
      'Bennett University',
      'University of Texas at EL Paso',
      'L. D. College of Engineering',
      'Veermata Jijabai Technological Institute (VJTI)',
      'Sardar Patel Institute of Technology (SPIT)',
      'IIRS ISRO',
    ],
    'Corporate Partners': [
      'Brillmax Private Limited',
      'Cloud Counselage',
      'Conbuss Online Manufacturing Pvt. Ltd',
      'Tata Consultancy Services (TCS)',
      'Synergy Consultants Pvt. Ltd.',
      'United Modelling & Simulation',
      'BUDSTA Analytics and Insights Pvt. Ltd.',
    ],
    'Training & Development': [
      'Internshala',
      'Hyfunn',
      'Studenting Era',
      'Christiani Sharpline Technical Training',
      'Eduvance',
      'Crypto University',
    ],
    'Non-Profit Organizations': ['United Way'],
  }

  // Filter and search functionality
  const filteredMouData = useMemo(() => {
    let filtered = [...mouData]

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (mou) =>
          mou.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
          mou.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply category filter
    if (filter !== 'all') {
      const categoryOrgs = categories[filter] || []
      filtered = filtered.filter((mou) =>
        categoryOrgs.includes(mou.organization)
      )
    }

    return filtered
  }, [searchTerm, filter])

  // Count MOUs in each category for the stats
  const categoryCounts: CategoryCounts = Object.entries(categories).reduce(
    (acc: CategoryCounts, [category, orgs]) => {
      acc[category] = orgs.length
      return acc
    },
    {}
  )

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900">
      {/* Header Section - Matching the IQAC style */}
      <div className="flex h-full w-full flex-col bg-white pt-16 md:pt-24 md:flex-row">
        <div className="flex w-full flex-col px-4 sm:px-8 md:px-28 pt-20 md:pt-32 text-[#00122a]">
          <h1
            className={`mb-4 flex items-center justify-center text-center font-serif text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            MOU & COLLABORATIONS
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full px-4 sm:px-8 md:px-28 py-8 md:py-16">
        {/* About MOU Section */}
        <section className="mb-8 md:mb-16">
          <h2
            className={`mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#001f3f]`}
          >
            About Our Collaborations
          </h2>
          <div className="rounded-lg bg-white p-4 md:p-6 shadow-lg">
            <p className="mb-4 text-sm sm:text-base text-gray-700">
              The institute has signed various Memorandums of Understanding with
              several Companies, Foreign Universities, Institutes of national
              and international repute, and Technology Providers to provide
              avenues for faculty exchange, student exchange, internships, field
              trips, on-the-job trainings, research, as well as other academic
              and co-curricular activities.
            </p>

            {/* Stats section - improved mobile layout */}
            <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
              <div className="rounded-lg bg-[#4a90e2]/10 p-2 sm:p-3 text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#001f3f]">
                  {mouData.length}
                </p>
                <p className="text-xs sm:text-sm">Total</p>
              </div>
              {Object.entries(categoryCounts).map(([category, count]) => (
                <div
                  key={category}
                  className="rounded-lg bg-[#4a90e2]/10 p-2 sm:p-3 text-center"
                >
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#001f3f]">
                    {count}
                  </p>
                  <p className="text-xs sm:text-sm break-words">
                    {category.split(' ')[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section - improved mobile layout */}
        <section className="mb-8 md:mb-16">
          <h2
            className={`mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#001f3f]`}
          >
            Find Collaborations
          </h2>
          <div className="rounded-lg bg-white p-4 md:p-6 shadow-lg">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:w-1/2">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search organizations..."
                  className="w-full rounded-lg border py-2.5 sm:py-3 pl-10 pr-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4a90e2]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="relative w-full md:w-auto">
                <Filter
                  className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                  size={20}
                />
                <select
                  className="w-full appearance-none rounded-lg border bg-white py-2.5 sm:py-3.5 pl-10 pr-10 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4a90e2] md:w-60"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {Object.keys(categories).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* MOU Cards Section - improved mobile layout */}
        <section className="mb-8 md:mb-16">
          <h2
            className={`mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#001f3f]`}
          >
            Our Partner Organizations
          </h2>
          <div className="rounded-lg bg-white p-4 md:p-6 shadow-lg">
            {filteredMouData.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredMouData.map((mou, index) => {
                  // Find the category for this MOU
                  const category =
                    Object.entries(categories).find(([_, orgs]) =>
                      orgs.includes(mou.organization)
                    )?.[0] || 'Other'

                  // Generate color based on category
                  const categoryColors: { [key: string]: string } = {
                    'Technology Partners': 'border-blue-500 bg-blue-50',
                    'Educational Institutions': 'border-green-500 bg-green-50',
                    'Corporate Partners': 'border-purple-500 bg-purple-50',
                    'Training & Development': 'border-amber-500 bg-amber-50',
                    'Non-Profit Organizations': 'border-rose-500 bg-rose-50',
                    Other: 'border-gray-500 bg-gray-50',
                  }

                  const colorClass = categoryColors[category] || categoryColors.Other

                  return (
                    <div
                      key={index}
                      className={`rounded-xl border-l-4 ${colorClass} p-4 sm:p-6 shadow-md transition-shadow duration-300 hover:shadow-lg`}
                    >
                      <div className="mb-2 text-xs font-medium text-gray-500">
                        {category}
                      </div>
                      <h2
                        className={`${zilla.className} mb-3 text-lg sm:text-xl font-bold text-[#001f3f]`}
                      >
                        {mou.organization}
                      </h2>
                      <p className="mb-4 text-sm sm:text-base text-gray-700 line-clamp-4">
                        {mou.description}
                      </p>
                      {mou.link && (
                        <a
                          href={mou.link}
                          className="mt-auto flex items-center text-sm sm:text-base text-blue-600 transition-colors hover:text-blue-800"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Website
                          <ExternalLink size={16} className="ml-1" />
                        </a>
                      )}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="rounded-lg bg-white p-6 sm:p-10 text-center">
                <p className="text-base sm:text-lg text-gray-500">
                  No collaborations found matching your search criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setFilter('all')
                  }}
                  className="mt-4 rounded-lg bg-[#4a90e2] px-4 py-2 text-sm sm:text-base text-white hover:bg-[#3a80d2]"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default MOUCollaborationPage