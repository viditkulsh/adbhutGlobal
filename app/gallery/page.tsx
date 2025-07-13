"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Download, Share2, Camera, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Generate array of all gallery images
const generateGalleryImages = () => {
  const images = []
  
  // Add all numbered images from 2 to 79 (excluding 78 which seems to be missing)
  for (let i = 2; i <= 79; i++) {
    if (i !== 78) { // Skip missing image
      images.push({
        id: i,
        src: `/Gallery/IMG-20250711-WA00${i.toString().padStart(2, '0')}.jpg`,
        alt: `Travel Experience ${i - 1}`,
        category: i <= 20 ? 'domestic' : i <= 40 ? 'international' : i <= 60 ? 'corporate' : 'adventure',
        location: i <= 20 ? 'India' : i <= 40 ? 'International' : i <= 60 ? 'Business Events' : 'Adventure Tours',
        date: '2025'
      })
    }
  }
  
  // Add the two additional images
  images.push({
    id: 80,
    src: '/Gallery/IMG-20250712-WA0001.jpg',
    alt: 'Travel Experience 79',
    category: 'recent',
    location: 'Recent Tours',
    date: '2025'
  })
  
  images.push({
    id: 81,
    src: '/Gallery/IMG-20250712-WA0002.jpg',
    alt: 'Travel Experience 80',
    category: 'recent',
    location: 'Recent Tours',
    date: '2025'
  })
  
  return images
}

const galleryImages = generateGalleryImages()

const categories = [
  { id: 'all', label: 'All Photos', count: galleryImages.length },
  { id: 'domestic', label: 'Domestic Tours', count: galleryImages.filter(img => img.category === 'domestic').length },
  { id: 'international', label: 'International Tours', count: galleryImages.filter(img => img.category === 'international').length },
  { id: 'corporate', label: 'Corporate Events', count: galleryImages.filter(img => img.category === 'corporate').length },
  { id: 'adventure', label: 'Adventure Tours', count: galleryImages.filter(img => img.category === 'adventure').length },
  { id: 'recent', label: 'Recent Tours', count: galleryImages.filter(img => img.category === 'recent').length },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [filteredImages, setFilteredImages] = useState(galleryImages)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(galleryImages)
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory))
    }
  }, [selectedCategory])

  const openLightbox = (image: any, index: number) => {
    setSelectedImage(image)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id)
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
    
    if (newIndex >= filteredImages.length) newIndex = 0
    if (newIndex < 0) newIndex = filteredImages.length - 1
    
    setSelectedImage(filteredImages[newIndex])
    setLightboxIndex(newIndex)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Adbhut Global Gallery',
        text: 'Check out this amazing travel experience!',
        url: window.location.href,
      })
    }
  }

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading gallery...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel Gallery</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
                Discover breathtaking moments and unforgettable experiences from our travel adventures
              </p>
              <div className="flex items-center justify-center gap-4 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  <span>{galleryImages.length} Photos</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Multiple Destinations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Recent Adventures</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Filter Section */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 md:gap-4"
            >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="relative"
                >
                  {category.label}
                  <Badge 
                    variant="secondary" 
                    className="ml-2 text-xs"
                  >
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div 
              layout
              className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
            >
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="break-inside-avoid mb-4"
                  >
                    <Card 
                      className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      onClick={() => openLightbox(image, index)}
                    >
                      <CardContent className="p-0 relative">
                        <div className="relative overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Badge variant="secondary" className="text-xs">
                              {image.category}
                            </Badge>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                            <p className="text-white text-sm font-medium">{image.location}</p>
                            <p className="text-white/80 text-xs">{image.date}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No photos found</h3>
                <p className="text-muted-foreground">Try selecting a different category</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={closeLightbox}
                >
                  <X className="h-4 w-4" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => navigateLightbox('prev')}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => navigateLightbox('next')}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Image */}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{selectedImage.alt}</h3>
                      <p className="text-sm text-white/80">{selectedImage.location} • {selectedImage.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        onClick={handleShare}
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
