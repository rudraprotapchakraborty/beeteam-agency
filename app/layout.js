import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/context/LanguageContext'
import OpeningScene from '@/components/OpeningScene'

export const metadata = {
  title: 'BeeTeam',
  description: 'Top-tier video production company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>

          <OpeningScene />

          <Navbar />
          {children}
          <Footer />

        </LanguageProvider>
      </body>
    </html>
  )
}