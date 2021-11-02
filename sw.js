const settings = {
  blockId: 'root-identity-element',
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('fetch', event => {
  try {
    console.log(event)
    fetch(event.request.referrer, {mode: 'cors'})
      .then(response => {
      return response.text();
    }).then(body => {
      console.log(checkBody(body));
    })
  } catch (e) {
    console.log(e)
  }
});

function get(event) {

}
