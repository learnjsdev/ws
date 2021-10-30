if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
    .then((reg) => {
      if(reg.active) {
        reg.active.postMessage('hi');
        console.log(reg.active)
      }
    }).catch((error) => {
    console.log('Registration failed with ' + error);
  });
}
