import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import {
  Phone,
  Printer,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const ContactUs = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] text-gray-900">
      {/* Header section - matches vision/mission page */}
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-28 pt-36 text-[#00122a]">
          <h1
            className={`mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            CONTACT US
          </h1>
        </div>
      </div>

      {/* Content section */}
      <div className="container mx-auto w-full px-28 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info Card */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className={`mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
              Contact Info
            </h2>
            <div className="space-y-4">
              <p className="text-xl font-semibold text-[#4a90e2]">
                Fr. Conceicao Rodrigues College of Engineering
              </p>
              <p className="text-gray-700">
                Fr. Agnel Ashram, Bandstand, Bandra (W), Mumbai 400050. MH, IN
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <Phone className="mr-2 h-5 w-5 text-[#4a90e2]" />
                  <span>+91 22 67114000</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Printer className="mr-2 h-5 w-5 text-[#4a90e2]" />
                  <span>+91 22 67114100</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Mail className="mr-2 h-5 w-5 text-[#4a90e2]" />
                  <a
                    href="mailto:crce@frcrce.ac.in"
                    className="hover:text-[#4a90e2] transition-colors"
                  >
                    crce@frcrce.ac.in
                  </a>
                </li>
                <li className="mt-6">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4410136005313!2d72.81818181433687!3d19.04433805791724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410830616d%3A0x111b63353dbbce01!2sFr.%20Conceicao%20Rodrigues%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1660900113753!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </li>
                <li className="flex items-center">
                  <a href="#" className="text-[#4a90e2] hover:text-[#357abd] transition-colors">
                    View on Google Maps
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="mb-4 text-xl font-semibold text-[#001f3f]">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#4a90e2] hover:text-[#357abd] transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-[#4a90e2] hover:text-[#357abd] transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-[#4a90e2] hover:text-[#357abd] transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-[#4a90e2] hover:text-[#357abd] transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Send Message Card */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className={`mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
              Send us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#4a90e2] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:ring-opacity-30"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#4a90e2] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:ring-opacity-30"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#4a90e2] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:ring-opacity-30"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-md bg-[#4a90e2] px-6 py-3 font-semibold text-white transition-all hover:bg-[#357abd] hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs