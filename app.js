if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then((reg) => {
      if(reg.active) {
        reg.active.postMessage('registred');
      }
    }).catch((error) => {
    console.log('Registration failed with ' + error);
  });

  navigator.serviceWorker.addEventListener('message', event => {
    console.log(event.data.msg, event.data.url);
  });
}
