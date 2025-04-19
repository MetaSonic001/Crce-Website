'use server'

export interface Teacher {
  id: number
  status: string
  name: string
  title: string
  degree: string
  interest: string
  contact: string
  file: string
  department: string
  image: string
}

export interface MappedTeacher {
  id: string
  name: string
  photoUrl: string
  ctaText: string
  designation: string
  qualification: string
  areasOfInterest: string
  ctaOnClick: string // Changed from function to string
}

export default async function getTeachers(
  department: string
): Promise<MappedTeacher[]> {
  const encodedDepartment = encodeURIComponent(department)
  const baseUrl = process.env.DIRECTUS_URL || 'http://localhost:8055'
  const url = `${baseUrl}/items/teachers?filter%5Bdepartment%5D%5B_eq%5D=${encodedDepartment}&filter%5Bstatus%5D%5B_eq%5D=published`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to fetch teachers: ${response.statusText}`)
  }

  const { data } = await response.json()

  // Map each teacher to the desired structure.
  const mappedTeachers: MappedTeacher[] = data.map((teacher: Teacher) => ({
    id: teacher.id.toString(),
    name: teacher.name,
    photoUrl: `${process.env.NEXT_PUBLIC_ASSET_URL}${teacher.image}`,
    ctaText: 'Profile',
    designation: teacher.title,
    qualification: teacher.degree,
    areasOfInterest: teacher.interest,
    ctaOnClick: `${process.env.NEXT_PUBLIC_ASSET_URL}${teacher.file}`,
  }))

  return mappedTeachers
}
