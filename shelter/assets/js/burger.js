const menu = document.querySelector('.header-nav');
const burger = document.querySelector('.burger');

const menuOpen = () => {
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active');
    menu.classList.toggle('header-nav__active');
    document.body.classList.toggle('body_no-scroll');
  })
}


export { menuOpen };