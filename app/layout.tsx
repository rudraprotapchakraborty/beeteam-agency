import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OpeningScene from '@/components/OpeningScene'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: 'BeeTeam',
  description: 'Top-tier video production company',
}

export default function RootLayout({ children }: { children: ReactNode }) {
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
