import { petsList } from '/assets/js/slider.js'
const card = document.querySelectorAll('.cards-wrapper');

const createModal = (cardsList, i) => {
  let popap = document.createElement('div');
  popap.className = 'modal';
  popap.insertAdjacentHTML('afterbegin',
   `<div class="modal_body"><div class="modal_close"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929" />
</svg></div><div class="modal_img"><img src="${cardsList[i].img}" alt="${cardsList[i].name}"></div><div class=modal_info><h3 class="modal_name">${cardsList[i].name}</h3><p class="type">${cardsList[i].type} - ${cardsList[i].breed}</p><p class="description">${cardsList[i].description}</p>
  <ul class="parameteres">
  <li class="parameter">
    <span  class="parameter_name">Age: </span><span>${cardsList[i].age}</span>
  </li>
  <li class="parameter"><span class="parameter_name">Inoculations: </span><span class="inoculations">${cardsList[i].inoculations}</span></li>
  <li class="parameter"><span class="parameter_name">Diseases: </span><span class="diseases">${cardsList[i].diseases}</span></li>
  <li class="parameter"><span class="parameter_name">Parasites: </span><span class="parasites">${cardsList[i].parasites}</span></li>
  </ul></div></div>`);
  document.body.append(popap);
  const inoculations = document.querySelector('.inoculations');
  const diseases = document.querySelector('.diseases');
  const parasites = document.querySelector('.parasites');
  for (let i=0; i < cardsList[i].inoculations.length; i++) {
    
  }
}
createModal(petsList, 0)