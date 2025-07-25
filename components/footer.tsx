import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import SocialMediaLinks from "./social-media-links"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Adbhut Global</h3>
            <p className="mb-4">
              Unforgettable journeys await you with our expert travel services. Explore the world with confidence and
              comfort.
            </p>
            <SocialMediaLinks />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white/80 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white/80 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-white/80 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white/80 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/packages?destination=Bali" className="hover:text-white/80 transition-colors">
                  Bali, Indonesia
                </Link>
              </li>
              <li>
                <Link href="/packages?destination=Tokyo" className="hover:text-white/80 transition-colors">
                  Tokyo, Japan
                </Link>
              </li>
              <li>
                <Link href="/packages?destination=Dubai" className="hover:text-white/80 transition-colors">
                  Dubai, UAE
                </Link>
              </li>
              <li>
                <Link href="/packages?destination=Paris" className="hover:text-white/80 transition-colors">
                  Paris, France
                </Link>
              </li>
              <li>
                <Link href="/packages?destination=Goa" className="hover:text-white/80 transition-colors">
                  Goa, India
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Railway Enclave, Pratap Vihar, Ghaziabad 201009</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>
                  +91 7290954561
                  <br />
                  +91 9211434561
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>
                  <a href="mailto:info@adbhutglobal.com" className="hover:underline">
                    info@adbhutglobal.com
                  </a>
                  <br />
                  <a href="mailto:adbhutglobal@gmail.com" className="hover:underline">
                    adbhutglobal@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Adbhut Global Tour and Travel Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

