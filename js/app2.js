$(document).ready(function() {
//--------------------------------
	var VIEWPORT_WIDTH = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	var VIEWPORT_HEIGHT = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

	/*
	*	Function to set the height of the .nav-container for responsiveness
	*/

	//function to adjust navigation height  to a percentage of viewport height depending on what device you're on. 
	function navigation_height(percent) {
		var height = VIEWPORT_HEIGHT * ( percent / 100 );
		$(".nav-container").css('height', height + 'px');
	}
	//end navigation_height




	//initialize jquery placeholder plugin
	$('input, textarea').placeholder();

	

	/*
	* Sidr content menu for responsive menu
	*/

	 $('#responsive-menu').sidr({
	 	side: 'right'
	 });



	/*
	*	Take care of the navigation hash to show/hide different views
	*/

	//function to return the current hash.
	// function get_hash() {
	// 	var currentHash = window.location.hash;
	// 	return currentHash;
	// }

	//function to set the current view and change class to active on navigation links - takes a hash parameter of the current view.  Hides previous view showing.  
	// function set_current_view(clickedNavigatoinLink) {
	// 	//get the navigation link that was clicked.
	// 	var clickedNavLink = clickedNavigatoinLink;

	// 	//get clicked nav links id
	// 	var clickedNavLinkID = clickedNavigatoinLink.attr('id');

	// 	//remove active class from previous navigation.
	// 	$(".navigation li").each(function(key, value) {
	// 		if( value.hasClass('active') ) {
	// 			value.removeClass('active');
	// 		}
	// 		//end if
	// 	});
	// 	//end remove active class

	// 	//hide previous view
	// 	$(".view").each(function(key, value) {
	// 		if( value.css('display') != "none" ) {
	// 			value.fadeOut();
	// 		}
	// 		//end if
	// 	});



	// 	//add active class to navition that was clicked
	// 	clickedNavLink.addClass('active');

	// 	//show new view
	// 	switch( clickedNavLinkID ) {
	// 	    case "blog":
	// 	        $('#blog').addClass('active');
	// 	        $('.blog').fadeIn();
	// 	        break;
	// 	    case "careers":
	// 	        $('#careers').addClass('active');
	// 	        $('.careers').fadeIn();
	// 	        break;
	// 	    case "contact":
	// 	        $('#contact').addClass('active');
	// 	        $('.contact').fadeIn();
	// 	        break;
	// 	}
	// 	//end switch
	// }


	// $(document).on('click', '.navigation a', function() {
	// 	//sent the current view.
	// 	set_current_view( $(this) );

	// });





	//functions to run on page load
	navigation_height(50);

	//functions to run on window resize
	$(window).resize(function(){
		//if viewport is resized - get the dimentions again. 
		VIEWPORT_WIDTH = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		VIEWPORT_HEIGHT = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

		navigation_height(50);
	});




//----------------------------------	
});