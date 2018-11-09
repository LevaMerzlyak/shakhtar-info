function VideoPlay(sSelector) {
	
	v = this;

	v.player = $(sSelector);
	v.poster = v.player.find('.videoPlayer__poster');
	v.iframe = v.player.find('.videoPlayer__iframe');

	v.play = function (event) {

		event.preventDefault();

		var src = v.iframe.data('src');

		v.player.addClass('videoPlayer_active');

		v.iframe.attr('src', src);

	}

	v.poster.click(v.play);

}