$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:3,
		autoplay:false,
		speed:1000,
		autoplaySpeed:3000,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		rows: 1,
		responsive:[
			{
				breakpoint: 988,
				settings: {
					slidesToShow:3
				}
			},			
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.slider2').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:false,
		speed:1000,
		autoplaySpeed:3000,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		rows: 1,
		responsive:[
			{
				breakpoint: 988,
				settings: {
					slidesToShow:2
				}
			},			
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});