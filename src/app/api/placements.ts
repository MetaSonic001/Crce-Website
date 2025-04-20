'use server'

export interface Placement {
  id: number
  status: string
  user_updated: string
  date_updated: string
  company: string
  package: string
  position: string
  location: string
  year: string
  department: string
}

export default async function getPlacements(
  department: string
): Promise<Placement[]> {
  const encodedDept = encodeURIComponent(department)
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/internships?filter[department][_eq]=${encodedDept}&filter[status][_eq]=published`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch internships: ${response.statusText}`)
  }

  const { data } = await response.json()
  return data
}
