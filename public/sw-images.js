// Simple service worker to handle sw-images.js requests
// This prevents 404 errors in the console

self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // For now, just pass through all requests
  event.respondWith(fetch(event.request));
});
