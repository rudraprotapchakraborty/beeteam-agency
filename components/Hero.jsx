'use client'

import { motion } from 'framer-motion'

export default function Vision() {
  // Animation variants for the text container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each paragraph slides in one after another
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <h2 className="text-sm font-bold tracking-[0.2em] text-red-600 uppercase mb-2">
          Our Vision
        </h2>
        <div className="h-1 w-12 bg-red-600 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image with Hover & Scroll Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="relative group"
        >
          {/* Decorative background element */}
          <div className="absolute -inset-4 bg-[#FFC700]/10 rounded-3xl -z-10 group-hover:bg-[#FFC700]/20 transition-colors duration-500" />
          
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src="https://beeteam.agency/wp-content/uploads/2025/02/6-1-2048x1152.png"
              alt="Our Vision"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content with Staggered Reveal */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 leading-tight"
          >
            Crafting stories that <span className="text-red-600">resonate</span> globally.
          </motion.h3>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 leading-relaxed text-lg"
          >
            Beeteam, a top-tier video production company in Bangladesh, is
            committed to creating exceptional content that truly represents
            your brand. We go beyond just making videos—we craft compelling
            stories that leave a lasting impact.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 leading-relaxed text-lg"
          >
            Our team works closely with you to ensure our expertise enhances
            your brand’s message. By blending cutting-edge technology with
            creative artistry, we’ve built a reputation as the premier choice
            for video production.
          </motion.p>

          {/* Call to Action Link */}
          <motion.div variants={itemVariants} className="pt-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 font-bold text-black border-b-2 border-red-600 pb-1 hover:gap-4 transition-all"
            >
              Learn more about our process <span>→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}