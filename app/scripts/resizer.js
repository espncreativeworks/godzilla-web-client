/* global define, self, top, document */
define(function() {
  'use strict';
  var exports = {};
  
  exports.resize = function(){
    if (self !== top || document.getElementById('toolbar') && document.getElementById('toolbar').getAttribute('data-resizer')){
      console.log('Already resized this page.');
      return false;
    }
    document.write('<!DOCTYPE HTML><html style="opacity:0;"><head><meta charset="utf-8"/></head><body><a data-viewport="320x480" data-icon="mobile">Mobile (e.g. Apple iPhone)</a><a data-viewport="320x568" data-icon="mobile" data-version="5">Apple iPhone 5</a><a data-viewport="600x800" data-icon="small-tablet">Small Tablet</a><a data-viewport="768x1024" data-icon="tablet">Tablet (e.g. Apple iPad 2-3rd, mini)</a><a data-viewport="1280x800" data-icon="notebook">Widescreen</a><a data-viewport="1920×1080" data-icon="tv">HDTV 1080p</a><script src="http://lab.maltewassermann.com/viewport-resizer/resizer.min.js"></script></body></html>');
  };
  
  return exports;
});
