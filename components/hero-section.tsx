"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="hero-video-container">
      <video autoPlay muted loop playsInline className="w-full h-full object-cover">
        <source src="/videos/travel-video.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <img
          src="public\hotair_landscape.jpg?height=1080&width=1920"
          alt="Travel destinations"
          className="w-full h-full object-cover"
        />
      </video>
      <div className="hero-overlay"></div>
      <div className="container mx-auto px-4 relative h-full flex flex-col justify-center items-center text-center text-white">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unforgettable Journeys Await You!
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the world's most breathtaking destinations with Adbhut Global Tour and Travel Services. Your dream
          vacation is just a click away.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/packages">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Explore Packages
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

