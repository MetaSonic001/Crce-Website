// app/images/[id]/route.ts

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params

  const assetBase = process.env.DIRECTUS_URL
  if (!assetBase) {
    return new Response('DIRECTUS_ASSET_URL is not defined', { status: 500 })
  }

  const assetUrl = `${assetBase}/assets/${id}`

  try {
    const directusRes = await fetch(assetUrl)

    if (!directusRes.ok) {
      return new Response('Failed to fetch image', {
        status: directusRes.status,
      })
    }

    const contentType =
      directusRes.headers.get('content-type') || 'application/octet-stream'

    return new Response(directusRes.body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400', // optional caching
      },
    })
  } catch (err) {
    console.error('Image proxy error:', err)
    return new Response('Internal Server Error', { status: 500 })
  }
}
