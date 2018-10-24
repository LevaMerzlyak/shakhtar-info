function PopUp(sHeader, sLoginMenu) {
	
	var p = this;

	p.header = $(sHeader);
	p.login = p.header.find('.login');
	p.enter = p.login.find('.login__link_log');
	p.reg = p.login.find('.login__link_reg');

	p.searchBtn = p.header.find('.search__link');
	p.searchMenu = p.header.find('.search__block');
	p.searchMenuOpen = false; 

	p.menu = $(sLoginMenu);
	p.close = p.menu.find('.close__btn');
	p.menuEnter = p.menu.find('#login-menu');
	p.menuReg = p.menu.find('#reg-menu');

	p.avatar = p.login.find('.user__photo');
	p.avatarMenu = p.header.find('.avatar__menu');
	p.avatarSubmit = p.avatarMenu.find('#avatarSubmit');
	p.avatarMenuOpen = false; 

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

	p.openCloseAvatarMenu = function () {		

		if (p.searchMenuOpen) p.closeSearchMenu();

		if (p.avatarMenuOpen) {
			p.closeAvatarMenu();
		} else {
			p.openAvatarMenu();
		}

	}

	p.openAvatarMenu = function () {
		
		p.avatarMenu.addClass('avatar__menu_open');

		p.avatarMenuOpen = true;

	}

	p.closeAvatarMenu = function () {
		
		p.avatarMenu.removeClass('avatar__menu_open');

		p.avatarMenuOpen = false;

	}

	p.openCloseSearchMenu = function (event) {

		event.preventDefault();

		if (p.avatarMenuOpen) p.closeAvatarMenu();

		if (p.searchMenuOpen) {
			p.closeSearchMenu();
		} else {
			p.openSearchMenu();
		}

	}

	p.openSearchMenu = function () {
		
		p.searchMenu.addClass('search__block_open');

		p.searchMenuOpen = true;

	}

	p.closeSearchMenu = function () {

		p.searchMenu.removeClass('search__block_open');

		p.searchMenuOpen = false;

	}

	p.enter.click(p.openEnter);
	p.reg.click(p.openReg);
	p.menuEnter.click(p.showEnter);
	p.menuReg.click(p.showReg);
	p.close.click(p.hideMenu);
	p.menu.click(p.closeMenu);

	p.avatar.click(p.openCloseAvatarMenu);
	p.avatarSubmit.click(p.closeAvatarMenu);

	p.searchBtn.click(p.openCloseSearchMenu);
	
}