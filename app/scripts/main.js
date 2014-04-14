require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery',
    plugins: '//a.espncdn.com/combiner/c?js=plugins/json2.r3.js,plugins/jquery.pubsub.r5.js,plugins/ba-debug-0.4.js,espn.core.duo.r54.js,espn.storage.r6.js,registration/espn.overlay.stub.r3-18.js,registration/staticLogin.u13.r2.js',
    bootstrap: 'twbs',
    fastclick: 'fastclick',
    resizer: 'resizer',
    facebook: '//connect.facebook.net/en_US/all'
  },
  shim: {
    plugins: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    facebook: {
      exports: 'FB'
    },
    'google-analytics': {
      exports: 'ga'
    }
  }
});

require(['app', 'jquery', 'plugins', 'bootstrap'], function(app, $) {
  'use strict';
  // use app here
  console.log('Running jQuery %s', $().jquery);
  app.init();
});
