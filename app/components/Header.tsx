"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-GQ6O2wWkj8eIyY3pdiPN3UkiwMrBfj.png"
              alt="OperonAI Logo"
              width={180}
              height={48}
              className="h-12 w-auto"
            />
          </div>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#use-cases">Use Cases</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink href="#about" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink href="#services" onClick={() => setIsOpen(false)}>
              Services
            </NavLink>
            <NavLink href="#use-cases" onClick={() => setIsOpen(false)}>
              Use Cases
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </div>
        </motion.nav>
      )}
    </header>
  )
}

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link href={href} className="text-foreground hover:text-primary transition-colors duration-200" onClick={onClick}>
    <motion.span whileHover={{ y: -2 }} className="relative">
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.span>
  </Link>
)

export default Header

