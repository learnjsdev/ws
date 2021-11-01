if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js');

    navigator.serviceWorker.addEventListener('message', event => {
      console.log(`message: ${event.data}`);
    });

    navigator.serviceWorker.ready.then( registration => {
      registration.active.postMessage("register service worker");
    });

  })
}
