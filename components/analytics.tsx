'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Google Analytics
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pathname,
      })
    }
  }, [pathname])

  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title,
      })
    }
  }, [pathname])

  return null
}

// Event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'contact_form',
  })
}

export const trackPackageView = (packageName: string) => {
  trackEvent('package_view', {
    event_category: 'engagement',
    event_label: packageName,
  })
}

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    event_category: 'engagement',
    event_label: serviceName,
  })
}
