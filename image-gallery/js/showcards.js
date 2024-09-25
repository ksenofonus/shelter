const wrapper = document.querySelector('.image-wrapper');
export const showcards = (data) => {
	for (let i = 0; i < data.length; i++) {
		wrapper.insertAdjacentHTML(
			'afterbegin',
			`<div class="card"><img src="" alt=""/></div>`,
		);
	}
	const cards = wrapper.querySelectorAll('img');
	cards.forEach((card, index) => {
		if (data.hasOwnProperty('results')) {
			card.setAttribute('src', `${data.results[index].urls.regular}`);
			card.setAttribute('alt', `${data.results[index].alt_description}`);
		} else {
			card.setAttribute('src', `${data[index].urls.regular}`);
			card.setAttribute('alt', `${data[index].alt_description}`);
		}
	});
};