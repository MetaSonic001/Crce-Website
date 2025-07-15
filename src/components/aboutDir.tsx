import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DirectorPage = () => {
  return (
    <div className="mt-[80px] flex min-h-screen w-full items-center justify-center bg-linear-to-b from-white to-[#E5F0FF] pt-20 md:pt-0">
      <main className="container mx-auto px-4">
        <div className="rounded-xl bg-white p-10 shadow-lg">
          <h2 className="font-ptserif mb-10 text-center text-5xl font-semibold text-blue-950">
            Directors's Message
          </h2>
          <div className="flex flex-col items-center lg:flex-row lg:items-start">
            <div className="mb-8 lg:mb-0 lg:w-1/3">
              <Image
                src="/padre.jpg"
                alt="Director"
                width={250}
                height={250}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="lg:ml-8 lg:w-2/3">
              <h3 className="font-roboto mb-6 text-2xl font-semibold text-gray-800">
                Welcome to CRCE
              </h3>
              <p className="font-roboto mb-4 leading-relaxed text-gray-700">
                The global education landscape is rapidly evolving, driven by
                advancements in science and technology. At CRCE, we are
                committed to equipping our students with the skills and
                knowledge necessary to navigate and excel in this dynamic world.
              </p>
              <p className="font-roboto mb-4 leading-relaxed text-gray-700">
                Our teaching approach combines analytical thinking with
                practical application, preparing future engineers to be not just
                participants but leaders in challenging environments. We
                emphasize the development of problem-solving skills, critical
                thinking, and adaptability to ensure that our graduates are
                well-prepared to meet the demands of the modern workforce.
              </p>
              <p className="font-roboto mb-6 leading-relaxed text-gray-700">
                We take pride in delivering affordable, high-quality technical
                education. Our success is reflected in our outstanding record in
                admissions, training, and placements. At CRCE, we believe in
                creating an inclusive environment where every student has the
                opportunity to thrive and reach their full potential.
              </p>
              <Link
                href="/about/about-crce"
                className="font-roboto inline-block rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-800"
              >
                Explore CRCE
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DirectorPage
