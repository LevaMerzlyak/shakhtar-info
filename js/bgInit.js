function BgInit(sSelector) {
	
	var b = this;

	b.section = $(sSelector);
	b.container = b.section.find('.block__bg');
	
	b.initBg = function () {		
		b.container.each(function () {
			let src = $(this).find('img').attr('src');
			$(this).find('img').hide();
			$(this).css('background-image', 'url(' + src + ')');
		});
	}

	$(document).ready(b.initBg);

}