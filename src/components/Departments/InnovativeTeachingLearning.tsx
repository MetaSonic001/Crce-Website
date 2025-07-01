'use client'
import React, { useState } from 'react'
import { Zilla_Slab } from 'next/font/google'
import { useQuery } from '@tanstack/react-query'
import getItlTeachingMethods from '@/app/api/itlTeachingMethods'
import getItlCoursesOffered from '@/app/api/itlCoursesOffered'
import getItlCertifications from '@/app/api/itlCertifications'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface PageProps {
  department: string
}

const InnovativeTeachingLearning: React.FC<PageProps> = ({ department }) => {
  const [activeToggle, setActiveToggle] = useState('teaching')

  const {
    data: teachingData = [],
    isLoading: isLoadingTeaching,
    isError: isErrorTeaching,
  } = useQuery({
    queryKey: ['teaching-methods', department],
    queryFn: () => getItlTeachingMethods(department),
  })

  const {
    data: coursesData = [],
    isLoading: isLoadingCourses,
    isError: isErrorCourses,
  } = useQuery({
    queryKey: ['courses-offered', department],
    queryFn: () => getItlCoursesOffered(department),
  })

  const {
    data: certificationsData = [],
    isLoading: isLoadingCertifications,
    isError: isErrorCertifications,
  } = useQuery({
    queryKey: ['certifications', department],
    queryFn: () => getItlCertifications(department),
  })

  // Show loading state
  if (isLoadingTeaching || isLoadingCourses || isLoadingCertifications) {
    return <div className="p-4 text-center">Loading...</div>
  }

  // Show error state
  if (isErrorTeaching || isErrorCourses || isErrorCertifications) {
    return (
      <div className="p-4 text-center text-red-500">Error loading data</div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-8 sm:mb-12 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/4 bg-gray-300 hidden sm:block"></div>
        <h2
          className={`${zilla.className} mx-4 sm:mx-8 text-center text-3xl sm:text-4xl font-bold text-[#131929]`}
        >
          Innovative Teaching & Learning
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/4 bg-gray-300 hidden sm:block"></div>
      </div>

      {/* Toggle buttons */}
      <div className="mb-6 sm:mb-8 flex justify-center">
        <div className="inline-flex flex-col sm:flex-row rounded-md w-full sm:w-auto">
          <button
            onClick={() => setActiveToggle('teaching')}
            className={`rounded-t-md sm:rounded-t-none sm:rounded-l-md px-4 sm:px-8 py-3 text-sm sm:text-base font-medium ${
              activeToggle === 'teaching'
                ? 'bg-[#131929] text-white'
                : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            Teaching Methods
          </button>
          <button
            onClick={() => setActiveToggle('courses')}
            className={`px-4 sm:px-8 py-3 text-sm sm:text-base font-medium ${
              activeToggle === 'courses'
                ? 'bg-[#131929] text-white'
                : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            Courses Offered
          </button>
          <button
            onClick={() => setActiveToggle('certifications')}
            className={`rounded-b-md sm:rounded-b-none sm:rounded-r-md px-4 sm:px-8 py-3 text-sm sm:text-base font-medium ${
              activeToggle === 'certifications'
                ? 'bg-[#131929] text-white'
                : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            Certifications
          </button>
        </div>
      </div>

      <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md">
        {activeToggle === 'teaching' && (
          <>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-gray-700">
              The Computer Engineering Department employs innovative teaching
              and learning methodologies to enhance student engagement and
              outcomes. Our approach combines traditional teaching with modern
              educational technologies and interactive techniques to create a
              dynamic learning environment.
            </p>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
                  <thead className="bg-[#F5F8FF]">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Teaching Method
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Description
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Applied Subjects
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Learning Outcome
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {teachingData.map((data, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                      >
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap text-[#131929]">
                          {data.teaching_method}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">
                          {data.description}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                          {data.applied_subjects}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">
                          {data.learning_outcome}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeToggle === 'courses' && (
          <>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-gray-700">
              The department offers a variety of specialized courses to help
              students develop expertise in emerging technologies and
              high-demand skills. These courses complement the core curriculum
              and provide students with advanced knowledge in specific domains.
            </p>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
                  <thead className="bg-[#F5F8FF]">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Course Name
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Duration
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Credits
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Level
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Description
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Prerequisites
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {coursesData.map((data, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                      >
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap text-[#131929]">
                          {data.course_name}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                          {data.duration}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm whitespace-nowrap text-gray-700">
                          {data.credits}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                          <span
                            className={`rounded-full px-2 sm:px-3 py-1 text-xs font-medium ${
                              data.level === 'Advanced'
                                ? 'bg-blue-100 text-blue-800'
                                : data.level === 'Intermediate'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {data.level}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">
                          {data.description}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                          {data.prerequisites}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeToggle === 'certifications' && (
          <>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-gray-700">
              The department facilitates industry-recognized certification
              programs to enhance students' employability and specialized
              knowledge. These certifications are highly valued by employers and
              provide students with a competitive edge in the job market.
            </p>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
                  <thead className="bg-[#F5F8FF]">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Certification
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Provider
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Duration
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Eligibility
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Benefits
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Placement Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {certificationsData.map((data, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                      >
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap text-[#131929]">
                          {data.certification}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                          {data.provider}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                          {data.duration}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap text-gray-700">
                          {data.eligibility}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">
                          {data.benefits}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">
                          {data.placement_impact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default InnovativeTeachingLearning

/* Static Data for Reference 
const teachingMethodsData = [
  {
    method: 'Project-Based Learning',
    description: 'Students work on real-world projects to gain practical experience and develop problem-solving skills',
    subjects: 'Software Engineering, Database Systems, Web Development',
    outcome: 'Improved practical skills and teamwork capabilities',
  },
  {
    method: 'Flipped Classroom',
    description: 'Students review lecture materials before class and engage in interactive activities during sessions',
    subjects: 'Data Structures, Computer Networks, Operating Systems',
    outcome: 'Enhanced understanding and increased classroom engagement',
  },
  {
    method: 'Industry-Integrated Learning',
    description: 'Collaboration with industry experts for guest lectures, workshops, and real-world case studies',
    subjects: 'Cloud Computing, DevOps, System Design',
    outcome: 'Industry-relevant knowledge and networking opportunities',
  },
  {
    method: 'Peer Learning Groups',
    description: 'Students form study groups for collaborative learning and knowledge sharing',
    subjects: 'All core subjects',
    outcome: 'Better understanding through peer explanations and discussions',
  },
  {
    method: 'Interactive Tools & Simulations',
    description: 'Using interactive software tools and simulators for hands-on practice',
    subjects: 'Computer Architecture, Networking, Operating Systems',
    outcome: 'Practical understanding of complex concepts',
  }
]

const coursesOfferedData = [
  {
    name: 'Advanced Web Development',
    duration: '6 months',
    credits: '4',
    level: 'Advanced',
    description: 'Modern web development including frontend frameworks and backend technologies',
    prerequisites: 'Basic JavaScript knowledge'
  },
  {
    name: 'Machine Learning Fundamentals',
    duration: '4 months',
    credits: '3',
    level: 'Intermediate',
    description: 'Introduction to machine learning algorithms and applications',
    prerequisites: 'Python programming, Statistics'
  },
  {
    name: 'Cloud Computing Essentials',
    duration: '5 months',
    credits: '4',
    level: 'Intermediate',
    description: 'Cloud platforms, services, and deployment strategies',
    prerequisites: 'Basic networking knowledge'
  },
  {
    name: 'Mobile App Development',
    duration: '6 months',
    credits: '4',
    level: 'Intermediate',
    description: 'Native and cross-platform mobile application development',
    prerequisites: 'Object-oriented programming'
  },
  {
    name: 'DevOps Practices',
    duration: '3 months',
    credits: '2',
    level: 'Advanced',
    description: 'CI/CD, containerization, and automation tools',
    prerequisites: 'Linux basics, Git'
  }
]

const certificationsData = [
  {
    name: 'AWS Certified Solutions Architect',
    provider: 'Amazon Web Services',
    duration: '3 months',
    eligibility: 'Basic cloud computing knowledge',
    benefits: 'Industry-recognized certification, Cloud architecture expertise',
    placement: 'High demand in cloud-focused companies'
  },
  {
    name: 'Microsoft Azure Developer Associate',
    provider: 'Microsoft',
    duration: '4 months',
    eligibility: 'Programming experience',
    benefits: 'Azure development skills, Microsoft certification',
    placement: 'Increased opportunities in Microsoft ecosystem'
  },
  {
    name: 'Google Cloud Professional Developer',
    provider: 'Google Cloud',
    duration: '3 months',
    eligibility: 'Cloud development experience',
    benefits: 'GCP expertise, Google certification',
    placement: 'Preferred by Google Cloud partners'
  },
  {
    name: 'Certified Kubernetes Administrator',
    provider: 'Cloud Native Computing Foundation',
    duration: '2 months',
    eligibility: 'Container orchestration knowledge',
    benefits: 'Container orchestration skills, CNCF certification',
    placement: 'Essential for DevOps roles'
  },
  {
    name: 'Certified Information Systems Security Professional',
    provider: 'ISC²',
    duration: '6 months',
    eligibility: 'Information security experience',
    benefits: 'Comprehensive security knowledge, Global recognition',
    placement: 'High demand in cybersecurity roles'
  }
]
*/
