import * as flsFunctions from "./modules/function.js";
flsFunctions.isWebp();

import $ from "jquery";
import "slick-carousel";

$('.carousel').slick({
	arrows: true,
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1
});


document.addEventListener('DOMContentLoaded', () => {
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

	// const menuItemLink = document.querySelectorAll('.nav .menu__item[href="#"]');

	// menuItemLink.forEach(item => {
	// 	if (item) {
	// 		item.addEventListener('click', (e) => {
	// 			anchorId = this.getAttribute('href');
	// 			console.log(anchorId);
	// 		});
	// 	}
	// });

	// let anchors = document.querySelectorAll('.nav .menu__item[href*="#"]');
	// let anchor;
	// let anchorId;

	// for (anchor of anchors) {
	// 	if (anchor) {
	// 		anchor.addEventListener('click', function (e) {
	// 			anchorId = this.getAttribute('href');
	// 			console.log(anchorId);
	// 		});
	// 	}
	// }

	const tabNavItems = document.querySelectorAll('.tabs-deals__button'),
		tabItemsInner = document.querySelectorAll('.tabs-deals__inner');
	document.addEventListener('click', function (e) {
		const targetElement = e.target;
		let currentActiveIndex = null,
			newActiveIndex = null;
		if (targetElement.closest('.tabs-deals__button')) {
			tabNavItems.forEach((tabNavItem, index) => {
				if (tabNavItem.classList.contains('_active')) {
					currentActiveIndex = index;
					tabNavItem.classList.remove('_active');
				}
				if (tabNavItem === targetElement) {
					newActiveIndex = index;
				}
			});
			targetElement.classList.add('_active');
			tabItemsInner[newActiveIndex].classList.add('_active');
			tabItemsInner[currentActiveIndex].classList.remove('_active');
		}
	});
});


