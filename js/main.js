/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() { // when the document is ready (has loaded)

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header'),

			// modals
			$modals = $(".modal"),

			$tedModal = $("#tedModal"), //ted's
			$tedBtn = $("#tedBtn"),

			$frankModal = $("#frankModal"), //frank's
			$frankBtn = $("#frankBtn"),

			$glennModal = $("#glennModal"), //glenn's
			$glennBtn = $("#glennBtn"),

			$martyModal = $("#martyModal"), //marty's
			$martyBtn = $("#martyBtn"),

			$dannModal = $("#dannModal"), //dann's
			$dannBtn = $("#dannBtn"),

			$span = $(".close");

		// Modal for instructor bios
			$tedBtn.click(function(){
    			// $tedModal.css("display","block");
    			$tedModal.css("visibility","visible");
    			$tedModal.css("opacity","1");
			});

			$frankBtn.click(function(){
    			$frankModal.css("visibility","visible");
    			$frankModal.css("opacity","1");
			});

			$glennBtn.click(function(){
    			$glennModal.css("visibility","visible");
    			$glennModal.css("opacity","1");
			});

			$martyBtn.click(function(){
    			$martyModal.css("visibility","visible");
    			$martyModal.css("opacity","1");
			});

			$dannBtn.click(function(){
    			$dannModal.css("visibility","visible");
    			$dannModal.css("opacity","1");
			});

			$modals.mousedown(function(e) {
				var clicked = $(e.target);  //get the element clicked
				if (clicked.is($modals)) {
					$modals.css("visibility", "hidden");
					$modals.css("opacity", "0");  //click happened outside the dialog, close it
				}
				else {
					$modals.css("visibility", "hidden");
					$modals.css("opacity", "0");  //click happened inside the dialog, close it
				}
			});
			
		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});

})(jQuery);
