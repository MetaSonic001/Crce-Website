'use server'

export interface FdpSdp {
  id: number
  status: string
  title: string
  type: string
  duration: string
  date: string
  participants: string
  sponsor: string
  coordinators: string
  department: string
}

export default async function getFdpSdp(department: string): Promise<FdpSdp[]> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const encodedDept = encodeURIComponent(department)
  const url = `${baseUrl}/items/fdp_sdp?filter[department][_eq]=${encodedDept}&filter[status][_eq]=published`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch FDP/SDP data: ${response.statusText}`)
  }

  const { data } = await response.json()
  return data
}
