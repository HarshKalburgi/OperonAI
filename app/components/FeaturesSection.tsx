"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Zap, Puzzle } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Real-time Multimodal AI",
    description: "Process and analyze multiple data streams simultaneously for comprehensive decision-making.",
    details:
      "Our advanced AI algorithms can process visual, auditory, and sensor data in real-time, enabling robots to make complex decisions based on a holistic understanding of their environment.",
  },
  {
    icon: Puzzle,
    title: "Plug-and-Play Modules",
    description: "Easily integrate our AI middleware with your existing robotic systems and workflows.",
    details:
      "Our modular architecture allows for seamless integration with various robotic platforms and sensors, reducing implementation time and costs while maximizing flexibility.",
  },
  {
    icon: Zap,
    title: "Edge AI Optimization",
    description: "Maximize performance and efficiency with our specialized edge computing solutions.",
    details:
      "By optimizing AI models for edge devices, we enable real-time processing and decision-making directly on robots, reducing latency and enhancing responsiveness in critical applications.",
  },
]

const FeaturesSection = () => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)

  return (
    <section id="features" className="py-20 bg-accent/10 relative overflow-hidden">
      <div className="futuristic-grid absolute inset-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 neon-text font-orbitron"
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border border-primary/20 hover:border-primary/50"
              onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-foreground/80 mb-4">{feature.description}</p>
              <AnimatePresence>
                {expandedFeature === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-foreground/70"
                  >
                    {feature.details}
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.button
                className="mt-4 text-primary hover:text-primary/80 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {expandedFeature === index ? "Read Less" : "Read More"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

