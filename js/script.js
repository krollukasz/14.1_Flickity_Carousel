"use strict";

// Mustache

var templateCarousel = document.getElementById("carousel-template").innerHTML;
var carousel = document.querySelector(".main-carousel");
var carouselElements = "";

for ( var i = 0; i < slideData.length; i++) {
  carouselElements += Mustache.render(templateCarousel, slideData[i]);
}

carousel.innerHTML = carouselElements;

// Flickity
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
<<<<<<< HEAD
  flkty.select(0);
});

// Google map

(function() {
  window.initMap = function() {

    var mapLocation = slideData[0].coords;

    // Map zoom and center
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: mapLocation
    });

    var markers = [];
    for ( var i = 0; i < slideData.length; i++ ) {
      markers.push(new google.maps.Marker({
        position: slideData[i].coords,
        map: map,
        id: i
      }));

      // Change map position after slide change
      flkty.on('change', function(index) {
        map.panTo(slideData[index].coords);
        map.setZoom(12);
      });
    }
  };
})();
