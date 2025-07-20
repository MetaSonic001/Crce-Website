import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import Image from 'next/image'

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

const PostGraduateAdmissionsPage = () => {
  const navigationItems = [
    { label: 'Admission', url: '/' },
    { label: 'Postgraduate', url: '/admission/postgraduate' },
  ]

  const mtechDocuments = [
    {
      title: 'M.Tech CAP Reporting Procedure',
      description: 'Download the complete M.Tech CAP reporting procedure document.',
      link: '/Mtech.pdf',
      buttonText: 'Download PDF',
    },
    {
      title: 'M.Tech CAP Reporting Form',
      description: 'Fill out the M.Tech CAP reporting form online.',
      link: 'http://granth.fragnel.edu.in:5186/pinfo/meadm/MEMnu.php',
      buttonText: 'Go to Form',
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
              POST GRADUATE ADMISSIONS
            </h1>
            <p className="mb-8 text-lg text-gray-100 sm:text-xl md:text-2xl">
              Advance your career with our Masters programs in Engineering
            </p>
            <a
              href="#mtech-admissions"
              className="inline-block rounded-full bg-white px-6 py-2 font-semibold text-[#001f3f] transition-colors hover:bg-gray-100 sm:px-8 sm:py-3"
            >
              Explore M.Tech Programs
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-3 transform bg-gray-100"></div>
      </section>

      {/* M.Tech Section */}
      <section id="mtech-admissions" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className={`mb-8 text-3xl font-bold text-[#001a3c] sm:mb-12 sm:text-4xl`}>
            Masters of Technology (M.Tech)
          </h2>

          {/* Program Overview */}
          <div className="mb-12 rounded-lg bg-white p-6 shadow-md sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-[#131929] sm:text-2xl">
              Program Overview
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>The college offers M.Tech Degree Course in:</strong>
              </p>
              <ul className="list-inside list-disc pl-4 space-y-1">
                <li>Computer Engineering</li>
              </ul>
              <p>
                Allotment of seats for the Masters Program will be done through the centralized process.
              </p>
              <p className="text-[#001f3f] font-semibold">
                51% of the centralized admission seats are under Minority Quota.
              </p>
            </div>
          </div>

          {/* Eligibility Section */}
          <div className="mb-12 rounded-lg bg-white p-6 shadow-md sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-[#131929] sm:text-2xl">
              Eligibility Criteria
            </h3>
            <p className="mb-4 text-gray-700">
              <strong>As per the Directives of the DTE/Competent Authority/Regulatory Authority:</strong>
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-700 pl-4">
              <li>Candidate should be an Indian National</li>
              <li>
                Passed Bachelor Degree in the relevant field of Engineering and
                Technology from AICTE or Central or State Government approved
                institutions or equivalent, with at least 50% marks (at least
                45% marks in case of candidates of Backward Class categories,
                Economically weaker section and Persons with Disability category
                belonging to Maharashtra State)
              </li>
              <li>
                Obtained score in the GATE examination in respective qualifying
                branch valid for the current academic year.
              </li>
            </ul>
          </div>

          {/* Documents Required */}
          <div className="mb-12 rounded-lg bg-white p-6 shadow-md sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-[#131929] sm:text-2xl">
              Documents Required
            </h3>
            <div className="mb-6 rounded-lg bg-blue-50 p-4 border-l-4 border-blue-500">
              <p className="font-semibold text-[#001f3f] mb-2">Vacant Seats after CAP Rounds</p>
              <p className="text-gray-700 text-sm">
                Vacant Seats after the Centralized Admission Process will be
                filled by the Institute as per the guidelines provided in the
                "Rules & Institute Information Brochure for the Academic year
                2024-25" by DTE/ARA/Govt. of Maharashtra.
              </p>
            </div>
            <ul className="list-inside list-disc space-y-2 text-gray-700 pl-4 text-sm sm:text-base">
              <li>S.S.C, H.S.C./Diploma, B.E. Mark sheets (All Semesters) and BE Degree Certificate</li>
              <li>Leaving/Transference Certificate from the previous College</li>
              <li>'Migration Certificate' applicable to candidates who have obtained B.E. Degree from other than the University of Mumbai</li>
              <li>GATE Score Card</li>
              <li>Certificate of Indian Nationality OR Indian Passport OR College Leaving Certificate indicating Nationality as 'Indian'</li>
              <li>Maharashtra State Domicile Certificate OR Birth Certificate indicating Birth Place in Maharashtra</li>
              <li>Certificates of Proforma A, E, F, F-1, F-2 as applicable</li>
              <li>Undertaking in Proforma B, C, D as applicable</li>
              <li>Copy of Aadhaar Card</li>
              <li>Physical/Medical Fitness Certificate from a registered Medical Practitioner</li>
              <li>Duly signed printout of Anti-ragging Affidavit submitted online on www.antiragging.in</li>
              <li>Proof of Income for the previous year (if applicable for financial benefits)</li>
            </ul>
          </div>

          {/* Action Cards */}
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            {mtechDocuments.map((item, index) => (
              <AdmissionCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PostGraduateAdmissionsPage