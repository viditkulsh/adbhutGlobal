"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogClose 
} from "@/components/ui/dialog"

interface Poster {
  id: number
  name: string
  image: string
  alt: string
}

const posters: Poster[] = [
  {
    id: 1,
    name: "Bali Package",
    image: "/posters/Bali_Package.jpg",
    alt: "Bali Travel Package - Explore the Island of Gods"
  },
  {
    id: 2,
    name: "Dubai Package",
    image: "/posters/Dubai_Package.jpg",
    alt: "Dubai Travel Package - Experience Luxury and Adventure"
  },
  {
    id: 3,
    name: "Goa Package",
    image: "/posters/Goa_Package.jpg",
    alt: "Goa Travel Package - Beaches, Sun, and Fun"
  },
  {
    id: 4,
    name: "Gujarat Package",
    image: "/posters/Gujarat_Package.jpg",
    alt: "Gujarat Travel Package - Rich Culture and Heritage"
  },
  {
    id: 5,
    name: "Odisha Package",
    image: "/posters/Odisha_Package.jpg",
    alt: "Odisha Travel Package - Temple State of India"
  },
  {
    id: 6,
    name: "Thailand Package",
    image: "/posters/Thailand_Package.jpg",
    alt: "Thailand Travel Package - Land of Smiles"
  },
  {
    id: 7,
    name: "Vietnam Package",
    image: "/posters/Vietnam_Package.jpg",
    alt: "Vietnam Travel Package - Historic Beauty and Culture"
  }
]

interface PosterCarouselProps {
  isOpen: boolean
  onClose: () => void
  autoSlide?: boolean
  slideInterval?: number
}

export default function PosterCarousel({ 
  isOpen, 
  onClose, 
  autoSlide = true, 
  slideInterval = 4000 
}: PosterCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    if (!isOpen || !autoSlide) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === posters.length - 1 ? 0 : prevIndex + 1
      )
    }, slideInterval)

    return () => clearInterval(interval)
  }, [isOpen, autoSlide, slideInterval])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === posters.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? posters.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0 overflow-hidden poster-carousel-overlay welcome-popup-content">
        {/* Close button */}
        <DialogClose className="absolute top-4 right-4 z-10 poster-carousel-nav-button text-white rounded-full p-2 transition-colors">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="relative w-full h-full">
          {/* Main poster display */}
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={posters[currentIndex].image}
                  alt={posters[currentIndex].alt}
                  className="w-full h-full object-contain bg-black poster-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg"
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 poster-carousel-nav-button text-white rounded-full h-12 w-12"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous poster</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 poster-carousel-nav-button text-white rounded-full h-12 w-12"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next poster</span>
          </Button>

          {/* Dots indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {posters.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 poster-carousel-dots ${
                  index === currentIndex 
                    ? "bg-white scale-110 shadow-lg" 
                    : "bg-white/50 hover:bg-white/75"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to poster ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <motion.div
              className="h-full poster-carousel-progress"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: slideInterval / 1000, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Standalone component for regular page usage
export function PosterCarouselSection() {
  return (
    <div className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Travel Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive travel packages designed to give you the best experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posters.map((poster) => (
            <motion.div
              key={poster.id}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-card cursor-pointer poster-grid-item"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={poster.image}
                  alt={poster.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 poster-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg"
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold drop-shadow-lg">{poster.name}</h3>
                <p className="text-sm text-white/80 drop-shadow-md">Click to learn more</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
