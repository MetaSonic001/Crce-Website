'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import '@/components/style.css'
import { Zilla_Slab } from 'next/font/google'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import {
  AboutcseDepartment,
  hodsDesk,
  programs,
} from '@/components/Departments/CSE/data'
import { useMediaQuery } from '@/components/hooks/useMediaQuery'

// Component imports
import AboutHOD from '@/components/Departments/CSE/AboutHOD'
import PreIncubationCenter from '@/components/Departments/CSE/PreincubationCentre'
import Publications from '@/components/Departments/Publications'
import VisionAndMission from '@/components/Departments/CSE/VisionAndMission'
import PEOsPOsPSOs from '@/components/Departments/CSE/PEOsPOsPSOs'
import NBAAccreditations from '@/components/Departments/CSE/NBAAccreditations'
import InnovativeTeachingLearning from '@/components/Departments/InnovativeTeachingLearning'
import NotableAlumnus from '@/components/Departments/NotableAlumnus'
import MentorMentee from '@/components/Departments/MentorMentee'
import FDPSDPPrograms from '@/components/Departments/FDPSDPPrograms'
import AchievementsTab from '@/components/Departments/AchievementsTab'
import IndustrialVisits from '@/components/Departments/IndustrialVisits'
import DepartmentsNotices from '@/components/Departments/DepartmentsNotices'
import Infrastructure from '@/components/Departments/CSE/Infrastructure'
import PlacementsInternshipsTab from '@/components/Departments/PlacementsInternshipsTab'
import DepartmentInitiave from '@/components/Departments/CSE/DepartmentInitiative'
import FacultyDevProg from '@/components/Departments/FacultyDevProg'
import StudentDevProg from '@/components/Departments/StudentDevProg'
import Faculty from '@/components/Departments/Faculty'
import DynamicSidebar from '@/components/Departments/Sidebar'
import { BookOpen, Users } from 'lucide-react'

// Font configuration
const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

// Tab configuration
const TABS = [
  { id: 'about', title: 'About Computer Science and Engineering Department' },
  { id: 'hoddesk', title: "HOD's Desk" },
  { id: 'visionandmission', title: 'Vision and Mission' },
  { id: 'peos_pos_psos', title: 'PEOs, POs and PSOs' },
  { id: 'faculty', title: 'Faculty' },
  { id: 'infrastructure', title: 'Infrastructure' },
  { id: 'research_publications', title: 'Research Publications and Patents' },
  { id: 'pre_incubation', title: 'Pre-Incubation' },
  { id: 'placements', title: 'Placements and Internships' },
  { id: 'nba_accreditations', title: 'Accreditations' },
  { id: 'innovative_teaching', title: 'Innovative Teaching Learning' },
  { id: 'notable_alumni', title: 'Notable Alumni' },
  { id: 'department_notices', title: 'Department Notices' },
  { id: 'department_initiative', title: 'Department Initiatives' },
  { id: 'faculty_dev_prog', title: 'Faculty Development Programs' },
  { id: 'student_dev_prog', title: 'Student Development Programs' },
]

