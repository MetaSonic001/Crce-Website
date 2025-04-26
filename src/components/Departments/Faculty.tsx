'use client'
import React from 'react'
import Image from 'next/image'
import { Zilla_Slab } from 'next/font/google'
import { useQuery } from '@tanstack/react-query'
import getTeachers, { MappedTeacher } from '@/app/api/teachers'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface PageProps {
  department: string
}

const Faculty: React.FC<PageProps> = ({ department }) => {
  // Fetch faculty data using React Query with 1 hour cache
  const {
    data: facultyData,
    isLoading,
    error,
  } = useQuery<MappedTeacher[]>({
    queryKey: ['faculty', department],
    queryFn: () => getTeachers(department),
    staleTime: 60 * 60 * 1000, // 1 hour cache
    gcTime: 60 * 60 * 1000, // 1 hour garbage collection
  })

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-6 py-8 text-center">
        <div className="relative mb-12 flex items-center justify-center">
          <div className="absolute top-1/2 left-0 h-px w-1/4 bg-gray-300"></div>
          <h2
            className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
          >
            Our Faculty
          </h2>
          <div className="absolute top-1/2 right-0 h-px w-1/4 bg-gray-300"></div>
        </div>
        <div className="flex justify-center py-12">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#1E40AF] border-t-transparent"></div>
        </div>
      </div>
    )
  }

  // Error state
  if (error || !facultyData) {
    return (
      <div className="container mx-auto px-6 py-8 text-center">
        <div className="relative mb-12 flex items-center justify-center">
          <div className="absolute top-1/2 left-0 h-px w-1/4 bg-gray-300"></div>
          <h2
            className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
          >
            Our Faculty
          </h2>
          <div className="absolute top-1/2 right-0 h-px w-1/4 bg-gray-300"></div>
        </div>
        <div className="rounded-lg bg-red-50 p-6 text-red-800">
          <p>Unable to load faculty data. Please try again later.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/4 bg-gray-300"></div>
        <h2
          className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
        >
          Our Faculty
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/4 bg-gray-300"></div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {facultyData.map((faculty) => (
          <div
            key={faculty.id}
            className="flex flex-col items-center overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
          >
            {/* Circular Image */}
            <div className="flex justify-center pt-6">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[#EBF2FF] bg-gray-100">
                <Image
                  src={faculty.photoUrl}
                  alt={faculty.name}
                  fill
                  sizes="160px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 text-center">
              <h3 className="mb-1 text-xl font-bold text-[#131929]">
                {faculty.name}
              </h3>
              <p className="mb-4 text-sm font-medium text-[#1E40AF]">
                {faculty.designation}
              </p>

              <div className="mb-5 border-t border-gray-100 pt-4">
                <p className="mb-2 text-sm leading-relaxed text-gray-600">
                  <span className="font-semibold text-[#131929]">
                    Qualification:
                  </span>{' '}
                  {faculty.qualification}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  <span className="font-semibold text-[#131929]">
                    Areas of Interest:
                  </span>{' '}
                  <span className="italic">{faculty.areasOfInterest}</span>
                </p>
              </div>

              <div className="mt-auto">
                <a
                  href={faculty.ctaOnClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-[#131929] px-5 py-2 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-[#1E40AF] hover:shadow-md"
                >
                  {faculty.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faculty
