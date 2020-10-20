$(function() {

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: '12px',
		readOnly: true
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
        
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
});


	var mixer = mixitup('.product__inner-box');
	
	$('.product-slider-inner').slick({
		dots: true, 
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4
	});




});
