'use client'
import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function CreditsPage() {
  return (
    <div className="mt-28 flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900 md:mt-40">
      <div className="flex h-full w-full flex-col bg-white pt-12 md:pt-16">
        <div className="flex w-full flex-col px-4 pb-6 text-[#00122a] sm:px-8 md:px-16 md:pb-8 lg:px-24">
          <h1 className="mb-4 flex items-center justify-center text-center font-serif text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl">
            CREDITS
          </h1>
        </div>
      </div>

      <div className="flex w-full flex-col items-center px-4 py-12 sm:px-8 md:px-16 lg:px-24">
        <div className="mb-16 text-center">
          <Link
            href="https://gdsc-crce-2024.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <h2 className={`${zilla.className} text-4xl md:text-5xl lg:text-6xl font-bold text-[#00122a] mb-4 group-hover:text-blue-600 transition-colors duration-300`}>
              GDSC CRCE
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
              2024-2025
            </p>
          </Link>
        </div>

        <div className="w-full max-w-6xl">
          <div className="grid gap-8 md:gap-12 lg:gap-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-lg md:text-xl font-bold text-[#00122a] mb-2 group-hover:text-blue-600 transition-colors">
                  LEAD DEVELOPER
                </h3>
                <p className={`${zilla.className} text-2xl md:text-3xl font-bold text-gray-800`}>
                  Zane Fernandes
                </p>
              </div>

              <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-lg md:text-xl font-bold text-[#00122a] mb-2 group-hover:text-blue-600 transition-colors">
                  PROJECT LEAD
                </h3>
                <p className={`${zilla.className} text-2xl md:text-3xl font-bold text-gray-800`}>
                  Shaun Mendes
                </p>
              </div>

              <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-lg md:text-xl font-bold text-[#00122a] mb-2 group-hover:text-blue-600 transition-colors">
                  UI/UX & DATA
                </h3>
                <p className={`${zilla.className} text-2xl md:text-3xl font-bold text-gray-800`}>
                  Susan Fernandes
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-lg md:text-xl font-bold text-[#00122a] mb-2 group-hover:text-blue-600 transition-colors">
                  CO-LEAD DEVELOPER
                </h3>
                <p className={`${zilla.className} text-2xl md:text-3xl font-bold text-gray-800`}>
                  Sharian Dabre
                </p>
              </div>

              <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-lg md:text-xl font-bold text-[#00122a] mb-2 group-hover:text-green-600 transition-colors">
                  DEVELOPER
                </h3>
                <p className={`${zilla.className} text-2xl md:text-3xl font-bold text-gray-800`}>
                  Chris Lopes
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className={`${zilla.className} text-3xl md:text-4xl font-bold text-center text-[#00122a] mb-12`}>
                DEVELOPMENT TEAM
              </h3>

              <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
                <div className="group text-center  p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <h4 className="text-sm md:text-base font-bold text-[#00122a] mb-2 group-hover:text-purple-600 transition-colors">
                    DEVELOPER
                  </h4>
                  <p className={`${zilla.className} text-lg md:text-xl font-bold text-gray-800`}>
                    Arshdeep Kaur
                  </p>
                </div>

                <div className="group text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <h4 className="text-sm md:text-base font-bold text-[#00122a] mb-2 group-hover:text-pink-600 transition-colors">
                    DEVELOPER
                  </h4>
                  <p className={`${zilla.className} text-lg md:text-xl font-bold text-gray-800`}>
                    Vanessa Rodrigues
                  </p>
                </div>

                <div className="group text-center p-6 bg-gradient-to-br from-blue-50 to-pink-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <h4 className="text-sm md:text-base font-bold text-[#00122a] mb-2 group-hover:text-pink-600 transition-colors">
                    DEVELOPER
                  </h4>
                  <p className={`${zilla.className} text-lg md:text-xl font-bold text-gray-800`}>
                    Sumeet Pathak
                  </p>
                </div>

                <div className="group text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <h4 className="text-sm md:text-base font-bold text-[#00122a] mb-2 group-hover:text-orange-600 transition-colors">
                    CONTENT CREATOR
                  </h4>
                  <p className={`${zilla.className} text-lg md:text-xl font-bold text-gray-800`}>
                    Vadim Rodrigues
                  </p>
                </div>

                
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl">
            <h3 className={`${zilla.className} text-3xl md:text-4xl font-bold text-white mb-2`}>
              THANK YOU
            </h3>
            <p className="text-lg md:text-xl text-blue-100">
              For making this project possible
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

