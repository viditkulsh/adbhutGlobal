"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Download, Share2, Camera, MapPin, Calendar, Copy, Play, Film, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

// Define media item type
interface MediaItem {
  id: number
  type: 'image' | 'video'
  src: string
  thumbnail?: string
  alt: string
  category: string
  location: string
  locationUrl?: string
  date: string
}

// Video Thumbnail Component that extracts first frame
const VideoThumbnail: React.FC<{
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  onLoad?: () => void
}> = ({ src, alt, className, priority = false, sizes, onLoad }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current

    if (!video || !canvas) return

    const extractFrame = () => {
      try {
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas dimensions to video dimensions
        canvas.width = video.videoWidth || 640
        canvas.height = video.videoHeight || 480

        // Draw the current frame to canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

        // Convert canvas to blob URL
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            setThumbnailUrl(url)
            setIsLoading(false)
            onLoad?.()
          }
        }, 'image/jpeg', 0.8)
      } catch (error) {
        console.error('Error extracting video frame:', error)
        setIsLoading(false)
      }
    }

    const handleLoadedData = () => {
      video.currentTime = 0.1 // Seek to a small time to ensure frame is loaded
    }

    const handleSeeked = () => {
      extractFrame()
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('seeked', handleSeeked)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('seeked', handleSeeked)
      if (thumbnailUrl) {
        URL.revokeObjectURL(thumbnailUrl)
      }
    }
  }, [src, thumbnailUrl, onLoad])

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        muted
        style={{ display: 'none' }}
        crossOrigin="anonymous"
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {thumbnailUrl && (
        <Image
          src={thumbnailUrl}
          alt={alt}
          fill
          className={className}
          priority={priority}
          sizes={sizes}
          unoptimized // Since we're using blob URLs
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      )}
      {isLoading && (
        <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
          <Film className="h-8 w-8 text-gray-400" />
        </div>
      )}
    </>
  )
}

// Generate array of all gallery media (images and videos)
const generateGalleryMedia = (): MediaItem[] => {
  const media: MediaItem[] = []
  
  // Add all numbered images from 2 to 79 (excluding 78 which seems to be missing)
  for (let i = 2; i <= 79; i++) {
    if (i !== 78) { // Skip missing image
      media.push({
        id: i,
        type: 'image',
        src: `/Gallery/IMG-20250711-WA00${i.toString().padStart(2, '0')}.jpg`,
        alt: `Travel Experience ${i - 1}`,
        category: i <= 20 ? 'domestic' : i <= 40 ? 'domestic' : i <= 60 ? 'corporate' : 'adventure',
        location: i <= 20 ? 'Domestic Tours' : i <= 40 ? 'Domestic Adventures' : i <= 60 ? 'Business Events' : 'Adventure Tours',
        date: '2025'
      })
    }
  }
  
  // Add videos from July 11, 2025
  for (let i = 1; i <= 9; i++) {
    media.push({
      id: 1000 + i,
      type: 'video',
      src: `/Gallery/videos/VID-20250711-WA000${i}.mp4`,
      alt: `Travel Video ${i}`,
      category: i <= 3 ? 'domestic' : i <= 6 ? 'corporate' : 'adventure',
      location: i <= 3 ? 'Domestic Tours' : i <= 6 ? 'Business Events' : 'Adventure Tours',
      date: '2025'
    })
  }

  // Add the two additional images from July 12
  media.push({
    id: 80,
    type: 'image',
    src: '/Gallery/IMG-20250712-WA0001.jpg',
    alt: 'Travel Experience 79',
    category: 'recent',
    location: 'Recent Tours',
    date: '2025'
  })
  
  media.push({
    id: 81,
    type: 'image',
    src: '/Gallery/IMG-20250712-WA0002.jpg',
    alt: 'Travel Experience 80',
    category: 'recent',
    location: 'Recent Tours',
    date: '2025'
  })
  
  // Add new images from October 11, 2025 - Jim Corbett Business Trip
  for (let i = 2; i <= 25; i++) {
    media.push({
      id: 81 + i,
      type: 'image',
      src: `/Gallery/IMG-20251011-WA00${i.toString().padStart(2, '0')}.jpg`,
      alt: `Jim Corbett Business Trip ${i - 1}`,
      category: 'corporate',
      location: 'Jim Corbett National Park',
      locationUrl: 'https://maps.app.goo.gl/DhUmg8XkFA8juXpy5',
      date: 'October 2025'
    })
  }

  // Add videos from October 11, 2025 - Jim Corbett Business Trip
  for (let i = 1; i <= 7; i++) {
    media.push({
      id: 2000 + i,
      type: 'video',
      src: `/Gallery/videos/VID-20251011-WA000${i}.mp4`,
      alt: `Jim Corbett Business Trip Video ${i}`,
      category: 'corporate',
      location: 'Jim Corbett National Park',
      locationUrl: 'https://maps.app.goo.gl/DhUmg8XkFA8juXpy5',
      date: 'October 2025'
    })
  }

  return media
}

