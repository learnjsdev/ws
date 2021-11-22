const settings = {
  blockId: 'root-identity-element',
  to: 'https://google.com'
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('fetch', (event) => {
  // if(event.request.headers.get('accept').includes('text/html')) {
  //
  // }

  console.log(event.request.headers.get('accept'))

  // event.respondWith(
  //   fetch(event.request).then((res) => {
  //     console.log(event.request)
  //   })
  // )
});
