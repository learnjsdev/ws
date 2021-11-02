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
      return response.text();
    }).then(body => {
      console.log(checkBody(body));
    })
  } catch (e) {
    console.log(e)
  }
}
