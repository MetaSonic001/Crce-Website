'use client'
import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  BookOpenText,
  GraduationCap,
  School,
  UsersRound,
  PlayCircle,
} from 'lucide-react'
import Link from 'next/link'
import { college_pic } from '@/app/files/files'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Page() {
  const videoId = 'ZMDlPfqqAsY'
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <main
      className={`${montserrat.variable} min-h-screen bg-gradient-to-b from-blue-50 to-white pt-[191px] font-sans`}
    >
      {/* Hero Section - Enhanced with better typography and subtle animation */}
      <motion.div
        className="relative w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center">
            <motion.h1
              className="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Our College
            </motion.h1>
            <motion.div
              className="mx-auto h-1 w-16 bg-blue-600"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </div>
        </div>
      </motion.div>

      {/* About Section - Refined for more professional presentation */}
      <motion.div
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        {...fadeIn}
      >
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-[4/3] h-full w-full overflow-hidden">
              <Image
                alt="Fr. CRCE Campus"
                src={college_pic}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </div>
            <motion.div
              className="flex flex-col justify-center p-8 lg:p-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="mb-4 border-l-4 border-blue-600 pl-4 text-2xl font-bold text-gray-900">
                Academic Excellence & Innovation
              </h2>
              <div className="prose prose-lg max-w-none space-y-4 leading-relaxed text-gray-700">
                <p>
                  Fr. Conceicao Rodrigues College of Engineering (Fr.CRCE)
                  stands as a premier institution in Mumbai's educational
                  landscape, offering cutting-edge engineering programs with a
                  focus on industry relevance and research innovation.
                </p>
                <p>
                  Established in 1984, our institution has evolved from a single
                  Production Engineering program to a comprehensive technical
                  complex offering specialized degrees in Electronics, Computer
                  Science, Information Technology, Mechanical Engineering, and
                  our newest programs in AI & Data Science (2020) and Doctoral
                  studies (2023).
                </p>
                <p>
                  Our commitment to academic excellence is reflected in our
                  consistent 'A' grade accreditation from NAAC and NBA, high
                  rankings in national surveys by TOI and INDIA TODAY, and
                  recognition in the prestigious NIRF rankings in 2017 and 2020.
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-blue-100 p-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    Accredited by NBA and NAAC with grade 'A'
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section - Enhanced with better card design and animations */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              At A Glance
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              The Numbers That Define Our Excellence
            </p>
            <div className="mx-auto mb-16 h-1 w-16 bg-blue-600" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: 'Graduates',
                value: '9000+',
                icon: GraduationCap,
                color: 'blue',
              },
              {
                label: 'Programs',
                value: '8',
                icon: BookOpenText,
                color: 'indigo',
              },
              { label: 'Classrooms', value: '23', icon: School, color: 'teal' },
              {
                label: 'Students',
                value: '1200+',
                icon: UsersRound,
                color: 'purple',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`absolute -top-4 -right-4 h-24 w-24 rounded-full bg-${stat.color}-500/10 transition-transform group-hover:scale-150`}
                />
                <div
                  className={`rounded-full p-3 bg-${stat.color}-100 mb-4 inline-block`}
                >
                  <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
                </div>
                <p className="mt-4 text-4xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tour Section - Enhanced with better video container and play button */}
      <div className="bg-white py-16">
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Take A Tour
            </h2>
            <p className="mb-2 text-lg text-gray-600">
              Our Campus: A Living Laboratory for Sustainability
            </p>
            <p className="mb-6 text-gray-500">
              Located at Bandstand, Bandra, Mumbai in a picturesque environment
              surrounded by the Arabian Sea
            </p>
            <div className="mx-auto mb-12 h-1 w-16 bg-blue-600" />
          </div>

          <Link
            href={`https://youtu.be/${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 block"
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={thumbnailUrl}
                  alt="Campus Tour Video Thumbnail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <PlayCircle className="h-16 w-16 text-white sm:h-24 sm:w-24" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-lg font-medium text-white">
                    Explore our campus facilities and environment
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Contact CTA - New but follows existing layout pattern */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="overflow-hidden rounded-2xl bg-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 text-center sm:p-10">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Ready to join our community?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
                Discover how Fr. CRCE can help you achieve your academic and
                professional goals.
              </p>
              <Link href="/contact">
                <motion.button
                  className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
