import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ReactQueryProvider from './provider'
import { Suspense } from 'react'
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Fr.Crce',
  description: 'Father Conceicao Rodrigues College of Engineering',
  openGraph: {
    title: 'Fr.Crce',
    description: 'Father Conceicao Rodrigues College of Engineering',
    url: 'http://gyan.fragnel.edu.in:9500',
    siteName: 'Fr.Crce',
    images: [
      {
        url: 'http://gyan.fragnel.edu.in:9500/college.png',
        width: 1200,
        height: 630,
        alt: 'Fr.Crce Open Graph Image',
        type: 'image/png',
      },
    ],
    type: 'website',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ReactQueryProvider>
          <Suspense fallback={<div>Loading ...</div>}>
            <Navbar />
            {children}
            <Footer />
          </Suspense>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
