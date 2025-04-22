'use server'

export interface Mentorship {
  id: number
  status: string
  mentor: string
  specialization: string
  number_of_mentees: number
  mentee_groups: string
  meeting_frequency: string
  department: string
  activities: string
}

export default async function getMentorships(
  department: string
): Promise<Mentorship[]> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const encodedDept = encodeURIComponent(department)
  const url = `${baseUrl}/items/mentor_mentee?filter[department][_eq]=${encodedDept}&filter[status][_eq]=published`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch mentorship data: ${response.statusText}`)
  }

  const { data } = await response.json()
  return data
}
