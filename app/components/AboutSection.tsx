"use client"

import { motion } from "framer-motion"
import { Cpu, Network, Zap } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Custom AI Development",
    description: "Tailored AI solutions to meet your specific business needs.",
  },
  {
    icon: Network,
    title: "Robotics Middleware",
    description: "Seamless integration of AI in robotic systems.",
  },
  {
    icon: Zap,
    title: "Edge Computing",
    description: "Optimized AI models for edge devices and real-time processing.",
  },
]

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          About OperonAI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-center max-w-3xl mx-auto mb-12 text-muted-foreground"
        >
          At OperonAI, we're at the forefront of AI innovation, specializing in custom AI development, robotics
          middleware, and edge computing solutions. Our mission is to empower businesses across industries with
          intelligent, cutting-edge technology.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-muted p-6 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection

