"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const reasons = [
  "End-to-end project handling",
  "Expertise across multiple industries",
  "Cutting-edge AI technologies",
  "Scalable and customizable solutions",
  "Dedicated support and maintenance",
]

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose OperonAI
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <CheckCircle className="w-6 h-6 text-primary mr-2" />
              <span className="text-foreground">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection

