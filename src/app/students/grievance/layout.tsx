import { Inter } from 'next/font/google'
import '../../globals.css'
const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className={inter.className}>{children}</section>
}
