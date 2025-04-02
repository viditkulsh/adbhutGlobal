"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your API
      setSubmitted(true)
      setEmail("")

      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }
  }

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Travel Deals</h2>
            <p className="mb-8">
              Subscribe to our newsletter and be the first to know about exclusive offers, new destinations, and travel
              tips.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center space-x-2 text-lg">
                <Check className="h-6 w-6" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button type="submit" variant="secondary" className="whitespace-nowrap">
                  Subscribe Now
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

