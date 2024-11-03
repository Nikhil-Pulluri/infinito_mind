'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ARVRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <motion.h1 className="text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          AR/VR Technology in Education
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl font-semibold mb-4">Immersive Learning Experience</h2>
            <p className="text-muted-foreground mb-6">
              Our AR/VR technology transforms traditional learning into an interactive, immersive experience. Students can explore complex scientific concepts, historical events, and mathematical
              principles in a three-dimensional space, making abstract ideas tangible and easier to understand.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Virtual laboratories for safe experimentation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                3D anatomical models for biology studies
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Historical reconstructions for immersive history lessons
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Interactive physics simulations
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="relative h-[400px] rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80" alt="Student using VR headset" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Benefits of AR/VR in Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Enhanced Engagement</h3>
              <p className="text-muted-foreground">Interactive 3D environments capture students' attention and maintain their interest throughout the learning process.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Better Retention</h3>
              <p className="text-muted-foreground">Experiential learning through AR/VR helps students retain information more effectively than traditional methods.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Practical Application</h3>
              <p className="text-muted-foreground">Students can practice real-world skills in a safe, controlled environment before applying them in actual situations.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
