if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js');

    setTimeout(() => {
      fetch(document.location).then(data => console.log('client fetch'))
    }, 4000)
  })
}
