export function products() {
	// <-- product-tabs logic -->
	const tabMonth = document.querySelectorAll('.products__tabs-months li');

	for (const months of tabMonth) {
		months.addEventListener('click', (event) => {
			const monthCount = event.target;
			clearActiveClasses();
			monthCount.classList.add('products__tab-month-active');
		})
	}

	function clearActiveClasses() {
		tabMonth.forEach((tabs) => {
			tabs.classList.remove('products__tab-month-active')
		})
	}

	// <-- product card logic -->

	const selectMonth = document.querySelectorAll('.products__tabs-months li');
	const price = document.querySelector('.products__price-currency');
	const discount = document.querySelector('.products__card-discount');
	const cardProfit = document.querySelector('.products__card-profit');
	const cardPeople = document.querySelector('.products__people-select');
	const currency = document.querySelector('.products__tabs-currency');

	const monthsSelect = {
		oneMonth: {
			currency: {
				dollar: ['$15', '$20', '$27'],
				eur: ['€14', '€19', '€25'],
				uah: ['₴567', '₴756', '₴1 020'],
			},
			discount: false,
			price: ['$15', '$20', '$27'],
			amountOfMonth: '1 month',
			numberOfPeople: ['1-2', '3-4', '5-9'],
		},

		threeMonths: {
			currency: {
				dollar: ['$40', '$55', '$71'],
				eur: ['€37', '€50', '€65'],
				uah: ['₴1513', '₴2081', '₴2686'],
			},
			price: ['$40', '$55', '$71'],
			amountOfMonth: '3 months',
			discount: ['-11%', '-8%', '-12.5%'],
			cardProfit: `<span>$60</span> $165 for 3 months`,
			numberOfPeople: ['1-2', '3-4', '5-9'],
		},

		sixMonths: {
			// currency: {
			// 	dollar: ['$40', '$55', '$71'],
			// 	eur: ['€37', '€50', '€65'],
			// 	uah: ['₴1513','₴2081','₴2686'],
			// },
			price: ['$75', '$105', '$136'],
			amountOfMonth: '6 months',
			discount: ['-25%', '-30%', '-32.5%'],
			cardProfit: `<span>$60</span> $165 for 3 months`,
			numberOfPeople: ['1-2', '3-4', '5-9'],
		},

		oneYear: {
			// currency: {
			// 	dollar: ['$40','$55','$71'],
			// 	eur: ['€37','€50','€65'],
			// 	uah: ['₴1513','₴2081','₴2686'],
			// },
			price: ['$100', '$150', '$200'],
			discount: false,
			amountOfMonth: '1 year',
			cardProfit: `<span>$180</span> $165 for 3 months`,
			numberOfPeople: ['1-2', '3-4', '5-9'],
		}

	}

	const { oneMonth } = monthsSelect;
	const { threeMonths } = monthsSelect;
	const { sixMonths } = monthsSelect;
	const { oneYear } = monthsSelect;

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

	function checkPeople(m) {
		const selectedValue = cardPeople.value;

		switch (selectedValue) {
			case '1-2':
				price.textContent = m.price[0];
				discount.textContent = m.discount[0] || '';
				break;

			case '3-4':
				price.textContent = m.price[1];
				discount.textContent = m.discount[1] || '';
				break;

			case '5-9':
				price.textContent = m.price[2];
				discount.textContent = m.discount[2] || '';
				break;

			default:
				break;
		}
		return price.textContent;
	}

	numberOfPeople(threeMonths);

	function handleSelectClick(e) {
		const selectData = e.target.innerText;

		switch (selectData) {
			case oneMonth.amountOfMonth:
				discount.innerHTML = '';
				discount.classList.remove('products__card-discount');
				cardProfit.innerHTML = '';
				price.innerHTML = checkPeople(oneMonth);
				numberOfPeople(oneMonth)
				break;

			case threeMonths.amountOfMonth:
				discount.innerHTML = threeMonths.discount[1];
				discount.classList.add('products__card-discount');
				cardProfit.innerHTML = threeMonths.cardProfit;
				price.innerHTML = checkPeople(threeMonths);
				numberOfPeople(threeMonths);
				break;

			case sixMonths.amountOfMonth:
				discount.innerHTML = sixMonths.discount[1];
				discount.classList.add('products__card-discount');
				cardProfit.innerHTML = sixMonths.cardProfit;
				price.innerHTML = checkPeople(sixMonths);
				numberOfPeople(sixMonths);
				break;

			case oneYear.amountOfMonth:
				discount.innerHTML = '';
				discount.classList.remove('products__card-discount');
				cardProfit.innerHTML = '';
				price.innerHTML = checkPeople(oneYear);
				numberOfPeople(oneYear)
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
	const flippedButtonEl = document.querySelector(".front-button");
	const backButtonEl = document.querySelector(".back-button");

	flippedButtonEl.addEventListener("click", function () {
		this.closest(".products__card-container").classList.toggle("flipped");
	});

	backButtonEl.addEventListener('click', function () {
		this.closest('.products__card-container').classList.toggle('flipped');
	})
}