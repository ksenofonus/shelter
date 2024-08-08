const menu = document.querySelector('.header-nav');
const menuItem = document.querySelectorAll('.header-nav_item');
const burgerButton = document.querySelector('.burger');

const closeMenu = () => {
  burgerButton.classList.remove('burger__active');
  menu.classList.remove('header-nav__active');
  document.body.classList.remove('body_no-scroll');
}

const menuToggle = () => {
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger__active');
    menu.classList.toggle('header-nav__active');
    document.body.classList.toggle('body_no-scroll');
  })
  document.addEventListener('click', (event) => {
    event.stopPropagation();
    const target = event.target;
    let isMenu = target === menu || menu.contains(target);
    let isBtn = target === burgerButton || burgerButton.contains(target);
    const menuIsOpen = menu.classList.contains('header-nav__active');
    if (!isMenu && !isBtn && menuIsOpen) {
      closeMenu();
    }
  })
  menuItem.forEach((item) => {
    item.addEventListener('click', () => closeMenu())
  })
}
menuToggle()

export { menuToggle };