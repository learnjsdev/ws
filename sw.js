const settings = {
  blockId: 'root-identity-element',
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('fetch', event => {
  fetch(event.request).then(response => {
    // if (!event.request.headers.get('accept').includes('text/html') || response.status === 404 || !response.status) {
    //   return response;
    // }
    if(event.request.headers.get('accept').includes('text/html')) {
      return response.clone().text();
    }

  }).then(response => {
    console.log(checkBody(response))
  })
  // event.respondWith(
  //   fetch('test').then(data => {
  //
  //   })
  // )
  // event.respondWith(
  //   fetch('test').then(data => {
  //       const redirectRes = {
  //         status: 302,
  //         statusText: 'Found',
  //         headers: {
  //           Location: 'https://learnjsdev.github.io/ws/test',
  //         },
  //       };
  //       return new Response('', redirectRes);
  //     })
  // )
})
