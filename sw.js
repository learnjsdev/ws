const settings = {
  blockId: 'root-identity-element',
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('fetch', event => {
  console.log('fetch');

  fetch(event.request).then(response => {
    return response.clone().text();
  }).then(body => {
     console.log(body) ;
  })

});
