import { createBack, removeBack } from "./back.js";
const menu = document.querySelector('.header-nav');
const menuItem = document.querySelectorAll('.header-nav_item');
const burgerButton = document.querySelector('.burger');

const toggleMenu = () => {
  menu.classList.contains('header-nav__active') ? removeBack() : createBack();
  burgerButton.classList.toggle('burger__active');
  menu.classList.toggle('header-nav__active');
}

const menuToggle = () => {
  burgerButton.addEventListener('click', () => {
    toggleMenu();
  })
  document.addEventListener('click', (event) => {
    event.stopPropagation();
    const target = event.target;
    let isMenu = target === menu || menu.contains(target);
    let isBtn = target === burgerButton || burgerButton.contains(target);
    const menuIsOpen = menu.classList.contains('header-nav__active');
    if (!isMenu && !isBtn && menuIsOpen) {
      toggleMenu();
    }
  })
  menuItem.forEach((item) => {
    item.addEventListener('click', () => toggleMenu())
  })
}
menuToggle()

const resize = () => {
  window.addEventListener('resize', (e) => {
    if (menu.classList.contains('header-nav__active')) {
      removeBack();
      toggleMenu();
    }
  })
}
resize()

export { menuToggle };