'use client'

import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
// import { AnimatedBackground } from '@/components/animated-background'
import { AutoScrollCarousel } from '@/components/scroll-images'

const images = ['/VR.jpg', '/VR1.jpg', '/VR2.jpg', '/VR3.jpg']

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary pt-16">
      <HeroSection />
      <AutoScrollCarousel images={images} baseVelocity={5} />
      <FeaturesSection />
      {/* <AnimatedBackground /> */}
    </main>
  )
}
