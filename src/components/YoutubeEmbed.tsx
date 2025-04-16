type YoutubeEmbedProps = {
  url: string
}

const extractYouTubeVideoId = (url: string): string | null => {
  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.hostname.includes('youtube.com')) {
      if (parsedUrl.pathname === '/watch') {
        return parsedUrl.searchParams.get('v')
      }

      if (parsedUrl.pathname.startsWith('/shorts/')) {
        return parsedUrl.pathname.split('/shorts/')[1] ?? null
      }

      if (parsedUrl.pathname.startsWith('/embed/')) {
        return parsedUrl.pathname.split('/embed/')[1] ?? null
      }
    }

    if (parsedUrl.hostname === 'youtu.be') {
      return parsedUrl.pathname.slice(1)
    }

    return null
  } catch {
    return null
  }
}

const YoutubeEmbed = ({ url }: YoutubeEmbedProps) => {
  const videoId = extractYouTubeVideoId(url)

  if (!videoId) {
    return <p>Invalid YouTube URL</p>
  }

  return (
    <div className="aspect-video w-full">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full rounded-xl"
      />
    </div>
  )
}

export default YoutubeEmbed
