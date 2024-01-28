export function menu() {
	// consts
	const navMenuEl = document.querySelector("#nav-menu");
	const navToggleEl = document.querySelector("#nav-toggle");
	const navCloseEl = document.querySelector("#nav-close");
	const navLinksElems = document.querySelectorAll(".nav__link");
	const headerEl = document.querySelector("#header");

	// show menu
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

	// remove menu
	navLinksElems.forEach((linkEl) =>
		linkEl.addEventListener("click", linkHandler)
	);

	function linkHandler() {
		const navMenuEl = document.querySelector("#nav-menu");
		navMenuEl.classList.remove("show-menu");
	}

	// blur menu
	window.addEventListener("scroll", headerHandler);

	function headerHandler() {
		this.scrollY >= 50
			? headerEl.classList.add("header_blur")
			: headerEl.classList.remove("header_blur");
	}
}