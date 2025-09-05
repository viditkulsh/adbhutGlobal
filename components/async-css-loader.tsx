'use client'

import { useEffect } from 'react'

export default function AsyncCSSLoader() {
  useEffect(() => {
    // Load non-critical CSS asynchronously
    const loadCSS = (href: string, id?: string) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      if (id) link.id = id
      link.media = 'print'
      link.onload = () => {
        link.media = 'all'
      }
      document.head.appendChild(link)
    }

    // Load Leaflet CSS only when needed (for map pages)
    if (window.location.pathname.includes('/contact') || window.location.pathname.includes('/about')) {
      loadCSS('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', 'leaflet-css')
    }

    // Load additional font weights asynchronously
    loadCSS('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', 'inter-fonts')

    // Optimize existing stylesheets
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
    stylesheets.forEach((stylesheet) => {
      const link = stylesheet as HTMLLinkElement
      if (!link.hasAttribute('data-optimized')) {
        link.setAttribute('data-optimized', 'true')
        
        // Add crossorigin for external fonts
        if (link.href.includes('googleapis') || link.href.includes('gstatic')) {
          link.crossOrigin = 'anonymous'
        }
      }
    })

    // Remove unused CSS classes after page load
    const removeUnusedCSS = () => {
      const allElements = document.querySelectorAll('*')
      const usedClasses = new Set<string>()
      
      allElements.forEach(element => {
        element.classList.forEach(className => {
          usedClasses.add(className)
        })
      })

      // This is a placeholder for a more sophisticated unused CSS removal
      // In a real implementation, you'd use tools like PurgeCSS or similar
      console.log('Used CSS classes:', usedClasses.size)
    }

    // Run unused CSS removal after initial load
    const timer = setTimeout(removeUnusedCSS, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return null
}
