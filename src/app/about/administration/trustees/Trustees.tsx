import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const Trustees = () => {
  const councilMembers = [
    { number: '1', name: 'Fr. Bento Rodrigues', designation: 'Chairman' },
    { number: '2', name: 'Fr. Alarico Carvalho', designation: 'Vice Chairman' },
    { number: '3', name: "Fr. Peter D'Souza", designation: 'Treasurer' },
    { number: '4', name: "Fr. Valerian D'Souza", designation: 'Secretary' },
    { number: '5', name: 'Fr. Agnelo Gomes', designation: 'Member' },
  ]

  return (
    <div className="mx-auto flex sm:w-full w-[90vw] flex-col items-center justify-center rounded-lg bg-white p-2 sm:p-6 shadow-lg">
      <h2
        className={`${zilla.className} mb-8 text-center text-4xl font-bold text-blue-950 md:text-5xl lg:text-7xl`}
      >
        Trustees
      </h2>

      <table className="w-fit border-collapse overflow-scroll rounded-lg bg-white shadow-md">
        <thead className="bg-[#001f3f] text-white">
          <tr>
            <th className="border border-gray-300 p-3">Sr.</th>
            <th className="border border-gray-300 p-3">Name</th>
            <th className="border border-gray-300 p-3">Designation</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1', 'Fr. Bento Rodrigues', 'Chairman'],
            ['2', 'Fr. Alarico Carvalho', 'Vice Chairman'],
            ['3', "Fr. Peter D'Souza", 'Treasurer'],
            ['4', "Fr. Valerian D'Souza", 'Secretary'],
            ['5', 'Fr. Agnelo Gomes', 'Member'],
          ].map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="border border-gray-300 p-3">{row[0]}</td>
              <td className="border border-gray-300 p-3">{row[1]}</td>
              <td className="border border-gray-300 p-3">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Trustees