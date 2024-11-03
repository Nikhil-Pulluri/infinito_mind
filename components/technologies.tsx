'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import Link from 'next/navigation'

const technologies = [
  {
    title: 'Virtual Chemistry Lab',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    description: 'Conduct experiments safely in a virtual environment',
  },
  {
    title: 'AR Biology Explorer',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    description: 'Visualize complex biological systems in 3D',
  },
  {
    title: 'Interactive Physics',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    description: 'Experience physics concepts through virtual simulations',
  },
]

export default function TechnologyShowcase() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h2 className="text-4xl font-bold text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        Experience Our Technology
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
            <Card className="overflow-hidden group cursor-pointer">
              <div className="relative h-64">
                <motion.img src={tech.image} alt={tech.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                  <p className="text-sm opacity-90">{tech.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
