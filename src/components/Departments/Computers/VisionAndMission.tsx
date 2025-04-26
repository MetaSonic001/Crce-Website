'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const VisionAndMission = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Vision Section */}
      <div className="mb-12">
        {/* Section heading with decorative lines */}
        <div className="relative mb-4 flex items-center">
          <div className="absolute top-1/2 left-0 h-px w-16 bg-gray-300"></div>
          <h2 className={`${zilla.className} ml-24 text-2xl font-bold text-[#131929]`}>Vision</h2>
        </div>
        <div className="rounded-lg bg-white p-6 text-justify shadow-md">
          <p className="text-base leading-relaxed text-gray-700">
            To be a leading department in computer engineering education and research, fostering innovation, professional excellence, and ethical leadership to address technological challenges for the betterment of society.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mb-12">
        {/* Section heading with decorative lines */}
        <div className="relative mb-4 flex items-center">
          <div className="absolute top-1/2 left-0 h-px w-16 bg-gray-300"></div>
          <h2 className={`${zilla.className} ml-24 text-2xl font-bold text-[#131929]`}>Mission</h2>
        </div>
        <div className="rounded-lg bg-white p-8 text-justify shadow-md">
          <ul className="list-inside list-disc space-y-6 text-gray-700">
            <li className="mx-2">
              <span className={`${zilla.className} text-lg font-semibold text-[#131929]`}>
                Excellence in Education:
              </span>{' '}
              <span className="text-base leading-relaxed">
                To provide high-quality education in computer engineering through effective teaching-learning processes, innovative pedagogical approaches, and state-of-the-art facilities.
              </span>
            </li>
            <li className="mx-2">
              <span className={`${zilla.className} text-lg font-semibold text-[#131929]`}>
                Research and Innovation:
              </span>{' '}
              <span className="text-base leading-relaxed">
                To promote research, innovation, and entrepreneurship through multidisciplinary initiatives and industry-academia collaborations.
              </span>
            </li>
            <li className="mx-2">
              <span className={`${zilla.className} text-lg font-semibold text-[#131929]`}>
                Professional Development:
              </span>{' '}
              <span className="text-base leading-relaxed">
                To foster professional growth, technical competence, and adaptability among students and faculty, preparing them for global challenges and opportunities.
              </span>
            </li>
            <li className="mx-2">
              <span className={`${zilla.className} text-lg font-semibold text-[#131929]`}>
                Ethical Values:
              </span>{' '}
              <span className="text-base leading-relaxed">
                To inculcate ethical values, professional ethics, and social responsibility to develop responsible citizens and professionals.
              </span>
            </li>
            <li className="mx-2">
              <span className={`${zilla.className} text-lg font-semibold text-[#131929]`}>
                Industry Linkages:
              </span>{' '}
              <span className="text-base leading-relaxed">
                To strengthen industry linkages through internships, industrial visits, and collaborative projects that enhance practical skills and employability.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mb-12">
        {/* Section heading with decorative lines */}
        <div className="relative mb-4 flex items-center">
          <div className="absolute top-1/2 left-0 h-px w-16 bg-gray-300"></div>
          <h2 className={`${zilla.className} ml-24 text-2xl font-bold text-[#131929]`}>
            Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 text-justify md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
            <h3 className={`${zilla.className} mb-3 text-base font-semibold text-[#131929]`}>
              Excellence
            </h3>
            <p className="text-base leading-relaxed text-gray-700">
              Striving for excellence in all academic and professional endeavors, encouraging continuous improvement and high standards.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
            <h3 className={`${zilla.className} mb-3 text-base font-semibold text-[#131929]`}>
              Innovation
            </h3>
            <p className="text-base leading-relaxed text-gray-700">
              Fostering creativity, critical thinking, and novel approaches to problem-solving and technological advancement.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
            <h3 className={`${zilla.className} mb-3 text-base font-semibold text-[#131929]`}>
              Integrity
            </h3>
            <p className="text-base leading-relaxed text-gray-700">
              Upholding ethical principles, honesty, transparency, and accountability in all academic and professional practices.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
            <h3 className={`${zilla.className} mb-3 text-base font-semibold text-[#131929]`}>
              Collaboration
            </h3>
            <p className="text-base leading-relaxed text-gray-700">
              Promoting teamwork, partnership, and interdisciplinary cooperation among students, faculty, industry, and society.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
            <h3 className={`${zilla.className} mb-3 text-base font-semibold text-[#131929]`}>
              Inclusivity
            </h3>
            <p className="text-base leading-relaxed text-gray-700">
              Embracing diversity, equity, and inclusion in the learning environment, respecting individual differences and perspectives.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
            <h3 className={`${zilla.className} mb-3 text-base font-semibold text-[#131929]`}>
              Social Responsibility
            </h3>
            <p className="text-base leading-relaxed text-gray-700">
              Emphasizing the application of knowledge and skills for the welfare of society and sustainable development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisionAndMission