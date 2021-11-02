const settings = {
  blockId: 'root-identity-element',
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('fetch', event => {
  try {
    fetch(event.request, {mode: 'cors'})
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
