"use client"
import React, { createContext, useContext, useState, useEffect } from 'react'

type CursorVariant = 'default' | 'work'

type CursorContextType = {
  cursorVariant: CursorVariant
  setCursorVariant: (variant: CursorVariant) => void
}

const CursorContext = createContext<CursorContextType>({
  cursorVariant: 'default',
  setCursorVariant: () => {},
})

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>
      {children}
    </CursorContext.Provider>
  )
}

export const useCursor = () => {
  const context = useContext(CursorContext)
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider')
  }
  return context
}
