'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import Link from 'next/link'
import { Download, ExternalLink } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const quickLinks = [
  {
    name: 'Placement Policy',
    url: '/students/Campus_Placement_Policy_AY_2023.pdf',
  },
  {
    name: 'Student Data Bank',
    url: 'http://granth.fragnel.edu.in:5186/pinfo/index.php',
  },
  {
    name: 'Ethics Handbook',
    url: '/students/Essentials_of_Ethics.pdf',
  },
  {
    name: 'Awards for Extracurricular Activities',
    url: '/students/awards.pdf',
  },
  {
    name: 'List of Extension Activities',
    url: '/extension activities.pdf',
  },
]

const StudentInformation: React.FC = () => {
  return (
    <div className="mt-25 flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900 md:mt-44">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-12 md:pt-16">
        <div className="flex w-full flex-col px-4 pb-6 text-[#00122a] sm:px-8 md:px-16 md:pb-8 lg:px-24">
          <h1 className={`flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}>
            STUDENT INFORMATION
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full px-4 py-4 sm:px-8 md:px-16 md:py-8 lg:px-24">
        {/* Quick Links Section */}
        <div className="mb-8 rounded-lg bg-white shadow-lg">
          <div className="p-4 md:p-6">
            <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
              Quick Links
            </h2>
            <p className="mb-6 text-sm text-gray-700 md:text-base">
              Access important resources and documents for students below:
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center justify-between rounded-lg bg-gray-50 p-4 text-[#012146] transition-colors hover:bg-gray-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-medium">{link.name}</span>
                  <ExternalLink className="h-4 w-4 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Higher Education Section */}
        <div className="mb-8 rounded-lg bg-white shadow-lg">
          <div className="p-4 md:p-6">
            <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
              Student Progression to Higher Education
            </h2>
            <p className="mb-4 text-sm text-gray-700 md:text-base">
              Education is a life-long exercise. So FRCRCE motivates students to
              acquire higher education to gain the most recent skills and the
              inclination for making profitable use of knowledge. Our students
              have been admitted to reputed universities, including:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
              <li>University Of Texas, Dallas</li>
              <li>Clemson University</li>
              <li>Boston University</li>
              <li>Georgia Tech</li>
              <li>Arizona State University</li>
              <li>Northeastern University</li>
              <li>Rutger University</li>
              <li>And many more...</li>
            </ul>
          </div>
        </div>

        {/* Recent Admissions Section */}
        <div className="mb-8 rounded-lg bg-white shadow-lg">
          <div className="p-4 md:p-6">
            <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
              Recent Admissions
            </h2>
            <p className="mb-4 text-sm text-gray-700 md:text-base">
              Our students have been recently admitted to the following universities:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 bg-white text-center text-sm md:text-base">
                <thead className="text-[#012146] bg-gray-100">
                  <tr>
                    <th className="p-2 text-left">University</th>
                    <th className="p-2">Students Admitted</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { university: 'Boston University', count: 9 },
                    { university: 'Northeastern University', count: 9 },
                    { university: 'University of Texas Dallas', count: 4 },
                    { university: 'University of California', count: 3 },
                    { university: 'Rutger University', count: 3 },
                    { university: 'Santa Clara University', count: 2 },
                  ].map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="p-2 text-left">{item.university}</td>
                      <td className="p-2">{item.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-8 rounded-lg bg-white shadow-lg">
          <div className="p-4 md:p-6">
            <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
              List of Activities & Awards
            </h2>
            <p className="mb-4 text-sm text-gray-700 md:text-base">
              The Institute promotes a variety of social and technical activities
              to ensure students' holistic development. Activities include:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
              <li>Marathon for health awareness</li>
              <li>Juhu Beach Cleanliness Drive</li>
              <li>Mount Mary Fair Traffic regulation</li>
              <li>IEEE student chapter training for economically backward children</li>
              <li>Technical events like BAHA, Go-Kart, Robocon, Formula Racing</li>
            </ul>
            <p className="text-sm text-gray-700 md:text-base">
              Through these activities, students develop essential skills such as
              project management, communication, and technical expertise. The
              Institute's goal is to encourage students to be both technically
              sound and socially responsible.
            </p>
          </div>
        </div>

        {/* Download Section */}
        <div className="rounded-lg bg-white shadow-lg">
          <div className="p-4 md:p-6">
            <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
              Student Handbook
            </h2>
            <p className="mb-6 text-sm text-gray-700 md:text-base">
              Download our comprehensive student handbook that provides detailed information about campus facilities, 
              academic policies, student services, and extracurricular opportunities.
            </p>
            <div className="text-center">
              <a
                href="/students/student_handbook.pdf"
                className="inline-block rounded-full bg-[#4a90e2] px-6 py-3 font-semibold text-white transition-all hover:bg-[#357abd] hover:shadow-lg"
                download
              >
                <span className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download Student Handbook
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentInformation