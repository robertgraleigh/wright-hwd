/* creates smooth scroll function on page links */
(function (){
	$(document).ready(function(){
		$('a[href^="#"]').on('click',function (e) {
			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate({
					'scrollTop': $target.offset().top-80
			}, 900, 'swing', function () {
					window.location.hash = target;
			});
		});
	});
}());