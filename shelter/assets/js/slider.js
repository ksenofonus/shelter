import { getPetsData } from '/assets/js/pets.js';
import { createCard } from '/assets/js/cards.js';
import { getRandomStartOrder } from '/assets/js/getRandomOrder.js';
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

let visibleOrder = getRandomStartOrder(cardsCount);

const createPetsList = (order) => {
  let petsOrder = [];
  for (let i = 0; i < order.length; i++) {
    petsOrder.push(petsList[order[i]])
  }
  console.log(petsOrder)
  return petsOrder;
}



const showSlider = (parent) => {
  let cardsList = createPetsList(visibleOrder);
  for (let i = 0; i < cardsList.length; i++) {
    createCard(parent, cardsList, i);
  }
}

showSlider(slider)





