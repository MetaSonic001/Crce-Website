'use client'
import React, { useState, useEffect, useRef } from 'react'

interface Message {
  text: string
  isUser: boolean
}

interface FAQItem {
  question: string
  answer: string
}

interface CategoryItem {
  name: string
  questions: FAQItem[]
}

const categoryData = [
  {
    name: 'Payment of Fees',
    questions: [
      {
        question: 'What is the fee of B.tech program at Fr.CRCE?',
        answer:
          'For academic year 2024-25, Fees sanctioned by FRA is Rs. 1,81,000/- + University Processing Fees for First year B.Tech. Programs.',
      },
      {
        question:
          'Does the tuition fee remain same till the completion of the course?',
        answer: 'YES. Tuition fees remain same during four years of study.',
      },
      {
        question:
          'Am I eligible for any kind of scholarship or concession in fees?',
        answer:
          'YES. You are entitled for scholarship / concession fees depending upon the category / caste of the candidate and subject to the condition that you should have been admitted through CAP rounds only. Apart from Government scholarship schemes, many private scholarships are also available for which you need to approach appropriate scholarship giving agency/institution.',
      },
      {
        question:
          'When education loan is sanctioned by the Bank, I will get it or the Bank sends it to the college?',
        answer:
          "You have to take admission first by paying necessary fees (you have to make arrangement for first year) and apply for a Fee Structure & Bonafide certificate from college. Then college will give the certificate within a week. The bank sanctions loan after Bonafide certificate is submitted by the candidate while applying for loan and sends it to college or students account as per bank's policy. If it comes to the college account then college gives refund to the student",
      },
    ],
  },
  {
    name: 'Placement and Internships',
    questions: [
      {
        question: 'How are the campus placements?',
        answer:
          'Placements at FRCRCE is at par with other reputed colleges in Mumbai and Maharashtra state. FR. CRCE provides 100% placement. Around 20 to 25% students who wish to pursue higher study immediately after B.E. opt out of placement.',
      },
      {
        question: 'Which are the companies that come here for recruitment?',
        answer:
          'Companies from various sectors like development, R&D, FinTech and core visit campus for placements. Multinationals like JPMC, Morgan Stanley, GEP, Barclays, Hexaware, Infosys, IBM, ICICI securities, Johnson control, L & T, L & T infotech, Seclore, selec, Siemens, siemens, Reliance, Amazon, Accenture are regular recruiters. Students also get placement offers from Microsoft, Amazon etc. You can visit FR. CRCE website to see the placement statistics.',
      },
      {
        question:
          'What is the difference in placement policy between various branches?',
        answer:
          'Placement policy is same for all branches. In most of the companies students from all branches are eligible to apply; except few depending on the job profile.',
      },
      {
        question: 'We want know more about honors and minor degrees?',
        answer:
          'FRCRCE has introduced honors and minor B.E. degree program from academic year 2022 -23. Following is the list of programs Blockchain, Cyber security, Robotics, 3-D printing, Al and ML. Data science, IoT.',
      },
      {
        question: 'What is the scope for industry interaction?',
        answer:
          'College is associated with many industries not only for placement but for training programs, lab development, curriculum delivery etc.',
      },
    ],
  },
  {
    name: 'Academic Programs',
    questions: [
      {
        question: 'What courses are offered at Fr.CRCE?',
        answer: 'Fr.CRCE offers B.Tech programs in Computer Engineering, Information Technology, Electronics & Telecommunication, Mechanical Engineering, and other branches.',
      },
      {
        question: 'What is the duration of B.Tech program?',
        answer: 'The B.Tech program is of 4 years duration divided into 8 semesters.',
      },
      {
        question: 'Are there any specialization options available?',
        answer: 'Yes, students can opt for honors and minor degree programs in areas like Blockchain, Cyber security, Robotics, AI & ML, Data Science, and IoT.',
      },
    ],
  },
  {
    name: 'Admission Process',
    questions: [
      {
        question: 'How can I apply for admission?',
        answer: 'Admissions are conducted through CAP (Centralized Admission Process) rounds conducted by the Maharashtra State Common Entrance Test Cell.',
      },
      {
        question: 'What are the eligibility criteria?',
        answer: 'Candidates must have passed 12th standard with Physics, Chemistry, and Mathematics with minimum required percentage as per university norms.',
      },
      {
        question: 'Is there any entrance exam required?',
        answer: 'Yes, candidates need to appear for JEE Main or MHT-CET for admission to B.Tech programs.',
      },
    ],
  },
]

