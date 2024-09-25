let url =
	'https://api.unsplash.com/photos/?&per_page=21&orientation=landscape&client_id=XcmGjG_wr1Hwy5aJ8E5mpCE3Omatp8NzKQJAwOlftZM';
const wrapper = document.querySelector('.image-wrapper');
const field = document.getElementById('search_field');
const searchBlock = document.querySelector('.search');
const searchIcon = document.querySelector('.search_icon');
const searchClear = document.querySelector('.search_clear');

const getData = async () => {
	try {
		const result = await fetch(url);
		const data = await result.json();
		showcards(data);
		return data;
	} catch {
		alert('API cannot provide such data. Please make a correct request');
	}
};

document.addEventListener('DOMContentLoaded', () => {
	getData();
	field.focus();
});

const showcards = (data) => {
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

const search = () => {
	const queryValue = field.value.toLowerCase();
	url = `https://api.unsplash.com/search/photos?query=${queryValue}&per_page=21&orientation=landscape&client_id=XcmGjG_wr1Hwy5aJ8E5mpCE3Omatp8NzKQJAwOlftZM`;
	getData();
};

document.addEventListener('keyup', (event) => {
	if (event.code === 'Enter' && field.value) {
		search();
	} else {
		if (!searchClear.classList.contains('search_clear__active')) {
			searchClear.classList.add('search_clear__active');
		}
	}
});

searchIcon.addEventListener('click', () => {
	if (field.value) {
		search();
	}
	field.focus();
});

searchClear.addEventListener('click', () => {
	field.value = '';
	searchClear.classList.remove('search_clear__active');
	field.focus();
});
