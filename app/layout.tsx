import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Bebas_Neue, Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OpeningScene from '@/components/OpeningScene'
import { LanguageProvider } from '@/context/LanguageContext'

const display = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const serif = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BeeTeam Studios — Cinematic Authority',
  description:
    'Bee Team Studios — engineering cinematic narratives for high-performance global brands. Producers of The University of Chankharpul.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="paper-tex antialiased">
        <LanguageProvider>
          <OpeningScene />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
