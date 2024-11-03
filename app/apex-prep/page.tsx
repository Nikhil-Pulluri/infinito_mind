'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ApexPrepPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <motion.h1 className="text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Apex Prep: Comprehensive Education
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl font-semibold mb-4">Balanced Curriculum Integration</h2>
            <p className="text-muted-foreground mb-6">
              Apex Prep combines competitive academic excellence with liberal arts education, creating well-rounded individuals prepared for future challenges. Our curriculum balances analytical
              thinking with creative expression, ensuring students develop both technical and soft skills.
            </p>

            <h3 className="text-xl font-semibold mb-3">Core Components:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                STEM-focused competitive preparation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Creative arts and humanities integration
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Critical thinking and problem-solving
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Leadership and communication skills
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="relative h-[400px] rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80" alt="Students in classroom" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Educational Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Personalized Learning</h3>
              <p className="text-muted-foreground">Customized learning paths that adapt to each student's strengths, weaknesses, and learning style.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Project-Based Learning</h3>
              <p className="text-muted-foreground">Hands-on projects that integrate multiple disciplines and encourage practical application of knowledge.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Continuous Assessment</h3>
              <p className="text-muted-foreground">Regular evaluation and feedback to ensure students are meeting their academic and personal development goals.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
