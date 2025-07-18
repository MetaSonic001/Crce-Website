'use client'
import React, { useState, FormEvent } from 'react'
import { Zilla_Slab } from 'next/font/google'
import { z } from 'zod'
import {
  Phone,
  Printer,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from 'lucide-react'
import addMessage from '@/app/api/contact'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

// Zod schema for form validation
const messageSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' }),
})

type MessageFormData = z.infer<typeof messageSchema>

const ContactUs = () => {
  const [formData, setFormData] = useState<MessageFormData>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<{
    status: 'idle' | 'success' | 'error'
    message: string
  }>({ status: 'idle', message: '' })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      messageSchema.parse(formData)
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
      const response = await addMessage({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })

      if (response.success) {
        setSubmissionStatus({
          status: 'success',
          message:
            'Your message has been sent successfully! We will get back to you soon.',
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      } else {
        setSubmissionStatus({
          status: 'error',
          message:
            response.error || 'Failed to send message. Please try again later.',
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
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-[#E5F0FF] pt-40 text-gray-900 md:pt-40">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1
          className={`${zilla.className} mb-6 text-center text-3xl font-bold md:mb-12 md:text-5xl`}
        >
          Contact Us
        </h1>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {/* Contact Info Card */}
          <div className="h-full rounded-xl bg-white p-5 shadow-md md:p-8">
            <h2
              className={`${zilla.className} mb-4 text-xl font-semibold md:mb-6 md:text-2xl`}
            >
              Contact Information
            </h2>
            <div className="space-y-4">
              <p className="font-semibold">
                Fr. Conceicao Rodrigues College of Engineering
              </p>
              <p>
                Fr. Agnel Ashram, Bandstand, Bandra (W), Mumbai 400050. MH, IN
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-blue-700" />
                  <span>+91 22 67114000</span>
                </li>
                <li className="flex items-center">
                  <Printer className="mr-3 h-5 w-5 text-blue-700" />
                  <span>+91 22 67114100</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-blue-700" />
                  <a
                    href="mailto:crce@frcrce.ac.in"
                    className="transition-colors hover:text-blue-600"
                  >
                    crce@frcrce.ac.in
                  </a>
                </li>
                <li className="mt-6 overflow-hidden rounded-lg shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4410136005313!2d72.81818181433687!3d19.04433805791724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410830616d%3A0x111b63353dbbce01!2sFr.%20Conceicao%20Rodrigues%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1660900113753!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CRCE Location"
                    className="w-full"
                  ></iframe>
                </li>
                <li className="flex items-center pt-2">
                  <a
                    href="https://goo.gl/maps/JZBvQoYPmCqvPgWq8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 transition-colors hover:text-blue-800 hover:underline"
                  >
                    View on Google Maps
                  </a>
                </li>
              </ul>
              <div className="mt-6 pt-2">
                <h3 className="mb-3 text-lg font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="rounded-full bg-gray-100 p-2 text-gray-700 transition-all hover:bg-blue-100 hover:text-blue-600"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-gray-100 p-2 text-gray-700 transition-all hover:bg-blue-100 hover:text-blue-600"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-gray-100 p-2 text-gray-700 transition-all hover:bg-blue-100 hover:text-blue-600"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-gray-100 p-2 text-gray-700 transition-all hover:bg-blue-100 hover:text-blue-600"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Message Form Card */}
          <div className="h-full rounded-xl bg-white p-5 shadow-md md:p-8">
            <h2
              className={`${zilla.className} mb-4 text-xl font-semibold md:mb-6 md:text-2xl`}
            >
              Send us a Message
            </h2>

            {submissionStatus.status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="mb-4 rounded-full bg-green-100 p-4">
                  <svg
                    className="h-10 w-10 text-green-500"
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
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  Thank You!
                </h3>
                <p className="mb-6 text-gray-600">{submissionStatus.message}</p>
                <button
                  onClick={() =>
                    setSubmissionStatus({ status: 'idle', message: '' })
                  }
                  className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {submissionStatus.status === 'error' && (
                  <div className="mb-4 rounded-lg bg-red-50 p-4 text-red-800">
                    <p className="font-medium">Error</p>
                    <p>{submissionStatus.message}</p>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } bg-white px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none`}
                    placeholder="Your name"
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } bg-white px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none`}
                    placeholder="your.email@example.com"
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    } bg-white px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none`}
                    placeholder="Your message here..."
                    required
                  ></textarea>
                  {errors.message ? (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  ) : (
                    <p className="mt-1 text-xs text-gray-500">
                      Minimum 10 characters
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-gray-500">
                    <span className="text-red-500">*</span> Required fields
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none ${
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
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer Contact Info */}
        <div className="mt-8 rounded-xl bg-[#001f3f] p-5 py-6 text-center text-white shadow-md md:mt-12 md:p-8">
          <p className="text-base md:text-lg">
            For any inquiries, please contact the main office at{' '}
            <span className="font-semibold">+91 22 67114000</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs