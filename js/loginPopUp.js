function LoginPopUp(sHeader, sMenu) {
	
	var l = this;

	l.container = $(sHeader);
	l.enter = l.container.find('.login__link_log');
	l.reg = l.container.find('.login__link_reg');

	l.menu = $(sMenu);
	l.close = l.menu.find('.close__btn');
	l.menuEnter = l.menu.find('#login-menu');
	l.menuReg = l.menu.find('#reg-menu');

	l.openEnter = function (event) {
		
		event.preventDefault();

		l.menu.addClass('login__wrap_open');

		setTimeout(function () {
			l.showEnter();
		}, 500);

	}

	l.openReg = function (event) {
		
		event.preventDefault();

		l.menu.addClass('login__wrap_open');

		setTimeout(function () {
			l.showReg();
		}, 500);
		
	}

	l.showEnter =function (event) {

		if (event) event.preventDefault();
		
		l.menu.removeClass('login__wrap_reg');
		l.menu.addClass('login__wrap_enter');

	}

	l.showReg = function (event) {

		if (event) event.preventDefault();
		
		l.menu.removeClass('login__wrap_enter');
		l.menu.addClass('login__wrap_reg');

	}

	l.hideMenu = function (event) {
		
		if (event) event.preventDefault();

		l.menu.removeClass('login__wrap_open');
		l.menu.removeClass('login__wrap_enter');
		l.menu.removeClass('login__wrap_reg');

	}

	l.closeMenu = function (event) {
		
		if (event.target === this ) l.hideMenu();

	}

	l.enter.click(l.openEnter);
	l.reg.click(l.openReg);
	l.menuEnter.click(l.showEnter);
	l.menuReg.click(l.showReg);
	l.close.click(l.hideMenu);
	l.menu.click(l.closeMenu)
}