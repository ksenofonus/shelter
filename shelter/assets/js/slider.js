import { getPetsData } from '/assets/js/pets.js';
import { createCard } from '/assets/js/cards.js';
import { getRandomStartOrder, getRandomNextOrder } from '/assets/js/getRandomOrder.js';
const slider = document.querySelector('.slider');
const petsList = await getPetsData();
const nextArrow = document.querySelector('.arrow__right');
const prevArrow = document.querySelector('.arrow__left');


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
  console.log(petsOrder)
  return petsOrder;
}



const createSlider = (parent) => {
  let cardsWrapper = document.createElement('div');
  cardsWrapper.className = 'cards-wrapper cards-wrapper__visible';
  parent.append(cardsWrapper);
  let cardsList = createPetsList(visibleOrder);
  for (let i = 0; i < cardsList.length; i++) {
    createCard(cardsWrapper, cardsList, i);
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

createSlider(slider)


nextArrow.addEventListener('click', () => {
  let cardsWrapper = document.querySelectorAll('.cards-wrapper');
  let prevCard = document.querySelector('.cards-wrapper__prev');
  !prevCard ? console.log('there is no prevcard') : prevCard.remove();
  let visibleCard = document.querySelector('.cards-wrapper__visible');
  cardsWrapper.forEach((item) => {
    item.classList.remove('slide-to-left');
  })
  visibleCard.classList.add('cards-wrapper__prev');
  visibleCard.classList.toggle('cards-wrapper__visible');
  visibleOrder = getRandomNextOrder(cardsCount, visibleOrder);
  createSlider(slider);
  cardsWrapper = document.querySelectorAll('.cards-wrapper');
  cardsWrapper.forEach((item) => {
    item.classList.toggle('slide-to-left');
  })
  prevCard.classList.remove('slide-to-left')
});
