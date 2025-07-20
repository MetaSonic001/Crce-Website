import Footer from '@/components/footer'
import React from 'react'

const PDFViewerPage = () => {
  return (
    <div className="absolute top-0 flex h-fit w-full flex-col items-center justify-center bg-linear-to-b from-white to-[#E5F0FF]">
    

      <main className="container mx-auto my-8 grow ">
        <div className="mb-8 rounded-lg bg-white p-6  mt-28 md:mt-40 shadow-md">
          <h1
            className={`mb-4 flex items-center justify-center text-center font-serif text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            STUDENT GRIEVANCE REDRESSAL POLICY
          </h1>
          <div className="h-[800px] w-full">
            {' '}
            {/* Adjust height as needed */}
            <object
              data="/grievance_policy.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="border border-gray-300"
            >
              <p>
                Unable to display PDF file.
                <a
                  href="/grievance_policy.pdf"
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
      <Footer />
    </div>
  )
}

export default PDFViewerPage
