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
