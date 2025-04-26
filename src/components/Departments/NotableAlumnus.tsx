'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface PageProps {
  department: string
}

const NotableAlumnus: React.FC<PageProps> = ({ department }) => {
  const alumniData = [
    {
      name: 'Rajesh Kumar',
      batch: '2005',
      currentPosition: 'Chief Technology Officer',
      company: 'TechInnovate Solutions',
      achievements:
        'Founded a successful AI startup, Holds 4 patents, Forbes 30 Under 30 in Technology',
      contribution:
        'Mentors current students, Established scholarship fund, Guest lecturer',
    },
    {
      name: 'Priya Sharma',
      batch: '2008',
      currentPosition: 'Engineering Director',
      company: 'Google',
      achievements:
        'Led development of Google Cloud Platform features, Published research papers, Google Spot Award winner',
      contribution:
        'Conducts annual workshops, Internship opportunities, Technical advisory board member',
    },
    {
      name: 'Amit Patel',
      batch: '2010',
      currentPosition: 'Founder & CEO',
      company: 'DataSense Analytics',
      achievements:
        'Built a data analytics company with global clientele, Developed proprietary algorithms, Company acquired for $50M',
      contribution:
        'Career guidance sessions, Funds research projects, Industry connect programs',
    },
    {
      name: 'Sneha Desai',
      batch: '2012',
      currentPosition: 'AI Research Scientist',
      company: 'Microsoft Research',
      achievements:
        'Published in top conferences (CVPR, NeurIPS), Patent in facial recognition, ACM award winner',
      contribution:
        'Research collaboration, Virtual guest lectures, Annual hackathon sponsor',
    },
    {
      name: 'Vikram Mehta',
      batch: '2014',
      currentPosition: 'Senior Software Engineer',
      company: 'Amazon',
      achievements:
        'Key contributor to AWS services, Author of technical books, Open source community leader',
      contribution:
        'Mock interviews for students, Technical blog mentorship, Placement assistance',
    },
  ]

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/4 bg-gray-300"></div>
        <h2
          className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
        >
          Notable Alumni
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/4 bg-gray-300"></div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          The Computer Engineering Department takes pride in its alumni who have
          made significant contributions to the technology industry and
          academia. Our graduates have excelled in various domains and continue
          to maintain strong connections with the department.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
            <thead className="bg-[#F5F8FF]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Batch
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Current Position
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Key Achievements
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Contributions to Department
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {alumniData.map((data, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                >
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-[#131929]">
                    {data.name}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {data.batch}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {data.currentPosition}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {data.company}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {data.achievements}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {data.contribution}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default NotableAlumnus
