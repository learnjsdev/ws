const settings = {
  blockId: 'root-identity-element',
  to: 'https://google.com'
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('fetch', (event) => {
  if (event.request.destination !== 'document') return;
  debugger;
  event.respondWith(
    fetch(event.request).then((res) => {
      console.log(event.request);
    })
  )
});
