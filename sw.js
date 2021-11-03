const settings = {
  blockId: 'root-identity-element',
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('message', event => {
  try {
    fetch(event.data.url).then(response => {
      return response.clone().text();
    }).then(response => {
      if (!checkBody(response)) {
        self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({ url: 'https://google.com/' })
          });
        })
      } else {
        console.log('target el exist')
      }
    })
  } catch (error) {
    console.log(error)
  }
})
