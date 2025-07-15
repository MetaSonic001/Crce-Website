'use client'

import Image from 'next/image'
import { Zilla_Slab } from 'next/font/google'
import { useState, useEffect } from 'react'
import getOneProjectGroup, {
  type OneProjectGroup,
} from '@/app/api/singleProjectGroup'
import { Globe } from 'lucide-react'
import { Markdown } from '@/components/markdown'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function ProjectGroupDetails({
  params,
}: {
  params: { id: string }
}) {
  const [showAllMembers, setShowAllMembers] = useState(false)
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)
  const [council, setCouncil] = useState<OneProjectGroup>()

  useEffect(() => {
    const fetchCouncil = async () => {
      const data = await getOneProjectGroup(params.id)
      setCouncil(data)
    }
    fetchCouncil()
  }, [params.id])

  if (!council) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    )
  }

  const visibleMembers = showAllMembers
    ? council.members
    : council.members?.slice(0, 4)
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main
        className={`flex-grow bg-white px-8 pt-[100px] lg:pt-[180px] ${zilla.className}`}
      >
        <div className="mt-4 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="md:w-2/3">
            <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-5xl font-bold text-transparent">
              {council.name}
            </h1>
            <div className="prose prose-blue max-w-none text-lg text-gray-600">
              <Markdown>{council.data}</Markdown>
            </div>
            {council.website && (
              <a
                href={
                  council.website.startsWith('http')
                    ? council.website
                    : `https://${council.website}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-all hover:bg-blue-700 hover:shadow-lg"
              >
                <Globe className="h-4 w-4" />
                Visit Website
              </a>
            )}
          </div>
          <div className="relative z-10 mt-2 flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-2xl border-2 border-blue-200 bg-white p-4 shadow-lg transition-transform hover:scale-105 md:mt-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSET_URL}${council.image}`}
              alt={`${council.name} Logo`}
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>

        {council.members && council.members.length > 0 && (
          <section className="mt-16 mb-12">
            <h2 className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-center text-4xl font-bold text-transparent">
              Our Team
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {visibleMembers?.map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:ring-blue-300"
                >
                  <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_ASSET_URL}${member.image}`}
                      alt={member.name}
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg leading-snug font-bold text-gray-900">
                      {member.name}
                    </p>
                    <p className="font-medium text-blue-600">{member.role}</p>
                    <p className="text-sm text-gray-500">{member.class}</p>
                  </div>
                </div>
              ))}
            </div>
            {!showAllMembers && council.members.length > 4 && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setShowAllMembers(true)}
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
                >
                  View All Members
                </button>
              </div>
            )}
          </section>
        )}

        {council.events && council.events.length > 0 && (
          <section className="mt-16 mb-12">
            <h2 className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-center text-4xl font-bold text-transparent">
              Events & Activities
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {council.events.map((event, index) => (
                <div
                  key={index}
                  className="perspective relative h-[450px] cursor-pointer"
                  onClick={() =>
                    setFlippedIndex(flippedIndex === index ? null : index)
                  }
                >
                  <div
                    className={`transform-style preserve-3d relative h-full w-full transition-all duration-700 ${
                      flippedIndex === index ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front */}
                    <div className="absolute h-full w-full rounded-2xl bg-white p-6 ring-1 ring-gray-200 transition-transform duration-300 backface-hidden hover:scale-105 hover:ring-blue-300">
                      <div className="relative h-72 w-full overflow-hidden rounded-xl">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_ASSET_URL}${event.image}`}
                          alt={event.name}
                          width={1000}
                          height={1000}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="mt-4 space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {event.name}
                        </h3>
                        <p className="font-medium text-blue-600">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                          Click to view details
                        </p>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="absolute flex h-full w-full rotate-y-180 flex-col rounded-2xl bg-white p-6 ring-1 ring-gray-200 backface-hidden">
                      <h3 className="mb-4 text-2xl font-bold text-gray-900">
                        {event.name}
                      </h3>
                      <p className="flex-grow overflow-auto leading-relaxed text-gray-600">
                        {event.description}
                      </p>
                      {event.report && (
                        <a
                          href={`${process.env.NEXT_PUBLIC_ASSET_URL}${event.report}`}
                          download
                          className="mt-6 block rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-center font-semibold text-white transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
                        >
                          Download Report
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <style jsx>{`
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
