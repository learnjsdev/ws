const settings = {
  blockId: 'root-identity-element',
  to: 'https://google.com'
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('fetch', (event) => {
  if(event.request.destination === 'document') {
    console.log(event.request)
    event.respondWith(
      fetch(event.request).then(resp => {
        return resp.clone().text();
      }).then(data => {
        console.log(data);
        debugger;
      })
    )
  }

  //debugger;
  // if (event.request.destination === 'document') {
  //   event.respondWith(
  //     fetch(event.request).then(resp => {
  //       return resp.clone().text();
  //     }).then(data => {
  //       console.log(data)
  //     })
  //   );
  // }
  //
  // return event;


});
