"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const images = [
  {
    src: "/International/Africa/pic1.webp",
    alt: "Beautiful African Safari Adventure - Adbhut Global Travel",
    webp: "/International/Africa/pic1.webp",
    avif: "/International/Africa/pic1.jpg"
  },
  {
    src: "/International/Baku/pic2.webp",
    alt: "Stunning Baku City Views - International Travel Packages",
    webp: "/International/Baku/pic2.webp",
    avif: "/International/Baku/pic2.jpg"
  },
  {
    src: "/International/Malaysia/pic3.webp",
    alt: "Malaysia Twin Towers - Southeast Asia Tours",
    webp: "/International/Malaysia/pic3.webp",
    avif: "/International/Malaysia/pic3.jpg"
  },
  {
    src: "/International/Sri_Lanka/pic4.webp",
    alt: "Sri Lanka Beach Paradise - Tropical Holiday Packages",
    webp: "/International/Sri_Lanka/pic4.webp",
    avif: "/International/Sri_Lanka/pic4.jpg"
  },
  {
    src: "/International/Dubai/pic5.webp",
    alt: "Dubai Modern Architecture - Middle East Travel Experience",
    webp: "/International/Dubai/pic5.webp",
    avif: "/International/Dubai/pic5.jpg"
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preload the first image
    const firstImage = document.createElement('img')
    firstImage.src = images[0].src
    firstImage.onload = () => setIsLoaded(true)

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000) // Increased to 5 seconds for better UX

    return () => clearInterval(interval)
  }, [])

  // Preload next image
  useEffect(() => {
    const nextIndex = (current + 1) % images.length
    const nextImage = document.createElement('img')
    nextImage.src = images[nextIndex].src
  }, [current])

  return (
    <section className="hero-section relative w-full h-screen overflow-hidden" role="banner">
      {/* Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[current].src}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[current].src}
              alt={images[current].alt}
              priority={current === 0}
              quality={current === 0 ? 95 : 85}
              fill
              sizes="100vw"
              className="object-cover w-full h-full"
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Optimized Overlay */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Content */}
      <div className="hero-content container mx-auto px-4 relative z-20 h-full flex flex-col justify-center items-center text-center text-white">
        <motion.h1
          className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Best Travel Packages & Tour Services
        </motion.h1>
        <motion.p
          className="hero-description text-lg md:text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover the world's most breathtaking destinations with Adbhut Global Tour and Travel Services. From international tours to domestic getaways, we create unforgettable travel experiences tailored just for you.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/packages" prefetch={true}>
            <Button
              size="lg"
              className="btn btn-primary bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View Travel Packages
            </Button>
          </Link>
          <Link href="/contact" prefetch={true}>
            <Button
              size="lg"
              variant="outline"
              className="btn btn-outline hero-outline-btn border-2 border-white/80 text-white bg-transparent backdrop-blur-sm hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </Button>
          </Link>
        </motion.div>

        {/* Hero navigation indicators - responsive */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              className={`rounded-full transition-all duration-300 backdrop-blur-sm ${index === current
                  ? 'bg-white shadow-md scale-110 w-2.5 h-2.5 sm:w-3 sm:h-3'
                  : 'bg-white/60 hover:bg-white/80 w-2 h-2 sm:w-2.5 sm:h-2.5'
                }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
