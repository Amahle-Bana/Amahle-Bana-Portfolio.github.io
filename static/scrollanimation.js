/********** WINDOW SCROLL ANIMATION **********/

let reveal = () => {
    let reveals = document.querySelectorAll('.reveal')
    for(var i = 0; i < reveals.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener("scroll", reveal);

/*********** 2nd HORIZONTAL SCROLL ANIMATION  *************/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('hori_active');
        } else {
            entry.target.classList.remove('hori_active');
        }
    });
});

const hiddenElements = document.querySelectorAll('.horizontal_reveal');
hiddenElements.forEach((el) => observer.observe(el));

/************* 3rd HORIZONTAL CAROUSEL ANIMATION **************/

let nextButton = document.getElementById('next');
let previousButton = document.getElementById('prev');
let carousel = document.querySelector('.section3_carousel');
let listHTML = document.querySelector('.section3_carousel .section3_list')

nextButton.onclick = () => {
    showSlider('next');
}
previousButton.onclick = () => {
    showSlider('prev');
}

let unAcceptClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    previousButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');

    let items = document.querySelectorAll('.section3_carousel .section3_list .section3_item');

    if(type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        let positionLast = items.length-1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add('prev');
    }
    unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        previousButton.style.pointerEvents = 'auto';
    }, 2000);
}