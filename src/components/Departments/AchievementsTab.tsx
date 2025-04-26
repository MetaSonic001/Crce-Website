'use client'
import React, { useEffect, useState } from 'react'
import { Zilla_Slab } from 'next/font/google'
import { Award, Calendar, Users } from 'lucide-react'
import getDepartmentAchievements from '@/app/api/achievements' // Adjust if your file is elsewhere
import { type DepartmentAchievement } from '@/app/api/achievements'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface PageProps {
  department: string
}

const fallbackAchievements: DepartmentAchievement[] = [
  {
    id: 1,
    status: 'published',
    title: 'First Prize in National Level Hackathon',
    category: 'Technical',
    date: '2023-09-15',
    people: 'Ananya Sharma, Rohan Mehta, Priya Patel',
    event: 'HackIndia 2023',
    image: '/achievements/hackathon.jpg',
    description:
      'Developed an innovative AI-based solution for healthcare management',
    department: 'Computer',
  },
  {
    id: 2,
    status: 'published',
    title: 'Selected for Google Summer of Code',
    category: 'Technical',
    date: '2023-04-30',
    people: 'Karan Singh, Neha Reddy',
    event: 'GSoC 2023',
    image: '/achievements/gsoc.jpg',
    description: 'Open source contribution to TensorFlow project',
    department: 'Computer',
  },
]

const AchievementsTab: React.FC<PageProps> = ({ department }) => {
  const [achievements, setAchievements] = useState<DepartmentAchievement[]>([])

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const result = await getDepartmentAchievements(department) // now accepted
        console.log(result)
        setAchievements(result) // now matches expected type
      } catch (error) {
        console.error('Failed to fetch achievements:', error)
        setAchievements(fallbackAchievements)
      }
    }

    fetchAchievements()
  }, [])

  const getImageUrl = (path: string) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_ASSET_URL || ''
      return `${baseUrl}${path || '/api/placeholder/400/300'}`
    } catch {
      return '/api/placeholder/400/300'
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/4 bg-gray-300"></div>
        <h2
          className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
        >
          Student Achievements
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/4 bg-gray-300"></div>
      </div>

      <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          Students from the Computer Engineering Department regularly
          participate and excel in various technical competitions, research
          events, and innovation challenges. Below are some of the notable
          achievements of our students in the current academic year.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${getImageUrl(achievement.image)})`,
              }}
            >
              <div className="flex h-full w-full flex-col justify-end bg-gradient-to-t from-black to-transparent p-4">
                <div
                  className={`inline-flex self-start rounded-full px-3 py-1 text-xs font-medium ${
                    achievement.category === 'Technical'
                      ? 'bg-blue-100 text-blue-800'
                      : achievement.category === 'Research'
                        ? 'bg-purple-100 text-purple-800'
                        : achievement.category === 'Competitive Coding'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800'
                  }`}
                >
                  {achievement.category}
                </div>
                <h3 className="mt-2 line-clamp-2 text-xl font-bold text-white">
                  {achievement.title}
                </h3>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-3 flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                <p className="text-sm text-gray-500">{achievement.date}</p>
              </div>

              <div className="mb-3 flex items-center">
                <Award className="mr-2 h-4 w-4 text-gray-500" />
                <p className="text-sm text-gray-700">{achievement.event}</p>
              </div>

              <div className="mb-3 flex items-start">
                <Users className="mt-1 mr-2 h-4 w-4 flex-shrink-0 text-gray-500" />
                <p className="text-sm text-gray-700">{achievement.people}</p>
              </div>

              <p className="text-sm leading-relaxed text-gray-600">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AchievementsTab
