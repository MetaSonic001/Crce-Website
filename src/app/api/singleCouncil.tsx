'use server'

export interface OneCouncil {
  id: number
  status: string
  name: string
  report: string
  image: string
  website: string
  members?: Member[]
  data: any // Update type if you know the shape of `data`
}
export interface Member {
  name: string
  role: string
  image: string
  class: string
  // Add other fields if needed
}

export async function getOneCouncil(id: string): Promise<OneCouncil> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/councils/${id}?fields=id,status,name,report,image,website,data`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch council: ${response.statusText}`)
  }

  const { data } = await response.json()
  return data
}
