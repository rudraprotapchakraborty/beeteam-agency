'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'en' | 'bn'

type LanguageContextValue = {
  language: Language
  changeLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('lang')
    if (savedLang === 'en' || savedLang === 'bn') {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is unavailable during SSR, so we hydrate the persisted language after mount.
      setLanguage(savedLang)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
