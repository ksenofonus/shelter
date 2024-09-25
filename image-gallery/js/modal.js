import { setImgAttribute } from './showcards.js';
const cardList = document.querySelectorAll('.card');
export const showModal = (data) => {
	cardList.forEach((card) => {
		card.addEventListener('click', (event) => {
      console.log(event);
			document.body.insertAdjacentHTML(
				'afterbegin',
				`<div class="module"><img src="" alt=""/></div>`,
			);
      const img = card.querySelector('img');
			if (data.hasOwnProperty('results')) {
				img.setAttribute('src', `${data.results[index].urls.regular}`);
				img.setAttribute('alt', `${data.results[index].alt_description}`);
			} else {
				img.setAttribute('src', `${data[index].urls.regular}`);
				img.setAttribute('alt', `${data[index].alt_description}`);
			}
		});
	});
};
