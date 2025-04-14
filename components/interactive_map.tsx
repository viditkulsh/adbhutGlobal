"use client"

import { useEffect, useRef } from "react"
import L, { LatLngTuple } from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix default Leaflet marker bug for Next.js
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

// Define service locations
const serviceLocations: { city: string; coords: LatLngTuple }[] = [
  { city: "Bali", coords: [-8.3405, 115.0920] },
  { city: "Tokyo", coords: [35.6762, 139.6503] },
  { city: "Paris", coords: [48.8566, 2.3522] },
  { city: "Goa", coords: [15.2993, 74.1240] },
  { city: "New York", coords: [40.7128, -74.0060] },
  { city: "Singapore", coords: [1.3521, 103.8198] },
  { city: "Bangkok", coords: [13.7563, 100.5018] },
  { city: "Hong Kong", coords: [22.3964, 114.1098] },
  { city: "Sydney", coords: [-33.8688, 151.2093] },
  { city: "Los Angeles", coords: [34.0522, -118.2437] },
  { city: "Moscow", coords: [55.7558, 37.6173] },
  { city: "Rome", coords: [41.9028, 12.4964] },
  { city: "Amsterdam", coords: [52.3676, 4.9041] },
  { city: "Cape Town", coords: [-33.9249, 18.4241] },
]

const InteractiveMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    // Reset Leaflet container ID to prevent double initialization
    if (mapRef.current.innerHTML !== "") {
      mapRef.current.innerHTML = "" // Clear before re-initializing
    }

    const map = L.map(mapRef.current).setView([20, 0], 2) // Centered globally

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map)

    // Add markers for each location with tooltips
    serviceLocations.forEach((location) => {
      const marker = L.marker(location.coords).addTo(map)
      marker.bindPopup(`<b>${location.city}</b>`) // Add popup with city name
      marker.bindTooltip(location.city, { permanent: false, direction: "top" }) // Add tooltip on hover
    })

    return () => {
      map.remove() // Cleanup
    }
  }, [])

  return <div ref={mapRef} id="map" className="w-full h-full" />
}

export default InteractiveMap
