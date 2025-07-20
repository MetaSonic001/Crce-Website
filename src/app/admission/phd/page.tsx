import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import Image from 'next/image'
import Link from 'next/link'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

type AdmissionCardProps = {
  title: string
  description: string
  link: string
  buttonText: string
}

const PhDAdmissionsPage = () => {
  const navigationItems = [
    { label: 'Admission', url: '/' },
    { label: 'Ph.D.', url: '/admission/phd' },
  ]

  const phdActions = [
    {
      title: 'View Selected Candidates',
      description: 'Check the list of selected candidates for Ph.D. programs.',
      link: '/phd/candidates.pdf',
      buttonText: 'View PDF',
    },
    {
      title: 'Apply for Ph.D. Program',
      description: 'Start your Ph.D. application process online.',
      link: 'https://admission.fragnel.edu.in/PhDAdmission/Apply/index.php',
      buttonText: 'Apply Now',
    },
  ]

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
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
              Ph.D. ADMISSIONS
            </h1>
            <p className="mb-8 text-lg text-gray-100 sm:text-xl md:text-2xl">
              Pursue cutting-edge research in Engineering at FR.CRCE
            </p>
            <a
              href="#phd-programs"
              className="inline-block rounded-full bg-white px-6 py-2 font-semibold text-[#001f3f] transition-colors hover:bg-gray-100 sm:px-8 sm:py-3"
            >
              Explore Ph.D. Programs
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-3 transform bg-gray-100"></div>
      </section>

      {/* Ph.D. Programs Section */}
      <section id="phd-programs" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className={`mb-8 text-3xl font-bold text-[#001a3c] sm:mb-12 sm:text-4xl`}>
            Ph.D. Programmes
          </h2>

          {/* Program Overview */}
          <div className="mb-12 rounded-lg bg-white p-6 shadow-md sm:p-8">
            <h3 className="mb-6 text-center text-xl font-bold text-[#131929] sm:text-2xl">
              The college offers Ph.D. programmes in:
            </h3>
            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              <div className="rounded-lg bg-[#001f3f] p-4 text-center text-white">
                <h4 className="font-bold text-lg">Mechanical Engineering</h4>
              </div>
              <div className="rounded-lg bg-[#001f3f] p-4 text-center text-white">
                <h4 className="font-bold text-lg">Electronics Engineering</h4>
              </div>
              <div className="rounded-lg bg-[#001f3f] p-4 text-center text-white">
                <h4 className="font-bold text-lg">Computer Engineering</h4>
              </div>
            </div>

            {/* Ph.D. Admissions Image */}
            <div className="my-8 flex justify-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/phd/PhD_2023.jpg"
                  alt="Ph.D. Admissions"
                  width={800}
                  height={450}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            {phdActions.map((item, index) => (
              <AdmissionCard key={index} {...item} />
            ))}
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

export default PhDAdmissionsPage