self.addEventListener('fetch', event => {
  event.respondWith(
    fetch('test').then(data => {
      console.log('start')
      setTimeout(() => {
        const redirectRes = {
          status: 302,
          statusText: 'Found',
          headers: {
            Location: 'https://google.com',
          },
        };
        return new Response('', redirectRes);
      }, 4000);

    })
  )
})
