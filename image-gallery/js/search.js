import { getData, field, getUrl } from "./getData.js";
const searchIcon = document.querySelector('.search_icon');
const searchClear = document.querySelector('.search_clear');

const search = () => {
	getUrl();
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