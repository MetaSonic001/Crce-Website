'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { adi, shaun, sharu, zane } from '@/app/files/files'

// Alumni data with actual images and information
const alumniData = [
  {
    id: 1,
    name: "John D'Souza",
    graduation: 'Class of 2005',
    achievement: 'CEO at Tech Solutions Inc.',
    image: adi,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    graduation: 'Class of 1998',
    achievement: 'Research Director at Innovation Labs',
    image: shaun,
  },
  {
    id: 3,
    name: 'Rahul Mehta',
    graduation: 'Class of 2010',
    achievement: 'Founder of StartUp Hub',
    image: sharu,
  },
]

export default function FamousAlumni() {
  return (
    <>
      <div className="w-3/4 border-t border-gray-300"></div>

      {/* Unified section for both mobile and desktop */}
      <section className="relative w-full overflow-hidden px-4 pt-16 pb-20 md:pt-21 h-[90vh] md:h-screen">
        <div className="relative container mx-auto h-full">
          {/* Responsive Title */}
          <h2 className="absolute top-4 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 md:top-20 z-10 text-center font-serif text-3xl md:text-5xl font-bold text-blue-900">
            Our Distinguished <br /> Alumni
          </h2>

          {/* Responsive Base Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-52 md:h-full md:w-[30%] md:left-1/3 md:top-0 md:translate-x-0 md:translate-y-0 overflow-hidden rounded-lg shadow-lg">
            <div className="relative h-full w-full">
              <Image
                src={zane}
                alt="College historical view"
                fill
                className="object-cover opacity-80"
              />
            </div>
          </div>

          {/* Responsive Description Card -- THIS IS THE CORRECTED ELEMENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm p-4 md:p-6 rounded-lg bg-white shadow-xl md:top-[50%] md:left-1/2 lg:left-[55%] md:mt-0 md:w-72 md:translate-x-0 h-auto"
          >
            <h3 className="mb-3 text-lg font-bold text-blue-800">
              Excellence in Every Field
            </h3>
            <p className="mb-4 text-sm text-slate-700">
              Our alumni have achieved remarkable success across various
              industries. Their accomplishments showcase our institution's
              legacy of excellence.
            </p>
            <div className="mb-4 h-1 w-16 bg-blue-600" />
            <Link
              href={'https://alumni.frcrce.ac.in/'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Connect with Alumni
            </Link>
          </motion.div>

          {/* Alumni Cards - Now visible on all screen sizes */}
          <div>
            {alumniData.map((alumni, index) => (
              <motion.div
                key={alumni.id}
                initial={{
                  opacity: 0,
                  x: (index - 1) * 50,
                  y: 50,
                  rotate: (index - 1) * 10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  y: {
                    repeat: Infinity,
                    duration: 8,
                    ease: 'easeInOut',
                  },
                }}
                className={`absolute ${getPosition(index)} z-20 overflow-hidden rounded-lg shadow-lg`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={alumni.image}
                    alt={alumni.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
                    <p className="font-bold text-white text-sm md:text-base">
                      {alumni.name}
                    </p>
                    <p className="text-xs text-white/80 md:text-sm">
                      {alumni.achievement}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements - Hidden on mobile for a cleaner look */}
          <div className="hidden md:block">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: 'easeInOut',
              }}
              className="absolute right-0 -bottom-18 z-0 h-32 w-32 rounded-full bg-blue-100/70"
            />
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: 'easeInOut',
              }}
              className="absolute top-12 -left-24 z-0 h-48 w-48 rounded-full bg-blue-100/70"
            />
          </div>
        </div>
      </section>
    </>
  )
}

// Helper function with responsive positioning
function getPosition(index: number) {
  // Base classes for card size, responsive for mobile and desktop
  const size = 'w-36 h-48 md:w-60 md:h-72'

  const positions = [
    `top-[20%] -left-8 md:left-25 md:bottom-12 md:top-auto transform -rotate-10 ${size}`,
    `top-10 -right-8 md:right-40 md:top-0 transform rotate-5 ${size}`,
    `bottom-24 -right-2 md:right-12 md:bottom-0 transform rotate-8 ${size}`,
  ]
  return positions[index] || ''
}

