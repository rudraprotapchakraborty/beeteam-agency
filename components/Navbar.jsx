'use client'

import Image from 'next/image'
import { useState } from 'react'
import MegaMenu from './MegaMenu'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#FFC700]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/beeteam_logo.png"
            alt="Beeteam"
            width={140}
            height={40}
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-[15px] font-medium text-black">
          
          <span className="bg-black text-white px-4 py-1.5 rounded-full">
            Home
          </span>

          <span className="cursor-pointer hover:opacity-80">
            About Us
          </span>

          <div
            className="relative cursor-pointer hover:opacity-80"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="flex items-center gap-1">
              Services <span className="text-xs">▾</span>
            </span>

            {open && <MegaMenu />}
          </div>

          <span className="cursor-pointer hover:opacity-80">
            Our Works
          </span>

          <span className="cursor-pointer hover:opacity-80">
            Clients
          </span>

          <span className="cursor-pointer hover:opacity-80">
            Contact Us
          </span>
        </nav>
      </div>
    </header>
  )
}
