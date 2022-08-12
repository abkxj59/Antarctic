const body = document.querySelector('.page__body');
const nav = document.querySelector('.nav');
const toggleButton = document.querySelector('.nav__toggle-button');
const promo = document.querySelector('.promo');
const promoContent = promo.querySelector('.promo__container');
const overlay = document.querySelector('.page__overlay');
const linkItems = document.querySelectorAll('.nav__link');

const initMenu = () => {
  nav.classList.remove('nav--nojs');
  nav.classList.remove('nav--opened');
  nav.classList.add('nav--closed');
  promo.classList.remove('promo--nojs');

  const closeMenu = () => {
    body.classList.remove('page__body--menu-opened');
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
    promoContent.classList.remove('visually-hidden');

    linkItems.forEach((item) => {
      item.removeEventListener('click', closeMenu);
    });
  };

  const openMenu = () => {
    body.classList.add('page__body--menu-opened');
    nav.classList.add('nav--opened');
    nav.classList.remove('nav--closed');
    promoContent.classList.add('visually-hidden');

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
