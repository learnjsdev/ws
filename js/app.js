if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./js/sw.js')
    .then((reg) => {
      if(reg.active) {
        reg.active.postMessage('hi');
        console.log(reg.active)
      }
    }).catch((error) => {
    console.log('Registration failed with ' + error);
  });
}
