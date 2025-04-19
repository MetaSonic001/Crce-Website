'use server'

export interface News {
  id: number
  status: string
  date_created: string
  date_updated: string | null
  title: string
  info: string
  date: string
  image: string
}

export interface NewsResponse {
  data: News[]
}

export default async function getNews(): Promise<NewsResponse> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/news?filter[status][_eq]=published&sort[]=-date_created`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch news: ${response.statusText}`)
  }

  const data: NewsResponse = await response.json()
  return data
}
