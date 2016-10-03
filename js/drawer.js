(function($){
	var $drawer = $('#md-header__navigations'),
			$toolbar = $('.md-header__toolbar'),
			$spacer = $('.md-header__toolbar-spacer');
	
	var closeMenu = function () {
		var $overlay = $('#md-header__overlay');
		
    if($drawer.hasClass('md-header__navigations--open')) {
			$overlay.animate({opacity:'1'}, 350);
			$drawer.animate({right:'-300px'}, 350);
	    $drawer.toggleClass('md-header__navigations--open');
	    $('body').css('overflow', '');
	    $overlay.remove();
		}
	  
    return;
	}
	
  $('#md-header__menu-button').on('click', function(){
    if($drawer.hasClass('md-header__navigations--open')) {
			$drawer.animate({right:'-300px'}, 350);
	    $('body').css('overflow', '');
		}else{
			// append overlay
			var $overlay = $('<div id="md-header__overlay"></div>');
					$('body').append($overlay);
			
			$overlay.animate({opacity:'1'}, 350);
	    $drawer.animate({right:'0px'}, 350);
	    $('body').css('overflow', 'hidden');
	    
	    $('#md-header__overlay').on('click', closeMenu);
	  }
	  $drawer.toggleClass('md-header__navigations--open');
    return;
  });
	
  //$('#md-header__navigations').on('click', closeMenu);
  
  $(window).on('resize', function(){
		if($(window).width() > 737) {
			$drawer.removeAttr('style');
			
			if($drawer.hasClass('md-header__navigations--open')) {
				var $overlay = $('#md-header__overlay');
				
				$overlay.remove();
				$drawer.toggleClass('md-header__navigations--open');
				$('body').css('overflow', '');
			}
		}
	});
	
	var lastScrollTop = 0,
			delta = 5,
			toolbarHeight = $('.md-header__toolbar').outerHeight(),
			headerHeight = $('.md-header').outerHeight(),
			testHeight = 1.05*headerHeight;
			
	$(window).scroll(function(){
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
    
    if (st > lastScrollTop){
			// Scroll Down
			if( st > headerHeight) {
				$toolbar.removeClass('md-header__toolbar--show');
				$toolbar.addClass('md-header__toolbar--fixed md-header__toolbar--hide md-header__toolbar--elevate');
				$spacer.removeClass('md-header__toolbar-spacer--hide');
				$spacer.addClass('md-header__toolbar-spacer--show');
			}
			
    }else{
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$toolbar.removeClass('md-header__toolbar--hide');
				$toolbar.addClass('md-header__toolbar--show');
			}
			
			if( st <= headerHeight) {
				$toolbar.removeClass('md-header__toolbar--elevate');
			}
			
			if( st < delta) {
				$toolbar.removeClass('md-header__toolbar--fixed');
				$spacer.addClass('md-header__toolbar-spacer--hide');
				$spacer.removeClass('md-header__toolbar-spacer--show');
				$toolbar.removeClass('md-header__toolbar--hide');
				$toolbar.removeClass('md-header__toolbar--show');
			}
    }
    
    lastScrollTop = st;
	});
})(jQuery);
