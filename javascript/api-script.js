const img = document.querySelector('img');
const refreshBtn = document.querySelector('button');
function fetchGif() {
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=aWFQln3fRt0IuEDfY6MvZ6q7dazqJw9s&s=karting',
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log('refresh');
      // console.log(response.data.images);
      img.src = response.data.images.original.url;
    });
}
fetchGif();
refreshBtn.addEventListener('click', () => {
  fetchGif();
});
