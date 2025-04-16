'use client'

import { useEffect, useState } from 'react'
import { Earth, Instagram, Linkedin, FileInput } from 'lucide-react'
import { Zilla_Slab } from 'next/font/google'
import getCouncils, { type Council } from '@/app/api/councils'
import Link from 'next/link'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const dummyData: Council[] = [
  {
    id: 1,
    status: 'published',
    name: 'CodeLabs CRCE',
    website: 'https://codelabscrce.netlify.app/',
    image: '/councils/codelabs.jpg',
    report: '', // Ignored
    members: [
      {
        name: 'John Doe',
        role: 'President',
        image: '/councils/ieee.jpg',
        class: 'B.E. Computer Engineering',
      },
      {
        name: 'Jane Smith',
        role: 'Vice President',
        image: '/councils/ieee.jpg',
        class: 'B.E. Information Technology',
      },
    ],
  },
  {
    id: 2,
    status: 'published',
    name: 'IEEE CRCE',
    website: 'https://ieeewiecrce.netlify.app/',
    image: '/councils/ieee.jpg',
    report: '', // Ignored
    members: [
      {
        name: 'John Doe',
        role: 'President',
        image: '/councils/ieee.jpg',
        class: 'B.E. Computer Engineering',
      },
      {
        name: 'Jane Smith',
        role: 'Vice President',
        image: '/councils/ieee.jpg',
        class: 'B.E. Information Technology',
      },
    ],
  },
]

export default function Council() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [cards, setCards] = useState<Council[]>(dummyData)

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
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1
              className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
            >
              Councils
            </h1>
            <div className="h-1 w-32 rounded-sm bg-blue-900"></div>
          </div>
        </div>
        <div className="-m-4 flex flex-wrap">
          {cards.map((card, index) => (
            <div key={card.id ?? index} className="p-4 md:w-1/2 xl:w-1/4">
              <div
                className="relative h-full overflow-hidden rounded-lg bg-gray-100 p-6"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  className="mb-6 h-40 w-full rounded-sm object-cover object-center"
                  src={`${process.env.NEXT_PUBLIC_ASSET_URL}${card.image}`}
                  alt="council"
                />

                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  {card.name}
                </h2>

                <div
                  className={`bg-opacity-90 absolute inset-0 flex flex-col justify-between bg-white p-6 transition-transform duration-300 ease-in-out ${
                    hoveredCard === index ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  <div>
                    <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                      {card.name}
                    </h2>
                    {/* Optionally add subtitle if needed */}
                  </div>
                  <div className="mt-4 flex justify-center space-x-4">
                    <a href={`${card.website}`}>
                      <Earth className="text-2xl text-blue-600" />
                    </a>{' '}
                    <a href={`/students/councils/${card.id}`}>
                      <FileInput className="text-2xl text-blue-800" />
                    </a>
                    {card.linkedin && (
                      <a
                        href={card.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="text-2xl text-blue-400" />
                      </a>
                    )}
                    {card.instagram && (
                      <a
                        href={card.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="text-2xl text-pink-600" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
