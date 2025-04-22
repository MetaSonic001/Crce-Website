'use server'

export interface IndustrialVisit {
  id: number
  status: string
  company: string
  location: string
  date: string
  participants: string
  outcomes: string
  coordinators: string
  department: string
}

export default async function getIndustrialVisits(
  department: string
): Promise<IndustrialVisit[]> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const encodedDept = encodeURIComponent(department)
  const url = `${baseUrl}/items/industrial_visits?filter[department][_eq]=${encodedDept}&filter[status][_eq]=published`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch industrial visits: ${response.statusText}`)
  }

  const { data } = await response.json()
  return data
}
