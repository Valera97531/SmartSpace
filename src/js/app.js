"use strict";

import * as flsFunctions from "./modules/function.js";
flsFunctions.isWebp();

import $ from "jquery";
import "slick-carousel";

// carousel slick-slider

$('.carousel').slick({
	arrows: true,
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1
});


document.addEventListener('DOMContentLoaded', () => {

	// Burger

	const headerMenu = document.querySelector('.menu'),
		headerBurger = document.querySelector('.header__burger'),
		menuClose = document.querySelector('.menu__close'),
		menuItem = document.querySelectorAll('.menu__item');

	headerBurger.addEventListener('click', () => {
		headerMenu.classList.toggle('_active');
		document.body.classList.add('_active');
	});

	menuClose.addEventListener('click', () => {
		headerMenu.classList.remove('_active');
		document.body.classList.remove('_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			headerMenu.classList.remove('_active');
			document.body.classList.remove('_active');
		});
	});

	// Smooth scroll

	const smoothLinks = document.querySelectorAll('nav a[href^="#"]');
	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener('click', function (e) {
			e.preventDefault();
			const id = smoothLink.getAttribute('href');

			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	};

	// Tabs

	const tabNavItem = document.querySelector('.tabs-deals__nav'),
		tabNavBtn = document.querySelectorAll('.tabs-deals__button'),
		tabInner = document.querySelectorAll('.tabs-deals__inner');

	if (tabNavItem) {
		tabNavItem.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs-deals__button')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (e) => {
		tabNavBtn.forEach(item => {
			item.classList.remove('_active');
		});
		document.querySelector(`[data-tabs-path="${e}"]`).classList.add('_active');

		tabInner.forEach(item => {
			item.classList.remove('_active');
		});
		document.querySelector(`[data-tabs-target="${e}"]`).classList.add('_active');
	}

	// Popup 

	const itemFeaturedBtn = document.querySelector('.item-featured__btn'),
		popupClose = document.querySelector('.popup__close'),
		popup = document.querySelector('.popup');

	itemFeaturedBtn.addEventListener('click', () => {
		popup.classList.add('_active');
	});

	popupClose.addEventListener('click', () => {
		popup.classList.remove('_active');
	});

});


