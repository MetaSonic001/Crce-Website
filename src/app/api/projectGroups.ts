'use server'

export type ProjectGroups = {
  id: number
  name: string
  website: string
  image: string
  linkedin?: string
  instagram?: string
  report?: string
  subtitle: string
  members: Member[]
}
export interface Member {
  name: string
  role: string
  image: string
  class: string
  // Add other fields if needed
}

export default async function getProjectGroups(): Promise<ProjectGroups[]> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/project_groups`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch project groups: ${response.statusText}`)
  }

  const { data } = await response.json()
  return data
}
