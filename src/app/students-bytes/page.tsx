import React from 'react'
import YoutubeEmbed from '@/components/YoutubeEmbed'

const page = () => {
  const data = [
    {
      title: 'Leandra Monteiro BE IT',
      url: 'https://youtu.be/i-vuODFG6eQ',
    },
    { title: 'Sherwin Dsouza TE ECS', url: 'https://youtu.be/yNrg7ilAyMU' },
    { title: 'Yashas TE Mech', url: 'https://youtu.be/RN_to0McDi0' },
    { title: 'Andrea Pinto TE ECS', url: 'https://youtu.be/gqGVmiGfclI' },
    {
      title: 'Arpita Khar TE ECS',
      url: 'https://youtu.be/qn-6yxjSYzc',
    },
    { title: 'Atharva Joshi TE ECS', url: 'https://youtu.be/EXClFkGqmRs' },
    { title: 'Meera BE IT', url: 'https://youtu.be/lGKkocUSJzk' },
    { title: 'Pratham SE AIDS', url: 'https://youtu.be/3mIzMO1O-j0' },
    {
      title: 'Preet Mehta BE Prod',
      url: 'https://youtu.be/dEJJ0qie8Uo',
    },
    { title: 'Robin Lobo BE IT', url: 'https://youtu.be/AjNM06oymzw' },
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
