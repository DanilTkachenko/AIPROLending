export function scroll() {
	// smooth scrolling
	const links = document.querySelectorAll(".nav__menu a");

	links.forEach((linkEl) => {
		linkEl.onclick = function (e) {

			const href = linkEl.getAttribute("href");
			const offsetTop = document.querySelector(href).offsetTop;

			scroll({
				top: offsetTop,
				behavior: "smooth",
			});
		};
	});

	// show scroll up tooltip
	window.addEventListener("scroll", scrollUpHandler);

	function scrollUpHandler() {
		const scrollUpEl = document.querySelector("#scroll-up");
		this.scrollY >= 350
			? scrollUpEl.classList.add("show-scrollup")
			: scrollUpEl.classList.remove("show-scrollup");
	}

	// scroll sections active links
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
				? sectionClass.classList.add("nav__link_active")
				: sectionClass.classList.remove("nav__link_active");
		});
	}
}