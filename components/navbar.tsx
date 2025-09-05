"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled bg-white/90 backdrop-blur-md shadow-md" : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <Image
              src="/logo_transparent.png"
              alt="Adbhut Global Logo"
              width={32}
              height={32}
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold">
                <span className="text-[#DA3521]">Adbhut</span>
                <span className="text-[#0070f3]"> Global</span>
              </span>
              <span className="text-xs sm:text-sm text-[#0070f3] hidden sm:block">
                Tour and Travel Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Theme Toggle and Contact Button */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="h-9 w-9 xl:h-10 xl:w-10"
              >
                {theme === "dark" ? <Sun className="h-4 w-4 xl:h-5 xl:w-5" /> : <Moon className="h-4 w-4 xl:h-5 xl:w-5" />}
              </Button>
            )}
            <Link href="/contact">
              <Button className="px-4 py-2 xl:px-6 xl:py-2 text-sm xl:text-base font-medium">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="flex lg:hidden items-center space-x-2 sm:space-x-3">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="h-9 w-9"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="h-9 w-9"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            className="lg:hidden bg-background/95 backdrop-blur-md border-t shadow-lg"
          >
            <div className="container mx-auto px-3 sm:px-4 py-4">
              <nav className="flex flex-col space-y-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 py-3 px-4 rounded-md font-medium block"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.1 }}
                  className="pt-4 border-t border-border/50"
                >
                  <Link href="/contact" onClick={toggleMenu}>
                    <Button className="w-full py-3 text-base font-medium">
                      Contact Us
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

