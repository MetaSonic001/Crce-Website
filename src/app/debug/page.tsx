'use server'
import Link from 'next/link'
import { headers } from 'next/headers'

interface SiteData {
  name: string
  headerEntries: [string, string][]
}

async function getSiteData(domain: string | null): Promise<SiteData> {
  const headersList = await headers()
  const entries = Array.from(headersList.entries())

  return {
    name: domain || 'Unknown Site',
    headerEntries: entries,
  }
}

export default async function Page() {
  const headersList = await headers()
  const domain = headersList.get('host')
  const data = await getSiteData(domain)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 pt-32 pb-10 lg:pt-48">
      <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="bg-blue-600 py-4 text-center text-white">
          <h2 className="text-2xl font-bold"> {data.name}</h2>
        </div>
        <div className="p-6">
          <p className="mb-4 text-gray-700">Request Information</p>
          <div className="mb-4 rounded-lg bg-gray-50 p-4">
            <h3 className="mb-2 text-lg font-semibold">All Header Entries:</h3>
            <ul className="space-y-2">
              {data.headerEntries.map(([key, value]) => (
                <li key={key}>
                  <span className="font-medium">{key}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <Link
              href="/"
              className="inline-block rounded-sm bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
            >
              Return to Main Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