const galleryMedia = generateGalleryMedia()

// Lazy Loading Hook
const useLazyLoading = (threshold = 0.1) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver>(null)

  const registerElement = useCallback((element: HTMLElement | null, itemId: number) => {
    if (!element) return

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = parseInt(entry.target.getAttribute('data-item-id') || '0')
              setVisibleItems(prev => new Set([...prev, id]))
              observerRef.current?.unobserve(entry.target)
            }
          })
        },
        { threshold, rootMargin: '50px' }
      )
    }

    element.setAttribute('data-item-id', itemId.toString())
    observerRef.current.observe(element)
  }, [threshold])

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return { visibleItems, registerElement }
}

// Optimized Media Item Component
const MediaItem: React.FC<{
  item: MediaItem
  index: number
  isVisible: boolean
  onItemClick: (item: MediaItem, index: number) => void
  onRegister: (element: HTMLElement | null, itemId: number) => void
}> = React.memo(({ item, index, isVisible, onItemClick, onRegister }) => {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    onRegister(itemRef.current, item.id)
  }, [item.id, onRegister])

  return (
    <motion.div
      ref={itemRef}
      key={`${item.type}-${item.id}`}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.02 }}
      className="break-inside-avoid mb-4"
    >
      <Card
        className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        onClick={() => onItemClick(item, index)}
      >
        <CardContent className="p-0 relative">
          <div className="relative overflow-hidden aspect-[4/3]">
            {isVisible ? (
              item.type === 'video' ? (
                <VideoThumbnail
                  src={item.src}
                  alt={item.alt}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 4}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={index < 4}
                  loading={index < 4 ? "eager" : "lazy"}
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              )
            ) : (
              <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                {item.type === 'video' ? (
                  <Film className="h-8 w-8 text-gray-400" />
                ) : (
                  <ImageIcon className="h-8 w-8 text-gray-400" />
                )}
              </div>
            )}

            {/* Video Play Button Overlay */}
            {item.type === 'video' && isVisible && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-6 w-6 text-black fill-black" />
                </div>
              </div>
            )}

            {/* Type Badge */}
            {isVisible && (
              <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-md px-2 py-1 text-white text-xs font-medium">
                {item.type === 'video' ? (
                  <div className="flex items-center gap-1">
                    <Film className="h-3 w-3" />
                    Video
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <ImageIcon className="h-3 w-3" />
                    Photo
                  </div>
                )}
              </div>
            )}

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            {isVisible && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <p className="text-white text-sm font-medium">{item.location}</p>
                <p className="text-white/80 text-xs">{item.date}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
})

