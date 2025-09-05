"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import OptimizedImage from "@/components/optimized-image"
import { useResponsivePopup } from "@/components/responsive-popup"

interface Destination {
  id: number
  name: string
  location: string
  image: string
  price: string
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Bali",
    location: "Indonesia",
    image: "/International/Bali/UlunDanu.webp",
    price: "price",
  },
  {
    id: 2,
    name: "Tokyo",
    location: "Japan",
    image: "/International/Japan/pic1.webp",
    price: "price",
  },
  {
    id: 3,
    name: "Dubai",
    location: "UAE", 
    image: "/International/Dubai/pic5.webp",
    price: "price",
  },
  {
    id: 4,
    name: "Paris",
    location: "France",
    image: "/International/Europe/pic4.webp",
    price: "price",
  },
  {
    id: 5,
    name: "Goa",
    location: "India",
    image: "/Domestic/Goa/pic1.webp",
    price: "price",
  },
  {
    id: 6,
    name: "Santorini",
    location: "Greece",
    image: "/International/Greece/pic1.webp",
    price: "price",
  },
  {
    id: 7,
    name: "New York",
    location: "USA",
    image: "/International/New York/pic1.webp",
    price: "price",
  },
  {
    id: 8,
    name: "Sydney",
    location: "Australia",
    image: "/International/Australia/pic1.webp",
    price: "price",
  },
  {
    id: 9,
    name: "Malaysia",
    location: "Malaysia",
    image: "/International/Malaysia/pic3.webp",
    price: "price",
  },
]

export default function DestinationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Use responsive popup hook for consistent button sizing
  const { getButtonSize, getTextSizes } = useResponsivePopup()

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === destinations.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? destinations.length - 1 : prevIndex - 1))
  }

  const getVisibleCount = () => {
    if (width < 640) return 1
    if (width < 1024) return 2
    return 3
  }

  return (
    <div ref={sectionRef} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our most sought-after destinations and find your next adventure
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            ref={carouselRef}
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{ x: -currentIndex * (280 + 24) }} // Adjusted card width + gap
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {destinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  className="destination-card min-w-[280px] sm:min-w-[300px] bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 50
                  }}
                  transition={{
                    duration: 0.6,
                    delay: isVisible ? index * 0.1 : 0
                  }}
                  whileHover={{ scale: 1.03, y: -8 }}
                >
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <div className="relative overflow-hidden w-full h-full transition-transform duration-500 hover:scale-110">
                      <OptimizedImage
                        src={destination.image}
                        alt={`${destination.name}, ${destination.location} - Travel Package`}
                        width={300}
                        height={208}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 3}
                      />
                    </div>
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{destination.name}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-3">{destination.location}</p>
                    <Button
                      variant="link"
                      className="mt-2 p-0 h-auto text-primary hover:text-primary/80 font-medium"
                      asChild
                    >
                      <Link
                        href={`/packages?destination=${encodeURIComponent(destination.name)}`}
                        prefetch={false}
                      >
                        View Packages →
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <Button
            variant="outline"
            size="icon"
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm ${getButtonSize().size}`}
            onClick={prevSlide}
            aria-label="Previous destinations"
          >
            <ChevronLeft className={getButtonSize().iconSize} />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm ${getButtonSize().size}`}
            onClick={nextSlide}
            aria-label="Next destinations"
          >
            <ChevronRight className={getButtonSize().iconSize} />
          </Button>
        </div>

        <div className="flex justify-center mt-8">
          {destinations.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${index === currentIndex ? "bg-primary scale-125" : "bg-muted hover:bg-muted-foreground/50"
                }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

