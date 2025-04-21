'use server'

export interface ItlCertification {
  id: number
  status: string
  department: string
  certification: string
  provider: string
  duration: string
  eligibility: string
  benefits: string
  placement_impact: string
}

export default async function getItlCertifications(
  department: string
): Promise<ItlCertification[]> {
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const encodedDept = encodeURIComponent(department)
  const url = `${baseUrl}/items/itl_certification?filter[department][_eq]=${encodedDept}&filter[status][_eq]=published`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(
      `Failed to fetch certification data: ${response.statusText}`
    )
  }

  const { data } = await response.json()
  return data
}
