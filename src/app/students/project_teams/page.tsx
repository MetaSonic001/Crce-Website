'use client'
import { useState } from 'react'
import { Earth, Facebook, Instagram, Linkedin, Youtube, ChevronRight } from 'lucide-react'
import { Zilla_Slab } from 'next/font/google'
import Link from 'next/link'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export type Card = {
  id: string
  title: string
  subtitle: string
  image: string
  website?: string
  instagram?: string
  youtube?: string
  linkedin?: string
  facebook?: string
  description?: string
  members?: TeamMember[]
  achievements?: string[]
}

export type TeamMember = {
  name: string
  role: string
  image?: string
  linkedin?: string
}

export default function ProjectGroups() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards: Card[] = [
    {
      id: 'team-abadha',
      title: 'Team Abadha CRCE',
      subtitle:
        'We are TEAM ABADHA CRCE, creating an Electric All Terrain Vehicle for SAE E-BAJA.',
      image: '/project_grp/abadha.jpg',
      website: 'https://teamabadhaofficial.web.app',
      instagram: 'https://instagram.com/teamabadha?igshid=9rz18qcl27oy',
      youtube: 'https://youtube.com/channel/UCQ2g2izBdI-Mxmyw-bQD8qQ',
      linkedin: 'https://www.linkedin.com/in/team-abadha-crce-2492b41aa',
      description: 'Team Abadha CRCE is a dedicated group of engineering students who design and build Electric All Terrain Vehicles for the prestigious SAE E-BAJA competition. The team focuses on innovation, sustainability, and performance in automotive engineering. Founded with the vision to create environmentally friendly off-road vehicles, Team Abadha has consistently pushed the boundaries of electric vehicle technology.',
      members: [
        { name: 'Rohan Sharma', role: 'Team Captain', linkedin: 'https://linkedin.com' },
        { name: 'Priya Patel', role: 'Electrical Lead', linkedin: 'https://linkedin.com' },
        { name: 'Aditya Gupta', role: 'Mechanical Lead', linkedin: 'https://linkedin.com' },
        { name: 'Neha Singh', role: 'Design Engineer', linkedin: 'https://linkedin.com' },
        { name: 'Raj Mehta', role: 'Software Engineer', linkedin: 'https://linkedin.com' }
      ],
      achievements: [
        '1st Place in SAE E-BAJA National Competition 2023',
        'Best Design Award in International E-Vehicle Challenge 2022',
        'Innovation Excellence Award for Battery Management System'
      ]
    },
    {
      id: 'team-robocon',
      title: 'Team Robocon',
      subtitle:
        'Team Robocon designs and builds robots for the ABU Robocon competition.',
      image: '/project_grp/robocon.jpg',
      website: 'http://roboconcrce.org',
      description: 'Team Robocon represents our institution in the prestigious ABU Robocon robotics competition. The team consists of talented engineering students who are passionate about robotics and automation. Each year, they design and build sophisticated robots to complete complex tasks set by the competition organizers. Through this platform, members gain hands-on experience in mechanical design, electronics, programming, and project management.',
      members: [
        { name: 'Vikram Desai', role: 'Team Leader', linkedin: 'https://linkedin.com' },
        { name: 'Ananya Reddy', role: 'Technical Head', linkedin: 'https://linkedin.com' },
        { name: 'Rahul Verma', role: 'Programming Lead', linkedin: 'https://linkedin.com' },
        { name: 'Sanya Khanna', role: 'Electronics Expert', linkedin: 'https://linkedin.com' }
      ],
      achievements: [
        'National Finalists in ABU Robocon 2023',
        'Best Innovative Design Award 2022',
        'Technical Excellence Recognition from IEEE Robotics Society'
      ]
    },
    {
      id: 'team-cfr',
      title: 'Team CFR New',
      subtitle:
        'CRCE Formula Racing team builds race cars for national and international competitions.',
      image: '/project_grp/cfr.jpeg',
      website: 'https://crceformularacing.com/index.html',
      instagram: 'https://www.instagram.com/teamcfr/?hl=en',
      linkedin: 'https://www.linkedin.com/company/teamcrceformularacing/',
      facebook: 'https://www.facebook.com/CRCEFormulaRacing/',
      description: 'CRCE Formula Racing (CFR) is a dynamic team that designs, manufactures, and races formula-style vehicles for competitions like Formula Student and SUPRA SAE. The team brings together students from various engineering disciplines who work collaboratively to build high-performance race cars. This hands-on project allows members to apply theoretical knowledge to real-world engineering challenges while developing teamwork and leadership skills.',
      members: [
        { name: 'Arjun Malhotra', role: 'Team Principal', linkedin: 'https://linkedin.com' },
        { name: 'Ishaan Kapoor', role: 'Technical Director', linkedin: 'https://linkedin.com' },
        { name: 'Zara Sheikh', role: 'Aerodynamics Lead', linkedin: 'https://linkedin.com' },
        { name: 'Dev Patel', role: 'Powertrain Engineer', linkedin: 'https://linkedin.com' },
        { name: 'Tanya Agarwal', role: 'Electronics Lead', linkedin: 'https://linkedin.com' }
      ],
      achievements: [
        'Overall Champions at Formula Student India 2023',
        '2nd Place in Endurance Event at SUPRA SAE 2022',
        'Best Newcomer Award at International Formula Racing 2021'
      ]
    },
    {
      id: 'team-hawki',
      title: 'HAWK-i CRCE',
      subtitle:
        'HAWK-i CRCE is a platform for students pursuing cybersecurity careers and CTF challenges.',
      image: '/project_grp/hawki.jpg',
      website: 'http://hawkicrce.com',
      description: 'HAWK-i CRCE is a cybersecurity student chapter dedicated to fostering technical expertise and ethical hacking skills. The group participates in Capture The Flag (CTF) competitions and organizes workshops, training sessions, and security conferences. Through these activities, members develop practical skills in network security, cryptography, web security, and digital forensics, preparing them for careers in the rapidly growing field of cybersecurity.',
      members: [
        { name: 'Kabir Sharma', role: 'Chapter President', linkedin: 'https://linkedin.com' },
        { name: 'Nisha Kulkarni', role: 'Technical Lead', linkedin: 'https://linkedin.com' },
        { name: 'Aryan Mathur', role: 'CTF Coordinator', linkedin: 'https://linkedin.com' },
        { name: 'Meera Nair', role: 'Workshop Coordinator', linkedin: 'https://linkedin.com' }
      ],
      achievements: [
        'Finalists in National Cyber Security Challenge 2023',
        'Organized CyberSummit with 500+ participants',
        'Collaboration with CERT-In for student training programs'
      ]
    },
    {
      id: 'project-cell',
      title: 'Project Cell',
      subtitle:
        'PROJECT CELL promotes innovation and practical learning to solve social problems.',
      image: '/project_grp/projectcell.jpg',
      website: 'https://projectcellcrce2021.web.app/',
      description: 'The Project Cell is a student-led initiative aimed at fostering innovation and practical skill development. The cell encourages students to identify social challenges and develop technology-based solutions through project work. By providing mentorship, resources, and a collaborative environment, the Project Cell helps transform ideas into functional prototypes. This platform bridges the gap between theoretical knowledge and practical application, preparing students for real-world engineering problems.',
      members: [
        { name: 'Akash Joshi', role: 'Cell Coordinator', linkedin: 'https://linkedin.com' },
        { name: 'Shreya Patil', role: 'Innovation Lead', linkedin: 'https://linkedin.com' },
        { name: 'Vivek Kumar', role: 'Technical Mentor', linkedin: 'https://linkedin.com' },
        { name: 'Priya Singhania', role: 'Project Manager', linkedin: 'https://linkedin.com' }
      ],
      achievements: [
        'Development of Smart Water Management System for local communities',
        'Healthcare Monitoring Device recognized by State Innovation Council',
        'Smart Waste Segregation System implemented in campus'
      ]
    },
    {
      id: 'team-marvericks',
      title: 'Marvericks',
      subtitle:
        'Team Mavericks UAS develops drones and efficient solutions for various challenges.',
      image: '/project_grp/mavericks.jpg',
      website: 'https://mavericksuas.github.io',
      description: 'Team Mavericks UAS specializes in Unmanned Aerial Systems (UAS), designing and building autonomous drones for various applications. The team participates in national and international drone competitions, showcasing their expertise in flight control systems, payload delivery, and autonomous navigation. Through this project, students gain experience in aerodynamics, embedded systems, control algorithms, and image processing while developing solutions for real-world challenges.',
      members: [
        { name: 'Nikhil Shah', role: 'Team Lead', linkedin: 'https://linkedin.com' },
        { name: 'Aisha Khan', role: 'Avionics Head', linkedin: 'https://linkedin.com' },
        { name: 'Varun Menon', role: 'Flight Controller Expert', linkedin: 'https://linkedin.com' },
        { name: 'Maya Sundaram', role: 'Computer Vision Lead', linkedin: 'https://linkedin.com' }
      ],
      achievements: [
        '1st Runner-up at National Drone Racing Championship 2023',
        'Best Algorithm Award for Autonomous Navigation',
        'Developed Disaster Response Drone for Search and Rescue Operations'
      ]
    },
    {
      id: 'team-vaayushastra',
      title: 'Team Vaayushastra',
      subtitle:
        'Team Vaayushastra, established in 2012, represents CRCE in SAE Aero Design.',
      image: '/project_grp/vaayushastra.jpg',
      website: 'https://vaayushastra.com/index.html',
      description: 'Team Vaayushastra, established in 2012, represents the institution in the SAE Aero Design competition. The team designs, builds, and flies radio-controlled aircraft that must meet specific mission requirements. Through this challenging project, members learn about aerodynamics, structural analysis, manufacturing techniques, and flight testing. The teams focus on innovation and precision engineering has led to consistent performance in national and international competitions.',
      members: [
        { name: 'Rohan Mehta', role: 'Captain', linkedin: 'https://linkedin.com' },
        { name: 'Anjali Desai', role: 'Aerodynamics Lead', linkedin: 'https://linkedin.com' },
        { name: 'Karan Singh', role: 'Structural Design Head', linkedin: 'https://linkedin.com' },
        { name: 'Neha Kapoor', role: 'Manufacturing Lead', linkedin: 'https://linkedin.com' },
        { name: 'Amit Sharma', role: 'Electronics Engineer', linkedin: 'https://linkedin.com' },
      ],
      achievements: [
        'Overall Champions at SAE Aero Design East 2023',
        'Best Technical Paper Award at National Aeromodelling Competition',
        'Highest Payload Fraction Award at International Aero Design Challenge'
      ]
    },
  ]

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-4 md:px-28 pt-24 md:pt-36 text-[#00122a]">
          <h1
            className={`mb-4 flex items-center justify-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            PROJECT GROUPS
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Discover our innovative student-led project teams working on cutting-edge technologies and competitions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-28 py-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card, index) => (
            <div key={index} className="group">
              <div
                className="h-full rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    src={card.image}
                    alt={card.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h2 className={`${zilla.className} text-xl font-semibold text-[#001f3f] mb-2`}>
                    {card.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {card.subtitle}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {card.website && (
                        <a
                          href={card.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4a90e2] hover:text-[#3a7bc2] transition-colors"
                        >
                          <Earth className="h-5 w-5" />
                        </a>
                      )}
                      {card.youtube && (
                        <a
                          href={card.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-700 transition-colors"
                        >
                          <Youtube className="h-5 w-5" />
                        </a>
                      )}
                      {card.linkedin && (
                        <a
                          href={card.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {card.instagram && (
                        <a
                          href={card.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-700 transition-colors"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                      {card.facebook && (
                        <a
                          href={card.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                    
                    <Link 
                      href={`/project-groups/${card.id}`}
                      className="flex items-center text-[#4a90e2] hover:text-[#3a7bc2] transition-colors text-sm font-medium"
                    >
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}