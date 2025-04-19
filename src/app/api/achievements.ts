'use server'

export interface DepartmentAchievement {
  id: number
  status: string
  title: string
  category: string
  date: string
  people: string
  event: string
  image: string
  description: string
  department: string | null
}

export default async function getDepartmentAchievements(
  department: string
): Promise<DepartmentAchievement[]> {
  const encodedDept = encodeURIComponent(department)
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/achievements?filter[department][_eq]=${encodedDept}&filter[status][_eq]=published`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch achievements: ${response.statusText}`)
  }

  const { data } = await response.json()
  return data
}
