import { Inter } from 'next/font/google'
import '../../globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={inter.className}>
      <Navbar />
      {children}
      <Footer />
    </section>
  )
}
