import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import { Award, Download, FileText } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const NAACAccreditationsPage = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] px-2 text-gray-900">
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-4 pt-18 text-[#00122a] sm:px-8 md:px-16 md:pt-36 lg:px-28">
          <h1
            className={`${zilla.className} mb-4 font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            NAAC ACCREDITATIONS
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full p-4 px-4 md:p-0 md:px-28 md:py-16">
        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Quality Assurance & Recognition
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-4 text-xl font-semibold text-[#4a90e2]">
              "Committed to Excellence in Higher Education"
            </p>
            <p className="text-gray-700">
              Our institution has been accredited by the National Assessment and Accreditation Council (NAAC), demonstrating our commitment to quality education and continuous improvement in all aspects of our academic and administrative processes.
            </p>
          </div>
        </div>

        {/* About NAAC */}
        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            About NAAC
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="flex items-start">
              <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
                <Award className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="text-gray-700">
                  The National Assessment and Accreditation Council (NAAC) is an
                  autonomous body established by the University Grants Commission
                  (UGC) of India to assess and accredit institutions of higher
                  education in the country. NAAC's assessment provides a quality
                  status to the institution and helps in quality assurance of an
                  institution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our NAAC Accreditation */}
        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Our NAAC Accreditation
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-6 text-gray-700">
              We are proud to announce that our institution has been accredited
              by NAAC. This accreditation is a testament to our commitment to
              quality education and continuous improvement in all aspects of our
              academic and administrative processes.
            </p>

            <div className="mb-6">
              <h3 className={`${zilla.className} mb-4 text-xl font-bold text-[#001f3f]`}>
                NAAC Certificate 2023
              </h3>
              <div className="h-[500px] md:h-[600px] w-full">
                <object
                  data="/naac/NAAC_Certificate_2023.pdf"
                  type="application/pdf"
                  width="100%"
                  height="100%"
                  className="border border-gray-300 rounded-lg"
                >
                  <div className="flex flex-col items-center justify-center h-full bg-gray-50 rounded-lg">
                    <p className="text-gray-700 mb-4 text-center">
                      Unable to display PDF file.
                    </p>
                    <a
                      href="/naac/NAAC_Certificate_2023.pdf"
                      className="inline-flex items-center text-[#4a90e2] hover:underline"
                      download
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download PDF
                    </a>
                  </div>
                </object>
              </div>
            </div>
          </div>
        </div>

        {/* Self Study Report */}
        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Self Study Report (SSR) 2022-2023
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="flex items-start mb-6">
              <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
                <FileText className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="text-gray-700">
                  The Self Study Report (SSR) is a comprehensive document that
                  provides detailed information about our institution's performance
                  across various parameters set by NAAC. It reflects our strengths,
                  weaknesses, opportunities, and challenges.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/naac/ssr_22_23.pdf"
                className="inline-flex items-center rounded-lg bg-[#4a90e2] px-8 py-4 font-semibold text-white transition-all hover:bg-[#3a7bc2] hover:shadow-lg"
                download
              >
                <Download className="mr-2 h-5 w-5" />
                Download SSR 2022-2023 PDF
              </a>
            </div>
          </div>
        </div>

        {/* Benefits of NAAC Accreditation */}
        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Benefits of NAAC Accreditation
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-6 text-gray-700">
              NAAC accreditation brings numerous advantages to our institution, students, and stakeholders:
            </p>
            <div className="space-y-4">
              {[
                'Facilitates global recognition of the degrees offered by the institution',
                'Acts as a quality indicator for funding agencies',
                'Creates sound basis for decision-making for all educational reforms',
                'Enhances employability of graduates',
                'Promotes intra and inter-institutional interactions'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Continuous Quality Enhancement
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-4 text-gray-700">
              Our NAAC accreditation is not just a certification but a commitment to maintaining and enhancing the quality of education we provide. We continuously work towards improving our academic standards, infrastructure, and student support services.
            </p>
            <p className="text-gray-700">
              For more information about our NAAC accreditation process, quality initiatives, or to access additional documents, please contact the IQAC office or visit our quality assurance section.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="/naac/all_naac_documents.pdf"
            className="rounded-lg bg-[#4a90e2] px-8 py-4 font-semibold text-white transition-all hover:bg-[#3a7bc2] hover:shadow-lg"
            download
          >
            Download All NAAC Documents
          </a>
        </div>
      </div>
    </div>
  )
}

export default NAACAccreditationsPage