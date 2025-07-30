import { ImageResponse } from 'next/og'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'

export const runtime = 'nodejs'

export default async function Image() {
  const imagePath = join(process.cwd(), 'public/college.png')
  const imageBuffer = await readFile(imagePath)
  const base64 = imageBuffer.toString('base64')
  const logoSrc = `data:image/png;base64,${base64}`

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        <img src={logoSrc} height={100} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

