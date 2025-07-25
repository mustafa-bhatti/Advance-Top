const img = document.querySelector('img');
const refreshBtn = document.querySelector('button');
const form = document.querySelector('form');
const query = document.querySelector('#search');
async function fetchGif(query) {
  await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=aWFQln3fRt0IuEDfY6MvZ6q7dazqJw9s&s=${query}`,
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      // console.log(response.data.images);
      img.src = response.data.images.original.url;
    })
    .catch(function (response) {
      alert(response);
      console.log('ERROR: ', response);
    });
}
fetchGif('Football');
refreshBtn.addEventListener('click', () => {
  fetchGif('Football');
});
form.addEventListener('submit', function (event) {
  event.preventDefault();
  let searchQuery = query.value;
  console.log(searchQuery);
  fetchGif(searchQuery);
});
