require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery',
    bootstrap: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/twbs',
    fastclick: 'fastclick',
    resizer: 'resizer'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    fastclick: {
      exports: 'FastClick'
    }
  }
});

require(['app', 'jquery', 'bootstrap'], function(app, $) {
  'use strict';
  // use app here
  console.log('Running jQuery %s', $().jquery);
  app.init();
});
