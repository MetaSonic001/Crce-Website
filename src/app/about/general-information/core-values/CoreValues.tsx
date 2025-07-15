import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const CoreValues = () => {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col">
      <main className="container mx-auto grow p-4">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">Core Values</h2>
          <div className="container mx-auto px-4 py-2">
            <section className="">
              <div className="space-y-8">
                {[
                  {
                    title: 'Integrity:',
                    items: [
                      'Strive to provide an education that emphasizes honesty, fairness, and empathy for fellow citizens',
                      'Committed to instilling integrity of character in students',
                      'Ensure coherence between actions, duties, and responsibilities',
                    ],
                  },
                  {
                    title: 'Discipline:',
                    items: [
                      'Consistent growth and progress require the application of disciplined efforts',
                      'The institute is committed to maintaining a disciplined academic regime for students',
                      'Discipline is emphasized in social behavior, campus life, and academic endeavors',
                    ],
                  },
                  {
                    title: 'Originality:',
                    items: [
                      `Today's industrial and technological growth is driven by innovation`,
                      'Originality is crucial in the modern world',
                      'The institute emphasizes project-based experiential learning',
                      'This learning approach stimulates original ideas that lead to innovation',
                    ],
                  },
                  {
                    title: 'Quality:',
                    items: [
                      'Vivekananda emphasized that the greatest sin is to think of oneself as we',
                      'Knowledge is equated with power',
                      'The institute is committed to pursuing power through knowledge',
                      'A focus on striving for excellence in all academic endeavors',
                    ],
                  },
                  {
                    title: 'Competitive spirit:',
                    items: [
                      'Growth is based on talent and the desire to prove it',
                      'Competitive spirit, combined with talent, is essential for achieving excellence',
                      'The institute actively fosters competitive spirit among students',
                      'Organizes various technical competitions to bring out the best in students',
                    ],
                  },
                  {
                    title: 'Concern towards Society:',
                    items: [
                      `The belief that the institute's existence is for and because of the students`,
                      'Contributing to the nation by providing well-trained technical manpower',
                      'Dedicated to fostering both professional and personal growth of all students',
                      'Focus on providing lifelong learning experiences for students',
                      'Ensuring an environment that supports the holistic development of students',
                    ],
                  },
                ].map((section, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg"
                  >
                    <h3
                      className={`${zilla.className} mb-4 text-xl font-semibold text-[#4a90e2]`}
                    >
                      {section.title}
                    </h3>
                    <ul className="list-inside list-disc space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CoreValues
