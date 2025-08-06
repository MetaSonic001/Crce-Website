'use client'
import React from 'react'
import Image from 'next/image'
import SideNav from './Sidenav'
import Link from 'next/link'
import Quote from './Quote'
import HighlightedSpeeches from './HighlightedSpeeches'

const PresidentPage = () => {
  return (
    <>
      <div className="h-full w-full bg-linear-to-b from-white to-[#E5F0FF] md:pt-24">
        <main className="container mx-auto px-4 pb-12 pt-16">
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <h2 className="mb-10 text-center font-serif text-2xl md:text-5xl font-semibold text-blue-950">
              Principal - Dr. Surendra Singh Rathod
            </h2>

            <div className="flex flex-col items-center lg:flex-row lg:items-start">
              <div className="mb-8 lg:mb-0 lg:w-1/2">
                <Image
                  src="/ssr3.png"
                  alt="Principal"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="lg:ml-12 lg:w-1/2">
                <h3 className="mb-6 font-roboto text-xl md:text-2xl font-semibold text-gray-800">
                  Greetings and a very warm welcome to CRCE!
                </h3>
                <p className="mb-4 font-roboto text-justify leading-relaxed text-gray-700">
                  I have great pleasure in expressing my thoughts as the
                  Principal of Fr. Conceicao Rodriuges College of Engineering: a
                  prestigious, self-financed institute affiliated to University
                  of Mumbai, Maharashtra and approved by AICTE. Fr CRCE was
                  established in 1984 with a vision of Moulding Engineers who
                  can Build the Nation inspired by the dream of our founder Rev.
                  Fr. Conceicao Rodrigues.
                </p>
                <p className="mb-4 font-roboto text-justify leading-relaxed text-gray-700">
                  Fr. CRCE aspires to be a center of excellence in engineering
                  education, moulding engineers with the state-of-the art
                  technologies, innovative skills and human values matching with
                  the growing expectations of the corporates and the society and
                  thus play an effective role in nation building.
                </p>
                <p className="mb-6 font-roboto text-justify leading-relaxed text-gray-700">
                  Education makes one more well-informed and knowledgeable. Both
                  of these will help to enhance critical thinking skills needed
                  to make good decisions in every walk of life. Education must
                  prepare aspiring minds for Marathon and make them Life-Long
                  Learner.
                </p>
                <Link
                  href="#"
                  className="inline-block rounded-lg bg-blue-900 px-6 py-3 font-roboto font-semibold text-white transition-colors duration-300 hover:bg-blue-800"
                >
                  Profile of Principal
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <HighlightedSpeeches />
      {/* <Quote
        name="Dr. Surendra Singh Rathod"
        title="Principal"
        quote="A rich diversity of people, background, experience, and thought is central to our work; to our missions of education, research, and service; and to our commitment to freedom of inquiry and expression."
        imageSrc="/ssr3.png"
      /> */}
    </>
  )
}

export default PresidentPage
