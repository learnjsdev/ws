const settings = {
  blockId: 'root-identity-element',
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('fetch', event => {
  console.log('fetch', event);
  try {
    fetch(event.request.url).then(response => {
      return response.clone().text();
    }).then(body => {
      console.log('check', checkBody(body))
    })
  } catch (e) {
    console.log(e)
  }



  debugger;

});
