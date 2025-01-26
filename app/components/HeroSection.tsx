"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), { ssr: false })

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2 gradient-text">OperonAI</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 gradient-text leading-relaxed py-2">
            Intelligence in Motion
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">Delivering cutting-edge AI solutions across industries</p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="glow">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

