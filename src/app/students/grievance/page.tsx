'use client'
import React, {
  useState,
  useCallback,
  ChangeEvent,
  FormEvent,
  useEffect,
} from 'react'
import { Zilla_Slab } from 'next/font/google'
import Footer from '@/components/footer'
import { CaptchaSchema, CaptchaResponse } from '@/app/api/captcha/route'

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
  'Other',
] as const

type MessageCategory = (typeof messageCategories)[number] | ''

type FormData = {
  name: string
  email: string
  mobile: string
  messageCategory: MessageCategory
  subject: string
  message: string
}

const GrievanceForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    messageCategory: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCaptchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaInput(e.target.value)
    setCaptchaError(false)
  }

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        // Example API call (replace with your actual API endpoint)
        // const response = await fetch('/api/submit-grievance', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(formData),
        // })

        // if (response.ok) {
        //   alert('Grievance submitted successfully!')
        //   // Reset form or redirect user
        // } else {
        //   alert('Failed to submit grievance. Please try again.')
        // }

        console.log('Form Data:', formData)
      } catch (error) {
        console.error('Form submission error:', error)
        alert('An error occurred. Please try again.')
      }
    },
    [formData]
  )

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
        <form
          onSubmit={handleSubmit}
          className="rounded-lg bg-white p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Basic fields */}
            {['name', 'email', 'mobile', 'subject'].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="mb-2 block font-semibold capitalize"
                >
                  {field === 'email' ? 'Your eMail *' : `Your ${field} *`}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field as keyof FormData]}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#001f3f] focus:outline-none"
                  required={field !== 'mobile'}
                />
              </div>
            ))}

            {/* Category */}
            <div>
              <label
                htmlFor="messageCategory"
                className="mb-2 block font-semibold"
              >
                Message Category *
              </label>
              <select
                id="messageCategory"
                name="messageCategory"
                value={formData.messageCategory}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#001f3f] focus:outline-none"
                required
              >
                <option value="">Select a category</option>
                {messageCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-2 block font-semibold">
                Message * (Max 250 Characters)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                maxLength={250}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#001f3f] focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Captcha */}
            <div className="md:col-span-2">
              <label
                htmlFor="captchaInput"
                className="mb-2 block font-semibold"
              >
                Enter the text you see below *
              </label>
              <div
                className="mb-2"
                dangerouslySetInnerHTML={{ __html: captcha.svg }}
              />
              <input
                type="text"
                id="captchaInput"
                value={captchaInput}
                onChange={handleCaptchaChange}
                className={`w-full rounded-lg border px-4 py-2 ${
                  captchaError ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#001f3f] focus:outline-none`}
                required
              />
              {captchaError && (
                <p className="mt-1 text-sm text-red-600">
                  Incorrect CAPTCHA. Please try again.
                </p>
              )}
              <button
                type="button"
                onClick={generateCaptcha}
                className="mt-2 text-sm text-blue-600 hover:underline"
              >
                Refresh Captcha
              </button>
            </div>
          </div>

          <div className="mt-8 text-right">
            <button
              type="submit"
              className="rounded-full bg-[#001f3f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003366]"
            >
              Submit Grievance
            </button>
          </div>
        </form>
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
