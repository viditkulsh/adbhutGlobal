import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PerformanceOptimizer from "@/components/performance-optimizer"
import Analytics from "@/components/analytics"
import OrganizationSchema from "@/components/organization-schema"
import CriticalCSS from "@/components/critical-css"
import ScriptOptimizer from "@/components/script-optimizer"
import AsyncCSSLoader from "@/components/async-css-loader"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: "Adbhut Global Tour and Travel Services - Best Travel Packages & MICE Solutions",
  description:
    "Discover unforgettable travel experiences with Adbhut Global Tour and Travel Services. Book international and domestic travel packages, MICE solutions, and corporate travel services at competitive prices.",
  keywords: "travel packages, international travel, domestic travel, MICE services, corporate travel, tour packages, vacation packages, travel agency, tourism services",
  authors: [{ name: "Adbhut Global Tour and Travel Services" }],
  creator: "Adbhut Global Tour and Travel Services",
  publisher: "Adbhut Global Tour and Travel Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://adbhutglobal.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adbhutglobal.com',
    title: 'Adbhut Global Tour and Travel Services - Best Travel Packages & MICE Solutions',
    description: 'Discover unforgettable travel experiences with Adbhut Global Tour and Travel Services. Book international and domestic travel packages, MICE solutions, and corporate travel services at competitive prices.',
    siteName: 'Adbhut Global Tour and Travel Services',
    images: [
      {
        url: '/logo_transparent.png',
        width: 1200,
        height: 630,
        alt: 'Adbhut Global Tour and Travel Services Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adbhut Global Tour and Travel Services - Best Travel Packages & MICE Solutions',
    description: 'Discover unforgettable travel experiences with Adbhut Global Tour and Travel Services. Book international and domestic travel packages, MICE solutions, and corporate travel services at competitive prices.',
    images: ['/logo_transparent.png'],
    creator: '@adbhutglobal',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Critical CSS inlined */}
        <CriticalCSS />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://adbhutglobal.com" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/International/Africa/pic1.webp"
          as="image"
          type="image/webp"
        />

        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Adbhut Global Tour and Travel Services",
              "description": "Professional travel agency offering international and domestic travel packages and MICE solutions.",
              "url": "https://adbhutglobal.com",
              "logo": "https://adbhutglobal.com/logo_transparent.png",
              "image": "https://adbhutglobal.com/logo_transparent.png",
              "telephone": "+91-XXXXXXXXXX",
              "email": "info@adbhutglobal.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "Your City",
                "addressRegion": "Your State",
                "postalCode": "Your Postal Code",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/adbhutglobal",
                "https://www.instagram.com/adbhutglobal",
                "https://www.twitter.com/adbhutglobal",
                "https://www.linkedin.com/company/adbhutglobal"
              ],
              "priceRange": "$$",
              "serviceArea": {
                "@type": "Country",
                "name": "India"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Travel Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "International Travel Packages"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Domestic Travel Packages"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "MICE Solutions"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Security Headers */}
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ScriptOptimizer>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            <Analytics />
            <AsyncCSSLoader />
            <OrganizationSchema
              name="Adbhut Global Tour and Travel Services"
              url="https://adbhutglobal.com"
              logo="https://adbhutglobal.com/logo_transparent.png"
              contactPoint={{
                telephone: "+91-XXXXXXXXXX",
                email: "info@adbhutglobal.com",
                contactType: "Customer Service",
              }}
              address={{
                streetAddress: "Your Street Address",
                addressLocality: "Your City",
                addressRegion: "Your State",
                postalCode: "Your Postal Code",
                addressCountry: "IN",
              }}
              sameAs={[
                "https://www.facebook.com/adbhutglobal",
                "https://www.instagram.com/adbhutglobal",
                "https://www.twitter.com/adbhutglobal",
                "https://www.linkedin.com/company/adbhutglobal",
              ]}
              services={[
                "International Travel Packages",
                "Domestic Travel Packages",
                "MICE Solutions",
                "Corporate Travel Services",
              ]}
            />
            <PerformanceOptimizer />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </ScriptOptimizer>
      </body>
    </html>
  )
}

