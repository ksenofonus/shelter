const url = 'https://api.unsplash.com/photos/?client_id=XcmGjG_wr1Hwy5aJ8E5mpCE3Omatp8NzKQJAwOlftZM';
const getData = async () => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
}
const images = getData();
console.log(images);
