'use server'

import { getOneCouncil, OneCouncil } from '@/app/api/singleCouncil'
import { FileDown, Globe } from 'lucide-react'
import { Markdown } from '@/components/markdown' // Custom markdown component (see below)

const dummyData: OneCouncil[] = {
  id: 1,
  status: 'published',
  name: 'CodeLabs CRCE',
  website: 'https://codelabscrce.netlify.app/',
  image: '/councils/codelabs.jpg',
  report: '', // Ignored
  data: 'This is a sample markdown content for CodeLabs CRCE.',
  members: [
    {
      name: 'John Doe',
      role: 'President',
      image: '/alumni/adi.jpg',
      class: 'B.E. Computer Engineering',
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      image: '/alumni/sharu.jpg',
      class: 'B.E. Information Technology',
    },
    {
      name: 'John Doe',
      role: 'President',
      image: '/alumni/zane.jpg',
      class: 'B.E. Computer Engineering',
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      image: '/councils/ieee.jpg',
      class: 'B.E. Information Technology',
    },
    {
      name: 'John Doe',
      role: 'President',
      image: '/councils/ieee.jpg',
      class: 'B.E. Computer Engineering',
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      image: '/councils/ieee.jpg',
      class: 'B.E. Information Technology',
    },
    {
      name: 'John Doe',
      role: 'President',
      image: '/councils/ieee.jpg',
      class: 'B.E. Computer Engineering',
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      image: '/councils/ieee.jpg',
      class: 'B.E. Information Technology',
    },
    {
      name: 'John Doe',
      role: 'President',
      image: '/councils/ieee.jpg',
      class: 'B.E. Computer Engineering',
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      image: '/councils/ieee.jpg',
      class: 'B.E. Information Technology',
    },
  ],
}

const MemberCard = ({ member }: { member: (typeof dummyData.members)[0] }) => {
  return (
    <div className="flex overflow-hidden flex-col items-center rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105">
      <img
        src={`${member.image}`} //${process.env.NEXT_PUBLIC_ASSET_URL}
        alt={member.name}
        className="mb-4 h-72 w-72 rounded-lg  object-cover"
      />
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-blue-600">{member.role}</p>
      <p className="mt-1 text-sm text-gray-600">{member.class}</p>
    </div>
  )
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  // const fetchedCouncil = await getOneCouncil(id)
  const council = dummyData

  const imageUrl = `${process.env.NEXT_PUBLIC_ASSET_URL}${council.image}`
  const reportUrl = `${process.env.NEXT_PUBLIC_ASSET_URL}${council.report}`

  return (
    <div className="container mx-auto space-y-6 p-6 pt-64">
      <div className="text-3xl font-bold">{council.name}</div>

      {council.website && (
        <a
          href={
            council.website.startsWith('http')
              ? council.website
              : `https://${council.website}`
          }
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:underline"
        >
          <Globe className="h-4 w-4" />
          Visit Website
        </a>
      )}

      {council.image && (
        <img
          src={imageUrl}
          alt={council.name}
          className="max-h-[400px] w-full rounded-2xl object-cover shadow-md"
        />
      )}

      <div className="prose dark:prose-invert max-w-none">
        <Markdown>{council.data}</Markdown>
      </div>

      {council.members && council.members.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Council Members</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {council.members.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      )}

      {council.report && (
        <a
          href={reportUrl}
          download
          className="bg-muted hover:bg-muted/80 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition"
        >
          <FileDown className="h-4 w-4" />
          Download Report
        </a>
      )}
    </div>
  )
}
