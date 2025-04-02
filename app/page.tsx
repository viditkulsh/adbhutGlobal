import HeroSection from "@/components/hero-section"
import DestinationsCarousel from "@/components/destinations-carousel"
import FeaturesSection from "@/components/features-section"
import TestimonialsSlider from "@/components/testimonials-slider"
import NewsletterSection from "@/components/newsletter-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationsCarousel />
      <FeaturesSection />
      <TestimonialsSlider />
      <NewsletterSection />
    </>
  )
}

