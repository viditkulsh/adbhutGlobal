import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Packages - International & Domestic Tours | Adbhut Global',
  description: 'Discover amazing travel packages for international and domestic destinations. From exotic international tours to beautiful domestic getaways, find your perfect vacation package with Adbhut Global.',
  keywords: 'travel packages, international tours, domestic tours, vacation packages, holiday packages, tour packages, travel deals, honeymoon packages, family tours, adventure tours',
  alternates: {
    canonical: '/packages',
  },
  openGraph: {
    title: 'Travel Packages - International & Domestic Tours | Adbhut Global',
    description: 'Discover amazing travel packages for international and domestic destinations. From exotic international tours to beautiful domestic getaways, find your perfect vacation package with Adbhut Global.',
    url: 'https://adbhutglobal.com/packages',
  },
}

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
