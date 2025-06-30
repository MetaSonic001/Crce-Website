'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const OtherServices = () => {
  const allLinks = [
    {
      title: 'Samay Biometric Attendance System',
      href: 'https://samay.fragnel.edu.in:1235/timeo/',
    },
    {
      title: 'Staff Personal Information',
      href: 'http://granth.fragnel.ac.in:5186/staff/StaffStart.php',
    },
    {
      title: "Agnel Employees' Co-operative Credit Society Ltd.",
      href: 'http://gyan.fragnel.ac.in:5186/pinfo/aeccs/aeccsrep.php',
    },
    {
      title: 'Revised University Rules for Selection of Teaching Staff',
      href: 'https://frcrce.ac.in/images/crce/docs/StaffSelectionAnnexure.pdf',
    },
    {
      title: 'College Development Committee',
      href: 'https://frcrce.ac.in/attachments/article/155/CDC%202023.pdf',
    },
    {
      title: 'Staff Grievances Redressal Cell',
      href: 'https://frcrce.ac.in/images/crce/docs/StaffGrievanceRedressal.pdf',
    },
    {
      title: 'List of CRCE Staff In-Charges (1st June 2025 Onwards)',
      href: 'https://frcrce.ac.in/media/attachments/2025/05/31/committee_2025-26.pdf',
    },
    {
      title: 'Holiday List 2025',
      href: 'https://frcrce.ac.in/images/2025/Holiday_List_2025.pdf',
    },
    {
      title: 'Change Network User Password',
      href: 'https://ldap.fragnel.edu.in/manage/login.php',
    },
    {
      title: 'Term Work / Internal Assessment Marks Entry',
      href: 'http://gyan.fragnel.ac.in:5186/utest/Old/TwIntStart.php',
    },
    {
      title: 'Question Papers / Model Answer Papers Upload',
      href: 'https://ss.fragnel.edu.in:7677/QpUpload/index.php',
    },
    {
      title: 'Question Papers / Model Answer Papers Archive',
      href: 'https://ss.fragnel.ac.in:7677/QpArch/index.php',
    },
    {
      title: 'Online Mentoring System',
      href: 'https://ss.fragnel.edu.in:7677/Mentor/index.php',
    },
    {
      title: 'Unit Test & Attendance Register',
      href: 'https://ss.fragnel.edu.in:7677/Atten/login.php',
    },
    { title: 'GST Portal', href: 'https://gyan.fragnel.edu.in:9989/GST/' },
    {
      title: 'Institute Prospectus',
      href: 'https://frcrce.ac.in/images/crce/pdfs/Institute_Brochure_22_23.pdf',
    },
  ]

  const ServiceLink = ({ title, href }: { title: string; href: string }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="mb-4 w-full md:w-1/2 md:p-2 lg:w-1/3 xl:w-1/4"
    >
      <Link href={href} target="_blank" className="block h-full">
        <div className="flex h-full items-center justify-center rounded bg-[#2e3b7c] px-6 py-4 text-center text-white transition duration-300 hover:bg-[#3a4998]">
          {title}
        </div>
      </Link>
    </motion.div>
  )

  return (
    <div className="container mx-auto mt-24 flex flex-col px-4 py-12 md:mt-36 md:h-fit">
      <h1 className="mb-8 text-center text-3xl font-bold">Other Services</h1>

      <div className="mx-auto w-full flex-grow">
        <div className="flex flex-col md:-mx-2 md:flex-row md:flex-wrap">
          {allLinks.map((link, index) => (
            <ServiceLink key={index} title={link.title} href={link.href} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OtherServices
