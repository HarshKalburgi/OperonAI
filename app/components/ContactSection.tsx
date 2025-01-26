"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          Start Your AI Project Today
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Name" className="bg-card text-foreground" />
              <Input type="email" placeholder="Email" className="bg-card text-foreground" />
            </div>
            <Input type="text" placeholder="Company" className="bg-card text-foreground" />
            <Textarea placeholder="Project Details" rows={6} className="bg-card text-foreground" />
            <Button type="submit" className="w-full glow">
              Request a Quote
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

