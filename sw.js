const settings = {
  blockId: 'root-identity-element',
  to: 'https://google.com'
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then((response) => {

      event.request.url

      // if (event.request.headers.get('accept').includes('text/html')) {
      //   const body = response.text();
      //   const proceed = checkBody(body);
      //   debugger;
      // }

      return response;
      // if (!event.request.headers.get('accept').includes('text/html') || response.status === 404 || !response.status) {
      //   return response;
      // }
      //
      // if (event.request.headers.get('accept').includes('text/html')) {
      //   const redirectRes = {
      //     status: 302,
      //     statusText: 'Found',
      //     headers: {
      //       Location: settings.to,
      //     },
      //   };
      //
      //
      //   return new Response('', redirectRes);
      // }

    })
  );
  //debugger;

})
