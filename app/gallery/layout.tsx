import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery - Adbhut Global Tour and Travel Services",
  description: "Explore our photo gallery showcasing memorable travel experiences, tours, and destinations offered by Adbhut Global Tour and Travel Services. View real moments from our satisfied travelers.",
  keywords: "travel gallery, tour photos, destination images, travel experiences, customer testimonials, travel memories, Adbhut Global gallery",
  openGraph: {
    title: "Gallery - Adbhut Global Tour and Travel Services",
    description: "Explore our photo gallery showcasing memorable travel experiences, tours, and destinations offered by Adbhut Global Tour and Travel Services.",
    url: "/gallery",
    type: "website",
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
