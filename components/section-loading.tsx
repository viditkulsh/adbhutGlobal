"use client"

import { useState, useEffect } from "react"

interface SectionLoadingProps {
  section?: 'packages' | 'gallery' | 'services' | 'about' | 'contact' | 'default'
  className?: string
}

const loadingContent = {
  packages: {
    messages: [
      { title: "Loading Great Packages", subtitle: "Curating the world's most amazing destinations..." },
      { title: "Discovering Paradise", subtitle: "Finding perfect getaways across the globe..." },
      { title: "Crafting Adventures", subtitle: "Building unforgettable travel experiences..." }
    ]
  },
  gallery: {
    messages: [
      { title: "Loading Wonderful Memories", subtitle: "Preparing breathtaking travel moments..." },
      { title: "Capturing Beauty", subtitle: "Loading stunning destination galleries..." },
      { title: "Revealing Adventures", subtitle: "Showcasing incredible travel experiences..." }
    ]
  },
  services: {
    messages: [
      { title: "Loading Our Services", subtitle: "Preparing comprehensive travel solutions..." },
      { title: "Crafting Excellence", subtitle: "Building premium travel services..." },
      { title: "Opening Possibilities", subtitle: "Unlocking world-class travel experiences..." }
    ]
  },
  about: {
    messages: [
      { title: "Our Story Unfolds", subtitle: "Sharing our passion for travel excellence..." },
      { title: "Building Trust", subtitle: "Loading our travel expertise and experience..." },
      { title: "Creating Connections", subtitle: "Preparing our journey of travel excellence..." }
    ]
  },
  contact: {
    messages: [
      { title: "Connecting Dreams", subtitle: "Preparing to plan your perfect journey..." },
      { title: "Opening Conversations", subtitle: "Ready to craft your travel adventure..." },
      { title: "Building Relationships", subtitle: "Connecting you with travel experts..." }
    ]
  },
  default: {
    messages: [
      { title: "Loading Amazing Content", subtitle: "Preparing exceptional travel experiences..." },
      { title: "Opening New Horizons", subtitle: "Unlocking incredible possibilities..." },
      { title: "Crafting Excellence", subtitle: "Building unforgettable moments..." }
    ]
  }
}

export default function SectionLoading({ section = 'default', className = "" }: SectionLoadingProps) {
  const [currentMessage, setCurrentMessage] = useState(0)
  const messages = loadingContent[section].messages

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [messages.length])

  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <div className="text-center max-w-md">
        {/* Loading spinner */}
        <div className="relative mb-6">
          <div className="animate-spin rounded-full h-10 w-10 border-3 border-transparent border-t-blue-600 border-r-purple-500 mx-auto"></div>
          <div className="animate-ping absolute inset-0 rounded-full h-10 w-10 border-2 border-blue-300 mx-auto opacity-20"></div>
        </div>
        
        {/* Animated messages */}
        <div key={currentMessage} className="animate-fade-in-up">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {messages[currentMessage].title}
          </h3>
          <p className="text-gray-600 text-sm">
            {messages[currentMessage].subtitle}
          </p>
        </div>
        
        {/* Progress dots */}
        <div className="flex justify-center space-x-1.5 mt-4">
          {messages.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentMessage 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
