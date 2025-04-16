'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Zilla_Slab } from 'next/font/google'
import {
  Clock,
  Phone,
  Users,
  FileText,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import Navigation from '@/components/navigation'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function LibraryPage() {
  const [showAdditionalServices, setShowAdditionalServices] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'Library', url: '/academics/library' },
  ]

  const quickLinks = [
    {
      label: 'Fr. Agnel College Library Blogs',
      url: 'http://fragnelcollegelibrary.blogspot.com/',
    },
    {
      label: 'Online Library Catalog (WebOPAC)',
      url: 'http://pustak.fragnel.edu.in:4040',
    },
    {
      label: 'PG Students Resource Hub - PG Pathsala',
      url: 'http://epgp.inflibnet.ac.in/',
    },
    {
      label: 'Rare Books Society of India',
      url: 'http://www.rarebooksocietyofindia.org/',
    },
    {
      label: 'IEEE Xplore',
      url: 'http://www.ieee.org/ieeexplore',
    },
    {
      label: 'ASME',
      url: 'http://asmedigitalcollection.asme.org/',
    },
    {
      label: 'National Digital Library',
      url: 'https://ndl.iitkgp.ac.in/',
    },
    {
      label: 'Knimbus e-Library',
      url: 'http://frcrce.knimbus.com',
    },
    {
      label: 'Question Paper Archive - Before 2021',
      url: '/questionpaper/ArchUE.php',
    },
    {
      label: 'May-22, Dec-22, May-23 and Honors University Papers',
      url: '/index.php/may-22-dec-22-and-honors-university-papers',
    },
    {
      label: 'AICTE recommended e-Books [Free Download]',
      url: 'https://ekumbh.aicte-india.org/index.php',
    },
  ]

  const services = [
    { name: 'Home Lending of Books' },
    { name: 'Open Access of Books' },
    { name: 'Reference and information system' },
    { name: 'Book bank scheme' },
    { name: 'Reservation of Books' },
    { name: 'Display of New Arrival of Books' },
  ]

  const additionalServices = [
    { name: 'Current Awareness system (CAS)' },
    { name: 'Selective dissemination of Information (SDI)' },
    { name: 'Reprographic Facility' },
    { name: 'Online Public Access Catalogue (Web OPAC)' },
    { name: 'Internet Facility' },
    { name: 'E-Journals, Ebooks' },
    { name: 'Bound Volume Periodicals' },
    { name: 'Display of Current content of Journals' },
    { name: 'Availability of Syllabus and question papers' },
    { name: 'Multimedia center' },
    { name: 'Newspaper clippings' },
    { name: "CD's of Technical topics" },
    { name: 'Wi-fi facility' },
    { name: 'CCTV Facility' },
    { name: 'National Digital library' },
    { name: 'Newspapers' },
  ]

  // Sample carousel images - replace with actual library images
  const carouselImages = [
    { src: '/infracse/computinglab.jpg', alt: 'Library Main Hall' },
    { src: '/infracse/computinglab.jpg', alt: 'Library Main Hall' },
    { src: '/infracse/computinglab.jpg', alt: 'Library Main Hall' },
    { src: '/infracse/computinglab.jpg', alt: 'Library Main Hall' },
  ]

  const toggleAdditionalServices = () => {
    setShowAdditionalServices(!showAdditionalServices)
  }

  interface Section {
    name: string
  }

  const toggleSection = (section: string): void => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselImages.length - 1 ? 0 : prevSlide + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselImages.length - 1 : prevSlide - 1
    )
  }

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900 mt-44">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-12 md:pt-16">
        <div className="flex w-full flex-col px-4 sm:px-8 md:px-16 lg:px-24 pb-6 md:pb-8 text-[#00122a]">
          <h1 className={`mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}>
            LIBRARY
          </h1>
         
        </div>
      </div>

      <div className="container mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-24 py-4 md:py-8">
        {/* Carousel */}
        <div className="relative mb-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative h-[300px] md:h-[400px] w-full">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute h-full w-full transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <button
              className="bg-opacity-50 hover:bg-opacity-70 absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black p-2 text-white transition-all"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="bg-opacity-50 hover:bg-opacity-70 absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black p-2 text-white transition-all"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute right-0 bottom-4 left-0 flex justify-center space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    index === currentSlide
                      ? 'bg-white'
                      : 'bg-opacity-50 bg-white'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* About Library Section */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              About Our Library
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              Our college library serves as a central hub for academic
              resources, research materials, and digital services. With a vast
              collection of books, journals, and electronic resources, we aim to
              support the educational journey of our students and faculty
              members. The library is equipped with modern facilities and
              provides a conducive environment for learning and intellectual
              growth.
            </p>
          </div>
        </div>

        {/* Two-Column Layout for Content and Links */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content Column */}
          <div className="md:col-span-2">
            {/* Library Services Section */}
            <div className="bg-white rounded-lg shadow-lg mb-8">
              <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
                  Library Services & Facilities
                </h2>
                <div className="grid gap-y-4 md:grid-cols-2 md:gap-x-6">
                  <div>
                    <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
                      <li>Home Lending of Books</li>
                      <li>Open Access of Books</li>
                      <li>Reference and information system</li>
                      <li>Book bank scheme</li>
                      <li>Reservation of Books</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
                      <li>E-Journals, Ebooks</li>
                      <li>Bound Volume Periodicals</li>
                      <li>Display of Current content of Journals</li>
                      <li>Availability of Syllabus and question papers</li>
                      <li>Multimedia center</li>
                    </ul>
                  </div>
                </div>
                
                {showAdditionalServices && (
                  <div className="mt-4">
                    <div className="grid gap-y-4 md:grid-cols-2 md:gap-x-6">
                      <div>
                        <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
                          <li>Current Awareness system (CAS)</li>
                          <li>Newspaper clippings</li>
                          <li>Selective dissemination of Information (SDI)</li>
                          <li>Reprographic Facility</li>
                          <li>Online Public Access Catalogue (Web OPAC)</li>
                          <li>Internet Facility</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
                          <li>CD's of Technical topics</li>
                          <li>Wi-fi facility</li>
                          <li>CCTV Facility</li>
                          <li>National Digital library</li>
                          <li>Newspapers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-6 text-center">
                  <button
                    className="inline-block rounded-full bg-[#4a90e2] px-6 py-3 font-semibold text-white transition-all hover:bg-[#357abd]"
                    onClick={toggleAdditionalServices}
                  >
                    {showAdditionalServices
                      ? 'Hide Additional Services'
                      : 'View All Services'}
                  </button>
                </div>
              </div>
            </div>

            {/* Resources Sections */}
            <div className="bg-white rounded-lg shadow-lg mb-8">
              <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
                  Library Resources
                </h2>
                
                <div className="mb-4">
                  <button
                    className="flex w-full items-center justify-between p-3 text-left"
                    onClick={() => toggleSection('orientation')}
                  >
                    <h3 className={`text-md md:text-lg font-semibold ${activeSection === 'orientation' ? 'text-[#043874]' : 'text-[#001a38]'}`}>
                      User Orientation & Book Exhibition
                    </h3>
                    <span className="ml-2 text-[#043874]">
                      {activeSection === 'orientation' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>
                  
                  {activeSection === 'orientation' && (
                    <div className="p-3">
                      <p className="text-sm md:text-base text-gray-700 mb-2">
                        First-year students are given orientation about the
                        library rules, services, and facilities. They are taken
                        on a library tour, informed about various sections, and
                        the rules to be followed.
                      </p>
                      <p className="text-sm md:text-base text-gray-700">
                        Additionally, a book exhibition is organized for
                        students to explore new titles and research materials
                        relevant to their courses.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="mb-4">
                  <button
                    className="flex w-full items-center justify-between p-3 text-left"
                    onClick={() => toggleSection('print')}
                  >
                    <h3 className={`text-md md:text-lg font-semibold ${activeSection === 'print' ? 'text-[#043874]' : 'text-[#001a38]'}`}>
                      Print Collection
                    </h3>
                    <span className="ml-2 text-[#043874]">
                      {activeSection === 'print' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>
                  
                  {activeSection === 'print' && (
                    <div className="p-3">
                      <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
                        <li>Over 20,000 books covering all disciplines</li>
                        <li>Current and bound journals</li>
                        <li>Magazines and newspapers</li>
                        <li>Reference materials</li>
                        <li>Theses and dissertations</li>
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="mb-4">
                  <button
                    className="flex w-full items-center justify-between p-3 text-left"
                    onClick={() => toggleSection('digital')}
                  >
                    <h3 className={`text-md md:text-lg font-semibold ${activeSection === 'digital' ? 'text-[#043874]' : 'text-[#001a38]'}`}>
                      Digital Resources
                    </h3>
                    <span className="ml-2 text-[#043874]">
                      {activeSection === 'digital' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>
                  
                  {activeSection === 'digital' && (
                    <div className="p-3">
                      <ul className="text-sm md:text-base text-gray-700 list-disc pl-5 space-y-2">
                        <li>E-books and e-journals</li>
                        <li>Online databases</li>
                        <li>Digital repositories</li>
                        <li>Multimedia resources</li>
                        <li>Online question papers</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-lg mb-8">
              <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
                  Quick Links
                </h2>
                <ul className="text-sm md:text-base text-gray-700 space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index} className="border-b border-gray-200 pb-2">
                      <Link
                        href={link.url}
                        className="text-[#012146] hover:text-[#357abd]"
                        target={link.url.startsWith('http') ? '_blank' : '_self'}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#012146] w-full">
              Contact Information
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Librarian Info */}
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-[#012146]">
                  Librarian
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-2">Ms. G. Jothilakshmi</p>
                <p className="text-sm md:text-base text-gray-700 flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  022-642114114
                </p>
              </div>

              {/* Library Hours */}
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-[#012146]">
                  Library Hours
                </h3>
                <div className="text-sm md:text-base text-gray-700">
                  <p>Monday - Friday: 8:15 AM to 6:00 PM</p>
                  <p>(Exam Period: 8:15 AM to 7:00 PM)</p>
                  <p>Saturday: 8:15 AM to 4:30 PM</p>
                </div>
              </div>

              {/* Committee Members */}
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-[#012146]">
                  Committee
                </h3>
                <div className="text-sm md:text-base text-gray-700">
                  <p><span className="font-medium">Chairman:</span> Dr. V.S. Jorapur</p>
                  <p><span className="font-medium">Secretary:</span> Mrs. G. Jothilakshmi</p>
                  <p><span className="font-medium">Members:</span> Prof. Prasad Lalit & Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}