import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Adbhut Global Tour and Travel Services',
  description: 'Learn about Adbhut Global Tour and Travel Services - your trusted travel partner since 2010. Discover our journey, mission, and commitment to providing exceptional travel experiences across India and internationally.',
  keywords: 'about adbhut global, travel agency history, travel company mission, professional travel services, experienced travel consultants, travel expertise',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us - Adbhut Global Tour and Travel Services',
    description: 'Learn about Adbhut Global Tour and Travel Services - your trusted travel partner since 2010. Discover our journey, mission, and commitment to providing exceptional travel experiences across India and internationally.',
    url: 'https://adbhutglobal.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
