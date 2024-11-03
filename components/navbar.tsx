'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Glasses } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Theme from './theme-toggle'
import Image from 'next/image'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'AR/VR Technology', href: '/ar-vr' },
  { name: 'Apex Prep', href: '/apex-prep' },
  { name: 'Learners Persona', href: '/learners' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b pr-[30px]" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div className="flex items-center gap-2 text-2xl font-bold text-primary" whileHover={{ scale: 1.05 }}>
            <Link href="/">
              <Image src="/Logo-edit.jpg" alt="logo" width={60} height={60} className="rounded-full" />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <Button>Get Started</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <motion.div className="md:hidden" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button className="w-full">Get Started</Button>
                <Theme />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
