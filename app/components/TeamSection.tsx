"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Jane Smith",
    role: "CEO & Co-founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in AI and robotics with 15+ years of experience in the field.",
  },
  {
    name: "John Doe",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Pioneering engineer specializing in edge computing and AI optimization.",
  },
  {
    name: "Emily Chen",
    role: "Head of Research",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Leading researcher in multimodal AI and human-robot interaction.",
  },
]

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-accent/10 relative overflow-hidden">
      <div className="futuristic-grid absolute inset-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 neon-text font-orbitron"
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background/50 backdrop-blur-sm rounded-lg p-6 text-center border border-primary/20 hover:border-primary/50 transition-colors duration-300"
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 border-2 border-primary"
                />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{member.name}</h3>
              <p className="text-secondary mb-2">{member.role}</p>
              <p className="text-foreground/80">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection

