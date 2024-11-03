'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Glasses, BookOpen, Users } from 'lucide-react'
import Link from 'next/link'

const verticals = [
  {
    icon: <Glasses className="w-12 h-12 mb-6 text-primary" />,
    title: 'AR/VR Technology in Education',
    description: 'Revolutionize learning through immersive AR/VR experiences that bring educational concepts to life, enhancing engagement and understanding.',
    features: ['Curriculum-aligned AR content', 'Interactive VR laboratories', '3D visualization tools'],
    url: '/ar-vr',
  },
  {
    icon: <BookOpen className="w-12 h-12 mb-6 text-primary" />,
    title: 'Apex Prep',
    description: 'Seamlessly integrate competitive syllabus with liberal arts curricula, providing a comprehensive educational foundation.',
    features: ['Balanced curriculum design', 'Critical thinking focus', 'Creative expression'],
    url: 'apex-prep',
  },
  {
    icon: <Users className="w-12 h-12 mb-6 text-primary" />,
    title: 'Learners Persona',
    description: 'Advanced student profiling system that identifies learning patterns, strengths, and areas for improvement.',
    features: ['Personalized learning paths', 'Progress tracking', 'Skill assessment'],
    url: 'learners',
  },
]

export default function VerticalSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h2 className="text-4xl font-bold text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Our Educational Verticals
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {verticals.map((vertical, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
            <Link href={vertical.url}>
              <Card className="p-8 h-full bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }} className="flex justify-center">
                  {vertical.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-center">{vertical.title}</h3>
                <p className="text-muted-foreground mb-6 text-center">{vertical.description}</p>
                <ul className="space-y-2">
                  {vertical.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
