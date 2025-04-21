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

  // Check if the client sent cache validation headers
  const ifNoneMatch = req.headers.get('if-none-match')
  const ifModifiedSince = req.headers.get('if-modified-since')

  try {
    // Create a new request with all original headers to forward conditional requests
    const fetchHeaders = new Headers()
    if (ifNoneMatch) fetchHeaders.set('if-none-match', ifNoneMatch)
    if (ifModifiedSince) fetchHeaders.set('if-modified-since', ifModifiedSince)

    // Fetch options to align with Directus caching (8 hours)
    const fetchOptions: RequestInit = {
      headers: fetchHeaders,
      next: {
        revalidate: 28800, // 8 hours in seconds to match Directus CACHE_TTL
      },
    }

    const directusRes = await fetch(assetUrl, fetchOptions)

    // Handle 304 Not Modified responses
    if (directusRes.status === 304) {
      return new Response(null, { status: 304 })
    }

    if (!directusRes.ok) {
      return new Response('Failed to fetch image', {
        status: directusRes.status,
      })
    }

    const responseHeaders = new Headers()

    // Copy important headers from the Directus response
    const contentType =
      directusRes.headers.get('content-type') || 'application/octet-stream'
    responseHeaders.set('Content-Type', contentType)

    // Get cache validation headers
    const etag = directusRes.headers.get('etag')
    const lastModified = directusRes.headers.get('last-modified')

    // Set strong caching headers - aligned with Directus 8hr TTL
    responseHeaders.set(
      'Cache-Control',
      'public, max-age=28800, s-maxage=86400, stale-while-revalidate=14400'
    )

    // Forward cache validation headers
    if (etag) responseHeaders.set('ETag', etag)
    if (lastModified) responseHeaders.set('Last-Modified', lastModified)

    // Forward content encoding if present
    const contentEncoding = directusRes.headers.get('content-encoding')
    if (contentEncoding)
      responseHeaders.set('Content-Encoding', contentEncoding)

    // Handle content-disposition for downloads
    const contentDisposition = directusRes.headers.get('content-disposition')
    if (contentDisposition)
      responseHeaders.set('Content-Disposition', contentDisposition)

    return new Response(directusRes.body, {
      status: directusRes.status,
      headers: responseHeaders,
    })
  } catch (err) {
    console.error('Image proxy error:', err)
    return new Response('Internal Server Error', { status: 500 })
  }
}
