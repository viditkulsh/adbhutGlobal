"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  id: number
  name: string
  location: string
  avatar: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Our trip to Bali was absolutely perfect! Adbhut Global took care of every detail, from flights to accommodations to local tours. The itinerary was well-balanced with both adventure and relaxation. I can't wait to book my next vacation with them!",
  },
  {
    id: 2,
    name: "Raj Patel",
    location: "London, UK",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The Japan tour package exceeded all our expectations. The guides were knowledgeable, the hotels were excellent, and the cultural experiences were authentic. Adbhut Global made our honeymoon truly special and memorable.",
  },
  {
    id: 3,
    name: "Maria Garcia",
    location: "Madrid, Spain",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "I've used many travel agencies before, but Adbhut Global stands out for their attention to detail and personalized service. Our family trip to Dubai was perfectly organized, and they were quick to assist when we needed to make last-minute changes.",
  },
]

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from travelers who have experienced our services
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-lg shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <Avatar className="h-20 w-20 border-4 border-primary">
                    <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].name} />
                    <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[current].rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mb-6 text-lg italic">"{testimonials[current].text}"</blockquote>
                <div>
                  <p className="font-bold text-lg">{testimonials[current].name}</p>
                  <p className="text-muted-foreground">{testimonials[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={prev}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={next}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${index === current ? "bg-primary" : "bg-muted"}`}
              onClick={() => {
                setAutoplay(false)
                setCurrent(index)
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

