'use client'

import { useEffect, useState } from 'react'
import {
  Earth,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
} from 'lucide-react'
import { Zilla_Slab } from 'next/font/google'
import getCouncils, { type Council } from '@/app/api/councils'
import Link from 'next/link'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})



export default function Council() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [cards, setCards] = useState<Council[]>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const councils = await getCouncils()
        if (councils.length > 0) setCards(councils)
      } catch (error) {
        console.warn('Falling back to dummy data due to error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col md:flex-row">
        <div className="flex w-full flex-col px-4 pt-24 text-[#00122a] md:px-28 md:pt-20">
          <h1
            className={`mb-4 flex items-center justify-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            STUDENT COUNCILS
          </h1>
          <p className="mb-8 text-center text-gray-600">
            Discover our vibrant student-led councils and organizations driving
            innovation and leadership
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:px-8 md:px-16 md:py-16 lg:px-28">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards?.map((card, index) => (
            <div key={index} className="group">
              <div className="h-full overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    src={`${process.env.NEXT_PUBLIC_ASSET_URL}${card.image}`}
                    alt={card.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>

                <div className="p-6">
                  <h2
                    className={`${zilla.className} mb-2 text-xl font-semibold text-[#001f3f]`}
                  >
                    {card.name}
                  </h2>
                  <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                    {card.subtitle}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {card.website && (
                        <a
                          href={
                            card.website.startsWith('http')
                              ? card.website
                              : `https://${card.website}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4a90e2] transition-colors hover:text-[#3a7bc2]"
                        >
                          <Earth className="h-5 w-5" />
                        </a>
                      )}
                      {card.linkedin && (
                        <a
                          href={card.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 transition-colors hover:text-blue-700"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {card.instagram && (
                        <a
                          href={card.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 transition-colors hover:text-pink-700"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/students/councils/${card.id}`}
                      className="flex items-center text-sm font-medium text-[#4a90e2] transition-colors hover:text-[#3a7bc2]"
                    >
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
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
