'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: "Full Length",
    subtitle: "Film Production",
    img: "https://beeteam.agency/wp-content/uploads/2025/02/Full-Length-Feature-Film-PRoduction-1228x1536.png",
  },
  {
    title: "Short Film",
    subtitle: "Production",
    img: "https://beeteam.agency/wp-content/uploads/2025/02/1-3-1228x1536.png",
  },
  {
    title: "Documentary",
    subtitle: "Production",
    img: "https://beeteam.agency/wp-content/uploads/2025/02/2-3-1228x1536.png",
  },
  {
    title: "Advertisement",
    subtitle: "Production",
    img: "https://beeteam.agency/wp-content/uploads/2025/02/3-2-1228x1536.png",
  },
  {
    title: "Promotional",
    subtitle: "& Campaigns",
    img: "https://beeteam.agency/wp-content/uploads/2025/02/6-2-1228x1536.png",
  },
  {
    title: "Video",
    subtitle: "Production",
    img: "https://beeteam.agency/wp-content/uploads/2025/02/7-1-1228x1536.png",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Modern Header */}
        <div className="flex flex-col items-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-600 font-bold tracking-widest uppercase text-sm mb-3"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-black text-center"
          >
            Major Services
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer bg-black"
            >
              {/* Image with Zoom Effect */}
              <motion.img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#FFC700] text-xs font-bold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.subtitle}
                </p>
                <h3 className="text-white text-xl font-bold leading-tight">
                  {service.title}
                </h3>
                
                {/* Minimalist 'View' indicator */}
                <div className="w-0 group-hover:w-full h-0.5 bg-[#FFC700] mt-4 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text with Reveal */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto text-center mt-24"
        >
          <div className="inline-block p-8 bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              As a premier video production company in Bangladesh, <span className="text-black font-semibold uppercase text-sm tracking-tighter">Beeteam</span> excels in
              crafting compelling visual content that captivates audiences. 
            </p>
            <p className="text-gray-500 text-base leading-relaxed italic">
              "We guarantee a seamless and collaborative production process. Trust Beeteam to transform your ideas into impactful visuals."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}