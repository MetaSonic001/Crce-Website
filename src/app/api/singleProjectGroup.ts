'use server'

export interface OneProjectGroup {
  id: number
  name: string
  image: string
  website: string
  members?: Member[]
  data: any
  events?: Event[]
}

export interface Member {
  id: number
  name: string
  role: string
  image: string
  class: string
}

export interface Event {
  name: string
  date: string
  image: string
  description: string
  report?: string
}

export default async function getOneProjectGroup(id: string): Promise<OneProjectGroup> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/project_groups/${id}?fields=*,members.*,events.*`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch project groups: ${response.statusText}`)
  }

  const { data } = await response.json()
  return data
}
