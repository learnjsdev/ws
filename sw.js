const settings = {
  blockId: 'root-identity-element',
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('fetch', event => {
  try {
    fetch(event.request.referrer, { mode: 'no-cors' })
      .then(response => {
        if (response.type === 'basic') {
          console.log('activate', response);
          return response.text();
        }
      }).then(body => {
      console.log(checkBody(body));
    })
  } catch (e) {
    console.log(e)
  }
});
