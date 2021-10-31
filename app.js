if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then((response) => {
      console.log(response)
    }).catch((error) => {
    console.log('Registration failed with ' + error);
  });

  navigator.serviceWorker.addEventListener('message', (data) => {
    console.log(document.title)
  })
}
