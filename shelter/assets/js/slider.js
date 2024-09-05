import { getPetsData } from '/assets/js/pets.js';
import { createCard } from '/assets/js/cards.js';
import { getRandomStartOrder, getRandomNextOrder } from '/assets/js/getRandomOrder.js';
const slider = document.querySelector('.slider-wrapper');
const cardActive = document.querySelector('.cards-wrapper__active')
const cardNext = document.querySelector('.cards-wrapper__next')
const cardPrev = document.querySelector('.cards-wrapper__prev')
const nextArrow = document.querySelector('.arrow__right');
const prevArrow = document.querySelector('.arrow__left');

const petsList = await getPetsData();

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
let prevOrder = [];
let nextOrder = [];

const createPetsList = (order) => {
  let petsOrder = [];
  for (let i = 0; i < order.length; i++) {
    petsOrder.push(petsList[order[i]])
  }
  return petsOrder;
}



const createSlider = (parent) => {
  let cardsList = createPetsList(visibleOrder);
  for (let i = 0; i < cardsList.length; i++) {
    parent.append(createCard(cardsList, i))
    ;
  }
  
}
const showNextSlider = (parent) => {
  let cardsWrapper = document.createElement('div');
  cardsWrapper.className = 'cards-wrapper card-wrapper__next slide-to-left';
  parent.append(cardsWrapper);
  let cardsList = createPetsList(visibleOrder);
  for (let i = 0; i < cardsList.length; i++) {
    createCard(cardsWrapper, cardsList, i);
  }
}

createSlider(cardActive)

console.log(cardActive)
nextArrow.addEventListener('click', (e) => {
  createSlider(cardNext)
  slider.classList.add('slide-to-left');
  slider.addEventListener('animationend', () => {
    slider.classList.remove('slide-to-left');
    cardPrev.innerHTML = cardActive;
    cardActive.innerHTML = cardNext;
    cardNext.innerHTML = '';
  });
});
