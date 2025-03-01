"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed w-full flex justify-center p-4 z-[999]">
            <div className="w-full max-w-[1480px] mx-auto px-4">
                <motion.div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '60px',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.37)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '100px',
                        padding: '3px 30px'
                    }}
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >



                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logos/1.png"
                            alt="Logo"
                            width={200}
                            height={100}
                            className="object-contain -ml-8" // Adjust -ml-x for the desired left positioning
                            priority
                        />
                    </Link>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-4">
                            <Link href="/projects" className="text-[15px] font-[500] text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all">
                                Projects
                            </Link>
                            <Link href="/about" className="text-[15px] font-[500] text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all">
                                About
                            </Link>
                            <Link href="/contact" className="text-[15px] font-[500] text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all">
                                Contact
                            </Link>
                        </div>

                        <button
                            className="h-[30px] w-[32px] relative group"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className="absolute inset-0 rounded-lg group-hover:bg-white/10 transition-all"></div>
                            <span className="absolute top-[10px] left-[4px] h-[2px] w-6 bg-white rounded-full"></span>
                            <span className="absolute top-[20px] left-[4px] h-[2px] w-6 bg-white rounded-full"></span>
                        </button>

                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    position: 'absolute',
                                    top: '61px',
                                    right: '16px',
                                    width: '230px',
                                    backgroundColor: '#111111',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '16px',
                                    padding: '16px'
                                }}
                            >
                                <div className="flex flex-col gap-2">
                                    <Link href="/home" className="text-[15px] font-[500] text-white hover:bg-[#222222] px-3 py-1 rounded-lg transition-all">
                                        Home
                                    </Link>
                                    <Link href="/projects" className="text-[15px] font-[500] text-white hover:bg-[#222222] px-3 py-1 rounded-lg transition-all">
                                        Projects
                                    </Link>
                                    <Link href="/about" className="text-[15px] font-[500] text-white hover:bg-[#222222] px-3 py-1 rounded-lg transition-all">
                                        About
                                    </Link>
                                    <Link href="/contact" className="text-[15px] font-[500] text-white hover:bg-[#222222] px-3 py-1 rounded-lg transition-all">
                                        Contact
                                    </Link>
                                    <Link href="/blog" className="text-[15px] font-[500] text-white hover:bg-[#222222] px-3 py-1 rounded-lg transition-all">
                                        Blog
                                    </Link>
                                </div>

                                <div className="h-[1px] bg-white/10 my-2"></div>

                                <div className="flex items-center justify-between px-3">
                                    <span className="text-[14px] font-[500] text-white/80">Follow me on</span>
                                    <div className="flex gap-3">
                                        <Link href="https://github.com/AsimRauf" target="_blank" className="text-white hover:text-white/80 transition-all">
                                            <FaGithub size={20} />
                                        </Link>
                                        <Link href="https://linkedin.com/https://www.linkedin.com/in/asim-rauf-43111223b/" target="_blank" className="text-white hover:text-white/80 transition-all">
                                            <FaLinkedin size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default Navbar