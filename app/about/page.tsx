"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { useEffect } from "react"
import ClientOnly from "@/components/client_only" // Import the ClientOnly component

// Dynamically import the Leaflet map to avoid SSR issues
const InteractiveMap = dynamic(() => import("@/components/interactive_map"), {
  ssr: false,
})

export default function AboutPage() {
  // Set document title and meta description for SEO
  useEffect(() => {
    document.title = 'About Us - Adbhut Global Tour and Travel Services'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Adbhut Global Tour and Travel Services - your trusted travel partner since 2010. Discover our journey, mission, and commitment to providing exceptional travel experiences across India and internationally.')
    }
  }, [])
  const timelineItems = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Adbhut Global was established with a vision to provide exceptional travel experiences.",
    },
    {
      year: "2013",
      title: "International Expansion",
      description: "Expanded our services to include international destinations across Asia, Europe, and America.",
    },
    {
      year: "2016",
      title: "MICE Services Launch",
      description: "Introduced specialized services for Meetings, Incentives, Conferences, and Exhibitions.",
    },
    {
      year: "2019",
      title: "Digital Transformation",
      description: "Launched our digital platform to provide seamless online booking experiences.",
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description: "Committed to sustainable tourism practices and responsible travel.",
    },
  ]

  return (
    <>
      <div className="pt-20">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">About Adbhut Global</h1>
            <p className="text-center max-w-3xl mx-auto">
              Learn about our journey, mission, and the team behind Adbhut Global Tour and Travel Services
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="mb-4">
                  Founded in 2025, Adbhut Global Tour and Travel Services began with a simple mission: to create
                  unforgettable travel experiences that enrich lives and create lasting memories.
                </p>
                <p className="mb-4">
                  What started as a small team of passionate travelers has grown into a full-service travel company with
                  expertise in international and domestic tourism, tour packages, and corporate MICE solutions.
                </p>
                <p>
                  Our commitment to excellence, attention to detail, and personalized service has made us a trusted name
                  in the travel industry, serving thousands of satisfied customers worldwide.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src="/Company/collage_pic3.jpg?height=800&width=600"
                  alt="About Adbhut Global"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

{/* Uncomment this section if you want to include the timeline */}
        {/* <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The evolution of Adbhut Global through the years
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-2 text-primary font-bold">{item.year}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Guiding principles that drive our services and operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-card p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="mb-4">
                  To provide exceptional travel experiences that exceed expectations, create lasting memories, and
                  inspire a deeper connection with the world around us.
                </p>
                <p>
                  We strive to make travel accessible, enjoyable, and enriching for everyone, whether they're exploring
                  a new country or attending a corporate event.
                </p>
              </motion.div>

              <motion.div
                className="bg-card p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="mb-4">
                  To be the most trusted and innovative travel partner, recognized globally for our commitment to
                  excellence, sustainability, and customer satisfaction.
                </p>
                <p>
                  We envision a world where travel breaks down barriers, fosters understanding, and contributes
                  positively to local communities and environments.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Some of the popular destinations that we serve around the world
              </p>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <ClientOnly>
                <InteractiveMap />
              </ClientOnly>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

