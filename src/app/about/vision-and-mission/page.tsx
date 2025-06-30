import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const VisionMissionPage = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] text-gray-900">
      <div className="flex h-full w-full flex-col bg-white pt-16 md:pt-24 md:flex-row">
        <div className="flex w-full flex-col px-4 sm:px-8 md:px-28 pt-20 md:pt-32 text-[#00122a]">
          <h1
            className={`mb-4 flex items-center justify-center text-center font-serif text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            VISION & MISSION
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full px-4 sm:px-8 md:px-28 py-8 md:py-16">
        <div className="mb-8 md:mb-16">
          <h2 className={`mb-4 md:mb-6 text-xl sm:text-2xl font-bold text-[#001f3f]`}>
            Our Vision
          </h2>
          <div className="rounded-lg bg-white p-4 md:p-6 shadow-lg">
            <p className="mb-4 text-lg sm:text-xl font-semibold text-[#4a90e2]">
              "Moulding Engineers Who Can Build The Nation"
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              CRCE will be a center of Excellence in Engineering Education,
              moulding engineers with state-of-the-art technologies, innovative
              skills and human values matching with the growing expectations of
              the corporates and the society and thus play an effective role in
              nation-building.
            </p>
          </div>
        </div>

        <div>
          <h2 className={`mb-4 md:mb-6 text-xl sm:text-2xl font-bold text-[#001f3f]`}>
            Our Mission
          </h2>
          <ul className="space-y-3 md:space-y-4">
            {[
              'Create an excellent scholastic ambiance for students and faculty, by providing facilities with state-of-the-art technologies and continuously updating based on the needs of user organizations.',
              'Attract, develop and retain teaching faculty of academic excellence, dedication and commitment.',
              'Design the academic administration system to ensure effective teaching-learning process facilitating participation from students and teachers and enabling continuous improvement through evaluation and feedback.',
              'Provide avenues for the holistic development of students to become competent engineers with interpersonal skills, leadership qualities, and social concern.',
              'Maintain economic discipline, continuously work for optimal utilization of resources and resource generation through consultancy to make quality education affordable. Everybody in the organization to be a role model for integrity, upholding ethical values, fairness, and transparency in all dealings.',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start rounded-lg bg-white p-3 md:p-4 shadow-lg"
              >
                <span className="mr-3 md:mr-4 flex h-6 w-6 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white text-sm md:text-base">
                  {index + 1}
                </span>
                <p className="text-sm sm:text-base text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VisionMissionPage
