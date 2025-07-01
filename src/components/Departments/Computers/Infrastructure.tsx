'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const Infrastructure = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-4 sm:mb-6 flex items-center">
        <div className="absolute top-1/2 left-0 h-px w-10 sm:w-16 bg-gray-300"></div>
        <h2 className={`${zilla.className} ml-14 sm:ml-24 text-xl sm:text-2xl font-bold text-[#131929]`}>
          Infrastructure
        </h2>
      </div>

      <div className="relative mx-auto mb-6 sm:mb-10 max-w-5xl min-w-20 items-center overflow-hidden rounded-lg shadow-md">
        <iframe
          className="video-container aspect-video w-full"
          src="/compsdepttour.mp4"
          allowFullScreen
          title="Department Tour"
        />
      </div>

      <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
          <h3 className={`${zilla.className} mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#131929]`}>Computer Labs</h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            Our department is equipped with state-of-the-art computer labs featuring the latest hardware and software. Each lab accommodates up to 60 students and is regularly updated to meet industry standards.
          </p>
        </div>
        <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
          <h3 className={`${zilla.className} mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#131929]`}>Research Facilities</h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            Dedicated research labs with specialized equipment for areas such as AI, Machine Learning, IoT, and Cloud Computing. Students and faculty have access to high-performance computing resources.
          </p>
        </div>
        <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
          <h3 className={`${zilla.className} mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#131929]`}>Networking Lab</h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            A comprehensive networking lab with routers, switches, and servers to provide hands-on experience in network configuration, security, and management.
          </p>
        </div>
        <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
          <h3 className={`${zilla.className} mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#131929]`}>Project Lab</h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            Dedicated space for student projects with necessary tools and equipment. The lab is available for extended hours to accommodate project work.
          </p>
        </div>
        <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
          <h3 className={`${zilla.className} mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#131929]`}>Seminar Hall</h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            A well-equipped seminar hall with multimedia facilities for conducting workshops, guest lectures, and student presentations.
          </p>
        </div>
        <div className="rounded-lg bg-white p-4 sm:p-6 shadow-md transition-transform duration-300 hover:shadow-lg">
          <h3 className={`${zilla.className} mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#131929]`}>Software Resources</h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            Access to a wide range of software including IDEs, simulation tools, modeling software, and industry-standard development environments.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Infrastructure