export default function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [mediaDimensions, setMediaDimensions] = useState<{ width: number, height: number } | null>(null)
  const [filterType, setFilterType] = useState<'all' | 'images' | 'videos'>('all')

  // Use lazy loading hook
  const { visibleItems, registerElement } = useLazyLoading()

  // Filter media based on selected type
  const filteredMedia = galleryMedia.filter(item => {
    if (filterType === 'all') return true
    if (filterType === 'images') return item.type === 'image'
    if (filterType === 'videos') return item.type === 'video'
    return true
  })

  // Get counts for display
  const totalImages = galleryMedia.filter(item => item.type === 'image').length
  const totalVideos = galleryMedia.filter(item => item.type === 'video').length

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Handle URL parameters for direct media linking
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const mediaId = urlParams.get('media') || urlParams.get('photo') // Support legacy photo param
    
    if (mediaId) {
      const mediaIdNum = parseInt(mediaId)
      const media = galleryMedia.find(item => item.id === mediaIdNum)
      if (media) {
        const index = filteredMedia.findIndex(item => item.id === mediaIdNum)
        setSelectedMedia(media)
        setLightboxIndex(index >= 0 ? index : 0)
      }
    }
  }, [filteredMedia])

  const openLightbox = (media: MediaItem, index: number) => {
    setSelectedMedia(media)
    setLightboxIndex(index)
    setMediaDimensions(null) // Reset dimensions

    // Update URL with media ID
    const url = new URL(window.location.href)
    url.searchParams.set('media', media.id.toString())
    window.history.pushState({}, '', url.toString())
  }

  const handleMediaLoad = (event: React.SyntheticEvent<HTMLImageElement | HTMLVideoElement>) => {
    const element = event.currentTarget
    if (element instanceof HTMLImageElement) {
      setMediaDimensions({
        width: element.naturalWidth,
        height: element.naturalHeight
      })
    } else if (element instanceof HTMLVideoElement) {
      setMediaDimensions({
        width: element.videoWidth,
        height: element.videoHeight
      })
    }
  }

  const closeLightbox = () => {
    setSelectedMedia(null)
    
    // Remove media ID from URL
    const url = new URL(window.location.href)
    url.searchParams.delete('media')
    url.searchParams.delete('photo') // Clean up legacy param
    window.history.pushState({}, '', url.toString())
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const currentIndex = filteredMedia.findIndex(item => item.id === selectedMedia?.id)
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
    
    if (newIndex >= filteredMedia.length) newIndex = 0
    if (newIndex < 0) newIndex = filteredMedia.length - 1
    
    const newMedia = filteredMedia[newIndex]
    setSelectedMedia(newMedia)
    setLightboxIndex(newIndex)
    setMediaDimensions(null) // Reset dimensions for new media

    // Update URL with new media ID
    const url = new URL(window.location.href)
    url.searchParams.set('media', newMedia.id.toString())
    window.history.pushState({}, '', url.toString())
  }

  const handleCopyLink = async () => {
    if (!selectedMedia) return
    
    const shareUrl = `${window.location.origin}${window.location.pathname}?media=${selectedMedia.id}`
    
    try {
      await navigator.clipboard.writeText(shareUrl)
      alert(`${selectedMedia.type === 'video' ? 'Video' : 'Photo'} link copied to clipboard!`)
    } catch (error) {
      console.error('Clipboard error:', error)
    }
  }

  const handleShare = async () => {
    if (!selectedMedia) return
    
    const shareUrl = `${window.location.origin}${window.location.pathname}?media=${selectedMedia.id}`
    const shareData = {
      title: `${selectedMedia.alt} - Adbhut Global Gallery`,
      text: `Check out this amazing travel ${selectedMedia.type}: ${selectedMedia.alt} from ${selectedMedia.location}`,
      url: shareUrl,
    }
    
    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(shareUrl)
        alert(`${selectedMedia.type === 'video' ? 'Video' : 'Photo'} link copied to clipboard!`)
      }
    } catch (error) {
      console.error('Error sharing:', error)
      try {
        await navigator.clipboard.writeText(shareUrl)
        alert(`${selectedMedia.type === 'video' ? 'Video' : 'Photo'} link copied to clipboard!`)
      } catch (clipboardError) {
        console.error('Clipboard error:', clipboardError)
      }
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
              <div className="flex items-center justify-center gap-4 text-sm md:text-base flex-wrap">
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  <span>{totalImages} Photos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Film className="h-5 w-5" />
                  <span>{totalVideos} Videos</span>
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

        {/* Filter Controls */}
        <section className="py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="flex bg-muted rounded-lg p-1 gap-1">
                <Button
                  variant={filterType === 'all' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setFilterType('all')}
                  className="text-sm"
                >
                  All ({galleryMedia.length})
                </Button>
                <Button
                  variant={filterType === 'images' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setFilterType('images')}
                  className="text-sm"
                >
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Photos ({totalImages})
                </Button>
                <Button
                  variant={filterType === 'videos' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setFilterType('videos')}
                  className="text-sm"
                >
                  <Film className="h-4 w-4 mr-2" />
                  Videos ({totalVideos})
                </Button>
              </div>
            </div>
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
                {filteredMedia.map((item, index) => (
                  <MediaItem
                    key={`${item.type}-${item.id}`}
                    item={item}
                    index={index}
                    isVisible={visibleItems.has(item.id)}
                    onItemClick={openLightbox}
                    onRegister={registerElement}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredMedia.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="flex justify-center mb-4">
                  {filterType === 'images' ? (
                    <ImageIcon className="h-16 w-16 text-muted-foreground" />
                  ) : filterType === 'videos' ? (
                    <Film className="h-16 w-16 text-muted-foreground" />
                  ) : (
                    <Camera className="h-16 w-16 text-muted-foreground" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  No {filterType === 'all' ? 'media' : filterType} found
                </h3>
                <p className="text-muted-foreground">
                  Unable to load {filterType === 'all' ? 'gallery content' : filterType}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full h-full max-w-7xl flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                  onClick={closeLightbox}
                >
                  <X className="h-4 w-4" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                  onClick={() => navigateLightbox('prev')}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                  onClick={() => navigateLightbox('next')}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Media Container */}
                <div className="relative w-full h-full flex items-center justify-center pb-20 sm:pb-24">
                  <div className="relative max-w-full max-h-full flex items-center justify-center">
                    {selectedMedia.type === 'image' ? (
                      <Image
                        src={selectedMedia.src}
                        alt={selectedMedia.alt}
                        width={1200}
                        height={800}
                        className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                        style={{
                          maxWidth: 'calc(100vw - 16px)',
                          maxHeight: 'calc(100vh - 140px)',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                        onLoad={handleMediaLoad}
                        priority={true}
                        quality={95}
                        sizes="100vw"
                      />
                    ) : (
                      <video
                        src={selectedMedia.src}
                        controls
                        autoPlay={false}
                        className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                        style={{
                          maxWidth: 'calc(100vw - 16px)',
                          maxHeight: 'calc(100vh - 140px)',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                        onLoadedMetadata={handleMediaLoad}
                        preload="metadata"
                        playsInline
                        muted
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                </div>

                {/* Media Info */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {selectedMedia.type === 'video' ? (
                          <Film className="h-4 w-4 text-white/80" />
                        ) : (
                          <ImageIcon className="h-4 w-4 text-white/80" />
                        )}
                        <h3 className="font-semibold text-sm sm:text-base truncate">{selectedMedia.alt}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-white/80">{selectedMedia.location} • {selectedMedia.date}</p>
                      <p className="text-xs text-white/60">
                        {selectedMedia.type === 'video' ? 'Video' : 'Photo'} ID: {selectedMedia.id}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs sm:text-sm h-8 sm:h-9"
                        onClick={handleCopyLink}
                      >
                        <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">Copy Link</span>
                        <span className="sm:hidden">Copy</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs sm:text-sm h-8 sm:h-9"
                        onClick={handleShare}
                      >
                        <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">Share</span>
                        <span className="sm:hidden">Share</span>
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
