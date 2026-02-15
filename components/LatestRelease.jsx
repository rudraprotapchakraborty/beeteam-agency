'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function LatestRelease() {
  const containerRef = useRef(null)
  const { language } = useLanguage()

  const translations = {
    en: {
      title1: "LATEST",
      title2: "RELEASE",
      tagline: "Production House · Studio 2026",
      resolution: "Resolution",
      client: "Client",
      duration: "Duration"
    },
    bn: {
      title1: "সর্বশেষ",
      title2: "প্রকাশনা",
      tagline: "প্রোডাকশন হাউস · স্টুডিও ২০২৬",
      resolution: "রেজোলিউশন",
      client: "ক্লায়েন্ট",
      duration: "সময়কাল"
    }
  }

  const t = translations[language]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.5
  })

  const yParallax = useTransform(smooth, [0, 1], [60, -60])
  const scaleSoft = useTransform(smooth, [0, 1], [0.98, 1.02])

  return (
    <section
      ref={containerRef}
      id="latest-release"
      className="relative bg-[#fafafa] pb-24 overflow-hidden"
    >
      {/* Ambient Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[5%] w-[35%] h-[35%] bg-[#FFD700]/10 blur-[140px]" />
        <div className="absolute bottom-[5%] left-[10%] w-[30%] h-[30%] bg-yellow-100/30 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between">

            {/* HEADER */}
            <motion.div
              style={{ y: yParallax }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight leading-[1.05] mb-4">
                {t.title1}{" "}
                <span className="text-[#FFD700] relative">
                  {t.title2}
                  <motion.span
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FFD700]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{ originX: 0 }}
                  />
                </span>
              </h2>

              <p className="text-xs text-black/50 font-medium tracking-wide">
                {t.tagline}
              </p>
            </motion.div>

            {/* VIDEO */}
            <motion.div
              style={{ scale: scaleSoft }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative w-full aspect-video rounded-xl overflow-hidden border border-black/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] bg-white"
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ErRnSJQ9nhg?rel=0&modestbranding=1"
                title="Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>

          </div>

          {/* RIGHT SIDE - POSTER */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative w-full rounded-xl overflow-hidden border border-black/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] bg-white"
          >
            <div className="relative h-full min-h-[520px]">
              <Image
                src="/poster1.jpg"  // replace with your poster
                alt="Official Poster"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>

        {/* META STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-8 text-xs text-black/60 font-medium tracking-wide"
        >
          <div>
            {t.resolution} ·{" "}
            <span className="text-black font-semibold">4K UHD</span>
          </div>

          <div>
            {t.client} ·{" "}
            <span className="text-black font-semibold">
              Financial Express
            </span>
          </div>

          <div>
            {t.duration} ·{" "}
            <span className="text-[#D97706] font-semibold">02:44</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
