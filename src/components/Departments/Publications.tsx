'use client'

import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import { useQuery } from '@tanstack/react-query'
import getDepartmentPublications, {
  DepartmentPublication,
} from '@/app/api/publications'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface PageProps {
  department: string
}

const fallbackPublications: DepartmentPublication[] = [
  {
    id: 1,
    status: 'published',
    title: 'Esports analysis with data science',
    authors:
      'Sushma Nagdeote; Heenakausar Pendhari; Omkar Shirsat; Raj Lad; Sujata Chiwande',
    journal: 'AIP Conf. Proc. 2764, 060013 (2023)',
    link: 'https://doi.org/10.1063/5.0144108',
    department: 'computers',
    date: '2023-10-15',
  },
  {
    id: 2,
    status: 'published',
    title:
      'Blockchain Based Identity Management System Using Cryptography and Steganography',
    authors: 'Praditi Rede; Sahaana Iyer; Sheetal Sharma; Sujata Deshmukh',
    journal: 'Publisher: IEEE',
    link: 'https://doi.org/10.1109/ICIT58056.2023.10225957',
    department: 'computers',
    date: '2023-09-22',
  },
]

const Publications: React.FC<PageProps> = ({ department }) => {
  const {
    data: publications = [],
    isLoading,
    error,
  } = useQuery<DepartmentPublication[]>({
    queryKey: ['publications', department],
    queryFn: () => getDepartmentPublications(department),
    staleTime: 60 * 60 * 1000, // 1 hour cache
    gcTime: 60 * 60 * 1000, // 1 hour garbage collection
    select: (data) =>
      data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    placeholderData: fallbackPublications,
  })

  const renderPublications = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center py-8">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#131929] border-t-transparent"></div>
        </div>
      )
    }

    if (error) {
      return (
        <div className="rounded-lg bg-red-50 p-6 text-center text-red-800">
          <p>Unable to load publications. Please try again later.</p>
        </div>
      )
    }

    if (publications.length === 0) {
      return (
        <div className="rounded-lg bg-gray-50 p-6 text-center text-gray-700">
          <p>No publications available for this department.</p>
        </div>
      )
    }

    return (
      <div className="space-y-6">
        {publications.map((publication) => (
          <div
            key={publication.id}
            className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div className="flex items-start">
              <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#131929] text-white">
                {publication.id}
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-[#131929]">
                  {publication.title}
                </h4>
                <p className="mb-1 text-sm font-medium text-gray-600">
                  <span className="font-bold">Authors:</span> {publication.authors}
                </p>
                <p className="mb-3 italic text-sm text-gray-700">
                  {publication.journal}
                </p>
                {publication.link && (
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-[#F5F8FF] px-3 py-1 text-sm font-medium text-[#131929] transition-colors hover:bg-[#E3EBFF]"
                  >
                    <svg
                      className="mr-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Publication
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="relative mb-8 flex items-center justify-center">
        <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
        <h2
          className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
        >
          Research Publications
        </h2>
        <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6 rounded-lg bg-[#F5F8FF] p-4">
          <h3
            className={`${zilla.className} mb-2 text-xl font-semibold text-[#131929]`}
          >
            Publications for the year 2023-24
          </h3>
          <p className="text-gray-700">
            Recent research publications by faculty members and students of the
            Computer Engineering Department.
          </p>
        </div>

        {renderPublications()}
      </div>
    </div>
  )
}

export default Publications
