const settings = {
  blockId: 'root-identity-element',
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('fetch', event => {
  fetch(event.request).then((response) => {
    if(event.request.headers.get('accept').includes('text/html')) {
      console.log(123)
    }
  });

  //event.respondWith(
   // fetch(event.request).then((response) => {

      // if (!event.request.headers.get('accept').includes('text/html') || response.status === 404 || !response.status) {
      //   return response;
      // }
      //if(!event.request.headers.get('accept').includes('text/html')) return;
      //const text = response.clone().text();
      //debugger;
      //console.log(text);

    //})
  //)

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
