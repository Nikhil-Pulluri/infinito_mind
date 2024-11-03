'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const founders = [
  {
    name: 'K. Priyanka',
    role: 'Founder',
    bio: '',
    image: 'https://pxraja.com/wp-content/uploads/2024/07/no-dp_16.webp',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'K. Munesh Kumar',
    role: 'Co-Founder',
    bio: '',
    image: 'https://pxraja.com/wp-content/uploads/2024/07/no-dp_16.webp',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
]

export default function FoundersSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h2 className="text-4xl font-bold text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        Meet Our Founders
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {founders.map((founder, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
            <Card className="p-6 h-full bg-card/50 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                  <img src={founder.image} alt={founder.name} className="rounded-full object-cover w-full h-full" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{founder.name}</h3>
                <p className="text-primary font-medium mb-3">{founder.role}</p>
                <p className="text-muted-foreground mb-4">{founder.bio}</p>
                <div className="flex gap-4">
                  <Link href={founder.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href={founder.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link href={founder.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
