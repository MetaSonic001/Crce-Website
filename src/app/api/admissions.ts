'use server'

export interface Admission {
  id: number
  status: string
  user_updated: string | null
  date_updated: string | null
  section: string
  type: string
  title: string
  description: string
  file: string | null
  link: string | null
}

export default async function getAdmissions(): Promise<Admission[]> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://gyan.fragnel.edu.in:8055'
  const url = `${baseUrl}/items/admissions?filter[status][_eq]=published`

  try {
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch admissions: ${response.statusText}`)
    }

    const { data } = await response.json()
    return data || []

  } catch (error) {
    console.error('Error fetching admissions:', error)
    throw new Error('Failed to fetch admissions data')
  }
}

// Optional: Function to get admissions by section
export async function getAdmissionsBySection(section: string): Promise<Admission[]> {
  const encodedSection = encodeURIComponent(section)
  const baseUrl = process.env.DIRECTUS_URL || 'http://gyan.fragnel.edu.in:8055'
  const url = `${baseUrl}/items/admissions?filter[section][_eq]=${encodedSection}&filter[status][_eq]=published`

  try {
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch admissions by section: ${response.statusText}`)
    }

    const { data } = await response.json()
    return data || []

  } catch (error) {
    console.error('Error fetching admissions by section:', error)
    throw new Error('Failed to fetch admissions data by section')
  }
}

// Optional: Function to get admissions by type
export async function getAdmissionsByType(type: string): Promise<Admission[]> {
  const encodedType = encodeURIComponent(type)
  const baseUrl = process.env.DIRECTUS_URL || 'http://gyan.fragnel.edu.in:8055'
  const url = `${baseUrl}/items/admissions?filter[type][_eq]=${encodedType}&filter[status][_eq]=published`

  try {
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch admissions by type: ${response.statusText}`)
    }

    const { data } = await response.json()
    return data || []

  } catch (error) {
    console.error('Error fetching admissions by type:', error)
    throw new Error('Failed to fetch admissions data by type')
  }
}
