import React from 'react'

const StrategicDevPlan = () => {
  return (
    <div className="flex min-h-screen w-[90vw] flex-col sm:w-full">
      <main className="container mx-auto grow p-2 sm:p-4">
        <div className="rounded-lg bg-white p-2 shadow-lg sm:p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Strategic Development Plan
          </h2>
          <div className="h-[800px] w-full">
            {/* Adjust height as needed */}
            <object
              data="/Strategic_Instt_Dev_Plan.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="border border-gray-300"
            >
              <p>
                Unable to display PDF file.
                <a
                  href="/Strategic_Instt_Dev_Plan.pdf"
                  className="text-blue-600 hover:underline"
                >
                  Download
                </a>
                instead.
              </p>
            </object>
          </div>
        </div>
      </main>
    </div>
  )
}

export default StrategicDevPlan
