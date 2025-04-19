'use client'

import Image from 'next/image'
import { Zilla_Slab } from 'next/font/google'
import { useState, useEffect } from 'react'
import { getOneCouncil, type OneCouncil } from '@/app/api/singleCouncil'
import { Globe } from 'lucide-react'
import { Markdown } from '@/components/markdown'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const dummyData: OneCouncil = {
  id: 1,
  name: 'CodeLabs CRCE',
  website: 'https://codelabscrce.netlify.app/',
  image: '/councils/codelabs.jpg',
  data: 'CodeLabs CRCE is a technical community focused on fostering coding culture and technical innovation.',
  events: [
    {
      name: 'Tech Talk',
      date: '2025-03-01',
      image: '/councils/codelabs.jpg',
      description: 'This Tech Talk brings together esteemed professionals...',
      report: '/report.pdf',
    },
    {
      name: 'CodeFest',
      date: '2025-04-10',
      image: '/councils/codelabs.jpg',
      description: 'CodeFest is an intensive 24-hour hackathon...',
      report: '/report2.pdf',
    },
  ],
  members: [
    {
      id: 1,
      name: 'John Doe',
      role: 'President',
      image: '/alumni/adi.jpg',
      class: 'B.E. Computer Engineering',
    },
    {
      id: 2,  
      name: 'Jane Smith',
      role: 'Vice President',
      image: '/alumni/sharu.jpg',
      class: 'B.E. Information Technology',
    },
    // Add more members as needed
  ],
}

export default function CouncilDetails({ params }: { params: { id: string } }) {
  const [showAllMembers, setShowAllMembers] = useState(false)
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)
  const [council, setCouncil] = useState<OneCouncil>(dummyData)

  useEffect(() => {
    const fetchCouncil = async () => {
      const data = await getOneCouncil(params.id)
      setCouncil(data)
    }
    fetchCouncil()
  }, [params.id])

  const visibleMembers = showAllMembers
    ? council.members
    : council.members?.slice(0, 5)

  return (
    <div className="flex min-h-screen flex-col">
      <main
        className={`flex-grow bg-white px-8 pt-[180px] pb-[140px] ${zilla.className}`}
      >
        <div className="mt-4 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="md:w-2/3">
            <h1 className="mb-4 text-5xl font-bold">{council.name}</h1>
            <span className="text-lg text-gray-600">
              <Markdown>{council.data}</Markdown>
            </span>
            {council.website && (
              <a
                href={
                  council.website.startsWith('http')
                    ? council.website
                    : `https://${council.website}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-blue-600 hover:underline"
              >
                <Globe className="h-4 w-4" />
                Visit Website
              </a>
            )}
          </div>
          <div className="relative z-10 mt-2 flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-xl border-2 border-gray-300 bg-white md:mt-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSET_URL}${council.image}`}
              alt={`${council.name} Logo`}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>

        {council.members && council.members.length > 0 && (
          <>
            <h2 className="mt-10 mb-4 text-3xl font-bold">Members</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
              {visibleMembers?.map((member, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-4 text-center shadow transition-all hover:shadow-lg"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_ASSET_URL}${member.image}`}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="mx-auto mb-2 rounded-full"
                  />
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <p className="text-xs text-gray-500">{member.class}</p>
                </div>
              ))}
            </div>
            {!showAllMembers && council.members.length > 5 && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setShowAllMembers(true)}
                  className="rounded-full bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                >
                  View More
                </button>
              </div>
            )}
          </>
        )}

        {council.events && council.events.length > 0 && (
          <>
            <h2 className="mt-14 mb-6 text-3xl font-bold">Events</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {council.events.map((event, index) => (
                <div
                  key={index}
                  className="perspective relative h-[420px]"
                  onClick={() =>
                    setFlippedIndex(flippedIndex === index ? null : index)
                  }
                >
                  <div
                    className={`transform-style preserve-3d relative h-full w-full transition-transform duration-700 ${
                      flippedIndex === index ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front */}
                    <div className="absolute h-full w-full rounded-xl bg-white p-4 shadow-lg backface-hidden">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_ASSET_URL}${event.image}`}
                        alt={event.name}
                        width={400}
                        height={200}
                        className="h-48 w-full rounded-md object-cover"
                      />
                      <h3 className="mt-4 text-xl font-bold">{event.name}</h3>
                      <p className="text-sm text-gray-500">
                        {event.date} 
                      </p>
                    </div>

                    {/* Back */}
                    <div className="absolute flex h-full w-full rotate-y-180 flex-col justify-between rounded-xl bg-white p-4 shadow-xl backface-hidden">
                      <p className="mb-4 overflow-auto text-sm text-gray-800">
                        {event.description}
                      </p>
                      {event.report && (
                        <a
                          href={`${process.env.NEXT_PUBLIC_ASSET_URL}${event.report}`}
                          download
                          className="mx-auto block rounded-full bg-blue-500 px-4 py-2 text-center text-white hover:bg-blue-600"
                        >
                          Download PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Tailwind extension for 3D flip */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  )
}
