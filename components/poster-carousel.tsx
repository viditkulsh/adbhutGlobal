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
import { useResponsivePopup } from "@/components/responsive-popup"

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
    image: "/posters/Bali_Package.webp",
    alt: "Bali Paradise Escape - Luxury Indonesia Travel Package",
    title: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    packageId: 1
  },
  {
    id: 2,
    image: "/posters/Dubai_Package.webp",
    alt: "Dubai Desert Safari - Premium UAE Experience",
    title: "Dubai Desert Safari",
    location: "Dubai, UAE",
    packageId: 2
  },
  {
    id: 3,
    image: "/posters/Thailand_Package.webp",
    alt: "Thailand Adventure - Exotic Southeast Asia Tour",
    title: "Thailand Adventure",
    location: "Bangkok & Phuket, Thailand",
    packageId: 3
  },
  {
    id: 4,
    image: "/posters/Vietnam_Package.webp",
    alt: "Vietnam Discovery - Cultural Heritage Journey",
    title: "Vietnam Discovery",
    location: "Ho Chi Minh & Hanoi, Vietnam",
    packageId: 4
  },
  {
    id: 5,
    image: "/posters/Goa_Package.webp",
    alt: "Goa Beach Paradise - India Coastal Getaway",
    title: "Goa Beach Paradise",
    location: "Goa, India",
    packageId: 5
  },
  {
    id: 6,
    image: "/posters/Gujarat_Package.webp",
    alt: "Gujarat Heritage Trail - Cultural India Experience",
    title: "Gujarat Heritage Trail",
    location: "Ahmedabad & Rajkot, Gujarat",
    packageId: 6
  },
  {
    id: 7,
    image: "/posters/Odisha_Package.webp",
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

  // Use responsive popup hook
  const { getImageHeight, getButtonSize, getSpacing, getTextSizes } = useResponsivePopup()

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

  // Get responsive values
  const imageHeight = getImageHeight()
  const buttonConfig = getButtonSize()
  const spacing = getSpacing()
  const textSizes = getTextSizes()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 max-w-none w-screen h-screen border-0 bg-transparent shadow-none overflow-hidden">
        <DialogTitle className="sr-only">
          Adbhut Global Travel Packages - Discover Our Premium Travel Destinations
        </DialogTitle>

        {/* Full screen overlay with transparent gradient blur */}
        <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 backdrop-blur-sm">

          {/* Close button */}
          <DialogClose className="absolute top-4 right-4 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all duration-200 backdrop-blur-sm">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {/* Main poster display - centered */}
          <div className="h-full flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative cursor-pointer"
                  onClick={handlePosterClick}
                >
                  <div className="relative shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 max-h-[85vh] rounded-sm">
                    <img
                      src={posters[currentIndex].image}
                      alt={posters[currentIndex].alt}
                      className="w-full h-auto object-contain max-h-[85vh] rounded-sm"
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
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-2 border-white border-t-transparent mb-2 mx-auto"></div>
                          <p className="text-white text-sm">Loading wonderful memories...</p>
                        </div>
                      </div>
                    )}

                    {/* Package info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                      <h3 className="text-white font-bold text-lg md:text-xl">
                        {posters[currentIndex].title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base">
                        {posters[currentIndex].location}
                      </p>
                      <p className="text-white/70 text-xs mt-1">Click to explore package details</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-0 shadow-lg rounded-full w-12 h-12 p-0 backdrop-blur-sm"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous poster</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-0 shadow-lg rounded-full w-12 h-12 p-0 backdrop-blur-sm"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next poster</span>
              </Button>
            </div>
          </div>

          {/* Progress indicators - consistent desktop sizing */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-3">
            {posters.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 rounded-full backdrop-blur-sm ${index === currentIndex
                  ? 'bg-white shadow-lg scale-125 w-4 h-4'
                  : 'bg-white/60 hover:bg-white/80 w-3 h-3'
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
