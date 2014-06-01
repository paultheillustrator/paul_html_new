/* Show / hide About page JS */
			$( ".about-link").click(function() {
			  $(".about").removeClass( "hide fadeOut" ).toggleClass( "show fadeIn" );
			});
			$( ".about").click(function() {
			  $(".about").removeClass( "show fadeIn" ).toggleClass( "hide fadeOut" );
			});
			/* Animate cross 
			$( ".about-link").click(function() {
			  $(".cross").removeClass( "rotate" ).toggleClass( "rotate" );
			});*/