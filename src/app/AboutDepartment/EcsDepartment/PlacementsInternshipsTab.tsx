import React, { useState } from 'react';

const PlacementsInternshipsTab = () => {
  const [activeSubTab, setActiveSubTab] = useState('placements');

 
  const placementsData = [
    {
      company: "Example Company",
      position: "Software Engineer",
      package: "12 LPA",
      location: "Bangalore",
      year: "2023"
    },
    // Add more placement data as needed
  ];

  
  const internshipsData = [
    {
      company: "Example Company",
      position: "Software Engineer Intern",
      stipend: "20,000/month",
      location: "Mumbai",
      year: "2023"
    },
    // Add more internship data as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/5 bg-gray-300"></div>
        <h2 className="mx-8 text-center text-4xl font-bold text-[#131929]">
          Placement & Internship Statistics
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/5 bg-gray-300"></div>
      </div>

      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-md">
          <button
            onClick={() => setActiveSubTab('placements')}
            className={`rounded-l-md px-8 py-3 text-base font-medium ${
              activeSubTab === 'placements'
                ? 'bg-[#131929] text-white'
                : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            Placements
          </button>
          <button
            onClick={() => setActiveSubTab('internships')}
            className={`rounded-r-md px-8 py-3 text-base font-medium ${
              activeSubTab === 'internships'
                ? 'bg-[#131929] text-white'
                : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            Internships
          </button>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-md">
        {activeSubTab === 'placements' ? (
          <div>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Our department has an impressive placement record with students securing positions in top companies across the industry.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white shadow">
                <thead className="bg-[#F5F8FF]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">Position</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">Package</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {placementsData.map((placement, index) => (
                    <tr key={index} className="bg-white">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{placement.company}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">{placement.position}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">{placement.package}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">{placement.location}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">{placement.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Our students participate in internships at leading organizations to gain practical industry experience.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white shadow">
                <thead className="bg-[#F5F8FF]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">Position</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">Stipend</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {internshipsData.map((internship, index) => (
                    <tr key={index} className="bg-white">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{internship.company}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">{internship.position}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">{internship.stipend}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">{internship.location}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">{internship.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacementsInternshipsTab;