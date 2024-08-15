const createCard = (parent, petsList, i) => {
  let card = document.createElement('div');
  card.className = 'pets';
  card.innerHTML = `<div class="pets_img"><img src="${petsList[i].img}" alt="${petsList[i].name}"></div><div class="pets_name">${petsList[i].name}</div><button class="button button_secondary">Learn more</button>`;
  parent.append(card);
}
export const showCards = (count, parent, petsList) => {
  for (let i = 0; i < count; i++) {
    createCard(parent, petsList, i);
  }
}
