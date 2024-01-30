export function products() {
	const tabMonth = document.querySelectorAll('.products__tabs-months li');
	const selectMonth = document.querySelectorAll('.products__tabs-months li');
	const price = document.querySelector('.currency_price');
	const discount = document.querySelector('.products__card-discount');
	const cardProfit = document.querySelector('.products__card-profit');
	const cardPeople = document.querySelector('.products__people-select');
	const currency = document.querySelector('.products__tabs-currency');

	// <-- product-tabs logic -->
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

	// array all months
	const monthsArray = {
		oneMonth: {
			currency: {
				dollar: ['$ 15', '$ 20', '$ 30'],
				eur: ['€ 14', '€ 19', '€ 28'],
				uah: ['₴ 570', '₴ 760', '₴ 1 140'],
			},
			discount: [],
			cardProfitforUSD: [],
			cardProfitforEUR: [],
			cardProfitforUAH: [],
			amountOfMonth: '1 month',
			numberOfPeople: ['1-2', '3-4', '5-9'],
		},
		threeMonths: {
			currency: {
				dollar: ['$ 13', '$ 18', '$ 26'],
				eur: ['€ 12', '€ 16', '€ 24'],
				uah: ['₴ 495', '₴ 685', '₴ 990'],
			},
			amountOfMonth: '3 months',
			discount: ['-11%', '-8%', '-13%'],
			cardProfitforUSD: [`<span>$45</span> $39 for 3 months`,
												 `<span>$60</span> $54 for 3 months`,
												 `<span>$90</span> $78 for 3 months`],

			cardProfitforEUR: [`<span>€42</span> €36 for 3 months`,
									       `<span>€55</span> €49 for 3 months`,
									       `<span>€83</span> €72 for 3 months`],

			cardProfitforUAH: [`<span>₴1705</span> ₴1477 for 3 months`,
									       `<span>₴2272</span> ₴2045 for 3 months`,
									       `<span>₴3410</span> ₴2955 for 3 months`],

			numberOfPeople: ['1-2', '3-4', '5-9'],
		},
		sixMonths: {
			currency: {
				dollar: ['$ 11', '$ 14', '$ 20'],
				eur: ['€ 10', '€ 13', '€ 18'],
				uah: ['₴ 420','₴ 530','₴ 760'],
			},
			amountOfMonth: '6 months',
			discount: ['-25%', '-30%', '-32%'],
			cardProfitforUSD: [`<span>$90</span> $66 for 3 months`,
									 			 `<span>$120</span> $84 for 3 months`,
									       `<span>$180</span> $120 for 3 months`],

			cardProfitforEUR: [`<span>€83</span> €61 for 3 months`,
									       `<span>€110</span> €77 for 3 months`,
									       `<span>€166</span> €110 for 3 months`],

			cardProfitforUAH: [`<span>₴3410</span> ₴2500 for 3 months`,
									       `<span>₴4545</span> ₴3180 for 3 months`,
									       `<span>₴3790</span> ₴4545 for 3 months`],

			numberOfPeople: ['1-2', '3-4', '5-9'],
		},
		oneYear: {
			currency: {
				dollar: ['$ 8', '$ 11', '$ 17'],
				eur: ['€ 7','€ 10','€ 15'],
				uah: ['₴ 305','₴ 420','₴ 645'],
			},
			discount: ['-45%','-45%','-45%'],
			amountOfMonth: '1 year',
			cardProfitforUSD: [`<span>$145</span> $96 for 3 months`,
									 			 `<span>$240</span> $132 for 3 months`,
									 			 `<span>$360</span> $200 for 3 months`],

			cardProfitforEUR: [`<span>€134</span> €88 for 3 months`,
									       `<span>€220</span> €122 for 3 months`,
									       `<span>€332</span> €185 for 3 months`],

			cardProfitforUAH: [`<span>₴5490</span> ₴3635 for 3 months`,
									       `<span>₴9090</span> ₴5000 for 3 months`,
									       `<span>₴13 635</span> ₴7575 for 3 months`],

			numberOfPeople: ['1-2', '3-4', '5-9'],
		}
	}

	const { oneMonth } = monthsArray;
	const { threeMonths } = monthsArray;
	const { sixMonths } = monthsArray;
	const { oneYear } = monthsArray;

// start function for first clicks
	numberOfPeople(oneYear)
	checkCurrency(oneYear,1)
//=============================

	// function for change currency
	function changeCurrency(m, n) {
			const currentValue = currency.value;
			switch (currentValue) {
				case '€ EUR':
					price.textContent = m.currency.eur[n]
					cardProfit.innerHTML = m.cardProfitforEUR[n] || '';
					checkCurrency(m,n)
					break;
				case '$ USD':
					price.textContent =  m.currency.dollar[n]
					cardProfit.innerHTML = m.cardProfitforUSD[n] || '';
					checkCurrency(m,n)
					break;
				case '₴ UAH':
					price.textContent = m.currency.uah[n]
					cardProfit.innerHTML = m.cardProfitforUAH[n] || '';
					checkCurrency(m,n)
					break;

				default:
					price.textContent = m.currency.dollar[n]
					cardProfit.innerHTML = m.cardProfitforUSD[n] || '';
					checkCurrency(m,n)
					break;
				}
				return price.textContent
	}

	// function for currency checking
	function checkCurrency(m,n) {
		currency.addEventListener('change', () => {
			const currentValue = currency.value
			switch (currentValue) {
				case '€ EUR':
					price.textContent = m.currency.eur[n]
					cardProfit.innerHTML = m.cardProfitforEUR[n] || '';
					break;
				case '$ USD':
					price.textContent =  m.currency.dollar[n]
					cardProfit.innerHTML = m.cardProfitforUSD[n] || '';
					break;
				case '₴ UAH':
					price.textContent = m.currency.uah[n]
					cardProfit.innerHTML = m.cardProfitforUAH[n] || '';
					break;

				default:
					price.textContent = m.currency.dollar[n]
					cardProfit.innerHTML = m.cardProfitforUSD[n] || '';
					break;
				}
		})
	}

	// function for people-select
	function numberOfPeople(month) {
		cardPeople.addEventListener('change', () => {
			const selectedValue = cardPeople.value;

			switch (selectedValue) {
				case '1-2':
					changeCurrency(month, 0)
					discount.innerHTML = month.discount[0] || '';
					break;

				case '3-4':
					changeCurrency(month, 1)
					discount.innerHTML = month.discount[1] || '';
					break;

				case '5-9':
					changeCurrency(month, 2)
					discount.innerHTML = month.discount[2] || '';
					break;

				default:
					break;
			}
		})
	}

	// function people-select checking
	function checkPeople(m) {
		const selectedValue = cardPeople.value;

		switch (selectedValue) {
			case '1-2':
				changeCurrency(m, 0)
				discount.textContent = m.discount[0] || '';
				break;

			case '3-4':
				changeCurrency(m, 1)
				discount.textContent = m.discount[1] || '';
				break;

			case '5-9':
				changeCurrency(m, 2)
				discount.textContent = m.discount[2] || '';
				break;

			default:
				break;
		}
	}

	// function for tabs-months
	function handleSelectClick(e) {
		const selectData = e.target.innerText;
		switch (selectData) {
			case oneMonth.amountOfMonth:
				discount.classList.remove('products__card-discount');
				checkPeople(oneMonth)
				numberOfPeople(oneMonth);
				break;

			case threeMonths.amountOfMonth:
				discount.classList.add('products__card-discount');
				checkPeople(threeMonths);
				numberOfPeople(threeMonths);
				break;

			case sixMonths.amountOfMonth:
				discount.classList.add('products__card-discount');
				checkPeople(sixMonths)
				numberOfPeople(sixMonths);
				break;

			case oneYear.amountOfMonth:
				discount.classList.add('products__card-discount');
				checkPeople(oneYear)
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
