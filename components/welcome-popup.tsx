"use client"

import { useState, useEffect } from "react"
import PosterCarousel from "./poster-carousel"

interface WelcomePopupProps {
  delay?: number // Delay in milliseconds before showing the popup
  showOnce?: boolean // Whether to show only once per session
}

export default function WelcomePopup({ 
    delay = 1500, // Reduced delay for faster display
    showOnce = true // Changed back to true for production
}: WelcomePopupProps) {
  const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

  useEffect(() => {
      setMounted(true)
  }, [])

    useEffect(() => {
        if (!mounted) return

    // Check if popup has already been shown in this session
    if (showOnce) {
      const hasShownBefore = sessionStorage.getItem('welcomePopupShown')
        if (hasShownBefore) {
        return
      }
    }

    // Show popup after delay
      const timer = setTimeout(() => {
        setIsOpen(true)
        if (showOnce) {
            sessionStorage.setItem('welcomePopupShown', 'true')
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, showOnce, mounted])

  const handleClose = () => {
    setIsOpen(false)
  }

    if (!mounted) return null

  return (
    <PosterCarousel 
      isOpen={isOpen} 
      onClose={handleClose}
      autoSlide={true}
          slideInterval={3000} // Faster slide interval
    />
  )
}
