/*global define, window, document, espn */
define(['require', 'fastclick', 'jquery', 'resizer', 'facebook'], function(require) {
  'use strict';
  var FastClick = require('fastclick');
  var jQuery = require('jquery');
  var Resizer = require('resizer');
  var FB = require('facebook');
  var social = { fb: {}, twttr: {} };
  var locals = {};
  var exports = {};
  
  social.fb.appId = '397636317042671';
  
  social.fb.params = {
    method: 'feed',
    name: 'Escape to Hawaii!',
    link: 'http://espn.com/godzilla',
    picture: 'http://a.espncdn.com/contests/godzilla/2014/display/100x100.jpg',
    caption: 'http://espn.com/godzilla',
    description: 'Enter for a chance to win a trip to Hawaii, courtesy of ESPN and Godzilla, in theatres May 16.'
  };
  
  social.fb.callback = function _fb_callback(response){
    if (response && response.post_id){
      // track post
      console.log(response);
    } else {
      // track abandoned post
      console.warn('abandoned post');
    }
  };
  
  locals.activateNav = function _activateNav(){
    var $ = jQuery, pageUrl = window.location.href, $linkGroups;
    $linkGroups = [
      $('#promo-nav-head ul.nav > li > a').not('[href*="javascript:"]'), 
      $('.footer .nav-links > li > a').not('[href*="javascript:"]')
    ];
    $.each($linkGroups, function(i, $linkGroup){
      $.each($linkGroup, function(k, $link){
        var $this = $(this);
        console.log(this.href + ' === ' + pageUrl );
        if (this.href === pageUrl){
          $this.parent().siblings().removeClass('active');
          $this.parent().addClass('active');
        }
      });
    });
  };
  
  exports.init = function _init(){
    
    jQuery(document).ready(function($){
      
      FastClick.attach(document.body);
      locals.activateNav(); 
      $('#video-carousel').carousel();
      
      $('.social').on('click', '.facebook', function(e){
        e.preventDefault();
        FB.ui(social.fb.params, social.fb.callback);
      });
      
      $('.footer').on('click', '[data-control-action="toggle-legal-panel"]', function (e){
        e.preventDefault();
        $('#legal-panel').toggleClass('open');
      });
      
      $('[data-control-action="logout"]').on('click', function (e){
        e.preventDefault();
        espn.memberservices.logout();
        return false;
      });
      
      $('#confirm-form').on('submit', function (e){
        var $this = $(this), 
          $target = $(e.target), 
          $acceptance = $this.find('input[type="checkbox"].optin');
        
        if (!$acceptance.is(':checked')){
          return false;
        }
      });
      
      $('[data-control-action="resize"]').on('click', function(e){
        e.preventDefault();
        Resizer.resize();
      });
      
      console.log('Running app.js');
      
    });
    
    window.fbAsyncInit = function _fbAsyncInit(){
      FB.init({
        appId: social.fb.appId,
        status: true,
        xfbml: true
      });
    };
    
  };
  
  return exports;
});
