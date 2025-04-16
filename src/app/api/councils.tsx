'use server'

export interface Council {
  id: number
  status: string
  name: string
  report: string
  image: string
  website: string
  members?: Member[]
  // Add other fields if needed
}

export interface Member {
  name: string
  role: string
  image: string
  class: string
  // Add other fields if needed
}

export default async function getCouncils(): Promise<Council[]> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/councils?filter[status][_eq]=published`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch councils: ${response.statusText}`)
  }

  const { data } = await response.json()
  return data
}
