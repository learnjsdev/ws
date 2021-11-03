const settings = {
  blockId: 'root-identity-element',
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('message', event => {
  try {
    fetch(event.data.fetchUrl).then(response => {
      return response.clone().text();
    }).then(response => {
      if(!checkBody(response)) {
        self.clients.matchAll().then(clients => {
          clients.forEach(client => client.postMessage({ msg: 'redirect'}));
        })
      } else {
        console.log('target exist')
      }
    })
  } catch (error)  {
    console.log(error)
  }
})
