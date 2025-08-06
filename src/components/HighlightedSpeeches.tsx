import React from 'react'

interface Speech {
  date: string
  title: string
  description: string
}
const speeches: Speech[] = [
  {
    date: 'August 15, 2023',
    title: 'Independence Day Celebration and New Department Announcement',
    description:
      'Principal Dr. Sharma announces the establishment of a new Department of Artificial Intelligence and Machine Learning as part of our commitment to cutting-edge education on the occasion of Indias 77th Independence Day.',
  },
  {
    date: 'June 20, 2023',
    title:
      'Fr. CRCE featured in Times of India for innovative teaching methods',
    description:
      "Fr. CRCE Principal Dr. Sharma highlighted in a national newspaper for implementing project-based learning across all departments. 'It's opened up new avenues for our students to apply theoretical knowledge to real-world problems,' Dr. Sharma says.",
  },
  {
    date: 'July 1, 2023',
    title: 'College Opening Ceremony for the New Academic Year',
    description:
      'Principal Dr. Sharma welcomes new and returning students, sharing the colleges vision for the upcoming year, including enhanced industry partnerships and a focus on entrepreneurship.',
  },
]
const HighlightedSpeeches: React.FC = () => {
  return (
    <div className="bg-[#E5F0FF] px-8 py-16">
      <h2 className="mb-10 text-center font-serif text-2xl md:text-5xl font-semibold text-blue-950">
        Highlighted Speeches, Articles, and Media
      </h2>
      <div className="flex flex-col justify-center gap-8 md:flex-row">
        {speeches.map((speech, index) => (
          <div
            key={index}
            className="w-full rounded-lg bg-white p-6 shadow-lg md:w-1/3"
          >
            <p className="mb-2 font-semibold text-blue-600">
              {speech.date.toUpperCase()}
            </p>
            <h3 className="mb-4 text-xl font-bold text-gray-800">
              {speech.title}
            </h3>
            <p className="text-gray-600 text-justify">{speech.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HighlightedSpeeches
