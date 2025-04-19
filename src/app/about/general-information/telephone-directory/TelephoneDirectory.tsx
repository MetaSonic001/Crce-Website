'use client'
import { useState } from 'react'

type DirectoryEntry = {
  srNo: number
  extNo: number | string
  telephoneNo: string
  department: string
}

type TelephoneDirectoryData = {
  college: DirectoryEntry[]
  asharm: DirectoryEntry[]
  polytechnic: DirectoryEntry[]
  iti: DirectoryEntry[]
  school: DirectoryEntry[]
}

const telephoneDirectoryData: TelephoneDirectoryData = {
  college: [
    {
      srNo: 1,
      extNo: 301,
      telephoneNo: '67114101',
      department: 'Principal - Dr. S.S.Rathod',
    },
    {
      srNo: 2,
      extNo: 302,
      telephoneNo: '67114102',
      department: 'TPO - Mahesh Sharma',
    },
    {
      srNo: 3,
      extNo: 304,
      telephoneNo: '67114104',
      department: 'Registrar - Shetty',
    },
    {
      srNo: 4,
      extNo: 305,
      telephoneNo: '67114105',
      department: 'Exam InCharge - Ms. Merly Thomas',
    },
    {
      srNo: 5,
      extNo: 306,
      telephoneNo: '67114106',
      department: 'CRCE - Fr. Valerian Office',
    },
    {
      srNo: 6,
      extNo: 307,
      telephoneNo: '67114107',
      department: 'H & S Sta Room - Mr. Dileep CC',
    },
    {
      srNo: 7,
      extNo: 308,
      telephoneNo: '67114108',
      department: 'Mechanic Lab',
    },
    {
      srNo: 8,
      extNo: 309,
      telephoneNo: '67114109',
      department: 'Server Room/Kanchan',
    },
    {
      srNo: 9,
      extNo: 311,
      telephoneNo: '67114111',
      department: 'Electronic - HOD - Dr. Sapna Prabhu',
    },
    {
      srNo: 10,
      extNo: 312,
      telephoneNo: '67114112',
      department: 'Automation Lab',
    },
    {
      srNo: 11,
      extNo: 313,
      telephoneNo: '67114113',
      department: 'Computers HOD - Dr. Sujata Deshmukh',
    },
    {
      srNo: 12,
      extNo: 314,
      telephoneNo: '67114114',
      department: 'Library - Mrs. Jothilakshmi',
    },
    {
      srNo: 13,
      extNo: 316,
      telephoneNo: '67114116',
      department: 'CAD/CAM Lab',
    },
    {
      srNo: 14,
      extNo: 317,
      telephoneNo: '67114117',
      department: 'Electrical Lab',
    },
    {
      srNo: 15,
      extNo: 318,
      telephoneNo: '67114118',
      department: 'Computer Lab',
    },
    {
      srNo: 16,
      extNo: 319,
      telephoneNo: '67114119',
      department: 'Internet Centre - Library',
    },
    {
      srNo: 17,
      extNo: 320,
      telephoneNo: '67114120',
      department: 'Communication Lab',
    },
    {
      srNo: 18,
      extNo: 321,
      telephoneNo: '67114121',
      department: 'Microprocessor Lab',
    },
    {
      srNo: 19,
      extNo: 322,
      telephoneNo: '67114122',
      department: 'Ckt & Power Electronics',
    },
    {
      srNo: 20,
      extNo: 323,
      telephoneNo: '67114123',
      department: 'Digital Electronics',
    },
    { srNo: 21, extNo: 324, telephoneNo: '67114124', department: 'TOM Lab' },
    {
      srNo: 22,
      extNo: 326,
      telephoneNo: '67114126',
      department: 'Chemistry Lab - Mrs. Jyoti',
    },
    {
      srNo: 23,
      extNo: 327,
      telephoneNo: '67114127',
      department: 'Physics Lab',
    },
    {
      srNo: 24,
      extNo: 328,
      telephoneNo: '67114128',
      department: 'SE Lab - Mr. Jiten',
    },
    {
      srNo: 25,
      extNo: 329,
      telephoneNo: '67114129',
      department: 'Internet Technology Lab - Mr. Nilesh',
    },
    {
      srNo: 26,
      extNo: 330,
      telephoneNo: '67114130',
      department: 'Instrument Lab',
    },
    {
      srNo: 27,
      extNo: 331,
      telephoneNo: '67114131',
      department: 'Student Centre - Xerox',
    },
    { srNo: 28, extNo: 332, telephoneNo: '67114132', department: 'COA Lab' },
    {
      srNo: 29,
      extNo: 333,
      telephoneNo: '67114133',
      department: 'Adv. Comm Lab',
    },
    { srNo: 30, extNo: 334, telephoneNo: '67114134', department: 'CNC' },
    {
      srNo: 31,
      extNo: 335,
      telephoneNo: '67114135',
      department: 'Dr. V.S. Jorapur',
    },
    {
      srNo: 32,
      extNo: 336,
      telephoneNo: '67114136',
      department: 'Dr. Bhushan Patil',
    },
    {
      srNo: 33,
      extNo: 337,
      telephoneNo: '67114137',
      department: 'Sta Room AI & DS',
    },
    {
      srNo: 34,
      extNo: 338,
      telephoneNo: '67114138',
      department: 'ECS Department',
    },
    {
      srNo: 35,
      extNo: 340,
      telephoneNo: '67114140',
      department: 'Project Lab',
    },
    { srNo: 36, extNo: 341, telephoneNo: '67114141', department: 'PCB Lab' },
    {
      srNo: 37,
      extNo: 342,
      telephoneNo: '67114142',
      department: 'Mechanical - HOD',
    },
    {
      srNo: 38,
      extNo: 343,
      telephoneNo: '67114143',
      department: 'Language Lab',
    },
    {
      srNo: 39,
      extNo: 344,
      telephoneNo: '67114144',
      department: 'HOD - AI & DS - Dr. Jagruti Save',
    },
    {
      srNo: 40,
      extNo: 345,
      telephoneNo: '67114145',
      department: 'Open Source Lab',
    },
    {
      srNo: 41,
      extNo: 346,
      telephoneNo: '67114146',
      department: 'CAD/CAM - Santosh Dharman',
    },
    {
      srNo: 42,
      extNo: 348,
      telephoneNo: '67114148',
      department: 'IEDC Lab - Mr. Dileep',
    },
    {
      srNo: 43,
      extNo: 366,
      telephoneNo: '67114166',
      department: 'Mr. Kotian / Mrs. Neelam',
    },
    {
      srNo: 44,
      extNo: 367,
      telephoneNo: '67114167',
      department: 'Mr. Robert / Mr. Johnson',
    },
    {
      srNo: 45,
      extNo: 368,
      telephoneNo: '67114168',
      department: 'Exam Cell - Robert Dias',
    },
    {
      srNo: 46,
      extNo: 291,
      telephoneNo: '67114091',
      department: 'Network Security Lab',
    },
    {
      srNo: 47,
      extNo: 292,
      telephoneNo: '67114092',
      department: 'Cloud Computing Lab',
    },
    {
      srNo: 48,
      extNo: 374,
      telephoneNo: '67114174',
      department: 'Project Management & MIS Lab',
    },
    {
      srNo: 49,
      extNo: 284,
      telephoneNo: '67114084',
      department: 'Core Programming Lab',
    },
    {
      srNo: 50,
      extNo: 285,
      telephoneNo: '67114085',
      department: 'RTOS & AMP Lab',
    },
  ],

  polytechnic: [
    {
      srNo: 1,
      extNo: 251,
      telephoneNo: '67114051',
      department: 'Principal - T.V. Narayanan',
    },
    {
      srNo: 2,
      extNo: 254,
      telephoneNo: '67114054',
      department: 'Mr. T. Fernandes',
    },
    { srNo: 3, extNo: 290, telephoneNo: '67114090', department: 'Mr. Diago' },
    { srNo: 4, extNo: 255, telephoneNo: '67114055', department: 'Staff Room' },
    {
      srNo: 5,
      extNo: 256,
      telephoneNo: '67114056',
      department: 'Computer Lab',
    },
    {
      srNo: 6,
      extNo: 257,
      telephoneNo: '67114057',
      department: 'Exam Cell - Mrs. Preeti',
    },
    {
      srNo: 7,
      extNo: 258,
      telephoneNo: '67114058',
      department: 'CAD/CAM - Mr. Mangesh',
    },
    {
      srNo: 8,
      extNo: 262,
      telephoneNo: '67114062',
      department: 'Main Store - Mr. Thule',
    },
    {
      srNo: 9,
      extNo: 263,
      telephoneNo: '67114063',
      department: 'Metrology Lab',
    },
    {
      srNo: 10,
      extNo: 265,
      telephoneNo: '67114065',
      department: 'Office - Mrs. Sabina',
    },
    {
      srNo: 11,
      extNo: 267,
      telephoneNo: '67114067',
      department: 'Student Section - Ms. Minoti',
    },
  ],

  asharm: [
    {
      srNo: 1,
      extNo: 'FAX',
      telephoneNo: '67114100',
      department: 'Telephone Operator',
    },
    {
      srNo: 2,
      extNo: '9/200',
      telephoneNo: '67114000',
      department: 'Telephone Operator',
    },
    {
      srNo: 3,
      extNo: 201,
      telephoneNo: '67114001',
      department: 'Telephone Operator',
    },
    {
      srNo: 4,
      extNo: 202,
      telephoneNo: '67114002',
      department: 'Telephone Operator',
    },
    {
      srNo: 5,
      extNo: 203,
      telephoneNo: '67114003',
      department: 'Chief Financial Officer',
    },
    {
      srNo: 6,
      extNo: 204,
      telephoneNo: '67114004',
      department: 'Mrs. Jennifer',
    },
    { srNo: 7, extNo: 227, telephoneNo: '67114027', department: 'Mrs. Vidya' },
    {
      srNo: 8,
      extNo: 205,
      telephoneNo: '67114005',
      department: 'Mr. Rodrigues / Mr. Santosh',
    },
    { srNo: 9, extNo: 206, telephoneNo: '67114006', department: 'Mr. Joseph' },
    {
      srNo: 10,
      extNo: 207,
      telephoneNo: '67114007',
      department: 'Fr. Dilip Office',
    },
    {
      srNo: 11,
      extNo: 209,
      telephoneNo: '67114009',
      department: "Chairman's Office (RS)",
    },
    {
      srNo: 12,
      extNo: 210,
      telephoneNo: '67114010',
      department: 'Internal Audit',
    },
    {
      srNo: 13,
      extNo: 211,
      telephoneNo: '67114011',
      department: 'Ashram T.V. Room',
    },
    {
      srNo: 14,
      extNo: 212,
      telephoneNo: '67114012',
      department: 'Balbhavan Office',
    },
    {
      srNo: 15,
      extNo: 213,
      telephoneNo: '67114013',
      department: 'Fr. Valerian Office',
    },
    {
      srNo: 16,
      extNo: 215,
      telephoneNo: '67114015',
      department: 'Fr. Dilip Residence',
    },
    { srNo: 17, extNo: 216, telephoneNo: '67114016', department: 'Sacristy' },
    {
      srNo: 18,
      extNo: 217,
      telephoneNo: '67114017',
      department: 'Fr. Peter Residence',
    },
    { srNo: 19, extNo: 388, telephoneNo: '67114188', department: 'Guest Room' },
    {
      srNo: 20,
      extNo: 228,
      telephoneNo: '97114028',
      department: 'Ashram Office',
    },
    {
      srNo: 21,
      extNo: 229,
      telephoneNo: '67114029',
      department: 'Ashram Office - Father In Charge',
    },
    { srNo: 22, extNo: 230, telephoneNo: '67114030', department: '' },
    {
      srNo: 23,
      extNo: 231,
      telephoneNo: '67114031',
      department: 'Richard - Assist F.C.',
    },
  ],

  iti: [
    {
      srNo: 1,
      extNo: 252,
      telephoneNo: '67114052',
      department: 'Purchase - Mr. Richard',
    },
    {
      srNo: 2,
      extNo: 268,
      telephoneNo: '67114068',
      department: 'Purchase - Anthony',
    },
    {
      srNo: 3,
      extNo: 271,
      telephoneNo: '67114071',
      department: 'Purchase - Sabina',
    },
    {
      srNo: 4,
      extNo: 253,
      telephoneNo: '67114053',
      department: 'Civil Office',
    },
    {
      srNo: 5,
      extNo: 259,
      telephoneNo: '67114059',
      department: 'Civil - Mr. Rajan',
    },
    {
      srNo: 6,
      extNo: 260,
      telephoneNo: '67114060',
      department: 'ITC - Mr. Mustaq',
    },
    {
      srNo: 7,
      extNo: 261,
      telephoneNo: '67114061',
      department: 'CDTP - Mr. Raut',
    },
    { srNo: 8, extNo: 266, telephoneNo: '64114066', department: 'CDTP' },
    {
      srNo: 9,
      extNo: 273,
      telephoneNo: '67114073',
      department: 'CDTP - Ruchita',
    },
    {
      srNo: 10,
      extNo: 264,
      telephoneNo: '67114064',
      department: 'Civil - Plumber',
    },
    {
      srNo: 11,
      extNo: 403,
      telephoneNo: '67114203',
      department: 'ITC - Draughtsman',
    },
    {
      srNo: 12,
      extNo: 279,
      telephoneNo: '67114079',
      department: 'ITC - Draughtsman',
    },
    {
      srNo: 13,
      extNo: 269,
      telephoneNo: '67114069',
      department: 'Fitting - Mr. Xavier',
    },
    {
      srNo: 14,
      extNo: 270,
      telephoneNo: '67114070',
      department: 'ITC - Mr. Rakesh',
    },
    {
      srNo: 15,
      extNo: 272,
      telephoneNo: '67114072',
      department: 'Computer H/W - Ali',
    },
    {
      srNo: 16,
      extNo: 276,
      telephoneNo: '67114076',
      department: 'ITC - CAD Centre',
    },
    {
      srNo: 17,
      extNo: 278,
      telephoneNo: '67114078',
      department: 'ITC - Staff - Vandana',
    },
    {
      srNo: 18,
      extNo: 288,
      telephoneNo: '67114088',
      department: 'Lift Machanic Lab',
    },
    {
      srNo: 19,
      extNo: 289,
      telephoneNo: '67114089',
      department: 'Lift Machanic Lab',
    },
    { srNo: 20, extNo: 310, telephoneNo: '67114110', department: 'M.M.V. ITC' },
    {
      srNo: 21,
      extNo: 339,
      telephoneNo: '67114139',
      department: 'Electrical Lab ITC',
    },
    {
      srNo: 22,
      extNo: 351,
      telephoneNo: '67114151',
      department: 'Security Manager - Mr. Kamath',
    },
    {
      srNo: 23,
      extNo: 352,
      telephoneNo: '67114152',
      department: 'Security Barrier Gate',
    },
    {
      srNo: 24,
      extNo: 354,
      telephoneNo: '67114154',
      department: 'Placement - Mr. Rane',
    },
    {
      srNo: 25,
      extNo: 355,
      telephoneNo: '67114155',
      department: 'Trade Test - Anita',
    },
    { srNo: 26, extNo: 356, telephoneNo: '67114156', department: 'Placement' },
    {
      srNo: 27,
      extNo: 357,
      telephoneNo: '67114157',
      department: 'Welding - Shinde',
    },
    {
      srNo: 28,
      extNo: 359,
      telephoneNo: '67114159',
      department: 'Meter Testing - Patil',
    },
    {
      srNo: 29,
      extNo: 360,
      telephoneNo: '67114160',
      department: 'Civil Trade Test',
    },
    {
      srNo: 30,
      extNo: 361,
      telephoneNo: '67114161',
      department: 'A.C. - Mr. Shaikh',
    },
    {
      srNo: 31,
      extNo: 363,
      telephoneNo: '67114163',
      department: 'Electrical Maintenance',
    },
    {
      srNo: 32,
      extNo: 364,
      telephoneNo: '67114164',
      department: 'Carpentry - Mr. Almeida',
    },
    {
      srNo: 33,
      extNo: 365,
      telephoneNo: '67114165',
      department: 'Ashram Biometric Cabin',
    },
    {
      srNo: 34,
      extNo: 369,
      telephoneNo: '67114166',
      department: 'Security - School Gate',
    },
    { srNo: 35, extNo: 404, telephoneNo: '67114204', department: 'Canteen' },
    {
      srNo: 36,
      extNo: 208,
      telephoneNo: '67114008',
      department: 'Placement - Kavita',
    },
    {
      srNo: 37,
      extNo: 214,
      telephoneNo: '67114014',
      department: 'Placement - Prashant',
    },
    {
      srNo: 38,
      extNo: 'FAX',
      telephoneNo: '67114200',
      department: 'Placement',
    },
  ],

  school: [
    {
      srNo: 1,
      extNo: 401,
      telephoneNo: '67114201',
      department: 'Principal - Mr. M. C. Thomas',
    },
    {
      srNo: 2,
      extNo: 402,
      telephoneNo: '67114202',
      department: 'Secondary Office - Mrs. Chitra',
    },
    {
      srNo: 3,
      extNo: 405,
      telephoneNo: '67114205',
      department: 'H.T. Primary - Mrs. Linda',
    },
    { srNo: 4, extNo: 218, telephoneNo: '67114018', department: '' },
    {
      srNo: 5,
      extNo: 219,
      telephoneNo: '67114019',
      department: 'Clerk - Primary - Mr. Silvester',
    },
    {
      srNo: 6,
      extNo: 220,
      telephoneNo: '67114020',
      department: 'Store - Mrs. Sunita',
    },
    {
      srNo: 7,
      extNo: 222,
      telephoneNo: '67114022',
      department: 'Stationery Store',
    },
    {
      srNo: 8,
      extNo: 224,
      telephoneNo: '67114024',
      department: 'Manager Office - Fr.',
    },
    {
      srNo: 9,
      extNo: 225,
      telephoneNo: '67114025',
      department: 'Jr. College - Mrs. Seema',
    },
    {
      srNo: 10,
      extNo: 226,
      telephoneNo: '67114026',
      department: 'Co-ordinator K. G. Section',
    },
    {
      srNo: 11,
      extNo: 362,
      telephoneNo: '67114162',
      department: 'Clerk K.G. Section',
    },
  ],
}

