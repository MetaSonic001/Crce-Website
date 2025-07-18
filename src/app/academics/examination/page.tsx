'use client'
import React, { useState } from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const CreditBasedEvaluationSystem = () => {
  const [activeTab, setActiveTab] = useState('scheme')

  const tabs = [
    { id: 'scheme', title: 'Scheme of Examination' },
    { id: 'credits', title: 'Minimum Credit Requirements' },
    { id: 'assessment', title: 'Examination / Assessment' },
    { id: 'attendance', title: 'Attendance' },
    { id: 'modes', title: 'Modes of Assessment/Evaluation' },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'scheme':
        return (
          <div className="p-6">
            <h2 className={`${zilla.className} mb-4 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
              Scheme of Examination
            </h2>
            <p className="text-gray-700">
              The performance of the learners shall be evaluated into two
              components. The learner's performance shall be assessed by
              Internal Assessment with 40% marks in the first component by
              conducting the Semester End Examinations with 60% marks in the
              second component.
            </p>
          </div>
        )
      case 'credits':
        return (
          <div className="p-6">
            <h2 className={`${zilla.className} mb-4 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
              Minimum Credit Requirements
            </h2>
            <p className="text-gray-700">
              The minimum credit required for the award of a B.E. degree is 180.
              This is normally divided into Theory courses, tutorials,
              laboratory courses, seminars and projects in the duration of eight
              semesters. The minimum credit required for the award of an M.E.
              degree is 70. The credits are distributed semester wise as shown
              in the structure and syllabus manual of each programme. Courses
              generally progress in sequences, building competencies and their
              positioning indicates certain academic maturity on the part of the
              learners. Learners are expected to follow the semester wise
              schedule of courses given in the syllabus manual of respective
              programmes.
            </p>
          </div>
        )
      case 'assessment':
        return (
          <div className="p-6">
            <h2 className={`${zilla.className} mb-4 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
              Examination / Assessment
            </h2>
            <p className="text-gray-700">
              Semester wise performance assessment of every registered learner
              is to be carried out through various modes of examinations. These
              include the Internal Assessment and End Semester Examination.
              Internal Assessment includes class tests, home assignments based
              on live problems, course projects either in a group or
              individually. The modes of evaluation and distribution of
              weightage for each of the assessments is given in the syllabus
              manual of each programmes. Normally weightage of Internal
              Assessment and End Semester Examinations 20 and 80 percent
              respectively in theory courses. In laboratory courses, continuous
              assessment should be carried out and appropriate weightage should
              be given to each practical/assignment/course project and proper
              record of the same to be preserved by the concerned faculty for
              the purpose of inspection as and when required.
            </p>
          </div>
        )
      case 'attendance':
        return (
          <div className="p-6">
            <h2 className={`${zilla.className} mb-4 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
              Attendance
            </h2>
            <p className="text-gray-700">
              Attendance for all Theory, Tutorial, Practical, Seminar and
              Project/Dissertation is compulsory. As per the University
              Ordinance 119, 75% attendance is compulsory for keeping the term.
            </p>
          </div>
        )
      case 'modes':
        return (
          <div className="p-6">
            <div className="space-y-6">
              {/* Theory Courses */}
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className={`${zilla.className} mb-3 text-xl font-bold text-[#001f3f]`}>
                  Modes of Evaluation for Theory Courses
                </h3>
                <p className="text-gray-700">
                  Various modes of assessment used for rating learners'
                  performance in a theory course include Internal Assessment and
                  End Semester Examination. Relative weightage for Internal
                  Assessment is typically 20 percent. This will consist of two
                  tests out of which one is a compulsory class test and another
                  is either a class test or assignment on live problems or
                  course projects in a group/individually. The end semester
                  examination will be held as per the university schedule and
                  the relative weightage for this would be 80 percent. It is
                  normally of 3 hours duration and will cover the full syllabus
                  of the course. The end semester examination is mandatory. The
                  grade for theory courses can be awarded only after
                  successfully completion of both Internal Assessment and End
                  Semester Examination of the respective course as per the
                  curriculum manual of the respective programme.
                </p>
              </div>

              {/* Laboratory Courses */}
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className={`${zilla.className} mb-3 text-xl font-bold text-[#001f3f]`}>
                  Modes of Evaluation for Laboratory Courses
                </h3>
                <p className="text-gray-700">
                  The assessment in a laboratory course will be based on regular
                  supervision of the learner's work, her/his performance in
                  viva-voce examinations, the quality of their work as
                  prescribed through laboratory journals and an end semester
                  test that contains performing an experiment if the practical
                  examination is mentioned. It is obligatory to maintain a
                  laboratory journal as prescribed by the course instructor.
                  Final submission/examination for laboratory courses will
                  normally be held before the end semester examination (final
                  theory examinations). The grade for laboratory courses can be
                  awarded only after successfully completion of Term Work,
                  Practical and/or Oral examination as per the curriculum manual
                  of the respective programme.
                </p>
              </div>

              {/* Seminars */}
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className={`${zilla.className} mb-3 text-xl font-bold text-[#001f3f]`}>
                  Modes of Evaluation for Seminars
                </h3>
                <p className="text-gray-700">
                  Seminars are evaluated based on a written report, and an oral
                  presentation before a panel of examiners appointed by the
                  University. The supervisor and/or co-supervisor, when
                  involved, are part of the panel. The grade for Seminar can be
                  awarded only after successfully completion of Term Work and
                  Oral Presentation as per the curriculum manual of the
                  respective programme. The evaluation of the seminars is
                  completed before the commencement of the end semester
                  examination.
                </p>
              </div>

              {/* Projects/Dissertation */}
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className={`${zilla.className} mb-3 text-xl font-bold text-[#001f3f]`}>
                  Modes of Evaluation for Projects/Dissertation
                </h3>

                <p className="mb-4 text-gray-700">
                  <span className="font-semibold">B.E. Project:</span> Project-I
                  and Project-II are separately graded, at the end of the
                  respective semesters. These projects are supervised or guided
                  and need regular interaction (at least once a week) with the
                  supervisor/guide. The project group has to submit a project
                  report and defend it in front of a panel of examiners. Panel
                  of examiners for Project-I evaluation will be appointed by
                  Head of Department/Institute, while as for Project-II
                  evaluation will be conducted by pair of Internal and External
                  examiners appointed by University. The dates for submission of
                  reports, the dates for presentations are to be scheduled as
                  per the guidelines of University and details of mode of
                  assessment are given in the curriculum manual of respective
                  programmes. Project is a part of term work; the project report
                  will not be accepted if students fail to complete the project
                  successfully. The grade for Project can be awarded only after
                  successfully completion of Term Work and Oral Presentation as
                  per the curriculum manual of the respective programme.
                </p>

                <p className="text-gray-700">
                  <span className="font-semibold">M.E. Dissertation:</span> For
                  evaluation of Dissertation-I, a learner has to submit the
                  required number of copies of the report to the respective
                  department of affiliated Institute/ College as per the
                  University academic calendar. The evaluation will be done, by
                  a panel of examiners appointed by the head of Department /
                  Institute, based on the report and presentation. The criteria
                  for evaluation of the Dissertation –I are given in the
                  curriculum manual. The panel shall consist of the
                  supervisor(s) and at least one or two more faculty members, to
                  act as internal examiners. For evaluation of Dissertation-II,
                  a learner has to submit the required number of hardbound
                  Dissertation reports to the respective section of University.
                  A learner is eligible for viva-voce of Dissertation-II only if
                  s/he passes in the semester –I, semester –II and semester –III
                  in all respect. The evaluation will be done by a pair of
                  examiners based on the report and a viva-voce. The viva-voce
                  will be conducted in the parent Institute. Final Grade reports
                  are to be sent by the Institute to the respective section of
                  the university on completion of the viva-voce. The criteria of
                  evaluation of Dissertation –II are given in the curriculum
                  manual. The Pair of Examiners for the assessment of
                  Dissertation-II will be appointed by the University.
                </p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] px-2 text-gray-900">
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-4 pt-18 text-[#00122a] sm:px-8 md:px-16 md:pt-36 lg:px-28">
          <h1
            className={`${zilla.className} mb-4 flex items-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            CREDIT BASED EVALUATION SYSTEM
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full p-4 px-4 md:p-0 md:px-28 md:py-16">
        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Academic Assessment Framework
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-4 text-xl font-semibold text-[#4a90e2]">
              "Comprehensive Evaluation System for Academic Excellence"
            </p>
            <p className="text-gray-700 mb-6">
              The Credit Based Evaluation System provides a structured approach to assess student performance through various modes of evaluation including internal assessments, semester examinations, and continuous evaluation methods.
            </p>
            
            {/* Tab Navigation */}
            <div className="mb-6">
              <div className="flex flex-wrap border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-[#4a90e2] text-[#4a90e2]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="mt-6">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Grading of Performance
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-4 text-xl font-semibold text-[#4a90e2]">
              Letter Grade and Grade Point Allocation
            </p>
            <p className="mb-6 text-gray-700">
              The Credit and Grading system will be effective from the academic
              year 2012-2013 for the Faculty of Technology of the University of
              Mumbai. In every course, based on the combined performance in all
              assessments in a particular semester as per the
              curriculum/syllabus, the student is awarded a letter grade. These
              letter grades not only indicate a qualitative assessment of the
              learner's performance but also carry a quantitative (numeric)
              equivalent called the Grade Point.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-[#001f3f] text-white">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Percentage of Marks Obtained</th>
                    <th className="border border-gray-300 p-3 text-center">Letter Grade</th>
                    <th className="border border-gray-300 p-3 text-center">Grade Points</th>
                    <th className="border border-gray-300 p-3 text-left">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">80.00 and above</td>
                    <td className="border border-gray-300 p-3 text-center font-semibold">O</td>
                    <td className="border border-gray-300 p-3 text-center">10</td>
                    <td className="border border-gray-300 p-3">Outstanding</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">75.00 – 79.99</td>
                    <td className="border border-gray-300 p-3 text-center font-semibold">A</td>
                    <td className="border border-gray-300 p-3 text-center">9</td>
                    <td className="border border-gray-300 p-3">Excellent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">70.00 – 74.99</td>
                    <td className="border border-gray-300 p-3 text-center font-semibold">B</td>
                    <td className="border border-gray-300 p-3 text-center">8</td>
                    <td className="border border-gray-300 p-3">Very Good</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">60.00 – 69.99</td>
                    <td className="border border-gray-300 p-3 text-center font-semibold">C</td>
                    <td className="border border-gray-300 p-3 text-center">7</td>
                    <td className="border border-gray-300 p-3">Good</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">50.00 – 59.99</td>
                    <td className="border border-gray-300 p-3 text-center font-semibold">D</td>
                    <td className="border border-gray-300 p-3 text-center">6</td>
                    <td className="border border-gray-300 p-3">Fair</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">45.00 – 49.99</td>
                    <td className="border border-gray-300 p-3 text-center font-semibold">E</td>
                    <td className="border border-gray-300 p-3 text-center">5</td>
                    <td className="border border-gray-300 p-3">Average</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">40.00 – 44.99</td>
                    <td className="border border-gray-300 p-3 text-center font-semibold">P</td>
                    <td className="border border-gray-300 p-3 text-center">4</td>
                    <td className="border border-gray-300 p-3">Pass</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Less than 40.00</td>
                    <td className="border border-gray-300 p-3 text-center font-semibold">F</td>
                    <td className="border border-gray-300 p-3 text-center">0</td>
                    <td className="border border-gray-300 p-3">Fail</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-gray-700">
              A learner who remains absent in any form of
              evaluation/examination, letter grade allocated to him/her should
              be AB and corresponding grade point is zero. S/he should reappear
              for the said evaluation/examination in due course.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Important Guidelines
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-4 text-gray-700">
              Students are expected to familiarize themselves with the credit-based evaluation system and comply with all assessment requirements. Regular attendance and active participation in all forms of evaluation are mandatory.
            </p>
            <p className="text-gray-700">
              For any clarifications regarding the evaluation system, grading policies, or assessment procedures, please contact the academic office or your respective department.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditBasedEvaluationSystem