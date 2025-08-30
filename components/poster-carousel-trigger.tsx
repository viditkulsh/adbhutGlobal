"use client"

import { useState } from "react"
import { ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import PosterCarousel from "./poster-carousel"

interface PosterCarouselTriggerProps {
  buttonText?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export default function PosterCarouselTrigger({ 
  buttonText = "View Travel Packages",
  variant = "outline",
  size = "default",
  className = ""
}: PosterCarouselTriggerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button 
        variant={variant} 
        size={size}
        className={className}
        onClick={handleOpen}
      >
        <ImageIcon className="h-4 w-4 mr-2" />
        {buttonText}
      </Button>
      
      <PosterCarousel 
        isOpen={isOpen} 
        onClose={handleClose}
        autoSlide={true}
        slideInterval={5000}
      />
    </>
  )
}
