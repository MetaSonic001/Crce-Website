import Image from 'next/image'
import React from 'react'
import { gov1 } from '@/app/files/files';
import { gov2 } from '@/app/files/files';


const Governance = () => {
  return (
    <div className="flex min-h-max sm:w-full w-[90vw] flex-col">
      <main className="container mx-auto grow p-2 sm:p-4">
        <div className="rounded-lg bg-white p-2 sm:p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold">Governance</h2>
          <div>
            <p>
              Fr. CRCE is one of the educational institutions run by the SOCIETY
              OF ST. FRANCIS XAVIER, PILAR, INDIA duly registered under the
              Societies Registration Act XXI of 1860, with registration No. Bom
              13/1959 GB BSD dated 7th February 1959. The Society is also
              registered under the Bombay Public Trust Act 1950, with the Number
              in the Register of Public Trusts as F-741 (BOM) dated 31st March
              1960. The affairs of the institution are managed by the Governing
              Council and a decentralized, participative, well-delegated system
              as indicated below: The Engineering College is managed by a
              "Governing Council" duly constituted as per AICTE norms. The
              Governing Council meets twice in a year. Further, the College has
              a "Local Management Committee" constituted as per the guidelines
              of Mumbai University which also meets twice in a year. The local
              management council meets, on an average, once in a month. Capital
              expenditure, equipment purchase, staff matters, etc. are finalized
              with the approval of "Executive Committee" consisting of the
              Chairman of Governing Council, Director, Financial Controller,
              Advisors and Principal. The committee meets at least twice a
              month.
            </p>
            <h2 className="my-3 text-center text-2xl">Organisation Chart</h2>
            <Image
              src={gov1}
              alt="Oragnisation Chart"
              height={10000}
              width={10000}
              className="max-w-full"
              quality={100}
            />
            <p className="mt-4">
              A well delegated, democratic and transparent system has been
              developed and followed facilitating decision making to ensure
              academic excellence through participation and involvement of all
              staff members. Staff members are involved as individual capacity
              and also as members of various committees listed below:
            </p>
            <Image
              src={gov2}
              alt="Oragnisation Chart"
              height={10000}
              width={10000}
              className="max-w-full"
              quality={100}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Governance
