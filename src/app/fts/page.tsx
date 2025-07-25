'use client'

import { useState } from 'react'
import { buildSearchIndex } from '@/app/actions/buildSearchIndex'
import { Index } from 'flexsearch'

export default function SearchBuilder() {
  const [results, setResults] = useState<any[]>([])
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState<any>(null)

  const buildIndex = async () => {
    const data = await buildSearchIndex()
    const idx = new Index({ tokenize: 'forward' })
    data.forEach((item: any, i: number) => {
      idx.add(i, `${item.path} ${item.content}`)
    })
    setIndex({ data, idx })
    alert(`Index built with ${data.length} entries.`)
  }

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setQuery(val)
    if (!index) return
    const ids = index.idx.search(val, 10)
    setResults(ids.map((i: number) => index.data[i]))
  }

  return (
    <div className="p-4 mt-50 max-w-xl mx-auto space-y-4">
      <button
        onClick={buildIndex}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Build Search Index
      </button>

      <input
        value={query}
        onChange={search}
        placeholder="Search..."
        className="w-full p-2 border rounded"
      />

      <ul className="space-y-2">
        {results.map((r, i) => (
          <li key={i}>
            <a href={r.path} className="text-blue-500 underline">{r.path}</a>
            <p className="text-sm text-gray-600">{r.content.slice(0, 80)}...</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
