

;(function($){

	$(document).ready(function(){
	
		var $gallery = $('.works__gallery').isotope({
			itemSelector: '.works__gallery-item',
			percentPosition: true, 
			masonry: {
				columnWidth: '.works__gallery-sizer'
			}
		});
		$('.works__filter').on('click', 'a', function(evt){
			evt.preventDefault();
			var $filterValue = $(this).data('filter');

			$gallery.isotope({filter: filterValue});
			$(this).addClass('active').siblings().removeClass('active');
		});
		$('.team__slider').slick({
			dots: true,
			arrows: false,
			fade: false,
			speed: 600
		});
	});
	
})(jQuery);