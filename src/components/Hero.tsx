"use client"

import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'
import { cn } from '@/lib/utils'
import { InteractiveGridPattern } from '@/components/magicui/interactive-grid-pattern'

const Hero = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center relative overflow-hidden">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
          "absolute inset-0 w-screen",
          "transform-gpu" 
        )}
        width={120}
        height={120}
        squares={[16, 16]} 
      />

      <div className="absolute inset-0 w-screen bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />

      {/* Content */}
      <div className="text-center pt-16 relative z-10 max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[42px] md:text-[60px] font-[500] leading-tight">
            <span className="block">Development</span>
            <span className="block">Solutions</span>
          </h1>

          <p className="mt-6 text-[14px] md:text-[14px] text-white/80 max-w-[300px] md:max-w-[500px] mx-auto">
            Crafting innovative digital solutions with cutting-edge technologies and pixel-perfect precision.
          </p>

          <button className="mt-8 md:mt-12 w-[200px] md:w-[220px] flex items-center justify-center gap-2 mx-auto bg-white/10 hover:bg-sky-500/20 text-white px-6 py-3 rounded-full transition-all group">
            Let's Connect
            <BsArrowRight className="transform group-hover:translate-x-2 transition-transform duration-700" size={20} />
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
