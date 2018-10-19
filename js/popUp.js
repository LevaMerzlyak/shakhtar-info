function PopUp(sHeader, sLoginMenu) {
	
	var p = this;

	p.header = $(sHeader);
	p.container = p.header.find('.login');
	p.enter = p.container.find('.login__link_log');
	p.reg = p.container.find('.login__link_reg');


	p.menu = $(sLoginMenu);
	p.close = p.menu.find('.close__btn');
	p.menuEnter = p.menu.find('#login-menu');
	p.menuReg = p.menu.find('#reg-menu');

	p.avatar = p.container.find('.user__photo');
	p.avatarMenu = p.header.find('.avatar__menu');

	p.openEnter = function (event) {
		
		event.preventDefault();

		p.menu.addClass('login__wrap_open');

		setTimeout(function () {
			p.showEnter();
		}, 500);

	}

	p.openReg = function (event) {
		
		event.preventDefault();

		p.menu.addClass('login__wrap_open');

		setTimeout(function () {
			p.showReg();
		}, 500);
		
	}

	p.showEnter =function (event) {

		if (event) event.preventDefault();
		
		p.menu.removeClass('login__wrap_reg');
		p.menu.addClass('login__wrap_enter');

	}

	p.showReg = function (event) {

		if (event) event.preventDefault();
		
		p.menu.removeClass('login__wrap_enter');
		p.menu.addClass('login__wrap_reg');

	}

	p.hideMenu = function (event) {
		
		if (event) event.preventDefault();

		p.menu.removeClass('login__wrap_open');
		p.menu.removeClass('login__wrap_enter');
		p.menu.removeClass('login__wrap_reg');

	}

	p.closeMenu = function (event) {
		
		if (event.target === this ) p.hideMenu();

	}

	p.openAvatarMenu = function () {

		p.avatarMenu.toggleClass('avatar__menu_open');

	}

	p.enter.click(p.openEnter);
	p.reg.click(p.openReg);
	p.menuEnter.click(p.showEnter);
	p.menuReg.click(p.showReg);
	p.close.click(p.hideMenu);
	p.menu.click(p.closeMenu);

	p.avatar.click(p.openAvatarMenu);
}