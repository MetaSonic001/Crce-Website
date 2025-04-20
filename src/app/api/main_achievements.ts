'use server'

export interface Achievement {
  id: number
  status: string
  title: string
  description: string
  date: string
  image: string
}

export default async function getAchievements(): Promise<Achievement[]> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/main_achievements?filter[status][_eq]=published`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch achievements: ${response.statusText}`)
  }

  const { data }: { data: Achievement[] } = await response.json()
  return data
}
