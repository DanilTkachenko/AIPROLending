import ScrollReveal from 'scrollreveal';


export function scrollReveal() {
	const configAll = {
        interval: 1600,
        duration: 1500,
        reset: true
    };
    
    
    const sr = ScrollReveal();
    
    
// sr.reveal('.home__data', { interval: 1500, duration: 1500});
sr.reveal('.home__title', {
    scale: 3,
    duration: 1500,
    reset: true
});
sr.reveal('.home__subtitle', { delay: 600, reset:true});
sr.reveal('.home__description', {delay: 800, reset:true});
// sr.reveal(document.querySelector('.products__tabs'), {distance: '150%', origin: 'left', duration: 1200, reset:true});
sr.reveal('.home__img', {rotate: {x: -50, y: 220 },  distance: '105%', origin: 'right',  duration: 2000, reset:true});
// sr.reveal('.home__img', {interval: 900, duration: 3500, rotate: {x: 25, y: 55 }, reset: true});
 sr.reveal('.instructions__step', {interval: 500, duration: 1500, delay: 100, reset: true});
 sr.reveal('.benefits__container', {distance: '150%', origin: 'left', duration: 1200, reset:true});
 sr.reveal('.for-whom__item', {interval: 600, duration: 1500, reset:true});

 sr.reveal(document.querySelectorAll('.products'), {duration: 2000, reset:true});
 sr.reveal('.faq__question', {interval: 600, duration: 1200, reset:true});
};