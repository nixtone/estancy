$(document).ready(function() {
	
	// Плавная прокрутка по якорю --v.1
	$('nav a').on('click', function(event) {
		$('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
		event.preventDefault();
	});

	// Поиск в шапке
	$(".tab-label .tab-item").click(function(event) {
		$(this).addClass('active').siblings().removeClass('active');
	});

	// reviews слайдер
	$('#reviews .slider').slick({
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    autoplay: false,
	    autoplaySpeed: 1000,
	    arrows: true,
	    /*
	    dots: true,
	    fade: true,
	    pauseOnHover: true,
		responsive: [
			{
				breakpoint: 970,
				settings: {
					slidesToShow: 1
				}

			}
	    ],
		*/
	});

});