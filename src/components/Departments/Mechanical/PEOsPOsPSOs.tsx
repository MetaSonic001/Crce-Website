'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const PEOsPOsPSOs = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Program Educational Objectives (PEOs) */}
      <div className="mb-16">
        {/* Section heading with decorative lines */}
        <div className="relative mb-8 flex items-center">
          <div className="absolute left-0 top-1/2 h-px w-16 bg-gray-300"></div>
          <h2 className={`${zilla.className} ml-24 text-3xl font-bold text-[#131929]`}>
            Program Educational Objectives (PEOs)
          </h2>
        </div>
        <div className="rounded-lg bg-white p-8 shadow-md">
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            The Program Educational Objectives (PEOs) describe the career and professional accomplishments that the program is preparing graduates to achieve within a few years after graduation.
          </p>
          <div className="space-y-6">
            <div className="rounded-lg bg-[#F5F8FF] p-6">
              <h3 className="mb-3 text-xl font-semibold text-[#131929]">PEO 1: Professional Excellence</h3>
              <p className="leading-relaxed text-gray-700">
                To prepare graduates with strong foundation in mathematical, scientific and engineering fundamentals necessary to formulate, analyze and solve engineering problems and to pursue higher studies.
              </p>
            </div>
            <div className="rounded-lg bg-[#F5F8FF] p-6">
              <h3 className="mb-3 text-xl font-semibold text-[#131929]">PEO 2: Core Competence</h3>
              <p className="leading-relaxed text-gray-700">
                To prepare graduates with good scientific and engineering breadth to comprehend, analyze, design, and create innovative products and solutions for real life problems.
              </p>
            </div>
            <div className="rounded-lg bg-[#F5F8FF] p-6">
              <h3 className="mb-3 text-xl font-semibold text-[#131929]">PEO 3: Professionalism</h3>
              <p className="leading-relaxed text-gray-700">
                To prepare graduates with ethical and social responsibility to become professionals with high-quality professional skills, good communication skills and teamwork skills.
              </p>
            </div>
            <div className="rounded-lg bg-[#F5F8FF] p-6">
              <h3 className="mb-3 text-xl font-semibold text-[#131929]">PEO 4: Learning Environment</h3>
              <p className="leading-relaxed text-gray-700">
                To prepare graduates who will be able to emerge as entrepreneurs, innovators, researchers who can create ethical and sustainable solutions for social, technical and business challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Outcomes (POs) */}
      <div className="mb-16">
        {/* Section heading with decorative lines */}
        <div className="relative mb-8 flex items-center">
          <div className="absolute left-0 top-1/2 h-px w-16 bg-gray-300"></div>
          <h2 className={`${zilla.className} ml-24 text-3xl font-bold text-[#131929]`}>
            Program Outcomes (POs)
          </h2>
        </div>
        <div className="rounded-lg bg-white p-8 shadow-md">
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Program Outcomes (POs) describe what students are expected to know and be able to do by the time of graduation. These relate to the knowledge, skills, and behaviors that students acquire as they progress through the program.
          </p>
          <div className="space-y-6">
            <div className="rounded-lg bg-[#F5F8FF] p-6">
              <h3 className="mb-3 text-xl font-semibold text-[#131929]">PO 1: Engineering Knowledge</h3>
              <p className="leading-relaxed text-gray-700">
                Apply knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.
              </p>
            </div>
            <div className="rounded-lg bg-[#F5F8FF] p-6">
              <h3 className="mb-3 text-xl font-semibold text-[#131929]">PO 2: Problem Analysis</h3>
              <p className="leading-relaxed text-gray-700">
                Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.
              </p>
            </div>
            <div className="rounded-lg bg-[#F5F8FF] p-6">
              <h3 className="mb-3 text-xl font-semibold text-[#131929]">PO 3: Design/Development of Solutions</h3>
              <p className="leading-relaxed text-gray-700">
                Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.
              </p>
            </div>
            {/* Add more POs as needed */}
          </div>
        </div>
      </div>

      {/* Program Specific Outcomes (PSOs) */}
      <div className="mb-12">
        {/* Section heading with decorative lines */}
        <div className="relative mb-8 flex items-center">
          <div className="absolute left-0 top-1/2 h-px w-16 bg-gray-300"></div>
          <h2 className={`${zilla.className} ml-24 text-3xl font-bold text-[#131929]`}>
            Program Specific Outcomes (PSOs)
          </h2>
        </div>
        <div className="rounded-lg bg-white p-8 shadow-md">
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Program Specific Outcomes (PSOs) are statements that describe what the graduates of a specific engineering program should be able to do.
          </p>
          <div className="space-y-6">
            <div className="rounded-lg bg-[#F5F8FF] p-6">
              <h3 className="mb-3 text-xl font-semibold text-[#131929]">PSO 1: Professional Skills</h3>
              <p className="leading-relaxed text-gray-700">
                The ability to understand, analyze, and develop computer programs in the areas related to algorithms, system software, multimedia, web design, big data analytics, and networking for efficient design of computer-based systems of varying complexity.
              </p>
            </div>
            <div className="rounded-lg bg-[#F5F8FF] p-6">
              <h3 className="mb-3 text-xl font-semibold text-[#131929]">PSO 2: Problem-Solving Skills</h3>
              <p className="leading-relaxed text-gray-700">
                The ability to apply standard practices and strategies in software project development using open-ended programming environments to deliver a quality product for business success.
              </p>
            </div>
            <div className="rounded-lg bg-[#F5F8FF] p-6">
              <h3 className="mb-3 text-xl font-semibold text-[#131929]">PSO 3: Successful Career and Entrepreneurship</h3>
              <p className="leading-relaxed text-gray-700">
                The ability to employ modern computer languages, environments, and platforms in creating innovative career paths to be an entrepreneur, and a zest for higher studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PEOsPOsPSOs