$(document).ready(function() {
//--------------------------------
	var VIEWPORT_WIDTH = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	var VIEWPORT_HEIGHT = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)



	/*
	*	Initialize fullpage plugin.
	*/

	$('#fullpage').fullpage({
		// navigation: true,
		verticalCentered: false,
		slidesNavigation: true,
		css3: false,
		controlArrows: false,
		scrollOverflow: true,
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage']
	});


	/*
	*	Instructor and client hover effect - second page
	*/

	$( ".instructor" ).hover(
		function() {
			$('.instructor-wrap').fadeOut();
			$('#timefor-instructors').css('color', 'black');
		}, function() {
			$('.instructor-wrap').fadeIn();
			$('#timefor-instructors').css('color', 'white');
		}
	);

	$( ".client" ).hover(
		function() {
			$('.client-wrap').fadeOut();
			$('#timefor-clients').css('color', 'black');
		}, function() {
			$('.client-wrap').fadeIn();
			$('#timefor-clients').css('color', 'white');
		}
	);


	/*
	*	animation functionality
	*/

	function animate_instructor_left() {
		//get how far to animate based on screen size - plus 50 just to make sure it is off the screen.
		var width = VIEWPORT_WIDTH + 50;


		$( ".instructor" ).animate({
		  
		    right: width + "px",
		    left: (-1 * width) + "px"
		  
		  }, 1000, function() {
		  	//hide the image so if user scrolls they can't see it.
		    $( ".instructor" ).hide();
		  });
	}

	function animate_instructor_up() {
		//get how far to animate based on screen size - plus 50 just to make sure it is off the screen.
		var height = VIEWPORT_HEIGHT + 50;

		$( ".instructor" ).animate({
		  
		    bottom: height + "px",
		    top: ( -1 * height) + "px"
		  
		  }, 1000, function() {
		  	//hide the image so if user scrolls they can't see it.
		    $( ".instructor" ).hide();
		  });
	}

	function animate_client_right() {
		//get how far to animate based on screen size - plus 50 just to make sure it is off the screen.
		var width = VIEWPORT_WIDTH;

		$( ".client" ).animate({
		  
		    right: ( -1 * width ) + "px"
		  
		  }, 1000, function() {
		    $( ".client" ).hide();
		  });
	}
	//end animate_client


	function animate_client_up(time) {
		//get how far to animate based on screen size - plus 50 just to make sure it is off the screen.
		var height = VIEWPORT_HEIGHT + 50;


		$( ".client" ).animate({
		  
		    bottom: height + "px",
		    top: ( -1 * height ) + "px"
		  
		  }, time, function() {
		    $( ".client" ).hide();
		  });
	}
	//end animate_client

	//function to slide .animated-slider div to the right.
	function animated_slider_right() {
		//get how far to animate based on screen size - plus 50 just to make sure it is off the screen.
		var width = VIEWPORT_WIDTH;


		$( ".animated-slider" ).animate({
		  
		    left: ( width / 2 ) + "px"
		  
		  }, 1000, function() {
		   
		  });
	}
	//end animated slider right


	//function to slide .animated-slider div to the left.
	function animated_slider_left() {
		//get how far to animate based on screen size - plus 50 just to make sure it is off the screen.
		var width = VIEWPORT_WIDTH;


		$( ".animated-slider" ).animate({
		  
		    left: ( (width / 2) * - 1 ) + "px"
		  
		  }, 1000, function() {
		   
		  });
	}
	//end animated slider right



	//function to animate instructor left and instructor-page left.  takes a time to animate parameter
	function dual_animate_instructor(time) {
		//get how far to animate based on screen size
		var width = VIEWPORT_WIDTH / 2;

		//remove the opacity background color that's used for hover effect
		$('.opacity-background').remove();

		//animate the client up first
		animate_client_up(time);

		//use a settimeout to make sure the client is done animating before doing the other animations
		setTimeout(function(){
			//remove the client
			$('.client').remove();
			
			//multiple animations at once - .client left and 
			$(".instructor").animate({
		    	right: width + "px",
		    	left: (-1 * width) + "px"
		    }, { duration: time, queue: false }, function() {
		    	$('.instructor').remove();
		    });

		    $(".instructor-page").animate({
		       left: '0'
		    }, { duration: time, queue: false });

		}, time);
		//end settimeout

		setTimeout(function(){
			$('.instructor').remove();
		}, time * 2);
	}		
	//end dual_animate_instructor()

	function duel_animate_client(time) {
		//get how far to animate based on screen size
		var width = VIEWPORT_WIDTH / 2;

		//remove the opacity background color that's used for hover effect
		$('.opacity-background').remove();

		//animate the client up first
		animate_instructor_up(time);

		//use a settimeout to make sure the client is done animating before doing the other animations
		setTimeout(function(){
			//remove the client
			$('.instructor').remove();
			
			//multiple animations at once - .client right and .client-page right
			$(".client").animate({
		    	right: ( -1 * width ) + "px"
		    }, { duration: time, queue: false });

		    $(".client-page").animate({
		       right: '0'
		    }, { duration: time, queue: false });

		}, time);
		//end settimeout

		setTimeout(function(){
			$('.client').remove();
		}, time * 2);
	}
	//end duel_animate_client()



	//when the user clicks on the client half - what should you do. 
	$(document).on('click', '.client', function() {
		//hide the small logo
		$('#logo-animate-hide').fadeOut();
		//hide the text
		$('#animate-text').fadeOut();

		//hide the instructor page
		$('.instructor-page').remove();

		duel_animate_client(1000)

	});

	//when the user clicks on the instructor half
	$(document).on('click', '.instructor', function() {
		//hide the small logo
		$('#logo-animate-hide').fadeOut();
		//fade out the text
		$('#animate-text').fadeOut();

		//hide the client page
		$('.client-page').remove();

		dual_animate_instructor(1000);		

	});



	/*
	*	Hover effect for signup - show email signup on hover
	*/

	function hover_signup_effect() {
		if ( VIEWPORT_WIDTH > 750 ) {
			$( ".signup-widget" ).hover(
			  function() {
			    $( ".container1" ).hide();
			    $( ".container2" ).show();
			  }, function() {
			    $( ".container2" ).hide();
			    $( ".container1" ).show();
			  }
			);
			//end hover
		} else {
			$( ".container1" ).hide();
			$( ".container2" ).show();
		}
	}
	//end hover_signup_effect

	

	//functions to run on page load
	hover_signup_effect();




	//functions to run on window resize
	$(window).resize(function(){
		//if viewport is resized - get the dimentions again. 
		VIEWPORT_WIDTH = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
		VIEWPORT_HEIGHT = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
	});


	/*
	* Sidr content menu for responsive menu
	*/

	 $('#responsive-menu').sidr({
	 	side: 'right',
	 	displace: false
	 });



	 


	
//----------------------------------	
});