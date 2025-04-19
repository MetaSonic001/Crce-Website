'use server'

export interface Event {
  id: number
  status: string
  title: string
  date: string
  description: string
  image: string
  user_updated: string | null
  date_updated: string | null
  // Add other fields if needed
}

export interface EventsResponse {
  data: Event[]
}

export default async function getEvents(): Promise<EventsResponse> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/events?filter[status][_eq]=published&sort[]=-date`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.statusText}`)
  }

  const data: EventsResponse = await response.json()
  return data
}
