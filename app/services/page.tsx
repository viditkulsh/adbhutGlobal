"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plane, Users, Calendar, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DatePicker } from "@/components/ui/date-picker"

export default function ServicesPage() {
  const [flightSearchData, setFlightSearchData] = useState({
    from: "",
    to: "",
    departDate: new Date(),
    returnDate: new Date(),
    passengers: "1",
    class: "economy",
  })

  const handleFlightSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle flight search logic here
    console.log("Flight search:", flightSearchData)
  }

  return (
    <>
      <div className="pt-20">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Our Services</h1>
            <p className="text-center max-w-3xl mx-auto">
              Comprehensive travel solutions for all your needs - from flight bookings to corporate events
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Flight Booking</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Search and book flights to destinations worldwide with our easy-to-use flight search engine
              </p>
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <Tabs defaultValue="roundtrip">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="roundtrip">Round Trip</TabsTrigger>
                    <TabsTrigger value="oneway">One Way</TabsTrigger>
                    <TabsTrigger value="multicity">Multi-City</TabsTrigger>
                  </TabsList>

                  <TabsContent value="roundtrip">
                    <form onSubmit={handleFlightSearch}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">From</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                              placeholder="City or Airport"
                              className="pl-10"
                              value={flightSearchData.from}
                              onChange={(e) => setFlightSearchData({ ...flightSearchData, from: e.target.value })}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">To</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                              placeholder="City or Airport"
                              className="pl-10"
                              value={flightSearchData.to}
                              onChange={(e) => setFlightSearchData({ ...flightSearchData, to: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Depart</label>
                          <DatePicker
                            date={flightSearchData.departDate}
                            setDate={(date) =>
                              setFlightSearchData({ ...flightSearchData, departDate: date || new Date() })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Return</label>
                          <DatePicker
                            date={flightSearchData.returnDate}
                            setDate={(date) =>
                              setFlightSearchData({ ...flightSearchData, returnDate: date || new Date() })
                            }
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium mb-1">Passengers</label>
                          <Select
                            value={flightSearchData.passengers}
                            onValueChange={(value) => setFlightSearchData({ ...flightSearchData, passengers: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select passengers" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Passenger</SelectItem>
                              <SelectItem value="2">2 Passengers</SelectItem>
                              <SelectItem value="3">3 Passengers</SelectItem>
                              <SelectItem value="4">4 Passengers</SelectItem>
                              <SelectItem value="5">5+ Passengers</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Class</label>
                          <Select
                            value={flightSearchData.class}
                            onValueChange={(value) => setFlightSearchData({ ...flightSearchData, class: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select class" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="economy">Economy</SelectItem>
                              <SelectItem value="premium">Premium Economy</SelectItem>
                              <SelectItem value="business">Business</SelectItem>
                              <SelectItem value="first">First Class</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button type="submit" className="w-full">
                        <Search className="mr-2 h-4 w-4" /> Search Flights
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="oneway">
                    <div className="p-4 text-center">
                      <p>One way flight booking form would go here</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="multicity">
                    <div className="p-4 text-center">
                      <p>Multi-city flight booking form would go here</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
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
                  src="/placeholder.svg?height=800&width=600"
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
                <Button>Contact Our Corporate Team</Button>
              </motion.div>
            </div>
          </div>
        </section>

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
                      src="/placeholder.svg?height=400&width=600"
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
                      src="/placeholder.svg?height=400&width=600"
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
                      src="/placeholder.svg?height=400&width=600"
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

