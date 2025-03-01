"use client"

import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center pt-16">
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

          <button
            className="mt-8 md:mt-12 w-[200px] md:w-[220px] flex items-center justify-center gap-2 mx-auto bg-white/10 hover:bg-sky-500/20 text-white px-6 py-3 rounded-full transition-all group"
          >
            Let's Connect
            <BsArrowRight className="transform group-hover:translate-x-2 transition-transform duration-700" size={20} />
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