// Main component
const CSEPage = () => {
  const department = 'cse'
  const router = useRouter()
  const searchParams = useSearchParams()
  const path = usePathname()
  const tab = searchParams.get('tab') || 'about'
  const isMobile = useMediaQuery('(max-width: 768px)')

  // Component: About Department
  interface AboutDepartmentProps {
    name: string
    description: string
    extendedDescription?: string
    video?: string | boolean
  }

  const AboutDepartmentContainer = ({
    name,
    description,
    extendedDescription,
    video,
  }: AboutDepartmentProps) => (
    <div className="container mx-auto px-4 py-8 text-justify sm:px-6">
      <h2
        className={`${zilla.className} mb-6 ml-2 text-3xl font-bold text-[#131929] sm:ml-6 sm:text-4xl md:text-5xl`}
      >
        {name}
      </h2>

      <div className="mb-6 overflow-hidden rounded-lg bg-white p-4 shadow-md sm:p-6">
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              {description}
            </p>
          </div>

          {video && (
            <div className="md:w-1/2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <video
                  className="absolute inset-0 h-full w-full"
                  src="/compsdepttour.mp4"
                  muted
                  autoPlay
                  loop
                  playsInline
                  title="Department Video"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {extendedDescription && (
        <div className="rounded-lg bg-white p-4 text-justify shadow-md sm:p-6">
          <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
            {extendedDescription}
          </p>
        </div>
      )}
    </div>
  )

  // Component: Program Card
  interface ProgramCardProps {
    title: string
    description: string[]
    icon: React.ReactNode
    buttons: { label: string; onClick: () => void }[]
  }

  const ProgramCard: React.FC<ProgramCardProps> = ({
    title,
    description,
    icon,
    buttons,
  }) => (
    <div className="mb-8 w-full px-2 sm:px-3 lg:mb-0 lg:w-1/3">
      <div className="h-full rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg sm:p-6">
        <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EBF2FF] text-[#131929] sm:h-10 sm:w-10">
          {icon}
        </div>
        <h2 className="mb-3 text-base font-medium text-[#131929] sm:text-lg">
          {title}
        </h2>
        <ul className="mb-5 flex-grow list-inside list-disc space-y-1 text-sm leading-relaxed text-gray-600 sm:text-base">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={btn.onClick}
              className="inline-flex items-center rounded border-0 bg-[#131929] px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-[#1F2942] focus:outline-none sm:px-4 sm:text-sm"
            >
              {btn.label}
              <svg
                className="ml-1 h-3 w-3 sm:h-4 sm:w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  // Handle changing tabs via URL
  const handleTabChange = (tabId: string) => {
    router.push(`${path}?tab=${tabId}`, { scroll: false })
  }
  // Render the active tab content
  const renderTabContent = () => {
    switch (tab) {
      case 'about':
        return <AboutDepartmentContainer {...AboutcseDepartment} />
      case 'hoddesk':
        return <AboutHOD {...hodsDesk} />
      case 'visionandmission':
        return <VisionAndMission />
      case 'peos_pos_psos':
        return <PEOsPOsPSOs />
      case 'faculty':
        return <Faculty department={department} />
      case 'infrastructure':
        return <Infrastructure />
      case 'research_publications':
        return <Publications department={department} />
      case 'pre_incubation':
        return <PreIncubationCenter />
      case 'placements':
        return <PlacementsInternshipsTab department={department} />
      case 'nba_accreditations':
        return <NBAAccreditations />
      case 'innovative_teaching':
        return <InnovativeTeachingLearning department={department} />
      case 'faculty_dev_prog':
        return <FacultyDevProg department={department} />
      case 'student_dev_prog':
        return <StudentDevProg department={department} />
      case 'department_initiative':
        return <DepartmentInitiave />
      case 'notable_alumni':
        return <NotableAlumnus department={department} />
      case 'department_notices':
        return <DepartmentsNotices department={department} />
      default:
        return <AboutDepartmentContainer {...AboutcseDepartment} />
    }
  }

  // Section: Program Highlights
  const ProgramHighlights = () => (
    <div className="bg-[#F9FAFC] px-4 py-8 text-gray-600 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-20">
      <div className="container mx-auto px-2 sm:px-5">
        <div className="relative mb-8 flex items-center justify-center sm:mb-12">
          <div className="absolute top-1/2 left-0 hidden h-px w-1/5 bg-gray-300 sm:block"></div>
          <h2
            className={`${zilla.className} mx-2 text-center text-2xl font-bold text-[#131929] sm:mx-8 sm:text-3xl md:text-4xl`}
          >
            Programs Offered
          </h2>
          <div className="absolute top-1/2 right-0 hidden h-px w-1/5 bg-gray-300 sm:block"></div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row lg:flex-row">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              icon={program.icon}
              buttons={program.button}
            />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex-row text-black">
      {/* Hero section */}
      <section className="hero relative flex min-h-screen items-center justify-center overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/college2.avif"
            alt="Campus background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority // Load the hero image first
            className="animate-ken-burns" // Apply Ken Burns animation
          />
          {/* Improved gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#131929] via-[#131929]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center px-4 md:px-12">
          <h1
            className="animate-fade-in-up mb-4 text-4xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            COMPUTER SCIENCE AND ENGINEERING
          </h1>
          <p
            className="animate-fade-in-up animation-delay-300 mb-8 max-w-2xl text-base font-light text-gray-200 drop-shadow-md sm:text-lg md:text-xl"
          >
            Where logic meets innovation to build tomorrow's intelligent systems.
          </p>
          <div className="animate-fade-in-up animation-delay-500 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Programs
            </button>
            <button
              onClick={() => { handleTabChange('faculty'); document.getElementById('faculty')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center justify-center rounded-lg border border-white bg-white/10 px-6 py-3 text-base font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <Users className="mr-2 h-5 w-5" />
              Meet The Faculty
            </button>
          </div>
        </div>

        {/* Angled divider to transition to the next section */}
        <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-2 transform bg-white md:-skew-y-1"></div>
      </section>

      {/* Main content section */}
      <section className="w-full bg-white">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:pt-10 md:pl-10">
          {/* Dynamic Sidebar navigation */}
          <div className="sticky top-0 h-screen w-auto">
            <DynamicSidebar
              tabs={TABS}
              activeTab={tab}
              onTabChange={handleTabChange}
              basePath={path}
            />
          </div>

          {/* Desktop content area */}
          <div className="mx-2 max-h-screen flex-1 overflow-y-auto">
            <div id={tab} className="container mx-auto">
              {renderTabContent()}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Mobile Navigation */}
          <div className="border-b border-gray-200 bg-white">
            <div className="px-4 py-3">
              <h2 className="mb-3 text-lg font-semibold text-gray-800">
                Navigation
              </h2>
              <select
                value={tab}
                onChange={(e) => handleTabChange(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                {TABS.map((tabItem) => (
                  <option key={tabItem.id} value={tabItem.id}>
                    {tabItem.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile content area */}
          <div className="bg-white px-4 py-6">
            <div id={`mobile-${tab}`} className="container mx-auto">
              {renderTabContent()}
            </div>
          </div>
        </div>

        {/* Program Highlights Section */}
        <div id="programs">
          <ProgramHighlights />
        </div>

        {/* Achievements Section */}
        <div className="bg-white px-4 py-8 sm:px-8 md:px-12 lg:px-20" id="AchievementsTab">
          <div className="my-8 h-min overflow-hidden sm:my-12">
            <AchievementsTab department={department} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default CSEPage
