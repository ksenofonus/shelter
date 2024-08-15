import { showCards } from '/assets/js/cards.js';
const slider = document.querySelector('.slider');
let cardsCount = 3;
const petsListUrl = '../assets/pets.json';
let petsList = [];
const checkWidth = () => {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 1130 && windowWidth > 767) {
    cardsCount = 2;
  } else if (windowWidth <= 767) {
    cardsCount = 1;
  }
}


async function getPetsData() {
  const response = await fetch(petsListUrl);
  const data = await response.json();
  console.log(data[1].img);
  checkWidth();
  showCards(cardsCount, slider, data);
}
getPetsData()


