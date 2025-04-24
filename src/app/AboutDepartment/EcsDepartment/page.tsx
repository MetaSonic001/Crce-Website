'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import '../style.css'
import { Zilla_Slab } from 'next/font/google'
import {
  AboutcsDepartment,
  hodsDesk,
  programs,
  tabContents,
} from './data'
import { Sidebar } from '../components'

// Component imports
import AboutHOD from './AboutHOD'
import PreIncubationCenter from './PreincubationCentre'
import Publications from './Publications'
import Faculty, { FacultyTabData } from './Faculty'
import VisionAndMission from './VisionAndMission'
import PEOsPOsPSOs from './PEOsPOsPSOs'
import Internships from './Internships'
import NBAAccreditations from './NBAAccreditations'
import InnovativeTeachingLearning from './InnovativeTeachingLearning'
import NotableAlumnus from './NotableAlumnus'
import MentorMentee from './MentorMentee'
import FDPSDPPrograms from './FDPSDPPrograms'
import AchievementsTab from './AchievementsTab'
import IndustrialVisits from './IndustrialVisits'
import DepartmentsNotices from './DepartmentsNotices'
import Infrastructure from './Infrastructure'
import getTeachers, { MappedTeacher } from '@/app/api/teachers'
import PlacementsInternshipsTab from './PlacementsInternshipsTab'

// Font configuration
const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

// Tab configuration
const TABS = [
  { id: 'about', title: 'About Electronics and Computer Science Department' },
  { id: 'hoddesk', title: "HOD's Desk" },
  { id: 'visionandmission', title: 'Vision and Mission' },
  { id: 'peos_pos_psos', title: 'PEOs, POs and PSOs' },
  { id: 'faculty', title: 'Faculty' },
  { id: 'infrastructure', title: 'Infrastructure' },
  { id: 'research_publications', title: 'Research Publications and Patents' },
  { id: 'pre_incubation', title: 'Pre-Incubation' },
  // { id: 'internships', title: 'Internships' },
  { id: 'placements', title: 'Placements and Internships' },
  //{ id: 'nba_accreditations', title: 'NBA Accreditations' },
  { id: 'innovative_teaching', title: 'Innovative Teaching Learning' },
  { id: 'notable_alumni', title: 'Notable Alumni' },
  { id: 'faculty_programs', title: 'Development Programs' },
  { id: 'achievements', title: 'Achievements' },
  { id: 'department_notices', title: 'Department Notices' },

]

// Faculty program toggle options
const FACULTY_PROGRAM_OPTIONS = [
  { id: 'fdp_sdp', title: 'FDP/SDP Programs' },
  { id: 'mentor_mentee', title: 'Mentor Mentee' },
  { id: 'industrial_visits', title: 'Industrial Visits' },
]

// Interfaces
interface AboutDepartmentProps {
  name: string;
  description: string;
  extendedDescription?: string;
  video?: string | boolean;
}

interface ProgramCardProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
  button: { label: string; onClick: () => void }[];
}

interface TableRowData {
  year: string;
  highest: string;
  highestCompany: string;
  lowest: string;
  lowestCompany: string;
}

