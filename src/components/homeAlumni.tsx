'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { adi, shaun, sharu, zane } from '@/app/files/files';
// import { shaun } from '@/app/files/filess';
// import { sharu } from '@files/files';
// import { zane } from '@files/files';


// Alumni data with actual images and information
const alumniData = [
  {
    id: 1,
    name: "John D'Souza",
    graduation: 'Class of 2005',
    achievement: 'CEO at Tech Solutions Inc.',
    image: adi, // Make sure to add actual images
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

      <section className="relative px-4 mb-36 md:mb-0 w-full h-screen pt-21 ">
        {/* Mobile Alumni Row - Visible only on mobile */}
        <div className="md:hidden">
          <h2 className="mb-6 text-center text-3xl font-bold text-blue-900">
            Our Distinguished Alumni
          </h2>
          <div className="flex overflow-x-auto gap-4 pb-6">
            {alumniData.map((alumni) => (
              <div 
                key={alumni.id} 
                className="flex-shrink-0 w-48 h-56 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={alumni.image}
                    alt={alumni.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="font-bold text-white">{alumni.name}</p>
                    <p className="text-xs text-white/80">
                      {alumni.achievement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main content - Adapts for mobile and desktop */}
        <div className="relative container mx-auto h-auto md:h-[650px]">
          <div className="relative h-full w-full">
            {/* Title - Visible on desktop, hidden on mobile */}
            <h2 className="hidden font-serif md:block absolute top-20 left-10 z-10 text-center text-5xl font-bold text-blue-900">
              Our Distinguished <br /> Alumni
            </h2>
            
            {/* Base Image */}
            <div className="mx-auto md:mx-0 md:absolute md:top-0 md:left-1/3 h-64 md:h-[100%] w-full md:w-[30%] overflow-hidden rounded-lg shadow-lg mt-6 md:mt-0">
              <div className="relative h-full w-full">
                <Image
                  src={zane}
                  alt="College historical view"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>

            {/* Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative md:absolute mt-6 md:mt-0 md:top-[70%] md:left-[55%] z-10 w-full md:w-72  rounded-lg bg-white p-6 shadow-xl"
            >
              <h3 className="mb-3 text-lg font-bold text-blue-800">
                Excellence in Every Field
              </h3>
              <p className="mb-4 text-slate-700 text-sm">
                Our alumni have achieved remarkable success across various
                industries, from technology and research to entrepreneurship and
                innovation. Their accomplishments showcase our institution's
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

            {/* Alumni Cards - Only visible on desktop */}
            <div className="hidden md:block">
              {alumniData.map((alumni, index) => (
              <motion.div
              key={alumni.id}
              initial={{
                opacity: 0,
                x: (index - 1) * 100,
                y: 50,
                rotate: (index - 1) * 5,
              }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: [0, -10, 0],  // Added floating animation
                // rotate: [(index - 1) * 5, (index - 1) * 5 + 5, (index - 1) * 5]  // Combined rotation
              }}
              transition={{ 
                duration: 0.7,
                delay: index * 0.2,
                y: {
                  repeat: Infinity,
                  duration: 8,
                  ease: 'easeInOut'
                },
                rotate: {
                  repeat: Infinity,
                  duration: 8,
                  ease: 'easeInOut'
                }
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
                    <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="font-bold text-white">{alumni.name}</p>
                      <p className="text-sm text-white/80">
                        {alumni.achievement}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative Elements - Hidden on mobile */}
          <div className="hidden md:block">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: 'easeInOut',
              }}
              className="absolute right-0 -bottom-18 z-0 h-32 w-32 rounded-full bg-blue-100/70"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -8, 0],
              }}
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

// Helper function to position alumni cards
function getPosition(index: number) {
  const positions = [
    'left-25 bottom-12 w-60 h-72 transform rotate-10',
    'right-40 top-0 w-60 h-72 transform rotate-2',
    'right-12 bottom-0 w-60 h-72 transform -rotate-7',
  ]
  return positions[index] || ''
}