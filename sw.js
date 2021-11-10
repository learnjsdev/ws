const settings = {
  blockId: 'root-identity-element',
  to: 'https://google.com'
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('fetch', event => {
  console.log(event.request.headers.get('accept').includes('text/html'));
  debugger;
  //event.respondWith(
    //fetch(event.request).then((response) => {
      // if (event.request.headers.get('accept').includes('text/html')) {
      //   const redirectRes = {
      //     status: 302,
      //     statusText: 'Found',
      //     headers: {
      //       Location: settings.to,
      //     },
      //   };
      //   return new Response('', redirectRes);
      // }
    //})
  //);
})
