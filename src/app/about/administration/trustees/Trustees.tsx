import React from 'react'

const Trustees = () => {
  const councilMembers = [
    { number: '1', name: 'Fr. Bento Rodrigues', designation: 'Chairman' },
    { number: '2', name: 'Fr. Alarico Carvalho', designation: 'Vice Chairman' },
    { number: '3', name: "Fr. Peter D'Souza", designation: 'Treasurer' },
    { number: '4', name: "Fr. Valerian D'Souza", designation: 'Secretary' },
    { number: '5', name: 'Fr. Agnelo Gomes', designation: 'Member' },
  ]

  return (
    <div className="flex min-h-max sm:w-full w-[90vw] flex-col">
      <main className="container mx-auto grow p-2 sm:p-4">
        <div className="rounded-lg bg-white p-2 sm:p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold">Trustees</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg bg-white shadow-md">
              <thead className="bg-[#001f3f] text-white">
                <tr>
                  <th className="border border-gray-300 p-3">Sr.</th>
                  <th className="border border-gray-300 p-3">Name</th>
                  <th className="border border-gray-300 p-3">Designation</th>
                </tr>
              </thead>
              <tbody>
                {councilMembers.map((member, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                  >
                    <td className="border border-gray-300 p-3">{member.number}</td>
                    <td className="border border-gray-300 p-3">{member.name}</td>
                    <td className="border border-gray-300 p-3">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Trustees