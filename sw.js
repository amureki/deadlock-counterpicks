if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/counterpicks/sw.js', {scope: '/counterpicks/'})
      .then(() => console.log('Service Worker registered with scope'))
      .catch(() => console.error('Service Worker registration failed'));
  });
}
