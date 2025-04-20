'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Achievement } from '@/app/api/main_achievements'
import getAchievements from '@/app/api/main_achievements'

const fallbackAchievements: Achievement[] = [
  {
    id: 1,
    title: 'NAAC A+ Accreditation',
    description:
      'Fr. CRCE has been awarded an A+ grade by the National Assessment and Accreditation Council (NAAC) in recognition of its academic excellence and institutional quality.',
    date: '2023-12-08',
    image: '/crce-building.png',
    status: 'published',
  },
  {
    id: 2,
    title: 'NBA Accreditation',
    description:
      'The National Board of Accreditation (NBA) has accredited several programs at Fr. CRCE, ensuring that our courses meet the highest standards of quality and relevance.',
    date: '2023-12-08',
    image: '/crce-building.png',
    status: 'published',
  },
]

const formatMonthYear = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

const HomeAchievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const {
    data: achievements,
    isLoading,
    isError,
  } = useQuery<Achievement[]>({
    queryKey: ['achievements'],
    queryFn: () => getAchievements(''),
    staleTime: 1000 * 60 * 5,
    retry: false,
  })

  const isFetched =
    !isLoading && !isError && achievements && achievements.length > 0
  const items = isFetched ? achievements : fallbackAchievements

  const current = items[currentIndex]!

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const resolveImage = (img: string) =>
    isFetched ? `${process.env.NEXT_PUBLIC_ASSET_URL}${img}` : img

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="relative mt-10 mb-8 text-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 border-t border-gray-300"></div>
          </div>
          <h1 className="relative z-10 inline-block bg-white px-4 font-serif text-4xl text-gray-800">
            Achievements
          </h1>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 left-0 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl focus:outline-none lg:-left-15"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl focus:outline-none lg:-right-15"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-2xl bg-gray-50"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="relative h-64 w-full md:h-[400px] md:w-1/2">
                    <Image
                      src={resolveImage(current.image)}
                      alt={current.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                    <div className="mb-2 text-sm font-medium text-blue-600">
                      {formatMonthYear(current.date)}
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
                      {current.title}
                    </h3>
                    <p className="text-base text-gray-600 sm:text-lg">
                      {current.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="mt-4 flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-4 bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAchievements

