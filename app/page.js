import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LatestRelease from '@/components/LatestRelease'
import FeaturedNews from '@/components/FeaturedNews'
import Works from '@/components/Works'
import HallOfFame from '@/components/HallOfFame'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestRelease />
      <FeaturedNews />
      <Works />
      <HallOfFame />
      <Footer />
    </>
  )
}
