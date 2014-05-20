$(document).ready(function(){

	jQuery.fn.mostVisible = function(mySelector) {
		
		var wHeight = $(window).height()
		var wTop = $(window).scrollTop();
		var wBottom = wTop + wHeight;
		
		most_visible_height = 0;
		$most_visible = false;
		
		if(wTop < 100) return $(this).children(mySelector+':first');
		
		$(this).children(mySelector).each(function(){
			$this = $(this);
			var pHeight = $this.height()
			var pTop = $this.offset().top;
			var pBottom = pTop + pHeight;
			// outside screen at bottom or outside screen at top
			if( pTop > wBottom || pBottom < wTop ) return;
			// part of project visible
			intersect_top = (pTop < wTop) ? wTop : pTop
			intersect_bottom = (pBottom < wBottom) ? pBottom : wBottom
			intersect_height = intersect_bottom - intersect_top;
			if(intersect_height > most_visible_height) {
				$most_visible = $this;
				most_visible_height = intersect_height;
			}
			
		});
	
		return $most_visible;
	}


	var $window = $(window);

	showMenu = function() {
		$('.menu').addClass('visible-menu');
		menuVisible = true;
	}

	hideMenu = function() {
		$('.menu').removeClass('visible-menu');
		menuVisible = false;
	}

	var menuVisible = false;
	initMenu = function() {
		$(document).on('click','.menu-toggle',function(e) {
			e.preventDefault();
			if( menuVisible ) hideMenu();
			else showMenu();
		})
	}


	adjustHomeSizes = function(){
		
		var wh = $window.height();
		var ww = $window.width();

		var landscapeMaxHeight = 700 > wh ? wh : 700;
		var landscapeMaxWidth  = 940 > ww ? ww : 940;
		var portraitMaxHeight  = 700 > wh ? wh : 700;
		var portraitMaxWidth   = 700 > ww ? ww : 700;

		$('.hp-section-inner img.landscape').css({
			maxWidth: landscapeMaxWidth+'px',
			maxHeight: landscapeMaxHeight+'px'
		});
		$('.hp-section-inner img.portrait').css({
			maxWidth: portraitMaxWidth+'px',
			maxHeight: portraitMaxHeight+'px'
		});

		// offset for scroll-over
		$('.hp-section').eq(1).css({
			marginTop: $window.height()
		})

	}


	initHomeNav = function() {
		// hide inline titles
		$('.hp-section-inner h2').hide();

		// vertical center navigation
		$('.hp-nav').css({
			marginTop: ($('.hp-nav').height()*-.5 - 10)+'px'
		})
		// scroll on navigation
		$(document).on('click','.hp-nav a', function(e){
			e.preventDefault();
			e.stopPropagation();
			var nst = $(this).index() * $window.height() + 'px';
			$('html, body').animate({
				scrollTop: nst
			}, 300);
		})
		
		$(window).scroll(function(){
			// adjust navigation to scroll
			var $mv  = $('.main-home').mostVisible('.hp-section:not(".hp-header")');
			console.log( $mv.index() );
			$('.hp-nav a').removeClass('active');
			$('.hp-nav a').eq($mv.index()).addClass('active');

			// show title of most visible project
			$('h2').removeClass('fixed-title').hide();
			$mv.find('h2').addClass('fixed-title').show();

			// we're at the top
			if( $(window).scrollTop() < $(window).height() ) {
				$('h2').removeClass('fixed-title').hide();
				$('.hp-nav a').removeClass('active');
				$('.hp-nav a').eq(0).addClass('active');
			}


		});

	}


	initMenu();
	adjustHomeSizes();
	$window.resize( adjustHomeSizes );
	initHomeNav();






});