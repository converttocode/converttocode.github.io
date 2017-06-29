$(document).ready(function(){

	var height = $( window ).height();

	$.fn.ScrollView = function() {
		return this.each(function() {
			$("html, body").animate({
				scrollTop: $( this ).offset().top
			}, 1000);
		});
	}

	$(window).scroll(function() {
			console.log($(window).scrollTop());

			if ($(window).scrollTop() > 400) {

				$( "#scrollupbutton" ).slideDown('slow');

			}

			else if($(window).scrollTop() < 100) {

				$( "scrollupbutton" ).hide();

			}

			else {

				$( "#scrollupbutton" ).hide();

			}

	});

	//Auto Scroll Buttons

	$( "#aboutbutton" ).click(function() {

		$( "#about" ).ScrollView();

	});

		$( "#eventsbutton" ).click(function() {

		$( "#events" ).ScrollView();

	});

	$( "#sponsorsbutton" ).click(function() {

		$( "#sponsors" ).ScrollView();

	});

	$( "#gallerybutton" ).click(function() {

		$( "#gallery" ).ScrollView();

	});

	//Scroll up Button

	$( "#scrollupbutton" ).click(function() {

		$( "#header" ).ScrollView();

	});


});
