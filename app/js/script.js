$(document).ready(function() {
$('.portfolio__carousel').owlCarousel({
	itemsCustom: [ [0, 1], [500, 1],[660,1], [767, 3],[992,3]],
  	autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
	pagination: false,
	navigation:true,
	slideSpeed:500,
	stagePadding: 50,
	autoHeight:true
	}); 
});	