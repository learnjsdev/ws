let CACHE_NAME = 'my-web-app-cache';
let urlsToCache = [
  './',
];

self.addEventListener('install', function(event) {
  // event.waitUntil принимает промис для того, чтобы узнать,
  // сколько времени займёт установка, и успешно
  // или нет она завершилась.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Этот метод анализирует запрос и
    // ищет кэшированные результаты для этого запроса в любом из
    // созданных сервис-воркером кэшей.
    caches.match(event.request)
      .then(function(response) {
        // если в кэше найдено то, что нужно, мы можем тут же вернуть ответ.
        if (response) {
          console.log(response)
          return response;
        }

        // Клонируем запрос. Так как объект запроса - это поток,
        // обратиться к нему можно лишь один раз.
        // При этом один раз мы обрабатываем его для нужд кэширования,
        // ещё один раз он обрабатывается браузером, для запроса ресурсов,
        // поэтому объект запроса нужно клонировать.
        const fetchRequest = event.request.clone();

        // В кэше ничего не нашлось, поэтому нужно выполнить загрузку материалов,
        // что заключается в выполнении сетевого запроса и в возврате данных, если
        // то, что нужно, может быть получено из сети.
        console.log(404);
        return fetch(fetchRequest).then(
          function(response) {
            // Проверка того, получили ли мы правильный ответ
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Клонирование объекта ответа, так как он тоже является потоком.
            // Так как нам надо, чтобы ответ был обработан браузером,
            // а так же кэшем, его нужно клонировать,
            // поэтому в итоге у нас будет два потока.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                // Добавляем ответ в кэш для последующего использования.
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

self.addEventListener('activated', (e) => {
  console.log('activated');
});

self.addEventListener('message', (e) => {
  console.log(e.data);
});

self.addEventListener('statechange', (e) => {
  console.log('change');
})

