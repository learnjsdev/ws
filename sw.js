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
      console.log(event)
      debugger;
    })
  } catch (error)  {
    console.log(error)
  }
})
