const settings = {
  blockId: 'root-identity-element',
};

function checkBody(body) {
  return body.includes(settings.blockId);
}


self.addEventListener('activate', e => {
  console.log('activate', e);
  self.skipWaiting();
})

self.addEventListener('fetch', event => {
  console.log('fetch', event.request.url)
  //console.log(self.origin);
  //console.log(event.request.url)

  //debugger;
  // try {
  //   fetch(event.request.referrer, { mode: 'no-cors' })
  //     .then(response => {
  //       if (response.type === 'basic') {
  //         console.log('response', response);
  //         const body =  response.clone().text();
  //         console.log('check', checkBody(body))
  //       }
  //     })
  // } catch (e) {
  //   console.log(e)
  // }
});
