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

// Photo description
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

// Google map
(function(){ 
	
  	window.initMap = function() {
      var mapLocation = slideData[i].coords;  
		
		// Map zoom and center
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 14,
			center: mapLocation
		});
    
    for ( i = 0; i < slideData.length; i++) {
      var markers = new google.maps.Marker({
        position: mapLocation
        map: map
        id: i
      })
      maker[i].addListener("click", function(){
        // zmiana lokalizacji na mapie
      })
      
    };
    

    // markers[i].addListener("click", function({
      // flkty.select(id)
    // }));
	}	
	 
})();  