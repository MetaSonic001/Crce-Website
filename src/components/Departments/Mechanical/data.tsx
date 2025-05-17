import React from 'react'



export const hodsDesk = {
  name: 'Dr. Sapna Prabhu',
  title: 'Professor & HOD',
  bio: 'The Department of Electronics and Computer Science Engineering at CRCE is committed to providing quality education in the field of computer science and engineering.',
  imageUrl: '/facultyecs/sapnaprabhu.jpg',
  content:
    'I am pleased to extend a warm welcome to the incoming students of the Electronics and Electronics and Computer Science Engineering program at our esteemed institute. The Department of Electronics and Computer Science Engineering is deeply committed to fostering your holistic development, paving the way for successful careers, and ultimately, shaping you into invaluable national assets. Our dedicated and experienced faculty is instrumental in nurturing your overall growth, encompassing analytical skill and the ability for creative thinking to compete on a global scale. In addition to the traditional engineering curriculum, our department offers Honour courses that prepare you to meet the dynamic demands of the modern business landscape, cultivating a professional mind-set.',
  extendedContent:
    'We encourage collaborative teamwork, idea sharing, presentations, and the enhancing of communication skills among our students. Active participation in Professional Chapters and social clubs not only expands your network but also fosters leadership and team spirit, exposing you to a world beyond the confines of the curriculum. Our department boasts state-of-the-art computational tools and modern laboratories, including a dedicated Machine Learning Server. Additionally, we offer workshops and training to sharpen your interview and job-seeking skills.',
}

export const programs = [
  {
    title: 'Bachelors of Technology',
    description: [
      'Undergrad program in Electronics and Computer Science Engineering.',
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
      'Postgrad program in Electronics and Computer Science Engineering',
      'Duration: 2 years',
      'Intake: 60 students',
      'Eligibility: B.Tech in Electronics and Computer Science Engineering',
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
      'Doctoral programs in Electronics and Computer Science Engineering',
      'Duration: 3 years',
      'Intake: 10 students',
      'Eligibility: M.Tech in Electronics and Computer Science Engineering',
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





export const AboutmechDepartment = {
  name: 'Mech',
  description:
'mech dept',
  extendedDescription: '',
  video: true,
}
