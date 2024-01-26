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

// <-- product-tabs logic -->
const tabMonth = document.querySelectorAll('.product__tabs-months li');

for (const months of tabMonth) {
		months.addEventListener('click', (event) => {
			const monthCount = event.target;
				clearActiveClasses();
				monthCount.classList.add('product__tab-month-active');
		})
}

function clearActiveClasses () {
	tabMonth.forEach((tabs) => {
		tabs.classList.remove('product__tab-month-active')
	})
}

// <-- product card logic -->

const selectMonth = document.querySelectorAll('.product__tabs-months li');
const price = document.querySelector('.price__currency');
const discount = document.querySelector('.product__card-discount');
const cardProfit = document.querySelector('.product__card-profit');
const cardPeople = document.querySelector('.card__people-select');
const currency = document.querySelector('.product__tabs-currency');

const monthsSelect = {
	oneMonth: {
		currency: {
			DOLLARS: ['$15','$20','$27'],
			EUR: ['€14','€19','€25'],
			UAH: ['₴567','₴756','₴1 020'],
		},
		discount: false,
		price: ['$15','$20','$27'],
		amountOfMonth: '1 month',
		numberOfPeople: ['1-2', '3-4', '5-9'],
	},

	threeMonths: {
		currency: {
			DOLLARS: ['$40','$55','$71'],
			EUR: ['€37','€50','€65'],
			UAH: ['₴1513','₴2081','₴2686'],
		},
		price: ['$40','$55','$71'],
		amountOfMonth: '3 months',
		discount: ['-11%','-8%','-12.5%'],
		cardProfit: `<span>$60</span> $165 for 3 months`,
		numberOfPeople: ['1-2', '3-4', '5-9'],
	},

	sixMonths: {
		currency: {
			DOLLARS: ['$40','$55','$71'],
			EUR: ['€37','€50','€65'],
			UAH: ['₴1513','₴2081','₴2686'],
		},
		price: ['$75','$105','$136'],
		amountOfMonth: '6 months',
		discount: ['-25%','-30%','-32.5%'],
		cardProfit: `<span>$60</span> $165 for 3 months`,
		numberOfPeople: ['1-2', '3-4', '5-9'],
	},

	oneYear: {
		currency: {
			DOLLARS: ['$40','$55','$71'],
			EUR: ['€37','€50','€65'],
			UAH: ['₴1513','₴2081','₴2686'],
		},
		price: ['$100','$150','$200'],
		discount: false,
		amountOfMonth: '1 year',
		cardProfit: `<span>$60</span> $165 for 3 months`,
		numberOfPeople: ['1-2', '3-4', '5-9'],
	}

}

const oneMonth = monthsSelect.oneMonth;
const threeMonths = monthsSelect.threeMonths;
const sixMonths = monthsSelect.sixMonths;
const oneYear = monthsSelect.oneYear;

function numberOfPeople(month) {
	cardPeople.addEventListener('change', () => {
		const selectedValue = cardPeople.value;

		switch (selectedValue) {
			case '1-2':
				price.textContent = month.price[0];
				discount.innerHTML = month.discount[0] || '';
				break;

			case '3-4':
				price.textContent = month.price[1];
				discount.innerHTML = month.discount[1] || '';
				break;

			case '5-9':
				price.textContent = month.price[2];
				discount.innerHTML = month.discount[2] || '';
				break;

			default:
				break;
		}
	})
}

numberOfPeople(monthsSelect.threeMonths);

function handleSelectClick(e) {
	const selectData = e.target.innerText;

	switch (selectData) {
		case oneMonth.amountOfMonth:
			price.textContent = oneMonth.price[1]
			discount.innerHTML = '' ;
			discount.classList.remove('product__card-discount') ;
			cardProfit.innerHTML = '';
			numberOfPeople(oneMonth);
			break;

		case threeMonths.amountOfMonth:
			price.textContent = threeMonths.price[1]
			discount.innerHTML = threeMonths.discount[1] ;
			discount.classList.add('product__card-discount');
			cardProfit.innerHTML = threeMonths.cardProfit;
			numberOfPeople(threeMonths);
			break;

		case sixMonths.amountOfMonth:
			price.textContent = sixMonths.price[1]
			discount.innerHTML = sixMonths.discount[1] ;
			discount.classList.add('product__card-discount');
			cardProfit.innerHTML = sixMonths.cardProfit;
			numberOfPeople(sixMonths);
			break;

		case oneYear.amountOfMonth:
			price.textContent = oneYear.price[1]
			discount.innerHTML = '' ;
			discount.classList.remove('product__card-discount') ;
			cardProfit.innerHTML = '';
			numberOfPeople(oneYear);
			break;

			default:
			console.log('Done!');
			break;
	}

}

for (const selected of selectMonth) {
	selected.addEventListener('click', handleSelectClick);
}


// <-- flip product card -->
const flippedButtonEl = document.querySelector(".flip-button");
const backButtonEl = document.querySelector(".back-button");

flippedButtonEl.addEventListener("click", function () {
	this.closest(".product__card-container").classList.toggle("flipped");
});

backButtonEl.addEventListener('click', function ()  {
	this.closest('.product__card-container').classList.toggle('flipped');
})

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