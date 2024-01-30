export function questions() {
	let accordionHeadEls = document.getElementsByClassName('faq__question-head');

	let i;
	for (i = 0; i < accordionHeadEls.length; i++) {
		accordionHeadEls[i].addEventListener('click', function () {
			let panel = this.nextElementSibling;
			if (panel.style.height) {
				panel.style.height = null;
			} else {
				let k;
				for (k = 0; k < accordionHeadEls.length; k++) {
					accordionHeadEls[k].nextElementSibling.style.height = null;
					
					if (accordionHeadEls[k].querySelector('.ri-close-line') != null) {
						accordionHeadEls[k].querySelector('.ri-close-line').className = 'ri-add-line';
					}
				}

				panel.style.borderRadius = '0 0 10px 10px';
				panel.style.height = '7rem';
			}

			if (this.getElementsByClassName('ri-add-line')[0]) {
				this.getElementsByClassName('ri-add-line')[0].className = 'ri-close-line';
			} else {
				this.getElementsByClassName('ri-close-line')[0].className = 'ri-add-line';
			}
		}); 
	}
}