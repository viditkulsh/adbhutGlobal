import { Metadata } from 'next'
import HeroSection from "@/components/hero-section"
import PackagesSection from "@/components/packages-section"
import DestinationsCarousel from "@/components/destinations-carousel"
import FeaturesSection from "@/components/features-section"
import TestimonialsSlider from "@/components/testimonials-slider"
import NewsletterSection from "@/components/newsletter-section"

export const metadata: Metadata = {
  title: 'Best Travel Packages & Tour Services - Adbhut Global',
  description: 'Discover amazing travel packages, international and domestic tours, and MICE solutions with Adbhut Global Tour and Travel Services. Book your dream vacation today!',
  keywords: 'travel packages, international tours, domestic tours, vacation packages, travel deals, MICE services, corporate travel, holiday packages, tour operators',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Best Travel Packages & Tour Services - Adbhut Global',
    description: 'Discover amazing travel packages, international and domestic tours, and MICE solutions with Adbhut Global Tour and Travel Services. Book your dream vacation today!',
    url: 'https://adbhutglobal.com',
    images: [
      {
        url: '/logo_transparent.png',
        width: 1200,
        height: 630,
        alt: 'Adbhut Global Travel Services',
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <PackagesSection />
      <DestinationsCarousel />
      <FeaturesSection />
      {/* <TestimonialsSlider />  // Uncomment this line to enable the testimonials slider*/}
      {/* <NewsletterSection /> // Uncomment this line to enable the newsletter section */}
    </>
  )
}

