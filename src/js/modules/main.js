// <-- show menu -->
import Swiper from 'swiper/bundle';

export function main () {

const navMenuEl = document.querySelector("#nav-menu");
const navToggleEl = document.querySelector("#nav-toggle");
const navCloseEl = document.querySelector("#nav-close");

navToggleEl.addEventListener("click", () =>
	navMenuEl.classList.add("show-menu")
);

navCloseEl.addEventListener("click", () =>
	navMenuEl.classList.remove("show-menu")
);

document.addEventListener("click", (e) => {
	if (
		!e.target.classList.contains("ri-menu-fill") &&
		!e.target.classList.contains("show-menu")
	)
		navMenuEl.classList.remove("show-menu");
});

// <-- remove menu mobile -->
const navLinksElems = document.querySelectorAll(".nav__link");

navLinksElems.forEach((linkEl) =>
	linkEl.addEventListener("click", linkHandler)
);

function linkHandler() {
	const navMenuEl = document.querySelector("#nav-menu");
	navMenuEl.classList.remove("show-menu");
}

// <-- smooth scrolling -->
const links = document.querySelectorAll(".nav__menu a");

links.forEach((linkEl) => {
	linkEl.onclick = function (e) {
		e.preventDefault();

		const href = linkEl.getAttribute("href");
		const offsetTop = document.querySelector(href).offsetTop;

		scroll({
			top: offsetTop,
			behavior: "smooth",
		});
	};
});

// <-- add blur header -->
window.addEventListener("scroll", headerHandler);

function headerHandler() {
	const headerEl = document.querySelector("#header");
	this.scrollY >= 50
		? headerEl.classList.add("blur-header")
		: headerEl.classList.remove("blur-header");
}

// <-- show scroll up tooltip -->
window.addEventListener("scroll", scrollUpHandler);

function scrollUpHandler() {
	const scrollUpEl = document.querySelector("#scroll-up");
	this.scrollY >= 350
		? scrollUpEl.classList.add("show-scrollup")
		: scrollUpEl.classList.remove("show-scrollup");
}

// <-- scroll sections active links -->
const sectionsElems = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
	const scrollDown = window.scrollY;

	sectionsElems.forEach((sectionEl) => {
		const sectionHeight = sectionEl.offsetHeight;
		const sectionTop = sectionEl.offsetTop - 58;
		const sectionId = sectionEl.getAttribute("id");
		const sectionClass = document.querySelector(
			`.nav__menu a[href*=${sectionId}]`
		);

		scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight
			? sectionClass.classList.add("active-link")
			: sectionClass.classList.remove("active-link");
	});
}
// <-- swiper benefits -->
const swiperBenefits = new Swiper(".benefit__swiper", {
	loop: true,
	grabCursor: true,
	slidesPerView: 1.5,
	speed: 800,
	spaceBetween: 30,
	centeredSlides: true,

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

// <-- flip product card -->
const flippedButtonEl = document.querySelector(".flip-button");

flippedButtonEl.addEventListener("click", function () {
	this.closest(".card").classList.toggle("flipped");
});

// <-- accordion faq -->
const questionsElems = document.querySelectorAll(".faq__question");

let activeIndex;

questionsElems.forEach((elem, i) => {
	elem.addEventListener("click", (e) => {
		if (activeIndex === i) {
			elem.querySelector("input").checked = false;
			elem.querySelector("label").style.borderRadius = "10px";
			elem.querySelector(".collapsible").style.borderRadius = "10px";
			elem
				.querySelector(".ri-close-line")
				?.classList.replace("ri-close-line", "ri-add-line");
		}

		if (elem.querySelector("input").checked) {
			activeIndex = i;

			questionsElems.forEach((el, i) => {
				const question = el.querySelector("label");
				const answer = el.querySelector(".collapsible");
				const icon = el.querySelector(".ri-close-line");
				const isActive = i === activeIndex;

				if (isActive) {
					question.style.borderRadius = "10px 10px 0 0";
					answer.style.borderRadius = "0 0 10px 10px";
					el.querySelector(".ri-add-line").className = "ri-close-line";
				} else {
					question.style.borderRadius = "10px";
					answer.style.borderRadius = "10px";
					if (el.querySelector(".ri-add-line"))
						el.querySelector(".ri-add-line").className = "ri-add-line";
					if (el.querySelector(".ri-close-line"))
						el.querySelector(".ri-close-line").className = "ri-add-line";
				}
			});
		}
	});
});

}