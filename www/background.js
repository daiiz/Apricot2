chrome.app.runtime.onLaunched.addListener(function() {
   chrome.app.window.create("index.html", {
       width : 480, maxWidth : 480,
       height: 640, maxHeight: 640,
       singleton: false
   },function(appWindow) {
   });
});
