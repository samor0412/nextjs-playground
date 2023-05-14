// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     caches.open("mysite-dynamic").then(function (cache) {
//       return caches.match(event.request).then((cacheResponse) => {
//         return fetch(event.request)
//           .then(function (response) {
//             if (
//               !cacheResponse &&
//               /^https?:$/i.test(new URL(response.url).protocol)
//             ) {
//               cache.put(event.request, response.clone());
//             }
//             return response;
//           })
//           .catch(function () {
//             return cacheResponse;
//           });
//       });
//     })
//   );
// });
