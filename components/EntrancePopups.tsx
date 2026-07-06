'use client'

import { useState, useEffect } from 'react'
import PostersPopup from './PostersPopup'
import PressReleasePopup from './PressReleasePopup'

export default function EntrancePopups() {
  const [activePopup, setActivePopup] = useState<'none' | 'posters' | 'press'>('none')

  useEffect(() => {
    // Open PostersPopup 4 seconds after page loads (after OpeningScene countdown wipe)
    const timer = setTimeout(() => {
      setActivePopup('posters')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const handlePostersClose = () => {
    // When posters popup is closed, immediately open the press release popup
    setActivePopup('press')
  }

  const handlePressClose = () => {
    setActivePopup('none')
  }

  return (
    <>
      <PostersPopup isOpen={activePopup === 'posters'} onClose={handlePostersClose} />
      <PressReleasePopup isOpen={activePopup === 'press'} onClose={handlePressClose} />
    </>
  )
}
