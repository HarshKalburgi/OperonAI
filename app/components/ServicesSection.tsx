"use client"

import { motion } from "framer-motion"
import { Brain, Cog, Headphones } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Expert guidance on AI strategy and implementation for your business.",
  },
  {
    icon: Cog,
    title: "Custom Model Development",
    description: "Tailored AI models designed to solve your specific challenges.",
  },
  {
    icon: Headphones,
    title: "Middleware Integration",
    description: "Seamless integration of AI capabilities into your existing systems.",
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

