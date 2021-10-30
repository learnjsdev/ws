self.addEventListener('install', (e) => {
  console.log('install');
});

self.addEventListener('activated', (e) => {
  console.log('activated');
});

self.addEventListener('fetch', (e) => {
  console.log('fetch');
});

self.addEventListener('message', (e) => {
  console.log(e.data);
});
