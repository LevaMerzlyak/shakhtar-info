function Gallery(sSelector) {

	g = this;

	g.gallery = $(sSelector);
	g.preview = g.gallery.find('.galleryPreview__img');

	g.prevBtn = g.gallery.find('.gallery__btn_prev');
	g.nextBtn = g.gallery.find('.gallery__btn_next');

	g.thumbs = g.gallery.find('.thumbnail__link');
	g.active = 'thumbnail__link_active';
	g.length = g.thumbs.length;
	g.current = 0;

	g.galleryInit = function () {

		let cur = g.thumbs.eq(g.current);
		let src = cur.find('.thumbnail__img').attr('src');

		g.gallery.find('.' + g.active).removeClass(g.active);

		cur.addClass(g.active);
		src = src.replace('_thumb');
		g.preview.attr('src', src);
		
	}

	g.showImage = function (event) {
		
		event.preventDefault();

		g.current = g.thumbs.index(this);

		g.galleryInit();

	}

	g.showPrev = function (event) {
		
		event.preventDefault();

		g.current--;

		g.shift();

	}

	g.showNext = function (event) {
		
		event.preventDefault();

		g.current++;

		g.shift();

	}

	g.shift = function () {
		
		if (g.current > (g.length - 1)) g.current = 0;
		if (g.current < 0) g.current = g.length - 1;

		g.galleryInit();

	}


	$(document).ready(g.galleryInit);
	g.thumbs.click(g.showImage);
	g.prevBtn.click(g.showPrev);
	g.nextBtn.click(g.showNext);

}