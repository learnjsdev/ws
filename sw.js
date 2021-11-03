const settings = {
  blockId: 'root-identity-element',
};

function checkBody(body) {
  return body.includes(settings.blockId);
}

self.addEventListener('message', e => {
  console.log(e.data);
})
