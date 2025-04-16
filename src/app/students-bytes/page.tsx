import React from 'react'
import YoutubeEmbed from '@/components/YoutubeEmbed'

const page = () => {
  const data = [
    {
      title: 'Yashas TE Mech',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    { title: 'Student 2', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Student 3', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Student 4', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    {
      title: 'Yashas TE Mech',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    { title: 'Student 2', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Student 3', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Student 4', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    {
      title: 'Yashas TE Mech',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    { title: 'Student 2', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Student 3', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Student 4', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  ]
  return (
    <div className="container mx-auto mt-50 p-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col">
            <h1 className="mb-4 text-xl font-bold">{item.title}</h1>
            <YoutubeEmbed url={item.url} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
