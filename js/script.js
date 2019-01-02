"use strict";

// Initialize carousel
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  hash: true,
  imagesLoaded: true,
  percentPosition: false
});

// Progress bar
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// Reset button
var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelector('.restart-button');

buttons = fizzyUIUtils.makeArray(buttons);
buttonGroup.addEventListener('click', function (event) {
  // filter for button clicks
  if (!matchesSelector(event.target, '.restart-button')) {
      return;
  }
  var index = buttons.indexOf(event.target);
  flkty.select(0);
});