const body = document.querySelector('.page__body');
const nav = document.querySelector('.nav');
const toggleButton = document.querySelector('.nav__toggle-button');
const toggleImg = document.querySelector('.nav__toggle-img');
const promo = document.querySelector('.promo__container');
const overlay = document.querySelector('.page__overlay');
const linkItems = document.querySelectorAll('.nav__link');

const initMenu = () => {
  nav.classList.remove('nav--nojs');
  nav.classList.remove('nav--opened');
  nav.classList.add('nav--closed');
  toggleButton.hidden = false;

  const closeMenu = () => {
    body.classList.remove('page__body--menu-opened');
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
    promo.classList.remove('visually-hidden');
    toggleImg.src = 'img/svg/menu-open.svg';


    linkItems.forEach((item) => {
      item.removeEventListener('click', closeMenu);
    });
  };

  const openMenu = () => {
    body.classList.add('page__body--menu-opened');
    nav.classList.add('nav--opened');
    nav.classList.remove('nav--closed');
    promo.classList.add('visually-hidden');
    toggleImg.src = 'img/svg/menu-close.svg';

    linkItems.forEach((item) => {
      item.addEventListener('click', closeMenu);
    });
  };

  toggleButton.addEventListener('click', () => {
    if (nav.classList.contains('nav--opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);
};

export {initMenu};
