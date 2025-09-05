// Simple service worker to handle image optimization and caching
// This prevents 404 errors and improves page load performance

self.addEventListener('install', (event) => {
    console.log('Image Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Image Service Worker activated');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Cache images and static assets for better performance
    if (event.request.destination === 'image' ||
        event.request.url.includes('.webp') ||
        event.request.url.includes('.jpg') ||
        event.request.url.includes('.png')) {

        event.respondWith(
            caches.open('images-v1').then(cache => {
                return cache.match(event.request).then(response => {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request).then(fetchResponse => {
                        cache.put(event.request, fetchResponse.clone());
                        return fetchResponse;
                    });
                });
            })
        );
    } else {
        // For non-image requests, just pass through
        event.respondWith(fetch(event.request));
  }
});
