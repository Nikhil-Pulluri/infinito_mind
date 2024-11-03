'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <motion.div className="container  h-[80vh] flex flex-col items-center mx-auto px-4 pt-32 pb-20 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <motion.h1
          className="text-6xl font-bold mb-6 h-auto bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          Welcome to the Future of Learning!
        </motion.h1>
        <motion.p className="text-xl text-muted-foreground mt-5 mb-8 max-w-2xl mx-auto" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
          <span className="font-bold text-2xl">Infinito Mind</span>, an innovative ed-tech company focused on transforming education.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <Button size="lg" className="mr-4">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* <img src="/Logo.jpg" /> */}
    </div>
  )
}
