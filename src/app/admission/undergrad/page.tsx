'use client'
import Image from 'next/image'
import { Zilla_Slab } from 'next/font/google'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import ChatBot from './chatBot'
import getAdmissions from '@/app/api/admissions'
import type { Admission } from '@/app/api/admissions'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const quickLinks = [
  {
    name: 'FE Admission Process',
    url: 'https://www.youtube.com/live/thjcEVavoGg?si=EdlsDXKJZa1665Jc',
  },
  { name: 'Education Loan', url: '/admission/Education.mp4' },
  { name: 'Prospectus 23-24', url: '/admission/CRCEProspectus2024.pdf/' },
  { name: 'Medical Certificate', url: '/admission/Medical_certificate.pdf' },
  { name: 'Listen to Leadership team', url: '/admission/leadership' },
]

const ASSET_BASE_URL = process.env.NEXT_PUBLIC_ASSET_URL || ''
const getAssetUrl = (filename: string) => `${ASSET_BASE_URL}${filename}`

type AdmissionCardProps = {
  title: string
  description: string
  link: string
  buttonText: string
}

type ProcessedAdmission = {
  title: string
  description: string
  link: string
  buttonText: string
}

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  const { data: admissions, isLoading, error } = useQuery({
    queryKey: ['admissions'],
    queryFn: getAdmissions,
    staleTime: 6 * 60 * 60 * 1000, // 6 hours
    gcTime: 6 * 60 * 60 * 1000, // 6 hours (formerly cacheTime)
  })

  // Process admissions data
  const processAdmissions = (admissions: Admission[]): {
    feAdmissions: ProcessedAdmission[]
    dseAdmissions: ProcessedAdmission[]
    otherInfo: ProcessedAdmission[]
  } => {
    const feAdmissions: ProcessedAdmission[] = []
    const dseAdmissions: ProcessedAdmission[] = []
    const otherInfo: ProcessedAdmission[] = []

    admissions?.forEach((admission) => {
      const processedAdmission: ProcessedAdmission = {
        title: admission.title,
        description: admission.description,
        link: admission.file ? getAssetUrl(admission.file) : (admission.link || '#'),
        buttonText: getButtonText(admission.type, admission.file, admission.link)
      }

      if (admission.section === "First Year Engineering (FE) Admissions through CAP") {
        feAdmissions.push(processedAdmission)
      } else if (admission.section === "Direct Second Year (DSE) Admissions through CAP") {
        dseAdmissions.push(processedAdmission)
      } else {
        otherInfo.push(processedAdmission)
      }
    })

    return { feAdmissions, dseAdmissions, otherInfo }
  }

  const getButtonText = (type: string, file: string | null, link: string | null): string => {
    if (file) {
      if (type === 'pdf') return 'Open PDF'
      return 'Download File'
    }

    if (type === 'form') return 'Go to Form'
    if (type === 'pdf') return 'Open PDF'
    if (type === 'link') return 'Open Link'

    return 'View More'
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-100">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-xl text-gray-600">Loading admissions data...</div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-100">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-xl text-red-600">Error loading admissions data. Please try again later.</div>
        </div>
      </main>
    )
  }

  const { feAdmissions, dseAdmissions, otherInfo } = processAdmissions(admissions || [])

  return (
    <main className="min-h-screen bg-gray-100">
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="fixed right-4 bottom-4 z-50 rounded-full bg-[#131929] p-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-hidden"
        >
          FAQs
        </button>
      )}

      {isChatbotOpen && (
        <div className="fixed right-0 bottom-4 z-50 h-[500px] rounded-lg p-2 sm:h-[600px] sm:w-[550px] md:right-4">
          <ChatBot onClose={() => setIsChatbotOpen(false)} />
        </div>
      )}

      <section className="hero relative min-h-screen overflow-hidden bg-gray-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={'/college2.avif'}
            alt="Campus background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative z-10 container mx-auto flex h-full flex-col justify-center px-6 py-24 sm:px-12 sm:py-32 md:px-20 md:py-40 lg:px-28 lg:py-48">
          <div className="mt-20 max-w-3xl sm:mt-32 md:mt-40 lg:mt-52">
            <h1 className="mb-6 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              MOULDING ENGINEERS WHO CAN BUILD THE NATION
            </h1>
            <p className="mb-8 text-lg text-gray-100 sm:text-xl md:text-2xl">
              Join a community of innovative thinkers and future leaders at
              FR.CRCE
            </p>
            <a
              href="#admissions"
              className="inline-block rounded-full bg-white px-6 py-2 font-semibold text-[#001f3f] transition-colors hover:bg-gray-100 sm:px-8 sm:py-3"
            >
              Explore Admissions
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-3 transform bg-gray-100"></div>
      </section>

      <section id="admissions" className="py-5">
        <div className="container mx-auto px-4">
          <h2
            className={`mb-8 text-3xl font-bold text-[#001a3c] sm:mb-12 sm:text-4xl`}
          >
            Admissions
          </h2>

          {/* First Year Engineering (FE) Admissions */}
          {feAdmissions.length > 0 && (
            <div className="mb-12 sm:mb-16">
              <h3
                className={`mb-6 text-xl font-bold text-[#001a3c] sm:mb-8 sm:text-2xl`}
              >
                First Year Engineering (FE) Admissions through CAP
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {feAdmissions.map((item, index) => (
                  <AdmissionCard key={`fe-${index}`} {...item} />
                ))}
              </div>
            </div>
          )}

          {/* Direct Second Year (DSE) Admissions */}
          {dseAdmissions.length > 0 && (
            <div className="mb-12 sm:mb-16">
              <h3
                className={`mb-6 text-xl font-bold text-[#001a3c] sm:mb-8 sm:text-2xl`}
              >
                Direct Second Year (DSE) Admissions through CAP
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {dseAdmissions.map((item, index) => (
                  <AdmissionCard key={`dse-${index}`} {...item} />
                ))}
              </div>
            </div>
          )}

          {/* Other Important Information */}
          {otherInfo.length > 0 && (
            <div className="mb-12 sm:mb-16">
              <h3
                className={`mb-6 text-xl font-bold text-[#001a3c] sm:mb-8 sm:text-2xl`}
              >
                Other Important Information
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {otherInfo.map((item, index) => (
                  <AdmissionCard key={`other-${index}`} {...item} />
                ))}
              </div>
            </div>
          )}

          {/* Show message if no admissions data */}
          {admissions && admissions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No admission information available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white px-6 py-12 sm:px-12 sm:py-16 md:px-20 lg:px-28">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Quick Links Section */}
            <div className="container mx-auto">
              <h2 className="mb-6 text-xl font-bold text-[#001a3c] sm:mb-8 sm:text-2xl">
                Quick Links
              </h2>
              <div className="flex flex-col space-y-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="rounded-lg bg-gray-50 p-4 font-semibold text-[#131929] transition-all hover:bg-blue-50 hover:text-[#131929] hover:shadow-md"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const AdmissionCard = ({
  title,
  description,
  link,
  buttonText,
}: AdmissionCardProps) => (
  <div className="flex flex-col rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
    <h4 className="mb-2 text-lg font-bold text-[#131929] sm:text-xl">
      {title}
    </h4>
    <p className="mb-4 grow text-sm text-gray-600 sm:text-base">
      {description}
    </p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-block rounded-full bg-[#001a3c] px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-[#002452] sm:px-6"
    >
      {buttonText}
    </a>
  </div>
)

