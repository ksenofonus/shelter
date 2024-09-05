import { getPetsData } from '/assets/js/pets.js';

const petsList = await getPetsData();

const createPetsList = (order) => {
  let petsOrder = [];
  for (let i = 0; i < order.length; i++) {
    petsOrder.push(petsList[order[i]])
  }
  return petsOrder;
}


export const createSlider = (parent, order) => {
  let cardsList = createPetsList(order);
  for (let i = 0; i < cardsList.length; i++) {
    let card = document.createElement('div');
    card.className = 'pets';
    card.innerHTML = `<div class="pets_img"><img src="${cardsList[i].img}" alt="${cardsList[i].name}"></div><div class="pets_name">${cardsList[i].name}</div><button class="button button_secondary">Learn more</button>`;
    parent.append(card)
    ;
  }
}