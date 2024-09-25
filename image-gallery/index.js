let url =
  "https://api.unsplash.com/photos/?&per_page=21&orientation=landscape&client_id=XcmGjG_wr1Hwy5aJ8E5mpCE3Omatp8NzKQJAwOlftZM";
const wrapper = document.querySelector(".image-wrapper");
const getData = async () => {
  const result = await fetch(url);
  const data = await result.json();
  showcards(data);
  if (data.hasOwnProperty('results')) {
    console.log(data.results)
    }
  return data;
};
document.addEventListener('DOMContentLoaded', getData());

const showcards = (data) => {
  for (let i = 0; i < data.length; i++) {
    wrapper.insertAdjacentHTML(
      "afterbegin",
      `<div class="card"><img src="${data[i].urls.regular}" alt="${data[i].alt_description}"/></div>`,
    );
  }

};



const search = () => {
  const field = document.getElementById('search_field');
  const queryValue = field.value.toLowerCase();
  url = `https://api.unsplash.com/search/photos?query=${queryValue}&per_page=21&orientation=landscape&client_id=XcmGjG_wr1Hwy5aJ8E5mpCE3Omatp8NzKQJAwOlftZM`;
  console.log(url);
  getData();
}

document.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    search();
  };
})
