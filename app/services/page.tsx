"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Plane, Users, Calendar, MapPin, TicketPercent, HeartHandshake, PartyPopper, Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DatePicker } from "@/components/ui/date-picker"
import CorporateForm from "@/components/corporate-form"

export default function ServicesPage() {
  const [showCorporateForm, setShowCorporateForm] = useState(false)

  return (
    <>
      <div className="pt-20">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Our Services</h1>
            <p className="text-center max-w-3xl mx-auto">
              Comprehensive travel solutions for all your needs - from curated event experiences to corporate travel
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Event Experience Packages</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Enjoy exclusive cultural, business, and leisure event packages designed to deliver immersive and memorable experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <TicketPercent className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cultural Events</h3>
                  <p className="text-muted-foreground mb-4">
                    Experience local traditions and festivals with exclusive access, guided tours, and curated cultural journeys.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Business Networking Events</h3>
                  <p className="text-muted-foreground mb-4">
                    Join high-level summits and expos with tailored networking, hospitality, and travel solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <Calendar className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Leisure & Festival Packages</h3>
                  <p className="text-muted-foreground mb-4">
                    Enjoy world-famous festivals, concerts, and events with priority access, premium stays, and full coordination.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <Globe2 className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Leisure Travel Packages</h3>
                  <p className="text-muted-foreground mb-4">
                    Customized domestic and international holiday plans tailored for families, couples, and solo travelers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Group Tours</h3>
                  <p className="text-muted-foreground mb-4">
                    Curated tours for educational institutions, corporate outings, and special interest groups.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <HeartHandshake className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Destination Weddings & Honeymoons</h3>
                  <p className="text-muted-foreground mb-4">
                    Celebrate love with scenic wedding destinations and romantic honeymoon getaways.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">MICE Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions for Meetings, Incentives, Conferences, and Exhibitions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Meetings</h3>
                  <p className="text-muted-foreground mb-4">
                    Professional meeting arrangements with attention to every detail, from venue selection to catering.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <Plane className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Incentives</h3>
                  <p className="text-muted-foreground mb-4">
                    Motivational travel programs designed to reward and inspire your team's performance.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Conferences</h3>
                  <p className="text-muted-foreground mb-4">
                    End-to-end conference management services for events of all sizes and complexities.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <Calendar className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Exhibitions</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive exhibition planning and management services to showcase your brand effectively.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <img
                  src="/Company/MICE.jpeg?height=800&width=600"
                  alt="Corporate Event"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">Corporate Travel Management</h2>
                <p className="mb-4">
                  Our corporate travel management services are designed to streamline your business travel needs,
                  ensuring efficiency, cost-effectiveness, and comfort for your team.
                </p>
                <p className="mb-4">
                  From booking flights and accommodations to arranging ground transportation and managing travel
                  policies, we handle every aspect of your corporate travel requirements.
                </p>
                <p className="mb-6">
                  Our dedicated corporate travel specialists work closely with your team to understand your specific
                  needs and preferences, providing personalized solutions that align with your business objectives.
                </p>
                <Button onClick={() => setShowCorporateForm(!showCorporateForm)}>
                  Contact Our Corporate Team
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Corporate Enquiry Form */}
        {showCorporateForm && (
          <div className="pb-16"> {/* Add padding below the form */}
            <CorporateForm />
          </div>
        )}

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore how we've helped organizations create successful events and travel experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Annual Tech Conference</CardTitle>
                  <CardDescription>Global Technology Company</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 mb-4 bg-muted rounded-md overflow-hidden">
                    <img
                      src="Company/Networking.webp?height=400&width=600"
                      alt="Tech Conference"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Organized a 3-day conference for 500+ attendees with international speakers, including venue
                    selection, accommodation, transportation, and event management.
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    Read Case Study
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sales Team Incentive Trip</CardTitle>
                  <CardDescription>Pharmaceutical Corporation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 mb-4 bg-muted rounded-md overflow-hidden">
                    <img
                      src="Company/Incentive.webp?height=400&width=600"
                      alt="Incentive Trip"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Designed and executed a luxury incentive trip to Bali for 50 top-performing sales representatives,
                    including custom activities and team-building events.
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    Read Case Study
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Product Launch Exhibition</CardTitle>
                  <CardDescription>Automotive Manufacturer</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 mb-4 bg-muted rounded-md overflow-hidden">
                    <img
                      src="Company/Prod_launch.avif?height=400&width=600"
                      alt="Product Launch"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Managed a high-profile product launch exhibition attended by media, industry leaders, and VIP
                    clients, coordinating all logistics and promotional activities.
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    Read Case Study
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

