'use client'
import React from 'react'
import Image from 'next/image'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface Project {
  title: string
  overview: string
  details: string[]
  image: string
}

interface PreIncubationCenterData {
  title: string
  vision: string
  mission: string
  shortTermObjectives: string[]
  longTermObjective: string
  description: string
  projects: Project[]
}

const data: PreIncubationCenterData = {
  title: 'Pre-incubation Center',
  vision: 'Moulding Engineers who can Build the Nation',
  mission:
    'Facilitate Platform for Innovative Minds to Transform their Ideas into Viable Business Propositions to Start a Business Venture.',
  shortTermObjectives: [
    'To Facilitate Generation of Innovative Solution for Real Life Problems.',
    'To Encourage and Stimulate Campus Startups in the Institution.',
  ],
  longTermObjective:
    'To Link Innovation to Enterprises Leading to Financial Success.',
  description:
    'Fr. CRCE computer department incubation center was established to provide a nurturing environment where students, faculty, and even alumni can transform their innovative ideas into viable businesses or technological solutions. It offers valuable resources, mentorship, and access to industry connections allowing students to develop real-world skills and turn their innovative concepts into market-ready products or services.',
  projects: [
    {
      title:
        'ArborTrack - Transparent Tree Growth Monitoring and Adoption System',
      overview:
        'A decentralized system built on blockchain technology with the goal of promoting transparent and efficient tree plantation efforts.',
      details: [
        'It involves NGOs, government bodies, citizens, and volunteers in a collaborative tree planting and maintenance process.',
        'Key features include transparent fund transfers through smart contracts, tree adoption, data tracking for tree health, a reward system, and the option to donate for tree plantation.',
        'The system has tree growth tracking module which is used to keep the track of growth of the tree and notify the owner or NGOs about status of the tree.',
        'The system aims to improve tree growth through data analysis, fostering a sense of community and responsibility for the environment.',
        'Its long-term vision is to create a global network dedicated to reforestation and environmental conservation.',
      ],
      image: '/cspreincubation/arbortrack.png',
    },
    {
      title: 'Legally Yours',
      overview:
        'Our vision is to revolutionize law enforcement by providing cutting-edge Automatic Number Plate Recognition (ANPR) and Face Recognition software. We envision a safer, more orderly society where police forces can effectively maintain law and decorum. By harnessing the power of AI and machine learning, we aim to empower law enforcement agencies with advanced tools that enhance their capabilities. Our vision is to create a world where crimes are swiftly identified and prevented, traffic violations are efficiently managed, and missing persons are found with ease. We are committed to fostering a secure environment where police forces can perform their duties with maximum efficiency and minimal hassle.',
      image: '/cspreincubation/legallyyours.png',
      details: []
    },
  ],
}

const PreIncubationCenter: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
        <h2 className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}>
          {data.title}
        </h2>
        <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
      </div>

      {/* Overview section */}
      <div className="mb-10 rounded-lg bg-white p-8 shadow-md">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="mb-6">
              <h3 className={`${zilla.className} mb-3 text-2xl font-bold text-[#131929]`}>Vision</h3>
              <p className="text-lg leading-relaxed text-gray-700">{data.vision}</p>
            </div>
            
            <div className="mb-6">
              <h3 className={`${zilla.className} mb-3 text-2xl font-bold text-[#131929]`}>Mission</h3>
              <p className="text-lg leading-relaxed text-gray-700">{data.mission}</p>
            </div>
          </div>
          
          <div>
            <div className="mb-6">
              <h3 className={`${zilla.className} mb-3 text-2xl font-bold text-[#131929]`}>Short Term Objectives</h3>
              <ul className="space-y-2 text-gray-700">
                {data.shortTermObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-[#131929]">•</span>
                    <span className="leading-relaxed">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className={`${zilla.className} mb-3 text-2xl font-bold text-[#131929]`}>Long Term Objective</h3>
              <p className="text-lg leading-relaxed text-gray-700">{data.longTermObjective}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 border-t border-gray-100 pt-6">
          <h3 className={`${zilla.className} mb-3 text-2xl font-bold text-[#131929]`}>Description</h3>
          <p className="text-lg leading-relaxed text-gray-700">{data.description}</p>
        </div>
      </div>

      {/* Projects section */}
      <div className="mb-10">
        <h3 className={`${zilla.className} mb-8 text-3xl font-bold text-[#131929]`}>Projects</h3>
        
        <div className="space-y-12">
          {data.projects.map((project, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="border-b border-gray-100 bg-[#F5F8FF] p-6">
                <h4 className={`${zilla.className} text-center text-2xl font-bold text-[#131929] md:text-3xl`}>
                  {project.title}
                </h4>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h5 className="mb-2 text-xl font-semibold text-[#131929]">Overview</h5>
                  <p className="leading-relaxed text-gray-700">{project.overview}</p>
                </div>
                
                {project.details.length > 0 && (
                  <div className="mb-6">
                    <h5 className="mb-3 text-xl font-semibold text-[#131929]">Key Features</h5>
                    <ul className="space-y-2 text-gray-700">
                      {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="mr-2 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF2FF] text-xs font-bold text-[#131929]">
                            {detailIndex + 1}
                          </span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-8 flex justify-center">
                  <div className="relative h-64 w-full max-w-2xl overflow-hidden rounded-lg shadow-sm md:h-80">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreIncubationCenter