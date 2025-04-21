export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const assetBase = process.env.DIRECTUS_URL

  if (!assetBase) {
    return new Response('DIRECTUS_ASSET_URL is not defined', { status: 500 })
  }

  const assetUrl = `${assetBase}/assets/${id}`

  // Get the request headers to check for cache validation
  const headers = new Headers()

  try {
    // Fetch options to forward cache headers
    const fetchOptions: RequestInit = {
      next: {
        revalidate: 86400, // Cache for 24 hours before revalidating
      },
    }

    const directusRes = await fetch(assetUrl, fetchOptions)

    if (!directusRes.ok) {
      return new Response('Failed to fetch image', {
        status: directusRes.status,
      })
    }

    const contentType =
      directusRes.headers.get('content-type') || 'application/octet-stream'

    // Copy all caching-related headers from the original response
    const cacheControl = directusRes.headers.get('cache-control')
    const etag = directusRes.headers.get('etag')
    const lastModified = directusRes.headers.get('last-modified')

    // Set response headers
    headers.set('Content-Type', contentType)

    // Set strong caching headers
    headers.set(
      'Cache-Control',
      'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400'
    )

    // Forward ETag and Last-Modified if available for validation
    if (etag) headers.set('ETag', etag)
    if (lastModified) headers.set('Last-Modified', lastModified)

    return new Response(directusRes.body, {
      status: 200,
      headers,
    })
  } catch (err) {
    console.error('Image proxy error:', err)
    return new Response('Internal Server Error', { status: 500 })
  }
}
