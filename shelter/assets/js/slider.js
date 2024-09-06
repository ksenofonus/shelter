import { getPetsData } from '/assets/js/pets.js';
import { getRandomStartOrder, getRandomNextOrder } from '/assets/js/getRandomOrder.js';
import { cardsCount } from '/assets/js/width.js';
import { showModal, petsList } from '/assets/js/popap.js';

const slider = document.querySelector('.slider-wrapper');
const cardActive = document.querySelector('.cards-wrapper__active')
const cardNext = document.querySelector('.cards-wrapper__next')
const cardPrev = document.querySelector('.cards-wrapper__prev')
const nextArrow = document.querySelector('.arrow__right');
const prevArrow = document.querySelector('.arrow__left');




// checkSliderWidth()

let visibleOrder = getRandomStartOrder(cardsCount);
let nextOrder = [];
let prevOrder = [];

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
    card.setAttribute("data-id", `${order[i]}`);
    card.innerHTML = `<div class="pets_img"><img src="${cardsList[i].img}" alt="${cardsList[i].name}"></div><div class="pets_name">${cardsList[i].name}</div><button class="button button_secondary">Learn more</button>`;
    parent.append(card);
  }
}


createSlider(cardActive, visibleOrder);
let petCards = document.querySelectorAll('.pets');
showModal(petCards);

nextArrow.addEventListener('click', (e) => {
  if (cardNext.childElementCount === 0) {
    nextOrder = getRandomNextOrder(3, visibleOrder);
    createSlider(cardNext, nextOrder);
  } else if (cardNext.innerHTML === cardActive.innerHTML) {
    nextOrder = getRandomNextOrder(3, visibleOrder);
    cardNext.innerHTML = '';
    createSlider(cardNext, nextOrder);
  }
  slider.classList.add('slide-to-left');
  slider.addEventListener('animationend', (animation) => {
    prevOrder = visibleOrder;
    visibleOrder = nextOrder;
    console.log(visibleOrder);
    cardPrev.innerHTML = cardActive.innerHTML;
    cardActive.innerHTML = cardNext.innerHTML;
    cardNext.innerHTML = cardActive.innerHTML;
    slider.classList.remove('slide-to-left');
    petCards = document.querySelectorAll('.pets');
    showModal(petCards);
  }, {once: true});
});

prevArrow.addEventListener('click', () => {
  if (cardNext.childElementCount === 0) {
    prevOrder = getRandomNextOrder(3, visibleOrder);
    createSlider(cardPrev, prevOrder);
  } else if (cardPrev.innerHTML === cardActive.innerHTML) {
    prevOrder = getRandomNextOrder(3, visibleOrder);
    cardPrev.innerHTML = '';
    createSlider(cardPrev, prevOrder);
  }
  slider.classList.add('slide-to-right');
  slider.addEventListener('animationend', (animation) => {
    nextOrder = visibleOrder;
    visibleOrder = prevOrder;
    console.log(visibleOrder);
    cardNext.innerHTML = cardActive.innerHTML;
    cardActive.innerHTML = cardPrev.innerHTML;
    cardPrev.innerHTML = cardActive.innerHTML;
    slider.classList.remove('slide-to-right');
    petCards = document.querySelectorAll('.pets');
    showModal(petCards);
  }, {once: true});
})
