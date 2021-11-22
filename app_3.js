if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw_3.js').then(response => {
      console.log('register')
    });
  });
}
