/* Show / hide About page JS */
			$( ".about-link").click(function() {
			  $(".about").removeClass( "fadeOut" ).toggleClass( "show fadeIn" );
			});
			$( ".about").click(function() {
			  $(".about").removeClass( "show fadeIn" ).toggleClass( "fadeOut" );
			});


