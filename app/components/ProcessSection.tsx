"use client"

import { motion } from "framer-motion"
import { MessageSquare, Code, TestTube, Rocket } from "lucide-react"

const steps = [
  { icon: MessageSquare, title: "Consult", description: "We discuss your needs and goals" },
  { icon: Code, title: "Develop", description: "Our experts build your custom AI solution" },
  { icon: TestTube, title: "Test", description: "Rigorous testing ensures quality and reliability" },
  { icon: Rocket, title: "Deliver", description: "We deploy and support your AI implementation" },
]

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Process
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center mb-8 md:mb-0"
            >
              <div className="bg-primary rounded-full p-4 mb-4">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-center text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && <div className="hidden md:block w-16 h-1 bg-primary mt-4" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection

