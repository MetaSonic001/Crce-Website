'use server'

export interface ItlCoursesOffered {
  id: number
  status: string
  department: string
  course_name: string
  description: string
  duration: string
  credits: string
  prerequisites: string
  level: string
}

export default async function getItlCoursesOffered(
  department: string
): Promise<ItlCoursesOffered[]> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const encodedDept = encodeURIComponent(department)
  const url = `${baseUrl}/items/itl_courses_offered?filter[department][_eq]=${encodedDept}&filter[status][_eq]=published`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(
      `Failed to fetch courses offered data: ${response.statusText}`
    )
  }

  const { data } = await response.json()
  return data
}
