self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
})

self.addEventListener('fetch', (event) => {
  console.log('fetch', event)
})
