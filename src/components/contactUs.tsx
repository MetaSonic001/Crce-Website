import React from 'react'
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
    <div className="min-h-screen bg-linear-to-br pt-40 text-black">
      <div className="container mx-auto px-4 py-16 pt-0 md:pt-10">
        <h1
          className={`${zilla.className} mb-12 text-center text-4xl font-bold sm:text-5xl`}
        >
          Contact Us
        </h1>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-lg sm:p-8">
            <h2
              className={`${zilla.className} mb-6 text-2xl font-semibold sm:text-3xl`}
            >
              Contact Info
            </h2>
            <div className="space-y-4">
              <p className="font-semibold">
                Fr. Conceicao Rodrigues College of Engineering
              </p>
              <p>
                Fr. Agnel Ashram, Bandstand, Bandra (W), Mumbai 400050. MH, IN
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>+91 22 67114000</span>
                </li>
                <li className="flex items-center">
                  <Printer className="mr-2 h-5 w-5" />
                  <span>+91 22 67114100</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  <a
                    href="mailto:crce@frcrce.ac.in"
                    className="hover:text-blue-300"
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
                  <a href="#" className="hover:text-blue-300">
                    View on Google Maps
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="mb-2 text-xl font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-300">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-blue-300">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-blue-300">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-blue-300">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-lg sm:p-8">
            <h2
              className={`${zilla.className} mb-6 text-2xl font-semibold sm:text-3xl`}
            >
              Send us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md bg-white/20 px-4 py-2 backdrop-blur-xs focus:ring-2 focus:ring-blue-400 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md bg-white/20 px-4 py-2 backdrop-blur-xs focus:ring-2 focus:ring-blue-400 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md bg-white/20 px-4 py-2 backdrop-blur-xs focus:ring-2 focus:ring-blue-400 focus:outline-hidden"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-linear-to-r from-[#4a90e2] to-[#357abd] px-6 py-3 font-semibold transition-all hover:from-[#357abd] hover:to-[#4a90e2] hover:shadow-lg sm:w-auto"
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
