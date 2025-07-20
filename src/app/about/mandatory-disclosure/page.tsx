import React from 'react'

const PDFViewerPage = () => {
  return (
    <div className="mt-20 flex min-h-screen w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] md:mt-52">
      <main className="container mx-auto my-8 grow p-4">
        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
           <h1
            className={`mb-4 flex items-center justify-center text-center font-serif text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
          Mandatory Disclosure</h1>
          <div className="h-[800px] w-full">
            {/* Adjust height as needed */}
            <object
              data="/MandatoryDisclosure.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="border border-gray-300"
            >
              <p>
                Unable to display PDF file.
                <a
                  href="/MandatoryDisclosure.pdf"
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
