'use client'

import { useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from 'framer-motion'

interface ParallaxProps {
  images: string[]
  baseVelocity: number
}

export function AutoScrollCarousel({ images, baseVelocity = 1 }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-100, -300, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="overflow-hidden whitespace-nowrap my-20 py-8 bg-accent/50">
      <motion.div className="flex gap-4 whitespace-nowrap w-[200%]" style={{ x }}>
        {[...images, ...images].map((image, i) => (
          <motion.div key={i} className="relative h-[80vh] w-screen flex-shrink-0 rounded-lg overflow-hidden" transition={{ duration: 0.5 }}>
            <img src={image} alt={`Carousel image ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
