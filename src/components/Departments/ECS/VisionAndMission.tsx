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
    <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
      {/* Vision Section */}
      <div className="mb-8 sm:mb-12">
        {/* Section heading with decorative lines */}
        <div className="relative mb-3 sm:mb-4 flex items-center">
          <div className="absolute top-1/2 left-0 h-px w-8 sm:w-16 bg-gray-300"></div>
          <h2 className={`${zilla.className} ml-12 sm:ml-24 text-xl sm:text-2xl font-bold text-[#131929]`}>Vision</h2>
        </div>
        <div className="rounded-lg bg-white p-4 sm:p-6 text-justify shadow-md">
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            To be a leading department in computer engineering education and research, fostering innovation, professional excellence, and ethical leadership to address technological challenges for the betterment of society.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mb-8 sm:mb-12">
        {/* Section heading with decorative lines */}
        <div className="relative mb-3 sm:mb-4 flex items-center">
          <div className="absolute top-1/2 left-0 h-px w-8 sm:w-16 bg-gray-300"></div>
          <h2 className={`${zilla.className} ml-12 sm:ml-24 text-xl sm:text-2xl font-bold text-[#131929]`}>Mission</h2>
        </div>
        <div className="rounded-lg bg-white p-4 sm:p-8 text-justify shadow-md">
          <ul className="list-inside list-disc space-y-4 sm:space-y-6 text-gray-700">
            <li className="mx-1 sm:mx-2">
              <span className={`${zilla.className} text-base sm:text-lg font-semibold text-[#131929] block sm:inline`}>
                Excellence in Education:
              </span>{' '}
              <span className="text-sm sm:text-base leading-relaxed">
                To provide high-quality education in computer engineering through effective teaching-learning processes, innovative pedagogical approaches, and state-of-the-art facilities.
              </span>
            </li>
            <li className="mx-1 sm:mx-2">
              <span className={`${zilla.className} text-base sm:text-lg font-semibold text-[#131929] block sm:inline`}>
                Research and Innovation:
              </span>{' '}
              <span className="text-sm sm:text-base leading-relaxed">
                To promote research, innovation, and entrepreneurship through multidisciplinary initiatives and industry-academia collaborations.
              </span>
            </li>
            <li className="mx-1 sm:mx-2">
              <span className={`${zilla.className} text-base sm:text-lg font-semibold text-[#131929] block sm:inline`}>
                Professional Development:
              </span>{' '}
              <span className="text-sm sm:text-base leading-relaxed">
                To foster professional growth, technical competence, and adaptability among students and faculty, preparing them for global challenges and opportunities.
              </span>
            </li>
            <li className="mx-1 sm:mx-2">
              <span className={`${zilla.className} text-base sm:text-lg font-semibold text-[#131929] block sm:inline`}>
                Ethical Values:
              </span>{' '}
              <span className="text-sm sm:text-base leading-relaxed">
                To inculcate ethical values, professional ethics, and social responsibility to develop responsible citizens and professionals.
              </span>
            </li>
            <li className="mx-1 sm:mx-2">
              <span className={`${zilla.className} text-base sm:text-lg font-semibold text-[#131929] block sm:inline`}>
                Industry Linkages:
              </span>{' '}
              <span className="text-sm sm:text-base leading-relaxed">
                To strengthen industry linkages through internships, industrial visits, and collaborative projects that enhance practical skills and employability.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mb-8 sm:mb-12">
        {/* Section heading with decorative lines */}
        <div className="relative mb-3 sm:mb-4 flex items-center">
          <div className="absolute top-1/2 left-0 h-px w-8 sm:w-16 bg-gray-300"></div>
          <h2 className={`${zilla.className} ml-12 sm:ml-24 text-xl sm:text-2xl font-bold text-[#131929]`}>
            Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 text-justify sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
            <h3 className={`${zilla.className} mb-2 sm:mb-3 text-base font-semibold text-[#131929]`}>
              Excellence
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              Striving for excellence in all academic and professional endeavors, encouraging continuous improvement and high standards.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
            <h3 className={`${zilla.className} mb-2 sm:mb-3 text-base font-semibold text-[#131929]`}>
              Innovation
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              Fostering creativity, critical thinking, and novel approaches to problem-solving and technological advancement.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
            <h3 className={`${zilla.className} mb-2 sm:mb-3 text-base font-semibold text-[#131929]`}>
              Integrity
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              Upholding ethical principles, honesty, transparency, and accountability in all academic and professional practices.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
            <h3 className={`${zilla.className} mb-2 sm:mb-3 text-base font-semibold text-[#131929]`}>
              Collaboration
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              Promoting teamwork, partnership, and interdisciplinary cooperation among students, faculty, industry, and society.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
            <h3 className={`${zilla.className} mb-2 sm:mb-3 text-base font-semibold text-[#131929]`}>
              Inclusivity
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              Embracing diversity, equity, and inclusion in the learning environment, respecting individual differences and perspectives.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
            <h3 className={`${zilla.className} mb-2 sm:mb-3 text-base font-semibold text-[#131929]`}>
              Social Responsibility
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              Emphasizing the application of knowledge and skills for the welfare of society and sustainable development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisionAndMission