import React from 'react'

const HomePage = () => {
  const admissionItems = [
    { title: 'FE Admission Process', link: '#' },
    { title: 'Education Loan', link: '#' },
    { title: 'Brochure (2023-24)', link: '#' },
    { title: 'Medical Certificate', link: '#' },
    { title: 'Listen To Leadership Team', link: '#' },
  ]

  const quickLinks = [
    { text: 'Academics', sublinks: [] },
    { text: 'Schools & Divisions', sublinks: [] },
    {
      text: 'Admissions & Aid',
      sublinks: [
        'Undergraduate Admissions',
        'Graduate Admissions',
        'Plan a Visit',
        'Tuition & Costs',
        'Financial Aid',
      ],
    },
    { text: 'Research & Faculty', sublinks: [] },
    { text: 'Campus Life', sublinks: [] },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-gray-50 to-[#E5F0FF] pt-60">
      <main className="container mx-auto flex grow">
        <section className="w-1/3 p-4">
          <h2 className="mb-4 text-2xl font-bold text-blue-800">Quick Links</h2>
          <ul className="space-y-4">
            {quickLinks.map((link, index) => (
              <li key={index} className="group">
                <div className="cursor-pointer text-lg font-semibold text-gray-800 hover:text-blue-800">
                  {link.text}
                </div>
                {link.sublinks.length > 0 && (
                  <ul className="mt-2 ml-4 space-y-2 text-gray-600">
                    {link.sublinks.map((sublink, subindex) => (
                      <li key={subindex} className="hover:text-blue-600">
                        {sublink}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="w-2/3 p-4">
          <div className="space-y-4">
            {admissionItems.map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-900 text-white shadow-md"
              >
                <button className="flex w-full items-center justify-between p-4">
                  <span className="text-lg font-semibold">{item.title}</span>
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage
