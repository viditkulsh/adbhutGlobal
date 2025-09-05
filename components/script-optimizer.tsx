'use client'

import { useEffect } from 'react'
import Script from 'next/script'

interface ScriptOptimizerProps {
  children: React.ReactNode
}

export default function ScriptOptimizer({ children }: ScriptOptimizerProps) {
  useEffect(() => {
    // Remove unused event listeners after component mount
    return () => {
      const unusedElements = document.querySelectorAll('[data-unused="true"]')
      unusedElements.forEach(element => {
        element.remove()
      })
    }
  }, [])

  return (
    <>
      {/* Load non-critical scripts asynchronously */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          window.dataLayer = window.dataLayer || []
          function gtag(...args: any[]) {
            // @ts-ignore
            window.dataLayer.push(args)
          }
          // @ts-ignore
          gtag('js', new Date())
          // @ts-ignore
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
          })
        }}
      />

      {/* Load EmailJS lazily */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        strategy="lazyOnload"
      />

      {/* Leaflet maps - load only when needed */}
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        strategy="lazyOnload"
      />

      {children}
    </>
  )
}
