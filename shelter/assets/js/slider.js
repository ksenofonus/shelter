import { getPetsData } from '/assets/js/pets.js';
import { createCard } from '/assets/js/cards.js';
const slider = document.querySelector('.slider');
const petsList = await getPetsData();

let startIndex = 0
let cardsCount = 3;

const checkSliderWidth = () => {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 1130 && windowWidth > 767) {
    cardsCount = 2;
  } else if (windowWidth <= 767) {
    cardsCount = 1;
  }
  return cardsCount;
}
checkSliderWidth()

const createList = () => {

}

const showSlider = (count, parent, petsList) => {
  let cardsList = [];
  for (let i=0; i < count; i++) {
    cardsList.push(petsList[i]);
  }
  for (let i = 0; i < cardsList.length; i++) {
    createCard(parent, cardsList, i);
  }
}

showSlider(cardsCount, slider, petsList)





