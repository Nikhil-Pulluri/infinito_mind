'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">Transforming education through innovative technology and personalized learning experiences.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ar-vr" className="text-muted-foreground hover:text-primary transition-colors">
                  AR/VR Technology
                </Link>
              </li>
              <li>
                <Link href="/apex-prep" className="text-muted-foreground hover:text-primary transition-colors">
                  Apex Prep
                </Link>
              </li>
              <li>
                <Link href="/learners" className="text-muted-foreground hover:text-primary transition-colors">
                  Learners Persona
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                +91 9398442625
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                tulasipriyanka.k@srmap.edu.in
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                SRM University AP, Amaravati, Andhra Pradhesh
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for updates and insights.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 rounded-md border bg-background" />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 Infinito Mind. All rights reserved.</p>
          <p>
            Designed by{' '}
            <span className="font-bold">
              <a href="https://nikhil-pulluri.vercel.app/">Nikhil Pulluri</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
