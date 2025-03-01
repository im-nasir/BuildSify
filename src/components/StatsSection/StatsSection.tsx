"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import useCountAnimation from '@/hooks/useCountAnimation'
import styles from './StatsSection.module.css'


const stats = [
  { number: 5, prefix: '+', text: 'Years of Experience' },
  { number: 20, prefix: '+', text: 'Successful Projects' },
  { number: 30, prefix: '+', text: 'Customers' },
  { number: 100, prefix: '', suffix: '%', text: 'Quality' }
]

type MotionDivProps = HTMLMotionProps<"div">

const StatCard = ({ number, prefix = '', suffix = '', text, index }: {
  number: number
  prefix?: string
  suffix?: string
  text: string
  index: number
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const animatedNumber = useCountAnimation(isVisible ? number : 0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div 
      ref={cardRef}
      className={styles.statCard}
      {...({} as MotionDivProps)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.1 
        }
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className={styles.number}>
        {prefix}{animatedNumber}{suffix}
      </span>
      <div className={styles.divider}></div>
      <span className={styles.text}>{text}</span>
    </motion.div>
  )
}
const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.content}>
        <motion.div 
          className={styles.textCard}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6 }
          }}
          viewport={{ once: true }}
        >
          <span className={styles.heading}>
            Blending Creativity with Functionality
          </span>
          <div className={styles.divider}></div>
          <span className={styles.description}>
            I am a passionate and dedicated freelance designer and developer, 
            specializing in creating unique and effective design solutions. 
            With extensive experience in web, apps, and branding, as well as 
            UX/UI design and WordPress development, I have collaborated with 
            companies of all types, both nationally and internationally, 
            ensuring efficiency and flexibility in every project.
          </span>
        </motion.div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              index={index}
              number={stat.number}
              prefix={stat.prefix}
              suffix={stat.suffix}
              text={stat.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

