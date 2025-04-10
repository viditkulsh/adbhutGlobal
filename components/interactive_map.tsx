"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L, { LatLngTuple } from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix default Leaflet marker bug for Next.js
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

// Define service locations with explicit LatLngTuple type
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
  { city: "Cape Town", coords: [-33.9249, 18.4241] }
]

export default function InteractiveMap() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Ensure the map is only rendered on the client side
  }, [])

  if (!isClient) {
    return null // Render nothing on the server
  }

  return (
    <div className="relative w-full h-[500px] z-0"> {/* Set z-0 to ensure it stays behind */}
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {serviceLocations.map((loc, i) => (
          <Marker key={i} position={loc.coords}>
            <Popup>{loc.city}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
