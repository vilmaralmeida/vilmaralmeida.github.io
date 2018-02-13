requirejs.config({
	baseUrl: 'assets/js',
	paths: {
		handlebars: '../lib/handlebars.min',
		magnificPopup: '../lib/jquery.magnific-popup.min',
		velocity: '../lib/velocity.min',
		velocityui: '../lib/velocity.ui.min'
	}
});

// Animations
require(['velocity', 'velocityui'], function(velocity) {
	// setTimeout(function() {
	// 	$('.content').velocity('transition.bounceIn');
	// }, 500);
});
