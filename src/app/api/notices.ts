'use server'

export interface Notice {
  id: number
  status: string
  date_created: string
  date_updated: string | null
  title: string
  info: string // description
  about: string // type
}

export interface NoticesResponse {
  data: Notice[]
}

export default async function getNotices(): Promise<NoticesResponse> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/notices`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch notices: ${response.statusText}`)
  }

  const data: NoticesResponse = await response.json()
  return data
}
