'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  ChevronRight,
  X,
  Menu,
  ArrowLeft,
  Home,
  Book,
  Search,
  Users,
  GraduationCap,
  NewspaperIcon,
  Calendar,
  Briefcase,
  Phone,
  MoveRight,
  Globe,
  Info,
  School,
  UserPlus,
  UserCheck,
  Target,
  Building2,
  FileText,
  FileCheck2,
  BookOpen,
  FileSignature,
  ClipboardCheck,
  Award,
  FlaskConical,
  BadgeCheck,
  Library,
  MessageSquare,
  FolderGit2,
  Bell,
  MessageCircleWarning,
  Cpu,
  CircuitBoard,
  Cog,
  Atom,
  Code2,
  CreditCard,
  Images,
  ScrollText,
  Folder,
  Lightbulb,
} from 'lucide-react'

import { dropdownContent } from '@/app/actions/data'

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [dropdown, setDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)

  const [visible, setVisible] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const url = `${pathname}`
    console.log('URL changed:', url)

    // Close dropdown and mobile menus on URL change
    setDropdown(null)
    setMobileMenuOpen(false)
    setMobileSubmenu(null)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10

      setVisible(visible)
      setPrevScrollPos(currentScrollPos)
      setHasScrolled(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const handleDropdown = (menu: string) => {
    if (dropdown === menu) {
      setDropdown(null)
    } else {
      setDropdown(menu)
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setMobileSubmenu(null)
  }

  const openMobileSubmenu = (menu: string) => {
    setMobileSubmenu(menu)
  }

  const closeMobileSubmenu = () => {
    setMobileSubmenu(null)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 z-50 hidden w-full bg-[hsl(224,37%,12%)]/90 font-semibold text-white transition-transform duration-300 ease-in-out lg:block ${hasScrolled
          ? visible
            ? 'translate-y-0'
            : '-translate-y-full'
          : '-translate-y-full'
          }`}
      >
        <div className="flex flex-col px-20">
          <div className="flex h-1/3 items-center justify-between px-6 pt-3 pb-1.5">
            <div className="flex space-x-6 text-sm">
              <Link
                href="http://granth.fragnel.edu.in:5186/pinfo/index.php"
                className="transition duration-300 hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Students Information
              </Link>
              <Link
                href="https://frcrce.ac.in/images/2023/02/College_Committees_2023-24.pdf"
                className="transition duration-300 hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Faculty & Staff
              </Link>

              <Link
                href="https://alumni.frcrce.ac.in/"
                className="transition duration-300 hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alumni
              </Link>
              <Link
                href="/academics/examination"
                className="transition duration-300 hover:text-yellow-300"
              >
                Examinations
              </Link>
              <Link
                href="http://mail.crce.edu.in/webMail/"
                className="transition duration-300 hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Student Mail Service
              </Link>
              <Link
                href="http://mail.google.com/a/fragnel.edu.in/"
                className="transition duration-300 hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agnel Staff E-mail
              </Link>
            </div>
            <Link
              href="/Admissions"
              className="scale-75 rounded-md bg-yellow-500 px-6 py-2 font-bold text-black transition duration-300 hover:bg-yellow-600 lg:scale-100"
            >
              <div className="flex flex-row items-center space-x-2">
                <span>Admissions</span>
                <MoveRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
          </div>
          <div className="border-t border-gray-700"></div>
          <div className="flex h-2/3">
            <div className="flex w-1/4 items-center justify-center">
              <Link href="/">
                <Image
                  src="/clogo.png"
                  alt="SRM Logo"
                  width={150}
                  height={150}
                  className="scale-x-125"
                />
              </Link>
            </div>
            <div className="flex w-3/4 flex-col pb-1.5">
              <div className="flex justify-end space-x-6 py-3 text-sm">
                <Link
                  href="/#events"
                  className="transition duration-300 hover:text-yellow-300"
                >
                  News and Events
                </Link>
                <Link
                  href="/#notices"
                  className="transition duration-300 hover:text-yellow-300"
                >
                  Notices
                </Link>
                {/* <Link
                  href="/careers"
                  className="transition duration-300 hover:text-yellow-300"
                >
                  Careers
                </Link> */}
                <Link
                  href="/about/contact-us"
                  className="transition duration-300 hover:text-yellow-300"
                >
                  Contact us
                </Link>
              </div>
              <div className="flex justify-center space-x-8 py-4 text-sm">
                {Object.keys(dropdownContent).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleDropdown(key)}
                    className="flex items-center space-x-1 text-base transition duration-300 hover:text-yellow-300"
                  >
                    <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <ChevronDown size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {dropdown && dropdownContent[dropdown] && (
        <div
          className={`fixed top-[147px] z-50 hidden w-full bg-white text-black shadow-lg transition-all duration-300 ease-out lg:block ${hasScrolled
            ? visible
              ? 'md:translate-y-0'
              : 'md:-translate-y-[165px]'
            : 'md:-translate-y-full'
            }`}
        >
          <div className="container mx-auto px-8 pt-9 pb-11">
            <button
              className="absolute top-8 right-8 text-xl text-gray-600 hover:text-gray-800"
              onClick={() => setDropdown(null)}
            >
              <X size={30} />
            </button>
            <div className="mb-6">
              <h2 className="text-3xl font-bold capitalize">{dropdown}</h2>
            </div>
            <ul className="grid grid-cols-3 gap-x-8 gap-y-4">
              {dropdownContent[dropdown].map((item, index) => (
                <li key={index} className="group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 text-lg font-semibold transition duration-300 hover:text-blue-600"
                    target={item.target}
                    rel={item.rel}
                  >
                    <span className="text-blue-500 transition-colors duration-300 group-hover:text-blue-600">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                    <ChevronRight
                      className="ml-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      size={20}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}{' '}
      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 z-50 w-full bg-[hsl(224,37%,12%)]/90 font-semibold text-white capitalize transition-transform duration-300 ease-in-out lg:hidden ${hasScrolled
          ? visible
            ? 'translate-y-0'
            : '-translate-y-full'
          : '-translate-y-full'
          }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/">
            <Image
              src="/clogo.png"
              alt="Logo"
              width={150}
              height={50}
              className="h-auto w-auto"
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 transition-colors hover:bg-gray-800"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform overflow-y-auto bg-gray-900 text-white capitalize transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col p-4">
          <div className="flex items-center justify-between pb-6">
            <Image
              src="/clogo.png"
              alt="Logo"
              width={150}
              height={50}
              className="h-auto w-auto"
            />
            <button
              className="p-2 transition-colors hover:bg-gray-800"
              onClick={toggleMobileMenu}
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Menu Items */}
          {Object.keys(dropdownContent).map((key) => (
            <button
              key={key}
              onClick={() => openMobileSubmenu(key)}
              className="flex items-center justify-between border-b border-gray-700 py-3 pb-2 text-left text-sm font-medium transition-colors hover:bg-gray-800"
            >
              <span>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <ChevronRight size={20} />
            </button>
          ))}

          {/* Additional Links */}
          <div className="mt-6 space-y-2">
            <Link href="/notices" className="block py-2 text-sm">
              Notices
            </Link>
            <Link
              href="http://granth.fragnel.edu.in:5186/pinfo/index.php"
              className="block py-2 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Students Information
            </Link>
            <Link
              href="https://frcrce.ac.in/images/2023/02/College_Committees_2023-24.pdf"
              className="block py-2 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faculty & Staff
            </Link>

            <Link
              href="https://alumni.frcrce.ac.in/"
              className="block py-2 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alumni
            </Link>
            <Link href="/academics/examination" className="block py-2 text-sm">
              Examinations
            </Link>
            <Link
              href="http://mail.crce.edu.in/webMail/"
              className="block py-2 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Mail Service
            </Link>
            <Link
              href="http://mail.google.com/a/fragnel.edu.in/"
              className="block py-2 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agnel Staff E-mail
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Submenu */}
      <div
        className={`fixed inset-0 z-50 transform overflow-y-auto bg-gray-800 text-white capitalize transition-transform duration-300 ease-in-out lg:hidden ${mobileSubmenu ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {mobileSubmenu && dropdownContent[mobileSubmenu] && (
          <div className="flex flex-col p-4">
            <button
              className="flex items-center pb-6 text-sm font-medium"
              onClick={closeMobileSubmenu}
            >
              <ArrowLeft size={24} className="mr-2" />
              Back
            </button>
            <h2 className="pb-4 text-2xl font-bold">
              {mobileSubmenu.replace(/([A-Z])/g, ' $1').trim()}
            </h2>
            {dropdownContent[mobileSubmenu].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center space-x-3 border-b border-gray-700 py-3 pb-2 text-sm transition-colors hover:bg-gray-700"
                onClick={toggleMobileMenu}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
