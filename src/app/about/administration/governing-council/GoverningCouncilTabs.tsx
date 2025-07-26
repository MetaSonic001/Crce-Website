import React, { useState } from 'react'

const IRGPolicyTabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: 'Composition of Governing Council',
      pdf: '/GC_Members_2025.pdf',
    },
    {
      title: 'Minutes of Meeting 2022-2023',
      pdf: '/GC_Minutes_13May2023.pdf',
    },
    {
      title: 'Minutes of Meeting 2023-2024',
      pdf: '/GC_Minutes_6April2024.pdf',
    },
    {
      title: 'Minutes of Meeting 2024-2025',
      pdf: '/GC_Minutes_4April2025.pdf',
    },
  ]

  return (
    <div className="flex min-h-screen w-[90vw] flex-col sm:w-full">
      <main className="container mx-auto grow p-2 sm:p-4">
        <div className="rounded-lg bg-white p-2 shadow-lg sm:p-6">
          <h2 className="mb-4 text-2xl font-semibold">Governing Council</h2>
          <div className="mb-4">
            <div className="flex border-b border-gray-200">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-sm font-medium focus:outline-none ${
                    activeTab === index
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[800px] w-full">
            <object
              data={tabs[activeTab]?.pdf ?? ''}
              type="application/pdf"
              width="100%"
              height="100%"
              className="border border-gray-300"
            >
              <p>
                Unable to display PDF file.{' '}
                <a
                  href={tabs[activeTab]?.pdf ?? '#'}
                  className="text-blue-600 hover:underline"
                >
                  Download
                </a>{' '}
                instead.
              </p>
            </object>
          </div>
        </div>
      </main>
    </div>
  )
}

export default IRGPolicyTabs
