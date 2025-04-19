// app/api/syllabus.ts
'use server'

export interface SyllabusFile {
  id: string // Directus file ID
}

export interface SyllabusDocument {
  id: number
  name: string
  syllabus_id: number
  file: string // Directus file ID
}

export interface Syllabus {
  id: number
  status: string
  user_updated: string | null
  date_updated: string | null
  class: string
  documents?: SyllabusDocument[]
}

export interface SyllabusResponse {
  data: Syllabus[]
}

export default async function getSyllabus(): Promise<SyllabusResponse> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/syllabus?fields=*,documents.*`

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch syllabus')
  }

  const data: SyllabusResponse = await res.json()
  return data
}
