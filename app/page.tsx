import Hero from '@/components/Hero'
import DirectorVision from '@/components/DirectorVision'
import LatestRelease from '@/components/LatestRelease'
import FeaturedNews from '@/components/FeaturedNews'
import HallOfFame from '@/components/HallOfFame'
import FilmInfoSection from '@/components/FilmInfoSection'
import SynopsisSection from '@/components/SynopsisSection'
import PressRelease from '@/components/PressRelease'

export default function Home() {
  return (
    <>
      <Hero />
      <PressRelease />
      <FeaturedNews />
      <LatestRelease />
      <FilmInfoSection />
      <DirectorVision />
      <SynopsisSection />
      <HallOfFame />
    </>
  )
}

