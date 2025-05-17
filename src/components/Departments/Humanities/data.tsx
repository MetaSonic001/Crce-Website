import React from 'react'



export const hodsDesk = {
  name: 'Dr. Dileep Chandra',
  title: 'Professor & HOD',
  bio: 'content',
  imageUrl: '/scifaculty/dileep.jpg',

  content: 'content',
  extendedContent: 'content2',
}

export const programs = [
  {
    title: 'Bachelors of Technology',
    description: [
      'Undergrad programs',
      'Duration: 4 years ',
      'Intake: 180 students ',
      'Eligibility: 10+2 with PCM',
    ],
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-5 w-5"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    button: [
      { label: 'Syllabus', onClick: () => console.log('Button 1 clicked') },
      {
        label: 'Co-Curricular',
        onClick: () => console.log('Button 2 clicked'),
      },
    ],
  },
  {
    title: 'Masters of Technology',
    description: [
      'Postgrad program in Computer Engineering',
      'Duration: 2 years',
      'Intake: 60 students',
      'Eligibility: B.Tech in Computer Engineering',
    ],
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-5 w-5"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    button: [
      { label: 'Syllabus', onClick: () => console.log('Button 1 clicked') },
      {
        label: 'Co-Curricular',
        onClick: () => console.log('Button 2 clicked'),
      },
    ],
  },
  {
    title: 'PhD Programs',
    description: [
      'Doctoral programs in Computer Engineering',
      'Duration: 3 years',
      'Intake: 10 students',
      'Eligibility: M.Tech in Computer Engineering',
    ],
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-5 w-5"
        viewBox="0 0 24 24"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
      </svg>
    ),
    button: [
      { label: 'Syllabus', onClick: () => console.log('Button 1 clicked') },
      {
        label: 'Co-Curricular',
        onClick: () => console.log('Button 2 clicked'),
      },
    ],
  },
]




export const AbouthnsDepartment = {
  name: 'Science and Humanities',
  description: 'desp',
  extendedDescription: 'decsp2',
  video: true,
}
