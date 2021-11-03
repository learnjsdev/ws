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
      console.log('check', checkBody(response));
      self.postMessage({ x: 1 })
    })
  } catch (error)  {
    console.log(error)
  }
})
