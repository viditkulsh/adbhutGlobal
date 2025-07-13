import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Services - Tour Packages & MICE Solutions | Adbhut Global',
  description: 'Explore our comprehensive travel services including international & domestic tour packages, corporate travel, MICE solutions, and event management. Book your perfect trip with Adbhut Global.',
  keywords: 'travel services, tour packages, MICE solutions, corporate travel, event management, international tours, domestic tours, travel agency services',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Travel Services - Tour Packages & MICE Solutions | Adbhut Global',
    description: 'Explore our comprehensive travel services including international & domestic tour packages, corporate travel, MICE solutions, and event management. Book your perfect trip with Adbhut Global.',
    url: 'https://adbhutglobal.com/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
