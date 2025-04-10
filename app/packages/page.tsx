"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, Star, ChevronDown, ChevronUp } from "lucide-react"
import { travelPackages, Package } from "./travel_dest"

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [expandedPackage, setExpandedPackage] = useState<number | null>(null)

  const togglePackageDetails = (id: number) => {
    setExpandedPackage(expandedPackage === id ? null : id)
  }

  const filteredPackages =
    activeTab === "all" ? travelPackages : travelPackages.filter((pkg) => pkg.category === activeTab)

  return (
    <>
      <div className="pt-20">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Travel Packages</h1>
            <p className="text-center max-w-3xl mx-auto">
              Discover our carefully curated selection of international and domestic travel packages
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All Packages</TabsTrigger>
                  <TabsTrigger value="international">International</TabsTrigger>
                  <TabsTrigger value="domestic">Domestic</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="package-card"
                >
                  <Card className="h-full flex flex-col">
                    <div className="relative">
                      <img
                        src={pkg.image || "/placeholder.svg"}
                        alt={pkg.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {pkg.featured && <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{pkg.title}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-1" /> {pkg.location}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{pkg.groupSize}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground line-clamp-3 mb-4">{pkg.description}</p>

                      {expandedPackage === pkg.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <h4 className="font-bold mb-2">Highlights:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            {pkg.highlights.map((highlight, i) => (
                              <li key={i}>{highlight}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between items-center border-t pt-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => togglePackageDetails(pkg.id)}>
                          {expandedPackage === pkg.id ? (
                            <>
                              <ChevronUp className="h-4 w-4 mr-1" /> Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4 mr-1" /> More
                            </>
                          )}
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Custom Travel Packages</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Can't find what you're looking for? Let us create a personalized travel package tailored to your
                preferences.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Your Dream Vacation, Your Way</h3>
                  <p className="mb-4">
                    Our travel experts can design a custom itinerary based on your interests, budget, and schedule.
                    Whether you're planning a family vacation, honeymoon, or group trip, we'll create the perfect
                    experience for you.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary rounded-full p-1">
                        <svg
                          className="h-3 w-3 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Personalized itineraries</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary rounded-full p-1">
                        <svg
                          className="h-3 w-3 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary rounded-full p-1">
                        <svg
                          className="h-3 w-3 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Curated experiences based on your interests</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary rounded-full p-1">
                        <svg
                          className="h-3 w-3 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Accommodation options for every budget</span>
                    </li>
                  </ul>
                  <Button>Request Custom Package</Button>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=400"
                    alt="Custom Travel Package"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}