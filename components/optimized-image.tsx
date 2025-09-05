'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  loading?: 'lazy' | 'eager'
  quality?: number
  fill?: boolean
  style?: React.CSSProperties
  onLoad?: () => void
  onError?: () => void
}

// Generate a simple blur placeholder
const generateBlurDataURL = (width: number, height: number): string => {
  // Only run on client side
  if (typeof window === 'undefined') {
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA0MCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZjNmNGY2Ii8+Cjwvc3ZnPgo='
  }

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (ctx) {
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#f3f4f6')
    gradient.addColorStop(1, '#e5e7eb')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }
  return canvas.toDataURL()
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder = 'empty',
  blurDataURL,
  loading = 'lazy',
  quality = 85,
  fill = false,
  style,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the image enters the viewport
        threshold: 0.1,
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority, isInView])

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  // Generate blur data URL if not provided
  const blurData = blurDataURL || (typeof window !== 'undefined' ? generateBlurDataURL(40, 30) : undefined)

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {isInView && !hasError ? (
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={blurData}
          loading={priority ? 'eager' : loading}
          quality={quality}
          className={`
            transition-all duration-700 ease-in-out
            ${isLoading
            ? 'scale-105 blur-sm opacity-0'
            : 'scale-100 blur-0 opacity-100'
            }
            ${fill ? 'object-cover' : ''}
          `}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            objectFit: 'cover',
            width: fill ? '100%' : undefined,
            height: fill ? '100%' : undefined,
          }}
        />
      ) : !hasError ? (
        // Loading placeholder
        <div
          className={`w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center ${isLoading ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ aspectRatio: `${width}/${height}` }}
          aria-label="Loading image"
        >
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        // Error state with better fallback
        <div
          className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 text-sm border border-gray-200"
          style={{ aspectRatio: `${width}/${height}` }}
        >
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xs">Image unavailable</span>
          </div>
        </div>
      )}
    </div>
  )
}
