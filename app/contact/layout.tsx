import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Adbhut Global Travel Services',
  description: 'Contact Adbhut Global Tour and Travel Services for all your travel needs. Get expert advice, book your trips, and let us help you plan your perfect vacation. Call us or send us a message today!',
  keywords: 'contact adbhut global, travel agency contact, travel consultation, travel booking assistance, travel advice, travel planning help',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us - Get in Touch with Adbhut Global Travel Services',
    description: 'Contact Adbhut Global Tour and Travel Services for all your travel needs. Get expert advice, book your trips, and let us help you plan your perfect vacation. Call us or send us a message today!',
    url: 'https://adbhutglobal.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
