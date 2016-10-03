/**
 * Material Design Tiles Animation 
 */

(function($) {
	var speed = 1500;
	var container =  $('.display-animation');
	container.each(function() {
		var elements = $(this).children();
		elements.each(function() {
				var elementOffset = $(this).offset();
				var offset = elementOffset.left*0.8 + elementOffset.top;
				var delay = parseFloat(offset/speed).toFixed(2);
				$(this)
						.css("-webkit-animation-delay", delay+'s')
						.css("-o-animation-delay", delay+'s')
						.css("animation-delay", delay+'s')
						.addClass('animated');
		});
	});
})(jQuery);

/**
 * Material Design Ripple Effect
 * TODOS: 
 * - longpress: ripple
 */
(function($) {
    $(".md-ripple__effect").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".md-ripple__ink").length == 0) {
            rippler.append("<span class='md-ripple__ink'></span>");
        }

        var ink = rippler.find(".md-ripple__ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
            top: y+'px',
            left:x+'px'
        }).addClass("animate");
    })
})(jQuery);
