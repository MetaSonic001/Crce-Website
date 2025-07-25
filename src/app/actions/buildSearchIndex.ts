'use server'

import fs from 'fs'
import path from 'path'
import getEvents from '../api/events'
import { dropdownContent } from '../actions/data'

const appDir = path.join(process.cwd(), 'app')
const cacheDir = path.join(process.cwd(), 'public')
const cacheFile = path.join(cacheDir, 'searchIndex.json')

const dropdownIndexItems = Object.entries(dropdownContent).flatMap(([section, items]) =>
  items.map(({ name, href }) => ({
    section,
    name,
    href,
  }))
)

function resolveStaticFileFromHref(href: string) {
  const candidates = [
    path.join(appDir, href, 'page.tsx'),
    path.join(appDir, href + '.tsx'),
    path.join(appDir, href, 'page.mdx'),
    path.join(appDir, href + '.mdx'),
  ]
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate
  }
  return null
}

function crawlStaticFromDropdown() {
  const result = []
  for (const { section, name, href } of dropdownIndexItems) {
    const filePath = resolveStaticFileFromHref(href)
    let content = `${section} ${name}`
    if (filePath) {
      const raw = fs.readFileSync(filePath, 'utf8')
      const stripped = raw.replace(/<[^>]*>?/gm, '')
      content += ' ' + stripped.slice(0, 2000)
    }
    result.push({ path: href, content })
  }
  return result
}

async function crawlDynamicContent() {
  const events = await getEvents()
  return events.data.map(event => ({
    path: `/events/${event.id}`,
    content: `${event.title} ${event.description}`,
  }))
}

export async function buildSearchIndex() {
  const staticContent = crawlStaticFromDropdown()
  const dynamicContent = await crawlDynamicContent()
  const index = [...staticContent, ...dynamicContent]

  if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir)
  fs.writeFileSync(cacheFile, JSON.stringify(index, null, 2), 'utf8')

  return index
}

