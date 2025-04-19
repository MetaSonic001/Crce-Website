'use server'

export interface DepartmentPublication {
  id: number
  status: string
  title: string
  authors: string
  journal: string
  link: string | null
  department: string
  date: string
}

export default async function getDepartmentPublications(
  department: string
): Promise<DepartmentPublication[]> {
  const encodedDept = encodeURIComponent(department)
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/publications?filter[department][_eq]=${encodedDept}&filter[status][_eq]=published`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch publications: ${response.statusText}`)
  }

  const { data } = await response.json()
  return data
}
