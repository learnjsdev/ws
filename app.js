if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js').then(response => {
      console.log('==>', response);
      // setTimeout(() => {
      //   fetch(document.location).then(data => console.log('client fetch'))
      // }, 4000)
    })


  })
}
