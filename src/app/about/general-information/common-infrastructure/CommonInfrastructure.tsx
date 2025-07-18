import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const CommonInfrastructure = () => {
  return (
    <div className={`flex min-h-screen w-full flex-col`}>
      <main className="container mx-auto grow p-4">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Common Infrastructure
          </h2>
          <div className="container mx-auto px-4 py-2">
            <section className="text-lg">
              <div className="space-y-8">
                <p className="mb-4">
                  The institution has adequate facilities to fulfill the norms
                  laid by AICTE, DTE, and the University of Mumbai. The
                  available facilities are enhanced by addressing the needs of
                  students and faculty to support Research and Development
                  activities on the college campus.
                </p>
                <p className="mb-4">
                  The institute has 23 classrooms, out of which 20 classrooms
                  are equipped with interactive multimedia panels to enhance the
                  teaching-learning experience.
                </p>
                <p className="mb-4">
                  The institute has 30+ laboratories, a seminar hall, a
                  boardroom, a conference room, and a workshop. Additionally, it
                  provides a canteen facility, boys and girls common rooms, a
                  gymnasium, drawing hall, library, and computer center.
                </p>
                <p className="mb-4">
                  The institute has a large auditorium called Samvaad for
                  conducting various activities, with a seating capacity of
                  nearly 200 students. It is used for placement activities,
                  seminars, cultural events, and conferences at the college,
                  state, and national levels.
                </p>
                <p className="mb-4">
                  Each department has well-equipped laboratories as per norms.
                  Laboratories are regularly maintained, with charts and models
                  displayed for better understanding of theory and practical
                  concepts. These labs house state-of-the-art machines,
                  equipment, and software.
                </p>
                <p className="mb-4">
                  The Central Research laboratory promotes R&D activities, and
                  the institute has various workshops like carpentry, fitting,
                  and machine shop for conducting practical sessions for F.E.
                  students.
                </p>
                <p className="mb-4">
                  The institute offers 638 computers with 64 Mbps bandwidth, all
                  connected by LAN and monitored through a centralized firewall
                  for safe Internet usage. The Central Library is equipped with
                  a digital library, NPTEL video access, and Web OPAC software
                  for automation.
                </p>
                <p className="mb-4">
                  The Training and Placement (T&P) cell provides infrastructure
                  for training, placement, and co-curricular activities.
                  Dedicated cubicles and a seminar hall are available for
                  pre-placement talks, interviews, soft skills training, and
                  workshops.
                </p>
                <p className="mb-4">
                  For physically impaired students, the institute offers ramps
                  and elevators. A football ground, volleyball court, basketball
                  court, and facilities for indoor games like carom, table
                  tennis, and chess are also provided, along with a gymnasium
                  for students.
                </p>
                <p className="mb-4">
                  The institute maintains a professional sports ground for
                  various sports, organizes intra- and intercollegiate
                  tournaments, and conducts yoga sessions for students and staff
                  every year.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CommonInfrastructure
