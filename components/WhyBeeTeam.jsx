'use client'

import { motion } from 'framer-motion'
import { Target, Users, Sparkles, MessageSquare } from 'lucide-react'

const features = [
  {
    title: "Artistic Storytelling",
    desc: "Mastering narratives that elevate your brand’s impact to new heights.",
    icon: <Sparkles className="text-red-600" size={28} />,
    color: "bg-red-50"
  },
  {
    title: "Expert Craftsmanship",
    desc: "Every project reflects unmatched quality from seasoned industry experts.",
    icon: <Users className="text-yellow-600" size={28} />,
    color: "bg-yellow-50"
  },
  {
    title: "Brand Alignment",
    desc: "Productions that align seamlessly with your identity and goals.",
    icon: <Target className="text-blue-600" size={28} />,
    color: "bg-blue-50"
  },
  {
    title: "Deep Collaboration",
    desc: "We gain deep insights into your brand essence and audience dynamics.",
    icon: <MessageSquare className="text-green-600" size={28} />,
    color: "bg-green-50"
  }
]

export default function WhyBeeTeam() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-6xl font-black tracking-tighter text-black mb-6">
              Why <span className="text-red-600">BeeTeam</span>?
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed">
              We go beyond visuals. We deliver visually stunning creations 
              backed by a deep grasp of brand identity.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 bg-[#FFC700] p-8 rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
          >
            <h3 className="text-2xl font-bold mb-4">Beeteam’s Tailored Approach</h3>
            <p className="text-black/80 leading-relaxed font-medium">
              Our tailored approach ensures each video resonates deeply, effectively 
              conveying key messages with expert craftsmanship and close collaboration.
            </p>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                y: -10,
                backgroundColor: "#000",
                transition: { duration: 0.2 }
              }}
              className={`p-8 rounded-[2.5rem] ${item.color} group transition-colors duration-300`}
            >
              <div className="bg-white p-4 rounded-2xl w-fit shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-600 group-hover:text-gray-400 transition-colors leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}