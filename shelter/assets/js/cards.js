const petsListUrl = '../assets/pets.json';
let petsList = [];

export async function getPetsData() {
  const response = await fetch(petsListUrl);
  const data = await response.json();
  for (let i=0; i < data.length; i++) {
    petsList.push(data[i]);
  }
}

const createCard = (parent, petsList, i) => {
  let card = document.createElement('div');
  card.className = 'pets';
  card.innerHTML = `<div class="pets_img"><img src="assets/img/pets/${petsList[i].img}" alt="Scarlet"></div><div class="pets_name">Scarlett</div><button class="button button_secondary">Learn more</button>`;
  parent.append(card);
}
export const showCards = (count, parent) => {
  for (let i = 0; i < count; i++) {
    createCard(parent, petsList, i);
  }
}
