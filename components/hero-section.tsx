"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"

const images = [
  {
    src: "/International/Africa/pic1.jpg",
    alt: "Beautiful African Safari Adventure - Adbhut Global Travel"
  },
  {
    src: "/International/Baku/pic2.jpg",
    alt: "Stunning Baku City Views - International Travel Packages"
  },
  {
    src: "/International/Malaysia/pic3.jpg",
    alt: "Malaysia Twin Towers - Southeast Asia Tours"
  },
  {
    src: "/International/Sri_Lanka/pic4.jpg",
    alt: "Sri Lanka Beach Paradise - Tropical Holiday Packages"
  },
  {
    src: "/International/Dubai/pic5.jpg",
    alt: "Dubai Modern Architecture - Middle East Travel Experience"
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000) // change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden" role="banner">
      {/* Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current].src}
            src={images[current].src}
            alt={images[current].alt}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="w-full h-full object-cover absolute inset-0"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center items-center text-center text-white">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Best Travel Packages & Flight Booking Services
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the world's most breathtaking destinations with Adbhut Global Tour and Travel Services. From international tours to domestic getaways, we create unforgettable travel experiences tailored just for you.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/packages">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Explore Travel Packages
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
