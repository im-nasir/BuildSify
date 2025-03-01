"use client"
import { useEffect, useState } from 'react'
import { motion, TargetAndTransition } from 'framer-motion'
import { useCursor } from '@/context/CursorContext'

const cursorVariants = {
    default: {
        width: '16px',
        height: '16px',
        backgroundColor: 'rgba(255, 255, 255, 255)'
    },
    work: {
        width: '80px',
        height: '80px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(4px)',
        mixBlendMode: 'difference'
    }
}

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [mounted, setMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const { cursorVariant } = useCursor()

    useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
        }

        setMounted(true)
        checkMobile()

        // Add event listeners
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', updateMousePosition)
        window.addEventListener('resize', checkMobile)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    // Don't render cursor on mobile or before mounting
    if (!mounted || isMobile) return null

    const animateProps: TargetAndTransition = {
        x: mousePosition.x - (cursorVariant === 'work' ? 30 : 8),
        y: mousePosition.y - (cursorVariant === 'work' ? 30 : 8),
        ...cursorVariants[cursorVariant],
        mixBlendMode: cursorVariant === 'work' ? 'difference' : undefined
    }

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 999999,
                pointerEvents: 'none',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            animate={animateProps}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.5
            }}
        >
            {cursorVariant === 'work' && (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="rgba(255, 255, 255, 1)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </motion.div>
    )
}

export default CustomCursor
