if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js').then(response => {
      if(response.active) {
        response.active.postMessage({ url: response.scope })
      }
    });

    navigator.serviceWorker.addEventListener("message", e => {
      //document.location = e.data.url;
      console.log(`redirect to ${e.data.url}`);
    });
  });
}
