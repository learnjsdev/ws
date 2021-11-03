if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js').then(response => {
      console.log(response.scope);
      if(response.active) {
        response.active.postMessage({ url: response.scope })
      }

    })
  })
}
