export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params
  const assetBase = process.env.DIRECTUS_URL
  if (!assetBase) {
    return new Response('DIRECTUS_ASSET_URL is not defined', { status: 500 })
  }
  const assetUrl = `${assetBase}/assets/${id}`

  try {
    // Forward all relevant request headers, especially Range for video streaming
    const fetchHeaders = new Headers()
    for (const [key, value] of req.headers.entries()) {
      // Only forward headers that won't cause CORS or other issues
      if (
        ['range', 'if-none-match', 'if-modified-since', 'accept'].includes(
          key.toLowerCase()
        )
      ) {
        fetchHeaders.set(key, value)
      }
    }

    // Fetch options
    const fetchOptions: RequestInit = {
      headers: fetchHeaders,
      next: {
        revalidate: 28800, // 8 hours in seconds
      },
    }

    const directusRes = await fetch(assetUrl, fetchOptions)

    // Handle various response types
    if (directusRes.status === 304) {
      return new Response(null, { status: 304 })
    }

    if (!directusRes.ok && directusRes.status !== 206) {
      // Allow 206 Partial Content
      return new Response(`Failed to fetch asset: ${directusRes.statusText}`, {
        status: directusRes.status,
      })
    }

    // Copy all relevant response headers
    const responseHeaders = new Headers()
    directusRes.headers.forEach((value, key) => {
      // Copy most headers, particularly those related to content and caching
      if (
        !['connection', 'keep-alive', 'transfer-encoding'].includes(
          key.toLowerCase()
        )
      ) {
        responseHeaders.set(key, value)
      }
    })

    // Ensure content type is set
    if (!responseHeaders.has('content-type')) {
      const contentType =
        directusRes.headers.get('content-type') || 'application/octet-stream'
      responseHeaders.set('Content-Type', contentType)
    }

    // Set appropriate caching headers based on content type
    const contentType = responseHeaders.get('content-type') || ''
    const isVideo = contentType.startsWith('video/')

    if (isVideo) {
      // Videos use different caching strategy - less aggressive for streaming
      responseHeaders.set(
        'Cache-Control',
        'public, max-age=3600, s-maxage=28800, stale-while-revalidate=7200'
      )
    } else {
      // Images and other static assets
      responseHeaders.set(
        'Cache-Control',
        'public, max-age=28800, s-maxage=86400, stale-while-revalidate=14400'
      )
    }

    // Forward status code from original response (important for 206 Partial Content)
    return new Response(directusRes.body, {
      status: directusRes.status,
      headers: responseHeaders,
    })
  } catch (err) {
    console.error('Asset proxy error:', err)
    return new Response('Internal Server Error', { status: 500 })
  }
}
