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

interface DropdownItem {
  name: string
  href: string
  icon?: React.ReactNode
  target?: string
  rel?: string
}

interface DropdownContent {
  [key: string]: DropdownItem[]
}

const dropdownContent: DropdownContent = {
  About: [
    {
      name: 'About CRCE',
      href: '/about/about-crce',
      icon: <Info size={18} />,
    },
    {
      name: "From Director's ",
      href: '/about/from-directors',
      icon: <UserPlus size={18} />,
    },
    {
      name: 'Principal- Dr. Surendra Singh Rathod',
      href: '/about/principal',
      icon: <UserCheck size={18} />,
    },
    {
      name: 'Vision and Mission',
      href: '/about/vision-and-mission',
      icon: <Target size={18} />,
    },
    {
      name: 'Administration',
      href: '/about/administration',
      icon: <Building2 size={18} />,
    },
    {
      name: 'General Information',
      href: '/about/general-information',
      icon: <FileText size={18} />,
    },
    {
      name: "List of MOU's",
      href: '/about/mou',
      icon: <FileSignature size={18} />,
    },
    {
      name: 'Mandatory Disclosure',
      href: '/about/mandatory-disclosure',
      icon: <FileCheck2 size={18} />,
    },
    {
      name: 'Contact Us',
      href: '/about/contact-us',
      icon: <Phone size={18} />,
    },
    {
      name: 'Public File Browser',
      href: '/folders',
      icon: <Folder size={18} />,
    },
  ],
  Academics: [
    {
      name: 'Autonomous Curriculum',
      href: '/academics/autonomous/syllabus',
      icon: <BookOpen size={18} />,
    },
    {
      name: 'Autonomous Rules',
      href: '/academics/autonomous/rules-and-policies',
      icon: <ScrollText size={18} />,
    },
    // {
    //   name: 'IIC',
    //   href: '/academics/iic',
    //   icon: <Lightbulb size={18} />,
    // },
    {
      name: 'Academic/Holiday Calender',
      href: '/academics/calendar',
      icon: <Calendar size={18} />,
    },
    {
      name: 'Examination',
      href: '/academics/grading-process',
      icon: <ClipboardCheck size={18} />,
    },
    {
      name: 'Teaching Learning Process',
      href: '/academics/teaching',
      icon: <GraduationCap size={18} />,
    },
    {
      name: 'NAAC',
      href: '/academics/naac',
      icon: <Award size={18} />,
    },
    {
      name: 'Research & Development',
      href: '/academics/research',
      icon: <FlaskConical size={18} />,
    },
    {
      name: 'Lesson Plan',
      href: '/academics/lesson',
      icon: <BookOpen size={18} />,
    },
    {
      name: 'IQAC-CRCE',
      href: '/academics/IQAC',
      icon: <BadgeCheck size={18} />,
    },
    {
      name: 'Library',
      href: '/academics/library',
      icon: <Library size={18} />,
    },
  ],
  Students: [
    {
      name: 'Campus Placements',
      href: '/international/programs',
      icon: <Briefcase size={18} />,
    },
    {
      name: 'Councils',
      href: '/students/councils',
      icon: <UserPlus size={18} />,
    },
    {
      name: 'Project Groups',
      href: '/students/project_teams',
      icon: <FolderGit2 size={18} />,
    },
    {
      name: 'Alumni',
      href: 'https://alumni.frcrce.ac.in',
      icon: <UserCheck size={18} />,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      name: 'Notices',
      href: '/students/notices',
      icon: <Bell size={18} />,
    },
    {
      name: 'Students Information',
      href: '/students/student-info',
      icon: <FileText size={18} />,
    },
    {
      name: 'Grievances',
      href: '/students/grievance-policy',
      icon: <MessageCircleWarning size={18} />,
    },
  ],
  Departments: [
    {
      name: 'Computer Engineering',
      href: '/AboutDepartment/ComputerDepartment',
      icon: <Cpu size={18} />,
    },
    {
      name: 'Electronics and Computer Science',
      href: '/AboutDepartment/EcsDepartment',
      icon: <CircuitBoard size={18} />,
    },
    {
      name: 'Mechanical Engineering',
      href: '/AboutDepartment/MechanicalDepartment',
      icon: <Cog size={18} />,
    },
    {
      name: 'Computer Science and Engineering',
      href: '/AboutDepartment/CseDepartment',
      icon: <Code2 size={18} />,
    },
    {
      name: 'Science and Humanities',
      href: '/AboutDepartment/ScienceAndHumanities',
      icon: <Atom size={18} />,
    },
  ],
  Admission: [
    {
      name: 'Under Graduate',
      href: '/admission/undergrad',
      icon: <GraduationCap size={18} />,
    },
    {
      name: 'Post Graduate',
      href: '/admission/postgraduate',
      icon: <School size={18} />,
    },
    {
      name: 'Ph.D',
      href: '/admission/phd',
      icon: <Award size={18} />,
    },
  ],
  Online: [
    {
      name: 'Make Online Payment',
      href: 'https://pay.fragnel.edu.in/CRCE/initPay.php',
      icon: <CreditCard size={18} />,
    },
  ],
}

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
        className={`fixed top-0 z-50 hidden w-full bg-[hsl(224,37%,12%)]/90 font-semibold text-white transition-transform duration-300 ease-in-out lg:block ${
          hasScrolled
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
              >
                Students
              </Link>
              <Link
                href="https://frcrce.ac.in/images/2023/02/College_Committees_2023-24.pdf"
                className="transition duration-300 hover:text-yellow-300"
              >
                Faculty & Staff
              </Link>

              <Link
                href="https://alumni.frcrce.ac.in/"
                className="transition duration-300 hover:text-yellow-300"
              >
                Alumni
              </Link>
              <Link
                href="https://frcrce.ac.in/index.php/academics/examination/exam-process"
                className="transition duration-300 hover:text-yellow-300"
              >
                Examinations
              </Link>
              <Link
                href="https://mail.crce.edu.in/webMail/src/login.phpA"
                className="transition duration-300 hover:text-yellow-300"
              >
                Student Mail Service
              </Link>
              <Link
                href="https://ldap.fragnel.edu.in/sso/module.php/core/loginuserpass.php?AuthState=_6b157699dea50ff48aabaaecd16e081fa7068b966f%3Ahttps%3A%2F%2Fldap.fragnel.edu.in%2Fsso%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dgoogle.com%26cookieTime%3D1726659075%26RelayState%3Dhttps%253A%252F%252Fwww.google.com%252Fa%252Ffragnel.edu.in%252FServiceLogin%253Fservice%253Dmail%2526passive%253Dtrue%2526rm%253Dfalse%2526continue%253Dhttps%25253A%25252F%25252Fmail.google.com%25252Fmail%25252F%2526ss%253D1%2526ltmpl%253Ddefault%2526ltmplcache%253D2%2526emr%253D1%2526osid%253D1"
                className="transition duration-300 hover:text-yellow-300"
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
          className={`fixed top-[147px] z-50 hidden w-full bg-white text-black shadow-lg transition-all duration-300 ease-out lg:block ${
            hasScrolled
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
        className={`fixed top-0 z-50 w-full bg-[hsl(224,37%,12%)]/90 font-semibold text-white capitalize transition-transform duration-300 ease-in-out lg:hidden ${
          hasScrolled
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
        className={`fixed inset-0 z-50 transform overflow-y-auto bg-gray-900 text-white capitalize transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
            <Link href="/news" className="block py-2 text-sm">
              News
            </Link>
            <Link href="/events" className="block py-2 text-sm">
              Events
            </Link>
            <Link href="/careers" className="block py-2 text-sm">
              Work at FrCrce
            </Link>
            <Link href="/student-links" className="block py-2 text-sm">
              Student Links
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Submenu */}
      <div
        className={`fixed inset-0 z-50 transform overflow-y-auto bg-gray-800 text-white capitalize transition-transform duration-300 ease-in-out lg:hidden ${
          mobileSubmenu ? 'translate-x-0' : 'translate-x-full'
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
