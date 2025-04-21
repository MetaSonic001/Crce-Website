'use server'

export interface ItlTeachingMethods {
  id: number
  department: string
  description: string
  teaching_method: string
  applied_subjects: string
  learning_outcome: string
}

export default async function getItlTeachingMethods(
  department: string
): Promise<ItlTeachingMethods[]> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const encodedDept = encodeURIComponent(department)
  const url = `${baseUrl}/items/itl_teaching_methods?filter[department][_eq]=${encodedDept}`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(
      `Failed to fetch innovative teaching data: ${response.statusText}`
    )
  }

  const { data } = await response.json()
  return data
}