const ChatBot: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello! How can I help you today? Please select a category below to get started.', isUser: false },
  ])
  const [currentView, setCurrentView] = useState<
    'main' | 'category' | 'question'
  >('main')
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(
    null
  )
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleCategorySelect = (category: CategoryItem) => {
    setSelectedCategory(category)
    setCurrentView('category')
    setMessages(prev => [
      ...prev,
      { text: `I'd like to know about ${category.name}`, isUser: true },
      { text: `Great! Here are the frequently asked questions about ${category.name}. Please select a question below:`, isUser: false },
    ])
  }

  const handleQuestionSelect = (question: FAQItem) => {
    setMessages(prev => [
      ...prev,
      { text: question.question, isUser: true },
      { text: question.answer, isUser: false },
    ])
    setCurrentView('question')
  }

  const handleBackToCategory = () => {
    setCurrentView('category')
    setMessages(prev => [
      ...prev,
      { text: 'Show me more questions from this category', isUser: true },
      { text: `Here are more questions about ${selectedCategory?.name}:`, isUser: false },
    ])
  }

  const handleBackToMain = () => {
    setCurrentView('main')
    setSelectedCategory(null)
    setMessages(prev => [
      ...prev,
      { text: 'Go back to main menu', isUser: true },
      { text: 'Sure! Please select a category from the options below:', isUser: false },
    ])
  }

  const renderOptions = () => {
    switch (currentView) {
      case 'main':
        return (
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700 sm:text-base">
              Select a Category:
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
              {categoryData.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategorySelect(category)}
                  className="rounded-lg bg-gray-50 p-3 text-left text-sm transition-colors hover:bg-gray-100 active:bg-gray-200 sm:p-4 sm:text-base"
                >
                  <div className="font-medium text-gray-800">{category.name}</div>
                  <div className="text-xs text-gray-500 sm:text-sm">
                    {category.questions.filter(q => q.question).length} questions
                  </div>
                </button>
              ))}
            </div>
          </div>
        )
      case 'category':
        const validQuestions = selectedCategory?.questions.filter(q => q.question) || []
        return (
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700 sm:text-base">
              Questions about {selectedCategory?.name}:
            </h3>
            <div className="max-h-60 space-y-2 overflow-y-auto">
              {validQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionSelect(question)}
                  className="block w-full rounded-lg bg-gray-50 p-3 text-left text-sm transition-colors hover:bg-gray-100 active:bg-gray-200 sm:text-base"
                >
                  <div className="line-clamp-3">{question.question}</div>
                </button>
              ))}
            </div>
            <button
              onClick={handleBackToMain}
              className="mt-4 w-full rounded-lg bg-blue-900 p-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 active:bg-blue-800 sm:text-base"
            >
              ← Back to Categories
            </button>
          </div>
        )
      case 'question':
        return (
          <div className="space-y-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <button
                onClick={handleBackToCategory}
                className="flex-1 rounded-lg bg-blue-900 p-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 active:bg-blue-800 sm:text-base"
              >
                ← More Questions
              </button>
              <button
                onClick={handleBackToMain}
                className="flex-1 rounded-lg bg-gray-600 p-3 text-sm font-medium text-white transition-colors hover:bg-gray-700 active:bg-gray-800 sm:text-base"
              >
                Main Menu
              </button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-full max-h-[600px] flex-col rounded-lg bg-white shadow-xl sm:max-h-[700px]">
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-lg bg-blue-900 p-4 text-white">
        <div>
          <h3 className="text-lg font-bold sm:text-xl">
            Fr.CRCE FAQ Assistant
          </h3>
          <p className="text-xs text-blue-100 sm:text-sm">
            Get instant answers to your questions
          </p>
        </div>
        <button 
          onClick={onClose} 
          className="rounded-full p-1 text-2xl hover:bg-blue-700 sm:text-3xl"
          aria-label="Close chat"
        >
          ×
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4">
        <div className="space-y-3 sm:space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-lg p-3 text-sm sm:max-w-xs sm:text-base ${
                  message.isUser 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Options */}
      <div className="border-t border-gray-200 p-3 sm:p-4">
        {renderOptions()}
      </div>
    </div>
  )
}

export default ChatBot