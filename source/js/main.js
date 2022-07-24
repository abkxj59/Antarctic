const nav = document.querySelector('.nav');
const toggleButton = document.querySelector('.nav__toggle-button');
const toggleImg = document.querySelector('.nav__toggle-img');

const initMenu = () => {
  nav.classList.remove('nav--nojs');
  nav.classList.toggle('nav--opened');
  nav.classList.toggle('nav--closed');
  // toggleImg.src = 'img/svg/menu-open.svg';
  toggleButton.hidden = false;

  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('nav--opened');
    nav.classList.toggle('nav--closed');
    if (nav.classList.contains('nav--opened')) {
      toggleImg.src = 'img/svg/menu-close.svg';
      // toggleImg.width = '13px';
    } else {
      toggleImg.src = 'img/svg/menu-open.svg';
    }
  });
};

initMenu();
