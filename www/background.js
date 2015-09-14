// background.js for chrome apps
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('foo.html', {
     width: 478, maxWidth: 478, height: 339, maxHeight: 339,
     singleton: false
  },function(appWindow) {
  });
});
