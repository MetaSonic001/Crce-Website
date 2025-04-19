'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Zilla_Slab } from 'next/font/google'
import { z } from 'zod'
import { toast } from 'react-hot-toast'
import addGrievance from '@/app/api/grievance'
import type { GrievanceResponse } from '@/app/api/grievance'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const messageCategories = [
  'Academic',
  'Administrative',
  'Examination',
  'Hostel',
  'Library',
  'Placement',
  'Sports',
  'Technical',
  'Other',
] as const

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  mobile: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .optional()
    .or(z.literal('')),
  category: z.enum(messageCategories, {
    errorMap: () => ({ message: 'Please select a category' }),
  }),
  subject: z
    .string()
    .min(5, { message: 'Subject must be at least 5 characters' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(250, { message: 'Message cannot exceed 250 characters' }),
})

type FormData = z.infer<typeof formSchema>

const GrievanceForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    category: 'Academic' as const,
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<{
    status: 'idle' | 'success' | 'error'
    message: string
  }>({ status: 'idle', message: '' })

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // Clear field-specific error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Reset errors and status
    setErrors({})
    setSubmissionStatus({ status: 'idle', message: '' })

    // Validate form data
    try {
      formSchema.parse(formData)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message
          }
        })
        setErrors(newErrors)
        return
      }
    }

    // If validation passes, submit the form
    setIsSubmitting(true)

    try {
      const response = await addGrievance({
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile || '',
        category: formData.category,
        subject: formData.subject,
        message: formData.message,
      })

      if (response.success) {
        setSubmissionStatus({
          status: 'success',
          message: 'Your grievance has been submitted successfully!',
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          mobile: '',
          category: 'Academic' as const,
          subject: '',
          message: '',
        })
      } else {
        setSubmissionStatus({
          status: 'error',
          message:
            response.error ||
            'Failed to submit grievance. Please try again later.',
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmissionStatus({
        status: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900">
      <div className="flex h-fit w-full flex-col items-center justify-center bg-gradient-to-br from-[#001f3f] to-[#003366] pt-10 md:pt-40">
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            Grievance Submission
          </h1>
          <p className="rounded-full bg-white/20 px-4 py-2 text-sm font-light backdrop-blur-xs md:text-base">
            Home {'>'} Contact {'>'} Grievance
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {submissionStatus.status === 'success' ? (
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-4 rounded-full bg-green-100 p-4">
                <svg
                  className="h-12 w-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h2
                className={`${zilla.className} text-2xl font-bold text-gray-900 md:text-3xl`}
              >
                Thank You!
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                {submissionStatus.message}
              </p>
              <button
                onClick={() =>
                  setSubmissionStatus({ status: 'idle', message: '' })
                }
                className="mt-8 rounded-full bg-[#001f3f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003366]"
              >
                Submit Another Grievance
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-lg bg-white p-8 shadow-lg"
          >
            {submissionStatus.status === 'error' && (
              <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-800">
                <p className="font-medium">Submission Error</p>
                <p>{submissionStatus.message}</p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="mb-2 block font-semibold">
                  Your Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } px-4 py-2 focus:border-[#001f3f] focus:outline-none`}
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="mb-2 block font-semibold">
                  Your Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } px-4 py-2 focus:border-[#001f3f] focus:outline-none`}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Mobile field */}
              <div>
                <label htmlFor="mobile" className="mb-2 block font-semibold">
                  Your Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Optional"
                  className={`w-full rounded-lg border ${
                    errors.mobile ? 'border-red-500' : 'border-gray-300'
                  } px-4 py-2 focus:border-[#001f3f] focus:outline-none`}
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                )}
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="mb-2 block font-semibold">
                  Message Category <span className="text-red-600">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  } px-4 py-2 focus:border-[#001f3f] focus:outline-none`}
                  required
                >
                  {messageCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                )}
              </div>

              {/* Subject field */}
              <div>
                <label htmlFor="subject" className="mb-2 block font-semibold">
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  } px-4 py-2 focus:border-[#001f3f] focus:outline-none`}
                  required
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="mb-2 block font-semibold">
                  Message <span className="text-red-600">*</span>{' '}
                  <span className="font-normal text-gray-500">
                    (Max 250 Characters)
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  maxLength={250}
                  className={`w-full rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } px-4 py-2 focus:border-[#001f3f] focus:outline-none`}
                  required
                ></textarea>
                <div className="mt-1 flex justify-between">
                  {errors.message ? (
                    <p className="text-sm text-red-600">{errors.message}</p>
                  ) : (
                    <p className="text-sm text-gray-500">
                      {formData.message.length}/250 characters
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                <span className="text-red-600">*</span> Required fields
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded-full bg-[#001f3f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003366] ${
                  isSubmitting ? 'cursor-not-allowed opacity-70' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Grievance'
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="bg-[#001f3f] py-8 text-center text-white">
        <p className="text-lg">
          For any inquiries, please contact the main office at 67114000.
        </p>
      </div>
    </div>
  )
}

export default GrievanceForm
