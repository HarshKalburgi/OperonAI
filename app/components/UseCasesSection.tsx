"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Leaf, Stethoscope, Factory, Truck } from "lucide-react"

const useCases = [
  {
    icon: Leaf,
    title: "Agriculture",
    description: "Optimize crop management and harvesting with AI-powered systems.",
    details:
      "Our AI solutions help farmers increase yields, reduce resource usage, and make data-driven decisions for sustainable agriculture.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Enhance patient care and medical procedures with AI assistance.",
    details:
      "From diagnostic imaging to personalized treatment plans, our AI technology is revolutionizing healthcare delivery and outcomes.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Improve efficiency and quality control in production processes.",
    details:
      "Our AI-driven manufacturing solutions optimize production lines, predict maintenance needs, and ensure consistent product quality.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Streamline supply chain operations and route optimization.",
    details:
      "OperonAI's logistics solutions use advanced algorithms to optimize inventory management, predict demand, and improve delivery efficiency.",
  },
]

const UseCasesSection = () => {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null)

  return (
    <section id="use-cases" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          Use Cases
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-muted p-6 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300 relative overflow-hidden"
              onMouseEnter={() => setHoveredCase(index)}
              onMouseLeave={() => setHoveredCase(null)}
            >
              <useCase.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
              <AnimatePresence>
                {hoveredCase === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-primary/90 p-6 flex items-center justify-center"
                  >
                    <p className="text-primary-foreground text-center">{useCase.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCasesSection

