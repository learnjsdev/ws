self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
})

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  console.log(url.origin, location.origin, url);
  debugger;

})