type CarouselButtonProps = {
  onClick: () => void
  children: React.ReactNode
  active: boolean
}

const CarouselButton = ({ onClick, children, active }: CarouselButtonProps) => (
  <button
    onClick={onClick}
    className={`px-2 py-1 text-xs md:text-sm md:px-4 md:py-2 mx-1 md:mx-2 rounded-sm ${
      active ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
    } transition-colors duration-200`}
  >
    {children}
  </button>
)

const TelephoneDirectory = () => {
  const [activeLocation, setActiveLocation] =
    useState<keyof TelephoneDirectoryData>('college')

  const handleLocationChange = (location: keyof TelephoneDirectoryData) => {
    setActiveLocation(location)
  }

  return (
    <div className="mx-auto max-w-4xl py-6 px-4 md:py-10 md:px-0">
      <div className="mb-4 md:mb-6 flex flex-wrap justify-center gap-2 md:gap-3">
        <CarouselButton
          onClick={() => handleLocationChange('college')}
          active={activeLocation === 'college'}
        >
          College
        </CarouselButton>
        <CarouselButton
          onClick={() => handleLocationChange('asharm')}
          active={activeLocation === 'asharm'}
        >
          Asharm
        </CarouselButton>
        <CarouselButton
          onClick={() => handleLocationChange('polytechnic')}
          active={activeLocation === 'polytechnic'}
        >
          Polytechnic
        </CarouselButton>
        <CarouselButton
          onClick={() => handleLocationChange('iti')}
          active={activeLocation === 'iti'}
        >
          ITI/ITC/CDTP
        </CarouselButton>
        <CarouselButton
          onClick={() => handleLocationChange('school')}
          active={activeLocation === 'school'}
        >
          School
        </CarouselButton>
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="border-b w-[10%] px-2 md:px-4 py-2 text-left text-xs md:text-sm font-semibold text-gray-700">
                Sr. No
              </th>
              <th className="border-b w-[15%] px-2 md:px-4 py-2 text-left text-xs md:text-sm font-semibold text-gray-700">
                Extn No
              </th>
              <th className="border-b w-[25%] px-2 md:px-4 py-2 text-left text-xs md:text-sm font-semibold text-gray-700">
                Telephone No
              </th>
              <th className="border-b w-[50%] px-2 md:px-4 py-2 text-left text-xs md:text-sm font-semibold text-gray-700">
                Department
              </th>
            </tr>
          </thead>
          <tbody>
            {telephoneDirectoryData[activeLocation].map((entry) => (
              <tr key={entry.srNo} className="hover:bg-gray-100">
                <td className="border-b px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-600">
                  {entry.srNo}
                </td>
                <td className="border-b px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-600">
                  {entry.extNo}
                </td>
                <td className="border-b px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-600">
                  {entry.telephoneNo}
                </td>
                <td className="border-b px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-600">
                  {entry.department}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TelephoneDirectory
