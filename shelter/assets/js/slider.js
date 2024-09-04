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
  cardsWrapper.className = 'cards-wrapper';
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
  visibleOrder = getRandomNextOrder(cardsCount, visibleOrder);
  createSlider(slider);
  const cardsWrapper = document.querySelectorAll('.cards-wrapper');
  cardsWrapper.forEach((item) => item.classList.add('slide-to-left'));
  cardsWrapper.forEach((item) => {
    item.addEventListener('animationend', () => {
      cardsWrapper.forEach((item) => { 
        item.classList.remove('slide-to-left'); item.classList.add('cards-wrapper__prev')
      })
    })
  })
  prevOrder = visibleOrder;
 
  cardsWrapper
  console.log('click');
})
