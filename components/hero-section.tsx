'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Glasses, BookOpen, Users } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div className="flex-1 text-center lg:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            Transform Education Through Innovation
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground mb-8" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <span className="font-bold text-2xl">Infinito Mind</span>, an innovative ed-tech company focused on transforming education.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button size="lg" className="gap-2">
              <Glasses className="w-4 h-4" />
              Try AR Demo
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <BookOpen className="w-4 h-4" />
              Explore Curriculum
            </Button>
          </motion.div>
        </motion.div>
        <motion.div className="flex-1" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <img src="https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800&q=80" alt="Student using VR headset" className="rounded-lg shadow-2xl" />
        </motion.div>
      </div>
    </div>
  )
}
