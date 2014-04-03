/*global define */
define(['require', 'fastclick', 'jquery', 'resizer'], function(require) {
  'use strict';
  var FastClick = require('fastclick');
  var jQuery = require('jquery');
  var Resizer = require('resizer');
  var exports = {};
  
  exports.init = function _init(){
    jQuery(document).ready(function($){
      FastClick.attach(document.body);
      $('#video-carousel').carousel();
      $('.footer').on('click', '[data-control-action="toggle-legal-panel"]', function (e){
        e.preventDefault();
        $('#legal-panel').toggleClass('open');
      });
      $('[data-control-action="resize"]').on('click', function(e){
        e.preventDefault();
        Resizer.resize();
      });
      console.log('Running app.js');
    });
  };
  
  return exports;
});
