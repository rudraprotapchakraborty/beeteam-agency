import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { Bebas_Neue, Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OpeningScene from '@/components/OpeningScene'
import SmoothScroll from '@/components/providers/SmoothScroll'
import { ThemeProvider } from '@/context/ThemeContext'
import { AuthProvider } from '@/context/AuthContext'

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

const themeInitScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t !== 'light' && t !== 'dark') {
      t = 'light';
    }
    document.documentElement.dataset.theme = t;
    document.documentElement.classList.add(t);
    document.documentElement.style.colorScheme = t;
    if (sessionStorage.getItem('beeteam_visited')) {
      document.documentElement.classList.add('has-visited');
    }
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
    document.documentElement.classList.add('light');
  }
})();
`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="noise antialiased bg-page text-fg">
        <ThemeProvider>
          <AuthProvider>
            <SmoothScroll>
              <OpeningScene />
              <Navbar />
              <main className="relative min-h-screen">{children}</main>
              <Footer />
            </SmoothScroll>
            <Analytics />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
