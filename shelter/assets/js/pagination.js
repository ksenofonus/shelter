import { checkWidth } from '/assets/js/width.js';
import { getRandomStartOrder } from '/assets/js/getRandomOrder.js';
import { showModal, petsList } from '/assets/js/popap.js';


const getStartOrder = () => {
  let order = getRandomStartOrder(8);
  for (let i = 0; i < 5; i++) {
    order.push(getRandomStartOrder(8))
  }
  return order.flat();
}


const getVisibleOrder = () => {
  let visibleOrder = [];
  for (let i=0; i < 8; i++) {
    
  }
  return visibleOrder;
}


const createList = (order) => {
  let petsOrder = [];
  for (let i = 0; i < order.length; i++) {
    petsOrder.push(petsList[order[i]])
  }
  return petsOrder;
}

const createCards = (parent, order) => {
  let cardsList = createList(order);
  for (let i = 0; i < cardsList.length; i++) {
    let card = document.createElement('div');
    card.className = 'pets';
    card.setAttribute("data-id", `${order[i]}`);
    card.innerHTML = `<div class="pets_img"><img src="${cardsList[i].img}" alt="${cardsList[i].name}"></div><div class="pets_name">${cardsList[i].name}</div><button class="button button_secondary">Learn more</button>`;
    parent.append(card);
  }
}
let startOrder = getStartOrder();


const petsMenu = document.querySelector('.pets_menu');
let pageCount = checkWidth();
createCards(petsMenu, startOrder);
let menuCards = document.querySelectorAll('.pets');
showModal(menuCards);



const toStart = document.querySelector('.button_start');
const toPrev = document.querySelector('.button_prev');
const toNext = document.querySelector('.button_next');
const toEnd = document.querySelector('.button_end');
const page = document.querySelector('.button_page');
let pageNumber = parseInt(page.innerHTML);

toNext.addEventListener('click', () => {
  pageNumber += 1;
  page.innerHTML = pageNumber.toString();
  pageCount = checkWidth();
  if (pageNumber > pageCount + 1) {
   pageNumber = pageCount;
  }
  if (pageNumber === pageCount) {
    toEnd.classList.add('button__circle-inactive');
    toNext.classList.add('button__circle-inactive');
    toEnd.setAttribute('disabled', 'true');
    toNext.setAttribute('disabled', 'true');
  }
  if (toPrev.hasAttribute('disabled')) {
    toPrev.removeAttribute('disabled');
    toPrev.classList.remove('button__circle-inactive');
    toStart.classList.remove('button__circle-inactive');
    toStart.removeAttribute('disabled');
  }
})

toPrev.addEventListener('click', () => {
  pageNumber -= 1;
  page.innerHTML = pageNumber.toString();
  pageCount = checkWidth();
  if (pageNumber < 2) {
    pageNumber = 1;
   }
  if (pageNumber === 1) {
    toStart.setAttribute('disabled', 'true');
    toStart.classList.add('button__circle-inactive');
    toPrev.setAttribute('disabled', 'true');
    toPrev.classList.add('button__circle-inactive');
  }
  if (toNext.hasAttribute('disabled')) {
    toNext.removeAttribute('disabled');
    toNext.classList.remove('button__circle-inactive');
    toEnd.classList.remove('button__circle-inactive');
    toEnd.removeAttribute('disabled');
  }
})

toStart.addEventListener('click', () => {
  page.innerHTML = '1';
  toStart.setAttribute('disabled', 'true');
  toStart.classList.add('button__circle-inactive');
  toPrev.setAttribute('disabled', 'true');
  toPrev.classList.add('button__circle-inactive');
  toNext.classList.remove('button__circle-inactive');
  toNext.removeAttribute('disabled');
  toEnd.classList.remove('button__circle-inactive');
  toEnd.removeAttribute('disabled');
})

toEnd.addEventListener('click', () => {
  page.innerHTML = checkWidth().toString();
  toEnd.classList.add('button__circle-inactive');
  toNext.classList.add('button__circle-inactive');
  toEnd.setAttribute('disabled', 'true');
  toNext.setAttribute('disabled', 'true');
  toPrev.classList.remove('button__circle-inactive');
  toPrev.removeAttribute('disabled');
  toStart.classList.remove('button__circle-inactive');
  toStart.removeAttribute('disabled');
})

window.addEventListener('resize', () => {
  pageCount = checkWidth();
  if (toEnd.hasAttribute('disabled')) page.innerHTML = pageCount.toString();
})
