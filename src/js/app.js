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


});


