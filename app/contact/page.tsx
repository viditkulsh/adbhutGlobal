"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
    // Send form data using EmailJS
    emailjs
      .send(
        "global_adbhut_mail", // Replace with your EmailJS Service ID
        "Message_Recieved_Confirm", // Replace with your EmailJS Template ID
        formData, // Form data to send
        "q5ZT1q-4lvQ36KIa0" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully (Template 1):", response);
  
          // Send form data using the second template
          return emailjs.send(
            "global_adbhut_mail", // Service ID
            "query_to_malik", // Template ID 2
            formData, // Form data to send
            "q5ZT1q-4lvQ36KIa0" // Public Key
          );
        }
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response)
          setFormStatus({
            submitted: true,
            success: true,
            message: "Thank you for your message! We'll get back to you shortly.",
          })
        },
        (error) => {
          console.error("Failed to send email:", error) // Log the full error object
          setFormStatus({
            submitted: true,
            success: false,
            message: "Something went wrong. Please try again later.",
          })
        }
      )
  
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null)
    }, 5000)
  }

  return (
    <>
      <div className="pt-20">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>
            <p className="text-center max-w-3xl mx-auto">
              Get in touch with our travel experts for inquiries, bookings, or custom travel plans
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="mb-8 text-muted-foreground">
                  Have questions about our travel packages or services? Fill out the form below and our team will get
                  back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <Select value={formData.subject} onValueChange={(value) => handleSelectChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="booking">Package Booking</SelectItem>
                          <SelectItem value="custom">Custom Travel Plan</SelectItem>
                          <SelectItem value="corporate">Corporate Travel</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>

                  {formStatus && (
                    <div
                      className={`p-4 rounded-md ${formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                    >
                      {formStatus.message}
                    </div>
                  )}

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="sticky top-24">
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <p className="mb-8 text-muted-foreground">
                    You can also reach out to us directly using the contact information below or visit our office during
                    business hours.
                  </p>

                  <div className="space-y-6 mb-8">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold">Our Office</h3>
                            <p className="text-muted-foreground">
                              Railway Enclave, Pratap Vihar, Ghaziabad 201009 
                              <br />
                              Open Monday-Friday, 9:00 AM - 6:00 PM
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Phone className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold">Phone</h3>
                            <p className="text-muted-foreground">
                              Mobile: +91 7290954561
                              <br />
                              Mobile: +91 9211434561
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Mail className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold">Email</h3>
                            <p className="text-muted-foreground">
                              <a href="mailto:info@adbhutglobal.com" className="hover:underline">
                                info@adbhutglobal.com
                              </a>
                              <br />
                              <a href="mailto:adbhutglobal@gmail.com" className="hover:underline">
                                adbhutglobal@gmail.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                  {/* Uncomment if you have a live chat feature */}
                    {/* <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <MessageSquare className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold">Live Chat</h3>
                            <p className="text-muted-foreground">
                              Chat with our travel experts in real-time
                              <br />
                              Available 24/7 for your convenience
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card> */}   
                  </div>

                  
                  {/* This would be replaced with an actual Google Maps embed */}
                  {/* <div className="h-80 bg-muted rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground">Google Maps Integration</p>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our services and booking process
              </p>
            </div>

            <div className="max-w-3xl mx-auto grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>How do I book a travel package?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    You can book a travel package through our website by selecting your desired package and clicking the
                    "Book Now" button. Alternatively, you can contact our booking team via phone, email, or by visiting
                    our office. We'll guide you through the booking process and answer any questions you may have.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express),
                    bank transfers, UPI and other digital payment platforms. For certain packages, we also offer installment
                    payment options. Please contact our team for more details on payment plans.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I customize an existing travel package?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, most of our travel packages can be customized to suit your preferences. Whether you want to
                    extend your stay, upgrade accommodations, or add specific activities, our travel experts can help
                    you tailor the package to your needs. Contact us with your requirements, and we'll create a
                    personalized itinerary for you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What is your cancellation policy?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our cancellation policy varies depending on the package and the time of cancellation. Generally,
                    cancellations made 30 days or more before departure may receive a full refund minus administrative
                    fees. Cancellations made 15-29 days before departure may receive a partial refund. Cancellations
                    made less than 15 days before departure are typically non-refundable. Please refer to the specific
                    terms and conditions for your package or contact our team for details.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

