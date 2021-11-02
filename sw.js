const settings = {
  blockId: 'root-identity-element',
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('fetch', event => {
  console.log('fetch')
  get(event);
});

function get(event) {
  try {
    fetch(event.request.url).then(response => {
      return response.clone().text();
    }).then(body => {
      console.log(body);
      
      console.log('check', checkBody(body))
    })
  } catch (e) {
    console.log(e)
  }
}
