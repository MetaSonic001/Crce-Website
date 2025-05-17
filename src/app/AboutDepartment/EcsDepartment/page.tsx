'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import '@/components/style.css'
import { Zilla_Slab } from 'next/font/google'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import {
  AboutecsDepartment,
  hodsDesk,
  programs,
} from '@/components/Departments/ECS/data'

// Component imports
import AboutHOD from '@/components/Departments/ECS/AboutHOD'
import PreIncubationCenter from '@/components/Departments/ECS/PreincubationCentre'
import Publications from '@/components/Departments/Publications'
import VisionAndMission from '@/components/Departments/ECS/VisionAndMission'
import PEOsPOsPSOs from '@/components/Departments/ECS/PEOsPOsPSOs'
import NBAAccreditations from '@/components/Departments/ECS/NBAAccreditations'
import InnovativeTeachingLearning from '@/components/Departments/InnovativeTeachingLearning'
import NotableAlumnus from '@/components/Departments/NotableAlumnus'
import MentorMentee from '@/components/Departments/MentorMentee'
import FDPSDPPrograms from '@/components/Departments/FDPSDPPrograms'
import AchievementsTab from '@/components/Departments/AchievementsTab'
import IndustrialVisits from '@/components/Departments/IndustrialVisits'
import DepartmentsNotices from '@/components/Departments/DepartmentsNotices'
import Infrastructure from '@/components/Departments/ECS/Infrastructure'
import PlacementsInternshipsTab from '@/components/Departments/PlacementsInternshipsTab'
import DepartmentInitiave from '@/components/Departments/ECS/DepartmentInitiative'
import FacultyDevProg from '@/components/Departments/FacultyDevProg'
import StudentDevProg from '@/components/Departments/StudentDevProg'
import Faculty from '@/components/Departments/Faculty'
import DynamicSidebar from '@/components/Departments/Sidebar'

// Font configuration
const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

// Tab configuration
const TABS = [
  { id: 'about', title: 'About Computer Department' },
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
const ECSPage = () => {
  const department = 'ecs'
  const router = useRouter()
  const searchParams = useSearchParams()
  const path = usePathname()
  const tab = searchParams.get('tab') || 'about'

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
    <div className="container mx-auto px-6 py-8 text-justify">
      <h2
        className={`${zilla.className} mb-6 ml-6 text-5xl font-bold text-[#131929]`}
      >
        {name}
      </h2>

      <div className="mb-6 overflow-hidden rounded-lg bg-white p-6 shadow-md">
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <p className="leading-relaxed text-gray-700">{description}</p>
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
        <div className="rounded-lg bg-white p-6 text-justify shadow-md">
          <p className="leading-relaxed text-gray-700">{extendedDescription}</p>
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
    <div className="mb-8 w-full px-3 lg:mb-0 lg:w-1/3">
      <div className="h-full rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EBF2FF] text-[#131929]">
          {icon}
        </div>
        <h2 className="mb-3 text-lg font-medium text-[#131929]">{title}</h2>
        <ul className="mb-5 flex-grow list-inside list-disc space-y-1 text-base leading-relaxed text-gray-600">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={btn.onClick}
              className="inline-flex items-center rounded border-0 bg-[#131929] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1F2942] focus:outline-none"
            >
              {btn.label}
              <svg
                className="ml-1 h-4 w-4"
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
        return <AboutDepartmentContainer {...AboutecsDepartment} />
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
        return <AboutDepartmentContainer {...AboutecsDepartment} />
    }
  }

  // Section: Program Highlights
  const ProgramHighlights = () => (
    <div className="bg-[#F9FAFC] px-20 py-16 text-gray-600">
      <div className="container mx-auto px-5">
        <div className="relative mb-12 flex items-center justify-center">
          <div className="absolute top-1/2 left-0 h-px w-1/5 bg-gray-300"></div>
          <h2
            className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
          >
            Programs Offered
          </h2>
          <div className="absolute top-1/2 right-0 h-px w-1/5 bg-gray-300"></div>
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
      <section className="hero relative min-h-screen overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/college2.avif"
            alt="Campus background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-[#131929] opacity-80"></div>
        </div>
        <div className="relative z-10 container mx-auto flex h-full flex-col justify-center px-4 py-20">
          <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl">
            <h1 className="mt-28 mb-6 p-28 text-6xl leading-tight font-bold md:text-5xl lg:text-6xl">
              ELECTRONICS AND COMPUTER SCIENCE 
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-3 transform bg-white"></div>
      </section>

      {/* Main content section */}
      <section className="w-full bg-white">
        <div className="flex md:pt-10 md:pl-10">
          {/* Dynamic Sidebar navigation */}
          <DynamicSidebar
            tabs={TABS}
            activeTab={tab}
            onTabChange={handleTabChange}
            basePath={path}
          />

          {/* Main content area */}
          <div className="invisible-scrollbar mx-2 max-h-screen flex-1 flex-col overflow-x-hidden">
            <div id={tab} className="container mx-auto">
              {renderTabContent()}
            </div>
          </div>
        </div>

        {/* Program Highlights Section */}
        <ProgramHighlights />

        {/* Achievements Section */}
        <div className="bg-white px-20 py-8">
          <div className="my-12 h-min overflow-hidden">
            <AchievementsTab department={department} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ECSPage
