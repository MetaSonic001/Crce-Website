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

const AboutHOD = ({ 
  name, 
  title, 
  bio, 
  imageUrl, 
  content, 
  extendedContent, 
  qualification 
}: any) => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
        <h2 className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}>
          HOD's Desk
        </h2>
        <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
      </div>
      
      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left column with image and details */}
          <div className="flex flex-col items-center bg-white p-8 md:w-1/4">
            <div className="mb-4 overflow-hidden rounded shadow-2xl">
              <Image
                src={imageUrl}
                alt={name}
                width={220}
                height={280}
                objectFit="cover"
                className="shadow-2xl"
              />
            </div>
            
            <h3 className="mb-1 text-xl font-bold text-black">{name}</h3>
            <p className="mb-3 font-medium text-black">{title}</p>
            <p className="mb-4 text-sm text-black italic">{qualification || "Ph.D. in Computer Engineering"}</p>
            
            <a
              href="#"
              className="mt-2 inline-block rounded-md bg-[#131929] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[#1f2639]"
            >
              View Profile
            </a>
          </div>
          
          {/* Right column with content */}
          <div className="flex flex-col p-8 md:w-3/4">
            <div className="mb-4 text-justify">
              <p className="mb-4 text-gray-700">{bio}</p>
            </div>
            
            <div className="space-y-4 text-justify"> 
              <p className="leading-relaxed text-gray-700">{content}</p>
              <p className="leading-relaxed text-gray-700">{extendedContent}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Message from HOD section */}
      <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
        <h3 className={`${zilla.className} mb-4 text-2xl font-bold text-[#131929]`}>Message to Students</h3>
        <div className="text-justify">
          <p className="mb-4 text-gray-700 leading-relaxed">
            Dear Students,
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
content          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
content          </p>
          <p className="text-gray-700 leading-relaxed">
content          </p>
          <p className="mt-6 text-right font-semibold text-[#131929]">{name}</p>
          <p className="text-right text-gray-700">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutHOD