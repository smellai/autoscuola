$(document).ready(function(){
	
	// Navigation
	$('nav a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').animate({
			'scrollTop': $target.offset().top
		}, 1000, 'swing');
	});

	// Select Random image
	var images = [
		{
			src: 'car.jpg',
			alt: 'Auto'
		},
		{
			src: 'driver.jpg',
			alt: 'Automobilista'
		},
		{
			src: 'moto.jpg',
			alt: 'Motocicletta'
		},
		{
			src: 'key.jpg',
			alt: 'Chiavi Auto'
		}
	];
	var randomSelect = Math.floor(Math.random() * Math.floor(4));
	$('.cover-image img').attr('src', 'images/' + images[randomSelect].src).attr('alt', images[randomSelect].alt);
});