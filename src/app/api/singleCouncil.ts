'use server'

export interface OneCouncil {
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

export async function getOneCouncil(id: string): Promise<OneCouncil> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/councils/${id}?fields=*,members.*,events.*`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch council: ${response.statusText}`)
  }

  const { data } = await response.json()
  return data
}
