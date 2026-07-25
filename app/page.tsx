import Hero from '@/components/Hero'
import PressRelease from '@/components/PressRelease'
import DirectorVision from '@/components/DirectorVision'
import LatestRelease from '@/components/LatestRelease'
import HallOfFame from '@/components/HallOfFame'
import FilmInfoSection from '@/components/FilmInfoSection'
import SynopsisSection from '@/components/SynopsisSection'
import TicketSection from '@/components/tickets/TicketSection'

export default function Home() {
  return (
    <>
      <Hero />
      <PressRelease />
      <LatestRelease />
      <FilmInfoSection />
      <DirectorVision />
      <SynopsisSection />
      <TicketSection />
      <HallOfFame />
    </>
  )
}
