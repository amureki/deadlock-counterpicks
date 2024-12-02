if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/deadlock-counterpicks/sw.js', {scope: '/deadlock-counterpicks/'})
      .then(() => console.log('Service Worker registered with scope'))
      .catch(() => console.error('Service Worker registration failed'));
  });
}
