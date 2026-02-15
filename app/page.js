import Hero from '@/components/Hero'
import LatestRelease from '@/components/LatestRelease'
import FeaturedNews from '@/components/FeaturedNews'
import HallOfFame from '@/components/HallOfFame'  
import FilmInfoSection from '@/components/FilmInfoSection'  
import SynopsisSection from '@/components/SynopsisSection'  

export default function Home() {
  return (
    <>
      <Hero />
      <LatestRelease />
      <FilmInfoSection />
      <SynopsisSection />
      <FeaturedNews />
      <HallOfFame />
    </>
  )
}
