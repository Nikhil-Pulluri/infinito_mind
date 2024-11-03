'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LearnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <motion.h1 className="text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Learners Persona: Advanced Student Profiling
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl font-semibold mb-4">Personalized Learning Journey</h2>
            <p className="text-muted-foreground mb-6">
              Our advanced student profiling system uses data analytics and AI to create detailed learner personas, enabling truly personalized education. We analyze learning patterns, preferences,
              and progress to optimize each student's educational experience.
            </p>

            <h3 className="text-xl font-semibold mb-3">System Features:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                AI-powered learning pattern analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Real-time progress tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Adaptive learning paths
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Comprehensive skill assessment
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="relative h-[400px] rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80" alt="Student learning analytics" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Targeted Support</h3>
              <p className="text-muted-foreground">Identify and address learning challenges early with personalized intervention strategies.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
              <p className="text-muted-foreground">Focus on developing both core competencies and advanced skills based on individual potential.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Growth Tracking</h3>
              <p className="text-muted-foreground">Monitor and celebrate progress with detailed analytics and achievement milestones.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
