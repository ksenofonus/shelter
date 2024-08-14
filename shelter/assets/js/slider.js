import { showCards, getPetsData } from '/assets/js/cards.js';
const slider = document.querySelector('.slider');
let cardsCount = 3;
getPetsData();
const checkWidth = () => {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 1130 && windowWidth > 767) {
    cardsCount = 2;
  } else if (windowWidth <= 767) {
    cardsCount = 1;
  }
}
checkWidth();
showCards(cardsCount, slider);