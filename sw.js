self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
})

self.addEventListener('fetch', (event) => {
//   const url = new URL(event.request.url);
//   //console.log(url.origin, location.origin, url);
//   //debugger;
//
//   event.respondWith(
//     fetch(event.request).then(function(response) {
//       if (!response.ok) {
//         // An HTTP error response code (40x, 50x) won't cause the fetch() promise to reject.
//         // We need to explicitly throw an exception to trigger the catch() clause.
//
//         //throw Error('response status ' + response.status);
//
//         console.log()
//         //console.dir(event.resultingClientId);
//         self.clients.get(event.clientId).then(client => {
//           client.postMessage('hello')
//         })
// //        debugger
//
//
//
//
//       }
//
//       // If we got back a non-error HTTP response, return it to the page.
//       return response;
//     })
//
//   );


    // event.waitUntil(async function() {
    //   // Exit early if we don't have access to the client.
    //   // Eg, if it's cross-origin.
    //   if (!event.clientId) return;
    //
    //   // Get the client.
    //   const client = await clients.get(event.clientId);
    //   // Exit early if we don't get the client.
    //   // Eg, if it closed.
    //   if (!client) return;
    //
    //   // Send a message to the client.
    //   client.postMessage({
    //     msg: "Hey I just got a fetch from you!",
    //     url: event.request.url
    //   });
    //
    // }());


  // event.respondWith(
  //     fetch(event.request).then(function(response) {
  //       if (!response.ok) {
  //         console.log('404', response)
  //       }
  //       console.log('base', response);
  //       return response;
  //     }))

  ServiceWorkerRegistration.active.postMessage('123')
})
