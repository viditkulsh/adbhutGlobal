'use client'

import { useEffect } from 'react'

export default function PerformanceMetrics() {
  useEffect(() => {
    // Web Vitals tracking
    if (typeof window !== 'undefined') {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (window.gtag) {
            switch (entry.entryType) {
              case 'largest-contentful-paint':
                window.gtag('event', 'web_vitals', {
                  event_category: 'performance',
                  event_label: 'LCP',
                  value: Math.round(entry.startTime),
                })
                break
              case 'first-input':
                const fidEntry = entry as any
                window.gtag('event', 'web_vitals', {
                  event_category: 'performance',
                  event_label: 'FID',
                  value: Math.round(fidEntry.processingStart - fidEntry.startTime),
                })
                break
              case 'layout-shift':
                const clsEntry = entry as any
                if (!clsEntry.hadRecentInput) {
                  window.gtag('event', 'web_vitals', {
                    event_category: 'performance',
                    event_label: 'CLS',
                    value: Math.round(clsEntry.value * 1000),
                  })
                }
                break
              default:
                break
            }
          }
        })
      })

      // Observe Core Web Vitals
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

      // Track page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        if (window.gtag) {
          window.gtag('event', 'page_load_time', {
            event_category: 'performance',
            value: Math.round(loadTime),
          })
        }
      })

      // Track navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation && window.gtag) {
        window.gtag('event', 'navigation_timing', {
          event_category: 'performance',
          dns_time: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
          connect_time: Math.round(navigation.connectEnd - navigation.connectStart),
          response_time: Math.round(navigation.responseEnd - navigation.responseStart),
          dom_load_time: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
        })
      }

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return null
}
