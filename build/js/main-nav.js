let mainNav = document.querySelector('.main-nav');
let toogle = document.querySelector('.main-nav__toogle');

mainNav.classList.remove('main-nav--nojs');

toogle.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
})
