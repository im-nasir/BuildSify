"use client"
import { CursorProvider } from '@/context/CursorContext'
import CustomCursor from './CustomCursor'
import Navbar from './Navbar'

export default function RootClientLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CursorProvider>
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
    </CursorProvider>
  )
}
