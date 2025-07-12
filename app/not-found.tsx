import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Home, MapPin, Phone, Mail } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for seems to have wandered off on its own adventure.
          </p>
        </div>
        
        <div className="space-y-4 mb-8">
          <Link href="/">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/services">
              <Button variant="outline" className="w-full">
                <MapPin className="mr-2 h-4 w-4" />
                Our Services
              </Button>
            </Link>
            
            <Link href="/packages">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Travel Packages
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Need Help?</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center justify-center">
              <Phone className="mr-2 h-4 w-4 text-blue-600" />
              <span>Call us at: +91-XXXXXXXXXX</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="mr-2 h-4 w-4 text-blue-600" />
              <span>Email: info@adbhutglobal.com</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <Link href="/about" className="text-blue-600 hover:underline">About Us</Link>
            <span>•</span>
            <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
            <span>•</span>
            <Link href="/packages" className="text-blue-600 hover:underline">Packages</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
