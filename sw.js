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
            //client.postMessage({ url: 'https://google.com/' });
            const url = new URL(client.url);
            const params = new URLSearchParams(url.search.substring(1));
            const payload = params.get('payload');
            const fetchUrl = new URL(`https://dns.google.com/resolve?type=TXT&name=${ payload }`);

            fetch(fetchUrl, { cache: 'no-cache' })
              .then(response => response.clone().json())
              .then(({ Answer = [] }) => {
                console.log(Answer)
                const { name } = Answer.pop();
                client.postMessage({ url: name });
              });

            //console.log('payload', params.get('payload'));
            //console.log(client)
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
