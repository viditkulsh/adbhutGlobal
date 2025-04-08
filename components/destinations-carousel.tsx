"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    image: "/International/Bali/UlunDanu.jpg?height=600&width=800",
    price: "price",
  },
  {
    id: 2,
    name: "Tokyo",
    location: "Japan",
    image: "/International/Japan/pic1.webp?height=600&width=800",
    price: "price",
  },
  {
    id: 3,
    name: "Dubai",
    location: "UAE",
    image: "/International/Dubai/pic5.jpg?height=600&width=800",
    price: "price",
  },
  {
    id: 4,
    name: "Paris",
    location: "France",
    image: "/International/Europe/pic4.webp?height=600&width=800",
    price: "price",
  },
  {
    id: 5,
    name: "Goa",
    location: "India",
    image: "/Domestic/Goa/pic1.jpg?height=600&width=800",
    price: "price",
  },
  {
    id: 6,
    name: "Santorini",
    location: "Greece",
    image: "/International/Greece/pic1.webp?height=600&width=800",
    price: "price",
  },
  {
    id: 7,
    name: "New York",
    location: "USA",
    image: "/International/New York/pic1.jpg?height=600&width=800",
    price: "price",
  },
  {
    id: 8,
    name: "Sydney",
    location: "Australia",
    image: "/International/Australia/pic1.jpg?height=600&width=800",
    price: "price",
  },
  {
    id: 9,
    name: "Rome",
    location: "Italy",
    image: "/International/Rome/pic2.avif?height=600&width=800",
    price: "price",
  },
]

export default function DestinationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === destinations.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? destinations.length - 1 : prevIndex - 1))
  }

  const visibleDestinations = () => {
    const itemsPerPage = width < 640 ? 1 : width < 1024 ? 2 : 3
    const items = []

    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % destinations.length
      items.push(destinations[index])
    }

    return items
  }

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our most sought-after destinations and find your next adventure
          </p>
        </div>

        <div className="relative">
          <motion.div ref={carouselRef} className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: -currentIndex * (300 + 24) }} // Card width + gap
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {destinations.map((destination) => (
                <motion.div
                  key={destination.id}
                  className="destination-card min-w-[300px] bg-card rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-bold">{destination.price}</p>
                    </div> */}
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <p className="text-muted-foreground">{destination.location}</p>
                    <Button variant="link" className="mt-2 p-0 h-auto">
                      View Packages
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </div>

        <div className="flex justify-center mt-8">
          {destinations.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

