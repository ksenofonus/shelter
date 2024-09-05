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
let nextOrder = [];

const createPetsList = (order) => {
  let petsOrder = [];
  for (let i = 0; i < order.length; i++) {
    petsOrder.push(petsList[order[i]])
  }
  return petsOrder;
}



const createSlider = (parent, order) => {
  let cardsList = createPetsList(order);
  for (let i = 0; i < cardsList.length; i++) {
    let card = document.createElement('div');
    card.className = 'pets';
    card.innerHTML = `<div class="pets_img"><img src="${cardsList[i].img}" alt="${cardsList[i].name}"></div><div class="pets_name">${cardsList[i].name}</div><button class="button button_secondary">Learn more</button>`;
    parent.append(card)
    ;
  }
}

const showNextSlider = (parent) => {
  let cardsWrapper = document.createElement('div');
  cardsWrapper.className = 'cards-wrapper card-wrapper__next slide-to-left';
  parent.appendChild(cardsWrapper);
  let cardsList = createPetsList(visibleOrder);
  for (let i = 0; i < cardsList.length; i++) {
    createCard(cardsWrapper, cardsList, i);
  }
}

createSlider(cardActive, visibleOrder)

nextArrow.addEventListener('click', (e) => {
  nextOrder = getRandomNextOrder(cardsCount, visibleOrder);
  cardNext.innerHTML = '';
  createSlider(cardNext, nextOrder);
  slider.classList.add('slide-to-left');
  slider.addEventListener('animationend', () => {
    visibleOrder = nextOrder;
    cardPrev.innerHTML = cardActive.innerHTML;
    cardActive.innerHTML = cardNext.innerHTML;
    slider.classList.remove('slide-to-left');
  });
});
