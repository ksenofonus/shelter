import { getPetsData } from '/assets/js/pets.js';
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
createCards(petsMenu, startOrder);
let menuCards = document.querySelectorAll('.pets');
showModal(menuCards);



