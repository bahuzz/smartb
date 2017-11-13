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

$('.video__carousel').owlCarousel({
	itemsCustom: [ [0, 1], [500, 1],[660,1], [767, 2],[992,2]],
  	autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
	pagination: false,
	navigation:true,
	slideSpeed:500,
	stagePadding: 50,
	autoHeight:true
	});

$('.logo-carousel').owlCarousel({
	itemsCustom: [ [0, 1], [500, 1],[660,1], [767, 4],[992,4]],
  	autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
	pagination: false,
	navigation:true,
	slideSpeed:500,
	stagePadding: 50,
	autoWidth: true
	});

$('.reviews-slider').owlCarousel({
	itemsCustom: [ [0, 1], [500, 1],[660,1], [767, 3],[992,3]],
  	autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
	pagination: false,
	navigation:true,
	slideSpeed:500,
	stagePadding: 50,
	autoWidth: true
	});
});	