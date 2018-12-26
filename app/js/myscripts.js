$(document).ready(function() {
	$(document).on('click', '.block-main-gallery-preview-img__item:not(.active)', function(){
		let a = $(this).index();

		$(this).siblings('.block-main-gallery-preview-img__item').removeClass('active');
		$(this).addClass('active');

		$(document).find('.block-main-gallery-big-img__item').removeClass('active').eq(a).addClass('active');
	});
});