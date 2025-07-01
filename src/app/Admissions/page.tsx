import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
//
const Page = () => {
  const navigationItems = [
    { label: 'PhD Admission', url: '/admission/phd' },
    { label: 'Postgraduate Admission', url: '/admission/postgraduate' },
    { label: 'Undergraduate Admission', url: '/admission/undergrad' },
  ]

  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-gray-50 to-[#E5F0FF] text-gray-900">
      <div
        className="flex h-full w-full flex-col bg-linear-to-br from-[#001f3f] to-[#003366] pt-16 md:flex-row md:pt-36"
        id="admission"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            ADMISSIONS & AID
          </h1>
          <Navigation items={navigationItems} />{' '}
        </div>
        <div className="relative mt-8 mb-8 flex w-full flex-col justify-center space-y-6 rounded-lg bg-white p-8 shadow-2xl md:mt-32 md:mr-16 md:mb-16 md:w-1/3 lg:p-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-[#4a90e2] px-8 py-2 text-white">
            <h2
              className={`${zilla.className} text-xl font-semibold whitespace-nowrap lg:text-2xl`}
            >
              Enquiry Form
            </h2>
          </div>
          <p className="mt-4 text-center text-gray-600">
            We're here to help you with your admissions journey
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeuMdBmOTPctxKaNDsalCcxJhYanCHf_tQGzw_Eg1JK5Spf2A/viewform"
            target='_blank'
            rel="noopener noreferqrer"
            className="rounded-full bg-linear-to-r from-[#4a90e2] to-[#357abd] px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:from-[#357abd] hover:to-[#4a90e2] hover:shadow-lg md:text-base"
          >
            Fill Out Enquiry Form
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="hidden w-full border-r border-gray-200 p-6 md:block md:w-1/4 lg:p-8">
          <h2
            className={`${zilla.className} mb-6 text-xl font-bold text-[#001f3f] lg:text-2xl`}
          >
            Quick Links
          </h2>
          <nav className="flex flex-col">
            <Link
              href="/about/about-crce"
              className="border-b border-gray-200 py-2 text-sm text-gray-600 hover:text-[#001f3f] lg:text-base"
            >
              About CRCE
            </Link>
            <Link
              href="/about/administration"
              className="border-b border-gray-200 py-2 text-sm text-gray-600 hover:text-[#001f3f] lg:text-base"
            >
              Administration
            </Link>
            <Link
              href="/about/from-directors"
              className="border-b border-gray-200 py-2 text-sm text-gray-600 hover:text-[#001f3f] lg:text-base"
            >
              From Director's Desk
            </Link>
            <Link
              href="/about/general-information"
              className="border-b border-gray-200 py-2 text-sm text-gray-600 hover:text-[#001f3f] lg:text-base"
            >
              General Information
            </Link>
            <Link
              href="/about/contact-us"
              className="border-b border-gray-200 py-2 text-sm text-gray-600 hover:text-[#001f3f] lg:text-base"
            >
              Contact Us
            </Link>
            <Link
              href="/admission/phd"
              className="border-b border-gray-200 py-2 text-sm font-bold text-[#001f3f] lg:text-base"
            >
              PhD Admission
            </Link>
            <Link
              href="/admission/postgraduate"
              className="border-b border-gray-200 py-2 text-sm font-bold text-[#001f3f] lg:text-base"
            >
              Postgraduate Admission
            </Link>
            <Link
              href="/admission/undergrad"
              className="py-2 text-sm font-bold text-[#001f3f] lg:text-base"
            >
              Undergraduate Admission
            </Link>
          </nav>
        </div>
        <div className="grow p-6 text-[#534a43] md:p-8 lg:p-12">
          <div className="mx-auto max-w-3xl">
            {[
              {
                title: 'Undergraduate Admission',
                link: '/admission/undergrad',
              },
              {
                title: 'Postgraduate Admission',
                link: '/admission/postgraduate',
              },
              { title: 'PhD Admission', link: '/admission/phd' },
            ].map(({ title, link }, index) => (
              <div key={index} className="mb-12">
                <h2
                  className={`${zilla.className} mb-4 text-3xl font-bold text-[#001f3f] md:text-4xl lg:text-5xl`}
                >
                  {title}
                </h2>
                <p className="mb-6 text-base leading-relaxed md:text-lg">
                  {index === 0
                    ? 'We offer top-tier engineering programs for undergraduate students. Our admission process is based on CET/JEE Main scores, followed by counseling through the centralized admission process. Join us to build a strong foundation in engineering and technology.'
                    : index === 1
                      ? 'Our postgraduate programs are designed for those looking to specialize in their field of engineering. Admission is based on GATE scores and academic performance. Our faculty comprises experienced professionals and researchers, ensuring a high-quality education.'
                      : 'Our PhD programs are for those passionate about research and innovation in engineering. We offer full-time and part-time PhD options across various engineering disciplines. Admission is based on entrance tests, interviews, and research proposals.'}
                </p>
                <Link
                  href={link}
                  className="rounded-full bg-linear-to-r from-[#4a90e2] to-[#357abd] px-6 py-3 text-sm font-semibold text-white transition-all hover:from-[#357abd] hover:to-[#4a90e2] hover:shadow-lg md:text-base"
                >
                  MORE ABOUT {title.toUpperCase()}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
