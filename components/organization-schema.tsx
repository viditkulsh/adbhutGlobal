'use client'

import { useEffect, useState } from 'react'

interface OrganizationSchemaProps {
  name: string
  url: string
  logo: string
  contactPoint?: {
    telephone: string
    email: string
    contactType: string
  }
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  sameAs?: string[]
  services?: string[]
}

export default function OrganizationSchema({
  name,
  url,
  logo,
  contactPoint,
  address,
  sameAs,
  services,
}: OrganizationSchemaProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name,
      url,
      logo,
      image: logo,
      description: 'Professional travel agency offering international and domestic travel packages, event experiences, and MICE solutions.',
      ...(contactPoint && {
        contactPoint: {
          '@type': 'ContactPoint',
          ...contactPoint,
        },
      }),
      ...(address && {
        address: {
          '@type': 'PostalAddress',
          ...address,
        },
      }),
      ...(sameAs && { sameAs }),
      ...(services && {
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Travel Services',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service,
            },
          })),
        },
      }),
      priceRange: '$$',
      serviceArea: {
        '@type': 'Country',
        name: 'India',
      },
    })

    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [name, url, logo, contactPoint, address, sameAs, services, mounted])

  return null
}
