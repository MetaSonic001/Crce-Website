import Industry from '@/components/industry'
import HeroSection from '@/components/hero-section'
import NoticesSection from '@/components/notices'
import EventsCards from '@/components/upcomingEvents'
import getNews from '@/app/api/news'
import getEvents from '@/app/api/events'
import HomeAbout from '@/components/homeAbout'
import HomeAChivements from '@/components/homeAchievements'
import HomeAlumni from '@/components/homeAlumni'
import ISP from '@/components/ISP'

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
      <EventsCards />
      <NoticesSection />
      <HomeAbout />
      <HomeAChivements />
      <HomeAlumni />
      <ISP />
      {/* <Industry /> */}
    </main>
  )
}
