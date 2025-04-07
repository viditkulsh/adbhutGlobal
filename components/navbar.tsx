"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled bg-white/80 backdrop-blur-md shadow-md" : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo_transparent.png" // Path to the logo in the public folder
              alt="Adbhut Global Logo"
              width={40} // Adjust width as needed
              height={40} // Adjust height as needed
              className="h-10 w-10 object-contain" // Tailwind classes for styling
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">Adbhut Global</span>
              <span className="text-sm text-blue-primary">Tour and Travel Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/packages" className="text-foreground hover:text-primary transition-colors">
              Packages
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button>Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link
                  href="/packages"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Packages
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <Button className="w-full" onClick={toggleMenu}>
                  Book Now
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

