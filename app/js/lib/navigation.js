const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const closeBtn = document.querySelector('.header__nav .button--close');


function navVisible() {
    nav.classList.toggle('header__nav--visible');
}

burger.addEventListener('click', navVisible);
closeBtn.addEventListener('click', navVisible);
