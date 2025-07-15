'use client'
import { motion } from 'framer-motion'
import {
  Award,
  ArrowRight,
  Calendar,
  FileText,
  Users,
  Eye,
  TrendingUp,
  BarChart2,
} from 'lucide-react'

export default function NIRFRankingPage() {
  const yearButtons = [
    { year: '2015-16', id: 1 },
    { year: '2016-17', id: 2 },
    { year: '2017-18', id: 3 },
    { year: '2018-19', id: 4 },
    { year: '2019-20', id: 5 },
    { year: '2021-22', id: 6 },
    { year: '2022-23', id: 7 },
    { year: '2023-24', id: 8 },
    { year: '2024-25', id: 9 },
  ]

  const parameters = [
    {
      name: 'Teaching, Learning and Resources',
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: 'Research and Professional Practices',
      icon: <TrendingUp className="h-5 w-5" />,
    },
    { name: 'Graduation Outcomes', icon: <Award className="h-5 w-5" /> },
    { name: 'Outreach and Inclusivity', icon: <Users className="h-5 w-5" /> },
    { name: 'Perception', icon: <Eye className="h-5 w-5" /> },
  ]

  return (
    <div className="mt-16 min-h-screen bg-white py-12 md:mt-38">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            NIRF Rankings
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Fr. Conceicao Rodrigues College of Engineering ranks among the Top
            300 Engineering Colleges in India
          </p>
        </div>

        <div className="mb-2">
          <div className="rounded-lg border bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              About NIRF
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The National Institutional Ranking Framework (NIRF) was approved
                by the MHRD and launched by the Honourable Minister of Human
                Resource Development on 29th September 2015.
              </p>
              <p>
                This framework outlines a methodology to rank institutions
                across the country, based on parameters agreed upon by a Core
                Committee set up by MHRD.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold">Ranking Parameters</h3>
              <ul className="space-y-2">
                {parameters.map((param, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    {param.icon}
                    <span>{param.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="m-2 text-center">
          <button
            onClick={() => window.open('', '_blank')}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            View the 24-25 NIRF Document
          </button>
        </div>
        <div className="border-t pt-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Official NIRF Resources
            </h2>
            <a
              href="https://www.nirfindia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
            >
              Visit Official Website
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Latest Rankings</h3>
              <p className="text-sm text-gray-600">
                Access the most recent NIRF rankings for all categories of
                institutions.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Methodology</h3>
              <p className="text-sm text-gray-600">
                Learn about the parameters and processes used for institutional
                ranking.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Data Submission</h3>
              <p className="text-sm text-gray-600">
                Guidelines for institutions to submit their data for upcoming
                rankings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
