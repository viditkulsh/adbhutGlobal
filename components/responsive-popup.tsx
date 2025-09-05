'use client'

import React from 'react'
import { useEffect, useState } from 'react'

interface ResponsivePopupProps {
  children: React.ReactNode
  className?: string
}

export function useResponsivePopup() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      setScreenSize({ width, height })
      setIsMobile(width < 640)
      setIsTablet(width >= 640 && width < 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    window.addEventListener('orientationchange', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
      window.removeEventListener('orientationchange', checkScreenSize)
    }
  }, [])

  const getPopupClasses = (baseClasses: string = '') => {
    let classes = baseClasses

    if (isMobile) {
      classes += ' max-w-[95vw] w-[95vw] max-h-[90vh] mx-2 p-3'
    } else if (isTablet) {
      classes += ' max-w-[85vw] w-[85vw] max-h-[85vh] mx-4 p-4'
    } else {
      classes += ' max-w-lg w-auto max-h-[80vh] p-6'
    }

    return classes
  }

  const getImageHeight = () => {
    if (isMobile) {
      return screenSize.height < screenSize.width ? '45vh' : '50vh' // landscape vs portrait
    } else if (isTablet) {
      return '55vh'
    }
    return '60vh'
  }

  const getButtonSize = () => {
    if (isMobile) {
      return { size: 'sm', iconSize: 'h-4 w-4', padding: 'h-8 w-8' }
    }
    return { size: 'default', iconSize: 'h-5 w-5', padding: 'h-10 w-10' }
  }

  const getSpacing = () => {
    if (isMobile) {
      return { padding: 'p-2', margin: 'mt-3 space-x-2', close: 'top-1 right-1' }
    } else if (isTablet) {
      return { padding: 'p-3', margin: 'mt-3 space-x-2', close: 'top-2 right-2' }
    }
    return { padding: 'p-4', margin: 'mt-4 space-x-3', close: 'top-2 right-2' }
  }

  const getTextSizes = () => {
    if (isMobile) {
      return {
        title: 'text-lg',
        subtitle: 'text-sm',
        body: 'text-sm',
        caption: 'text-xs'
      }
    } else if (isTablet) {
      return {
        title: 'text-xl',
        subtitle: 'text-base',
        body: 'text-base',
        caption: 'text-xs'
      }
    }
    return {
      title: 'text-2xl',
      subtitle: 'text-lg',
      body: 'text-base',
      caption: 'text-sm'
    }
  }

  return {
    isMobile,
    isTablet,
    screenSize,
    getPopupClasses,
    getImageHeight,
    getButtonSize,
    getSpacing,
    getTextSizes
  }
}

export default function ResponsivePopup({ children, className = '' }: ResponsivePopupProps) {
  const { getPopupClasses } = useResponsivePopup()

  return (
    <div className={getPopupClasses(className)}>
      {children}
    </div>
  )
}
