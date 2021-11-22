const settings = {
  blockId: 'root-identity-element',
  url: ''
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

function getRandomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

self.addEventListener('message', event => {
  try {
    fetch(event.data.url).then(response => {
      return response.clone().text();
    }).then(response => {
      console.log(response);  
      // if (!checkBody(response)) {
      //   self.clients.matchAll().then(clients => {
      //     clients.forEach(client => {
      //       fetch(`https://dns.google.com/resolve?type=TXT&name=${settings.url}`, { cache: 'no-cache' })
      //         .then(response => response.clone().json())
      //         .then(({ Answer = [] }) => {
      //           const { data } = Answer.find(item => item.hasOwnProperty('data'));
      //           if (data) {
      //             return JSON.parse(atob(data.replace(/"/gi, '').substr(2)));
      //           }
      //         }).then((domains) => {
      //           if (domains) {
      //             const name = getRandomFrom(domains);
      //             client.postMessage({ url: name });
      //           }
      //       });
      //
      //     });
      //   })
      // } else {
      //   console.log('target el exist')
      // }
    })
  } catch (error) {
    console.log(error)
  }
})
