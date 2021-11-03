if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js').then(response => {
      //console.log(response.scope);
      if(response.active) {
        response.active.postMessage({ fetchUrl: response.scope })
      }
    });

    navigator.serviceWorker.addEventListener("message", e => {
      console.log('message from worker', e.data)
    })

  });
  
}
