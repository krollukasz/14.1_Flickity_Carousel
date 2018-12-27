"use strict";

// Mustache

var templateCarousel = document.getElementById("carousel-template");
var carousel = document.getElementsByClassName(".main-carousel");

Mustache.parse(templateCarousel);
var carouselElements = "";

for ( var i = 0; i < slideData.length; i++) {
  console.log(slideData);
  carouselElements += Mustache.render(templateCarousel, slideData[i]);
}

var fullSlide = Mustache.render(templateCarousel, carouselElements);

carousel.innerHTML = carouselElements;

// Flickity
// Initialize carousel
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true
});

// Progress bar
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});


// Photo description
var flkty = new Flickity( '.main-carousel', {
  imagesLoaded: true,
  percentPosition: false
});

var caption = document.querySelector('.caption');

flkty.on( 'select', function() {
  caption.textContent = flkty.selectedElement.alt;
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
  flkty.select(index);
});