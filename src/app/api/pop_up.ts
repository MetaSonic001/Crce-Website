'use server'

export interface PopUp {
  enabled: boolean
  title: string
  line1: string
  line2: string
  url: string | null
}

export interface PopUpResponse {
  data: PopUp
}

export default async function getPopUp(): Promise<PopUpResponse> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/pop_up`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch pop up: ${response.statusText}`)
  }

  const data: PopUpResponse = await response.json()
  return data
}
