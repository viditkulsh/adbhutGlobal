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
  image: string
  alt: string
  title: string
  location: string
  packageId: number
}

const posters: Poster[] = [
  {
    id: 1,
    image: "/posters/Bali_Package.jpg",
    alt: "Bali Paradise Escape - Luxury Indonesia Travel Package",
    title: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    packageId: 1
  },
  {
    id: 2,
    image: "/posters/Dubai_Package.jpg",
    alt: "Dubai Desert Safari - Premium UAE Experience",
    title: "Dubai Desert Safari",
    location: "Dubai, UAE",
    packageId: 2
  },
  {
    id: 3,
    image: "/posters/Thailand_Package.jpg",
    alt: "Thailand Adventure - Exotic Southeast Asia Tour",
    title: "Thailand Adventure",
    location: "Bangkok & Phuket, Thailand",
    packageId: 3
  },
  {
    id: 4,
    image: "/posters/Vietnam_Package.jpg",
    alt: "Vietnam Discovery - Cultural Heritage Journey",
    title: "Vietnam Discovery",
    location: "Ho Chi Minh & Hanoi, Vietnam",
    packageId: 4
  },
  {
    id: 5,
    image: "/posters/Goa_Package.jpg",
    alt: "Goa Beach Paradise - India Coastal Getaway",
    title: "Goa Beach Paradise",
    location: "Goa, India",
    packageId: 5
  },
  {
    id: 6,
    image: "/posters/Gujarat_Package.jpg",
    alt: "Gujarat Heritage Trail - Cultural India Experience",
    title: "Gujarat Heritage Trail",
    location: "Ahmedabad & Rajkot, Gujarat",
    packageId: 6
  },
  {
    id: 7,
    image: "/posters/Odisha_Package.jpg",
    alt: "Odisha Temple Tour - Spiritual India Journey",
    title: "Odisha Temple Tour",
    location: "Bhubaneswar & Puri, Odisha",
    packageId: 7
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
  slideInterval = 3000
}: PosterCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({})

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

  const handlePosterClick = () => {
    const currentPoster = posters[currentIndex]

    // Close the popup first
    onClose()

    // Create URL with pre-filled form data for the specific destination
    const contactUrl = new URL('/contact', window.location.origin)
    contactUrl.searchParams.set('destination', currentPoster.title)
    contactUrl.searchParams.set('location', currentPoster.location)
    contactUrl.searchParams.set('subject', `Inquiry about ${currentPoster.title}`)
    contactUrl.searchParams.set('message', `I am interested in the ${currentPoster.title} package to ${currentPoster.location}. Please provide more details about pricing, itinerary, and availability.`)

    // Redirect to contact form with pre-filled data
    window.location.href = contactUrl.toString()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[50vw] w-[50vw] h-auto p-0 overflow-hidden bg-transparent border-0 shadow-none welcome-popup-content">
        <DialogTitle className="sr-only">
          Adbhut Global Travel Packages - Discover Our Premium Travel Destinations
        </DialogTitle>

        {/* Close button */}
        <DialogClose className="absolute top-2 right-2 z-30 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="relative">
          {/* Main poster display */}
          <div className="relative overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative cursor-pointer"
                onClick={handlePosterClick}
              >
                <div className="relative rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
                  <img
                    src={posters[currentIndex].image}
                    alt={posters[currentIndex].alt}
                    className="w-full h-[60vh] object-cover"
                    onError={(e) => {
                      console.error(`Failed to load image: ${posters[currentIndex].image}`)
                      setImageErrors(prev => ({ ...prev, [currentIndex]: true }))
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                    onLoad={() => {
                      setLoadedImages(prev => ({ ...prev, [currentIndex]: true }))
                    }}
                  />

                  {/* Loading indicator */}
                  {!loadedImages[currentIndex] && !imageErrors[currentIndex] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    </div>
                  )}

                  {/* Package info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <h3 className="text-white font-semibold text-sm">
                      {posters[currentIndex].title}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {posters[currentIndex].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-0 shadow-lg h-10 w-10 p-0 rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous poster</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-0 shadow-lg h-10 w-10 p-0 rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next poster</span>
            </Button>
          </div>

          {/* Elegant progress indicators */}
          <div className="flex justify-center mt-4 space-x-3">
            {posters.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-white shadow-lg scale-125'
                  : 'bg-white/60 hover:bg-white/80'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${posters[index].title}`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
