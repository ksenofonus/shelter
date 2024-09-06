import { petsList } from '/assets/js/slider.js'
const card = document.querySelectorAll('.cards-wrapper');

const createModal = (cardsList, i) => {
  let popap = document.createElement('div');
  popap.className = 'modal';
  popap.insertAdjacentHTML('afterbegin',
   `<div class="modal_img"><img src="${cardsList[i].img}" alt="${cardsList[i].name}"></div><div class=modal_info><h3 class="modal_name">${cardsList[i].name}</h3><p class="type">${cardsList[i].type} - ${cardsList[i].breed}</p><p class="description">${cardsList[i].description}</p>
  <ul class="parameteres">
  <li class="parameter">
    <span  class="parameter_name">Age: </span><span>${cardsList[i].age}</span>
  </li>
  <li class="parameter"><span class="parameter_name">Inoculations: </span><span class="inoculations">${cardsList[i].inoculations}</span></li>
  <li class="parameter"><span class="parameter_name">Diseases: </span><span class="diseases">${cardsList[i].diseases}</span></li>
  <li class="parameter"><span class="parameter_name">Parasites: </span><span class="parasites">${cardsList[i].parasites}</span></li>
  </ul></div>`);
  document.body.append(popap);
  const inoculations = document.querySelector('.inoculations');
  const diseases = document.querySelector('.diseases');
  const parasites = document.querySelector('.parasites');
  for (let i=0; i < cardsList[i].inoculations.length; i++) {
    
  }
}
createModal(petsList, 1)