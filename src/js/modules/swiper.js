import Swiper from 'swiper/bundle';

export function swiper() {
	const swiperBenefits = new Swiper(".benefits__swiper", {
		loop: true,
		grabCursor: true,
		slidesPerView: 1.5,
		speed: 800,
		spaceBetween: 30,
		centeredSlides: true,

		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 60,
			},
			1440: {
				slidesPerView: 3.5,
				spaceBetween: 60,
			},
		},
	});
}