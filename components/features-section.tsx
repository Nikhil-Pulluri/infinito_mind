'use client'

import { ArrowDownRight } from 'lucide-react'
import { FeatureCard } from './feature-card'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <ArrowDownRight className="w-10 h-10 mb-4 text-primary" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance',
  },
  {
    icon: <ArrowDownRight className="w-10 h-10 mb-4 text-primary" />,
    title: 'Efficient',
    description: 'Built with modern best practices',
  },
  {
    icon: <ArrowDownRight className="w-10 h-10 mb-4 text-primary" />,
    title: 'Powerful Features',
    description: 'Everything you need to succeed',
  },
]

export function FeaturesSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h2 className="text-4xl font-bold text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        Pros
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} index={index} />
        ))}
      </div>
    </div>
  )
}
