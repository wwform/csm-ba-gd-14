$(document).ready(function(){

	var $window = $(window);

	adjustHomeSizes = function(){
		
		// offset for scroll-over
		$('.main-home').next('.main-thumbs').css({
			marginTop: $('.main-home').outerHeight()
		})


	}

	adjustHomeSizes();
	$window.resize( adjustHomeSizes );


});