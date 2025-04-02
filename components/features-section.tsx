"use client"

import { motion } from "framer-motion"
import { Plane, Shield, Clock, Users, Globe, CreditCard } from "lucide-react"

const features = [
  {
    icon: <Plane className="h-10 w-10" />,
    title: "Fast Booking",
    description: "Quick and hassle-free booking process for all your travel needs.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Secure Payments",
    description: "Your transactions are protected with industry-leading security measures.",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "24/7 Support",
    description: "Our travel experts are available round the clock to assist you with any queries.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Expert Guidance",
    description: "Get personalized recommendations from our experienced travel consultants.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Global Destinations",
    description: "Access to hundreds of destinations worldwide with curated experiences.",
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Flexible Payment",
    description: "Multiple payment options and installment plans for your convenience.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide exceptional travel services with a focus on customer satisfaction and memorable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

