self.addEventListener('fetch', event => {
  event.respondWith(
    fetch('test').then(data => {
        const redirectRes = {
          status: 302,
          statusText: 'Found',
          headers: {
            Location: 'https://learnjsdev.github.io/ws/test',
          },
        };
        return new Response('', redirectRes);
      })
  )
})
