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
  Mail,
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
      label: 'The Knowledge Library',
      url: 'https://www.theknowledgelibrary.in/',
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
      label: 'Science Direct',
      url: 'https://www.sciencedirect.com/',
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
      label: 'Directory of Open Access of Books',
      url: 'https://www.doabooks.org',
    },
    {
      label: 'Directory of Open Access of Journals',
      url: 'https://doaj.org/',
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
    {
      label: 'Printed National and International Journals',
      url: 'https://frcrce.ac.in/index.php/academics/library/printed-journals/nijmp',  
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
    <div className="mt-25 flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900 md:mt-44">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-12 md:pt-16">
        <div className="flex w-full flex-col px-4 pb-6 text-[#00122a] sm:px-8 md:px-16 md:pb-8 lg:px-24">
          <h1
            className={`mb-4 flex items-center justify-center text-center font-serif text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl`}
          >
            LIBRARY
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full px-4 py-4 sm:px-8 md:px-16 md:py-8 lg:px-24">
        {/* Carousel */}
        <div className="relative mb-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative h-[300px] w-full md:h-[400px]">
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
        <div className="mb-8 rounded-lg bg-white shadow-lg">
          <div className="p-4 md:p-6">
            <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
              About Our Library
            </h2>
            <p className="text-sm text-gray-700 md:text-base">
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
            <div className="mb-8 rounded-lg bg-white shadow-lg">
              <div className="p-4 md:p-6">
                <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
                  Library Services & Facilities
                </h2>
                <div className="grid gap-y-4 md:grid-cols-2 md:gap-x-6">
                  <div>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
                      <li>Home Lending of Books</li>
                      <li>Open Access of Books</li>
                      <li>Reference and information system</li>
                      <li>Book bank scheme</li>
                      <li>Reservation of Books</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
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
                        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
                          <li>Current Awareness system (CAS)</li>
                          <li>Newspaper clippings</li>
                          <li>Selective dissemination of Information (SDI)</li>
                          <li>Reprographic Facility</li>
                          <li>Online Public Access Catalogue (Web OPAC)</li>
                          <li>Internet Facility</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
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
            <div className="mb-8 rounded-lg bg-white shadow-lg">
              <div className="p-4 md:p-6">
                <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
                  Library Resources
                </h2>

                <div className="mb-4">
                  <button
                    className="flex w-full items-center justify-between p-3 text-left"
                    onClick={() => toggleSection('orientation')}
                  >
                    <h3
                      className={`text-md font-semibold md:text-lg ${activeSection === 'orientation' ? 'text-[#043874]' : 'text-[#001a38]'}`}
                    >
                      User Orientation & Book Exhibition
                    </h3>
                    <span className="ml-2 text-[#043874]">
                      {activeSection === 'orientation' ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {activeSection === 'orientation' && (
                    <div className="p-3">
                      <p className="mb-2 text-sm text-gray-700 md:text-base">
                        First-year students are given orientation, regarding the
                        Library rules, services and facilities when they come
                        for the First Year. A Students are taken to Library
                        batch-wise on separate days and students are taken on
                        Library Tour, informing them about various sections,
                        services, and rules to be followed in Library. Students
                        are made to visit the Internet center and are informed
                        about the cyber rules to be followed in the Internet
                        center.
                      </p>
                      <p className="text-sm text-gray-700 md:text-base">
                        Additionally, a book exhibition is conducted every year
                        since 2008. Students and Staff Members visit the
                        exhibition every year, and the lucky draw is conducted
                        among the visitors and books are distributed as Prizes.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <button
                    className="flex w-full items-center justify-between p-3 text-left"
                    onClick={() => toggleSection('print')}
                  >
                    <h3
                      className={`text-md font-semibold md:text-lg ${activeSection === 'print' ? 'text-[#043874]' : 'text-[#001a38]'}`}
                    >
                      Print Collection
                    </h3>
                    <span className="ml-2 text-[#043874]">
                      {activeSection === 'print' ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {activeSection === 'print' && (
                    <div className="p-3">
                      <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
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
                    onClick={() => toggleSection('infrastructure')}
                  >
                    <h3
                      className={`text-md font-semibold md:text-lg ${activeSection === 'infrastructure' ? 'text-[#043874]' : 'text-[#001a38]'}`}
                    >
                      Infrastructure
                    </h3>
                    <span className="ml-2 text-[#043874]">
                      {activeSection === 'infrastructure' ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {activeSection === 'infrastructure' && (
                    <div className="p-3">
                      <p className="mb-2 text-sm text-gray-700 md:text-base">
                        <li>Carpet Area of Library : 400 mtr sqr.</li>
                        <li>Reading Space of Library : 167 mtr sqr.</li>
                        <li>
                          Online Facility : Attached Internet Center with 35
                          Desktop Systems
                        </li>
                      </p>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <button
                    className="flex w-full items-center justify-between p-3 text-left"
                    onClick={() => toggleSection('bookbank')}
                  >
                    <h3
                      className={`text-md font-semibold md:text-lg ${activeSection === 'bookbank' ? 'text-[#043874]' : 'text-[#001a38]'}`}
                    >
                      Book Bank
                    </h3>
                    <span className="ml-2 text-[#043874]">
                      {activeSection === 'print' ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {activeSection === 'bookbank' && (
                    <div className="p-3">
                      <p className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
                        Book Bank facility is available for all Students starting from III sem to VII sem. Two or more books are distributed for students every semester. Books are issued for one semester and book bank books should be returned after the of the semester. No money is collected for the above service. </p>
                        <p className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
Number of Books available in Book Bank: 6183 
</p>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <button
                    className="flex w-full items-center justify-between p-3 text-left"
                    onClick={() => toggleSection('digital')}
                  >
                    <h3
                      className={`text-md font-semibold md:text-lg ${activeSection === 'digital' ? 'text-[#043874]' : 'text-[#001a38]'}`}
                    >
                      Digital Resources
                    </h3>
                    <span className="ml-2 text-[#043874]">
                      {activeSection === 'digital' ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {activeSection === 'digital' && (
                    <div className="p-3">
                      <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
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
            <div className="mb-8 rounded-lg bg-white shadow-lg">
              <div className="p-4 md:p-6">
                <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
                  Quick Links
                </h2>
                <ul className="space-y-2 text-sm text-gray-700 md:text-base">
                  {quickLinks.map((link, index) => (
                    <li key={index} className="border-b border-gray-200 pb-2">
                      <Link
                        href={link.url}
                        className="text-[#012146] hover:text-[#357abd]"
                        target={
                          link.url.startsWith('http') ? '_blank' : '_self'
                        }
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
<div className="mt-10 mb-8  rounded-lg bg-white p-6 shadow-lg">
  <div className="p-4 md:p-6">
    <h2 className="mb-6 text-lg font-semibold text-[#012146] md:text-xl">
      General Rules and Regulations
    </h2>
    <div className="grid gap-6 md:grid-cols-2">
      {/* Column 1 */}
      <ol className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
        <li>An identity card is compulsory for getting access to the library.</li>
        <li>Silence to be maintained. No group discussions allowed inside the library.</li>
        <li>Enter your name and sign in the register kept at the entrance.</li>
        <li>Textbooks, printed materials, and issued material are not allowed inside the library.</li>
        <li>Use of cell phones is not allowed.</li>
        <li>No library material can be taken outside the library.</li>
        <li>Photocopying of books can be done by producing coupons collected from the office.</li>
        <li>Documents taken off the shelves must be left on the table. Do not reshelve books.</li>
        <li>Violating the rules may result in suspension from using the library.</li>
      </ol>

      {/* Column 2 */}
      <ol className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base" start={8}>
        
        <li><strong>CIRCULATION ISSUE SYSTEMS:</strong> Books are issued on ID cards. Students must check books before borrowing and are responsible for any damage.</li>
        <li>B.E. students may issue 2 books for one week; M.E. students may issue 4 books. Renewal is allowed once.</li>
        <li><strong>OVERDUE CHARGES:</strong> Items must be returned by the due date. Late returns will incur a fine.</li>
        <li><strong>BOOK LOST:</strong> If a book is lost, it must be replaced or paid for at twice its cost.</li>
        <li><strong>LOSS OF ID CARD:</strong> Report to the librarian immediately. A duplicate may be issued for Rs. 140/-.</li>
        <li>The librarian may recall any book at any time.</li>
        
      </ol>
    </div>
  </div>
</div>



        {/* Contact Info Section */}
        <div className="mb-8 rounded-lg bg-white shadow-lg">
          <div className="p-4 md:p-6">
            <h2 className="mb-4 w-full text-lg font-semibold text-[#012146] md:text-xl">
              Contact Information
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Librarian Info */}
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#012146] md:text-lg">
                  Librarian
                </h3>
                <p className="mb-2 text-sm text-gray-700 md:text-base">
                  Ms. G. Jothilakshmi
                </p>
                <p className="flex items-center text-sm text-gray-700 md:text-base">
                  <Phone className="mr-2 h-4 w-4" />
                  022-642114114
                </p>
                <p className="flex items-center text-sm text-gray-700 md:text-base">
                  <Mail className="mr-2 h-4 w-4" />
                  jyothilakshmi@frcrce.ac.in
                </p>
              </div>

              {/* Library Hours */}
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#012146] md:text-lg">
                  Library Hours
                </h3>
                <div className="text-sm text-gray-700 md:text-base">
                  <p>
                    <b>Non Exam Period : </b>Monday - Friday: 8:15 AM to 6:00 PM
                  </p>
                  <p>
                    <b>Exam Period : </b> Monday - Friday: 8:15 AM to 7:00 PM
                  </p>
                  <p>
                    <b>All Saturdays :</b> 8:15 AM to 4:30 PM
                  </p>
                </div>
              </div>

              {/* Committee Members */}
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#012146] md:text-lg">
                  Committee
                </h3>
                <div className="text-sm text-gray-700 md:text-base">
                  <p>
                    <span className="font-medium">Chairman:</span> Dr. Hemant
                    Khanolkar
                  </p>
                  <p>
                    <span className="font-medium">Convenor / Secretary:</span>{' '}
                    Mrs. G. Jothilakshmi - Librarian
                  </p>
                  <p>
                    <span className="font-medium">Members:</span>
                    <li>Prof. Binsy Joseph</li>
                    <li>Prof. Supriya Kamoji</li>
                    <li>Prof. Sarika Daware</li>
                    <li>Mr. Amit Kumar Sonawane</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
