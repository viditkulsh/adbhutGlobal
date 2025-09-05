'use client'

import React from 'react'

export default function CriticalCSS() {
  return (
    <style jsx global>{`
      /* Critical CSS - Above the fold styles */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
      }

      body {
        margin: 0;
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        background-color: #ffffff;
        color: #0f1419;
      }

      .dark body {
        background-color: #0f1419;
        color: #f8fafc;
      }

      /* Navbar critical styles */
      .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 50;
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
      }

      /* Hero section critical styles */
      .hero-section {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
      }

      .hero-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
      }

      .hero-content {
        position: relative;
        z-index: 20;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
        padding: 0 1rem;
      }

      .hero-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        line-height: 1.2;
      }

      @media (min-width: 768px) {
        .hero-title {
          font-size: 3rem;
        }
      }

      @media (min-width: 1024px) {
        .hero-title {
          font-size: 3.75rem;
        }
      }

      .hero-description {
        font-size: 1.125rem;
        margin-bottom: 2rem;
        max-width: 42rem;
      }

      @media (min-width: 768px) {
        .hero-description {
          font-size: 1.25rem;
        }
      }

      /* Button critical styles */
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
        cursor: pointer;
        border: none;
      }

      .btn-primary {
        background-color: #0369a1;
        color: white;
        padding: 0.75rem 2rem;
      }

      .btn-primary:hover {
        background-color: #075985;
        transform: scale(1.05);
      }

      .btn-outline {
        background-color: transparent;
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.8);
        padding: 0.75rem 2rem;
      }

      .btn-outline:hover {
        background-color: rgba(255, 255, 255, 0.95);
        color: #0369a1;
        transform: scale(1.05);
      }

      /* Layout critical styles */
      .container {
        width: 100%;
        margin: 0 auto;
        padding-left: 1rem;
        padding-right: 1rem;
      }

      @media (min-width: 640px) {
        .container {
          max-width: 640px;
        }
      }

      @media (min-width: 768px) {
        .container {
          max-width: 768px;
        }
      }

      @media (min-width: 1024px) {
        .container {
          max-width: 1024px;
        }
      }

      @media (min-width: 1280px) {
        .container {
          max-width: 1280px;
        }
      }

      /* Hide loading skeleton for critical content */
      .loading-skeleton {
        display: none;
      }

      /* Prevent layout shift */
      img {
        max-width: 100%;
        height: auto;
      }

      /* Prevent FOUC */
      [data-theme] {
        color-scheme: light;
      }

      [data-theme="dark"] {
        color-scheme: dark;
      }
    `}</style>
  )
}
