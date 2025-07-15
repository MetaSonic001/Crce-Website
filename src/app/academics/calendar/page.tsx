import React from 'react'

const PDFViewerPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-white to-[#E5F0FF]">
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-4 pt-20 text-[#00122a] sm:px-8 md:px-16 md:pt-36 lg:px-28">
          <h1
            className={`mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            ACADMEIC CALENDER
          </h1>
        </div>
      </div>

      <main className="container mx-auto my-1 grow p-4 md:my-8">
        <div className="mb-8 rounded-lg bg-white p-4 shadow-lg">
          <div className="h-[800px] w-full">
            {' '}
            {/* Adjust height as needed */}
            <object
              data="/Academic-Calendar-2023-34.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="border border-gray-300"
            >
              <p>
                Unable to display PDF file.
                <a
                  href="/Academic-Calendar-2023-34.pdf"
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

export default PDFViewerPage
