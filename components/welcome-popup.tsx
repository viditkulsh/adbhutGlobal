"use client"

import { useState, useEffect } from "react"
import PosterCarousel from "./poster-carousel"

interface WelcomePopupProps {
  delay?: number // Delay in milliseconds before showing the popup
  showOnce?: boolean // Whether to show only once per session
}

export default function WelcomePopup({ 
  delay = 2000, 
  showOnce = true 
}: WelcomePopupProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup has already been shown in this session
    if (showOnce) {
      const hasShownBefore = sessionStorage.getItem('welcomePopupShown')
      if (hasShownBefore) {
        setHasShown(true)
        return
      }
    }

    // Show popup after delay
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true)
        if (showOnce) {
          sessionStorage.setItem('welcomePopupShown', 'true')
          setHasShown(true)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, showOnce, hasShown])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <PosterCarousel 
      isOpen={isOpen} 
      onClose={handleClose}
      autoSlide={true}
      slideInterval={4000}
    />
  )
}
