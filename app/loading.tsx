"use client"

import { useEffect, useState } from "react"

const loadingMessages = [
  {
    title: "Loading Great Packages",
    subtitle: "Curating the world's most amazing destinations for you..."
  },
  {
    title: "Loading Wonderful Memories",
    subtitle: "Preparing unforgettable travel experiences..."
  },
  {
    title: "Discovering Paradise",
    subtitle: "Finding perfect destinations across the globe..."
  },
  {
    title: "Crafting Your Journey",
    subtitle: "Building personalized travel adventures..."
  },
  {
    title: "Opening New Horizons",
    subtitle: "Unlocking breathtaking travel possibilities..."
  }
]

export default function Loading() {
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length)
    }, 2000) // Change message every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <div className="text-center max-w-md">
        {/* Loading spinner with pulsing effect */}
        <div className="relative mb-8">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-transparent border-t-blue-600 border-r-purple-500 mx-auto"></div>
          <div className="animate-ping absolute inset-0 rounded-full h-16 w-16 border-4 border-blue-300 mx-auto opacity-20"></div>
        </div>

        {/* Animated loading messages */}
        <div className="h-20 flex items-center justify-center">
          <div key={currentMessage} className="animate-fade-in-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {loadingMessages[currentMessage].title}
            </h2>
            <p className="text-gray-600 text-sm">
              {loadingMessages[currentMessage].subtitle}
            </p>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {loadingMessages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentMessage
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
