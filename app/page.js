import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedNews from '@/components/FeaturedNews'
import HallOfFame from '@/components/HallOfFame'
import Services from '@/components/Services'
import Works from '@/components/Works'
import WhyBeeTeam from '@/components/WhyBeeTeam'
import Footer from '@/components/Footer'

export default function Home() {
return (
<>
<Navbar />
<Hero />
<FeaturedNews/>
<Works />
<HallOfFame/>
<Services />
<WhyBeeTeam />
<Footer/>
</>
)
}