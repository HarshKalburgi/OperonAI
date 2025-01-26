import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-card py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Image
                  src="C:\Users\harsh\OneDrive\Desktop\OperonAI\images\Logo.png"
                  alt="OperonAI Logo"
                  width={180}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} OperonAI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

