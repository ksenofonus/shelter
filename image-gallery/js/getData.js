import { showcards } from './showcards.js';
let url =
	'https://api.unsplash.com/photos/?&per_page=21&orientation=landscape&client_id=XcmGjG_wr1Hwy5aJ8E5mpCE3Omatp8NzKQJAwOlftZM';
export const field = document.getElementById('search_field');

export const getData = async () => {
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

export const getUrl = () => {
	const queryValue = field.value.toLowerCase();
	url = `https://api.unsplash.com/search/photos?query=${queryValue}&per_page=21&orientation=landscape&client_id=XcmGjG_wr1Hwy5aJ8E5mpCE3Omatp8NzKQJAwOlftZM`;
};
