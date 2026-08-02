import Hero from '@/components/Hero'
import DirectorVision from '@/components/DirectorVision'
import LatestRelease from '@/components/LatestRelease'
import HallOfFame from '@/components/HallOfFame'
import FilmInfoSection from '@/components/FilmInfoSection'
import SynopsisSection from '@/components/SynopsisSection'
import Works from '@/components/Works'

export default function Home() {
  return (
    <>
      <Hero />
      <SynopsisSection />
      <DirectorVision />
      <LatestRelease />
      <FilmInfoSection />
      <HallOfFame />
      <Works />
    </>
  )
}
