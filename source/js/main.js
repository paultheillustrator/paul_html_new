/* Show / hide About page JS */
			$( ".about-link").click(function() {
			  $(".about").removeClass( "fadeOut" ).toggleClass( "show fadeIn" );
			});
			$( ".about").click(function() {
			  $(".about").removeClass( "show fadeIn" ).toggleClass( "fadeOut" );
			});
			/* Animate cross 
			$( ".about-link").click(function() {
			  $(".cross").removeClass( "rotate" ).toggleClass( "rotate" );
			});*/



