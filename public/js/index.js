window.jQuery = window.$ = require('./../../node_modules/jquery');
require('../../node_modules/bootstrap')
require('../scss/custom.scss')

// Check that service workers are registered
if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('/service-worker.js').then(function() {
    console.log('Service worker registration complete.');
  }, function() {
    console.log('Service worker registration failure.');
  });
} else {
  console.log('CLIENT: service worker is not supported.');
}