// Main component
const EcsEngineeringPage: React.FC = () => {
  const [facultyData, setFacultyData] = useState<MappedTeacher[]>([])
  const [activeTab, setActiveTab] = useState('about')
  const [activeFacultyToggle, setActiveFacultyToggle] = useState('fdp_sdp')

  // Fetch faculty data on component mount
  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const data = await getTeachers('computers')
        setFacultyData(data)
      } catch (error) {
        console.error('Error fetching teacher data, using default data', error)
        setFacultyData(FacultyTabData as any)
      }
    }
    
    fetchFaculty()
  }, [])

  // Component: About Department
  const AboutDepartmentContainer: React.FC<AboutDepartmentProps> = ({ 
    name, 
    description, 
    extendedDescription, 
    video 
  }) => (
    <div className="container mx-auto px-6 py-8 text-justify">
      <h2 className={`${zilla.className} mb-6 ml-6 text-5xl font-bold text-[#131929]`}>
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
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="/compsdepttour.mp4"
                  allowFullScreen
                  title="Department Video"
                ></iframe>
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
  const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, icon, button }) => (
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
          {button.map((btn, i) => (
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

  // Component: Faculty Programs Toggle
  const FacultyProgramsToggle: React.FC = () => (
    <div className="mb-8 flex justify-center">
      <div className="inline-flex rounded-md">
        {FACULTY_PROGRAM_OPTIONS.map((option) => (
          <button
            key={option.id}
            onClick={() => setActiveFacultyToggle(option.id)}
            className={`px-8 py-3 text-base font-medium transition-colors duration-200
              ${activeFacultyToggle === option.id 
                ? 'bg-[#131929] text-white' 
                : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
              }
              ${option.id === (FACULTY_PROGRAM_OPTIONS[0]?.id ?? '') ? 'rounded-l-md' : ''}
              ${option.id === (FACULTY_PROGRAM_OPTIONS[FACULTY_PROGRAM_OPTIONS.length-1]?.id ?? '') ? 'rounded-r-md' : ''}
            `}
          >
            {option.title}
          </button>
        ))}
      </div>
    </div>
  )



  // Render the active tab content
  const renderTabContent = () => {
    // Handle specific case for Faculty Programs tab with toggle
    if (activeTab === 'faculty_programs') {
      return (
        <>
          <FacultyProgramsToggle />
          {activeFacultyToggle === 'fdp_sdp' && <FDPSDPPrograms />}
          {activeFacultyToggle === 'mentor_mentee' && <MentorMentee />}
          {activeFacultyToggle === 'industrial_visits' && <IndustrialVisits />}
        </>
      )
    }

    // Render content based on active tab
    switch (activeTab) {
      case 'about':
        return <AboutDepartmentContainer {...AboutcsDepartment} />
      case 'hoddesk':
        return <AboutHOD {...hodsDesk} />
      case 'visionandmission':
        return <VisionAndMission />
      case 'peos_pos_psos':
        return <PEOsPOsPSOs />
      case 'faculty':
        return <Faculty facultyData={facultyData.length ? facultyData : FacultyTabData} />
      case 'infrastructure':
        return <Infrastructure />
      case 'research_publications':
        return <Publications />
      case 'pre_incubation':
        return <PreIncubationCenter />
      case 'internships':
        return <Internships />
      case 'placements':
        return <PlacementsInternshipsTab />
      case 'nba_accreditations':
        return <NBAAccreditations />
      case 'innovative_teaching':
        return <InnovativeTeachingLearning />
      case 'notable_alumni':
        return <NotableAlumnus />
      case 'achievements':
        return <AchievementsTab />
      case 'department_notices':
        return <DepartmentsNotices />
      default:
        return <AboutDepartmentContainer {...AboutcsDepartment} />
    }
  }

  // Section: Program Highlights
  const ProgramHighlights: React.FC = () => (
    <div className="bg-[#F9FAFC] px-20 py-16 text-gray-600">
      <div className="container mx-auto px-5">
        <div className="relative mb-12 flex items-center justify-center">
          <div className="absolute top-1/2 left-0 h-px w-1/5 bg-gray-300"></div>
          <h2 className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}>
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
              button={program.button}
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
            <h1 className="mt-28 mb-6 p-28 text-6xl font-bold leading-tight md:text-5xl lg:text-6xl">
              ELECTRONICS AND COMPUTER SCIENCE ENGINEERING
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-3 transform bg-white"></div>
      </section>

      {/* Main content section */}
      <section className="w-full bg-white">
        <div className="flex md:pt-10 md:pl-10">
          {/* Sidebar navigation */}
          <Sidebar
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            AccordionContent={null}
          />
          
          {/* Main content area */}
          <div className="invisible-scrollbar mx-2 max-h-screen flex-1 flex-col overflow-x-hidden">
            <div id={activeTab} className="container mx-auto">
              {renderTabContent()}
            </div>
          </div>
        </div>

        {/* Program Highlights Section */}
        <ProgramHighlights />

        {/* Achievements Section */}
        <div className="bg-white px-20 py-8">
          <div className="my-12 h-min overflow-hidden">
            <AchievementsTab />
          </div>
        </div>
      </section>
    </div>
  )
}

export default EcsEngineeringPage