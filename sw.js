self.addEventListener('fetch', event => {
  console.log(event.request.url);
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
