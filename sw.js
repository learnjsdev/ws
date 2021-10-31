self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
})

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  //console.log(url.origin, location.origin, url);
  //debugger;

  event.respondWith(
    fetch(event.request).then(function(response) {
      if (!response.ok) {
        // An HTTP error response code (40x, 50x) won't cause the fetch() promise to reject.
        // We need to explicitly throw an exception to trigger the catch() clause.

        //throw Error('response status ' + response.status);



        self.postMessage('hello');

        debugger;
      }

      // If we got back a non-error HTTP response, return it to the page.
      return response;
    })

  );

})
