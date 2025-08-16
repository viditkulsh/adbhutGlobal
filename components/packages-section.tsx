"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Mail, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import emailjs from "@emailjs/browser"

interface Package {
  id: number
  name: string
  location: string
  image: string
  description: string
  duration: string
}

const packages: Package[] = [
  {
    id: 1,
    name: "Bali Paradise",
    location: "Indonesia",
    image: "/posters/Bali_Package.jpg",
    description: "Experience the tropical paradise with stunning beaches and cultural heritage",
    duration: "6 Days / 5 Nights",
  },
  {
    id: 2,
    name: "Goa Beaches",
    location: "India",
    image: "/posters/Goa_Package.jpg",
    description: "Relax on pristine beaches and enjoy vibrant nightlife",
    duration: "4 Days / 3 Nights",
  },
  {
    id: 3,
    name: "Thailand Explorer",
    location: "Thailand",
    image: "/posters/Thailand_Package.jpg",
    description: "Discover ancient temples, exotic cuisine, and tropical islands",
    duration: "7 Days / 6 Nights",
  },
]

export default function PackagesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean
    success: boolean
    message: string
  } | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: ""
  })

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === packages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? packages.length - 1 : prevIndex - 1))
  }

  const handlePosterClick = (packageItem: Package) => {
    setSelectedPackage(packageItem)
    setFormData(prev => ({
      ...prev,
      message: `Hi, I'm interested in the ${packageItem.name} package. Please provide me with more details and pricing.`,
      subject: "Package-Booking"
    }))
    setIsContactFormOpen(true)
    setFormStatus(null) // Reset form status when opening
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send form data using EmailJS (same configuration as contact page)
      const response = await emailjs.send(
        "adbhut_global_enquiries", // Service ID
        "query_to_malik", // Template ID
        formData, // Form data to send
        "tLXQ_axS__SXWoCa3" // Public Key
      )

      console.log("Email sent successfully:", response)
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you for your inquiry! We'll get back to you within 24 hours with the best deals for your package.",
      })
      
      setFormData({ name: "", email: "", phone: "", message: "", subject: "" })
      
      // Close modal after 3 seconds
      setTimeout(() => {
        setIsContactFormOpen(false)
        setFormStatus(null)
      }, 3000)
    } catch (error) {
      console.error("Failed to send email:", error)
      setFormStatus({
        submitted: true,
        success: false,
        message: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Packages
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Click on any package poster to get in touch with us for booking
          </motion.p>
        </div>

        {/* Desktop Grid - Full Posters */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {packages.map((packageItem, index) => (
            <motion.div
              key={packageItem.id}
              className="cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => handlePosterClick(packageItem)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl h-[500px] bg-muted">
                <Image
                  src={packageItem.image}
                  alt={packageItem.name}
                  width={400}
                  height={600}
                  className="w-full h-full object-contain transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
                    <p className="text-primary font-semibold">Click to Book</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel - Full Posters */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-lg">
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {packages.map((packageItem) => (
                <div
                  key={packageItem.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div 
                    className="cursor-pointer group relative h-[500px] bg-muted rounded-lg overflow-hidden"
                    onClick={() => handlePosterClick(packageItem)}
                  >
                    <Image
                      src={packageItem.image}
                      alt={packageItem.name}
                      width={400}
                      height={600}
                      className="w-full h-full object-contain shadow-xl"
                      sizes="100vw"
                    />
                    {/* Mobile overlay */}
                    <div className="absolute inset-0 bg-black/0 group-active:bg-black/20 transition-all duration-200" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-center">
                        <p className="text-primary font-semibold">Tap to Book</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          {packages.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
                onClick={prevSlide}
                aria-label="Previous package"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
                onClick={nextSlide}
                aria-label="Next package"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Mobile Pagination */}
          {packages.length > 1 && (
            <div className="flex justify-center mt-6">
              {packages.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full mx-1 transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Contact Form Modal */}
      {selectedPackage && (
        <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                Book Your {selectedPackage.name} Package
              </DialogTitle>
              <p className="text-center text-muted-foreground mt-2">
                Fill out the form below and we'll get back to you with the best deals!
              </p>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your travel preferences..."
                  rows={4}
                />
              </div>

              {formStatus && (
                <div
                  className={`p-4 rounded-md ${formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                >
                  {formStatus.message}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
