const img = document.querySelector('img');
const refreshBtn = document.querySelector('button');
const form = document.querySelector('form');
const query = document.querySelector('#search');
async function fetchGif(query) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=aWFQln3fRt0IuEDfY6MvZ6q7dazqJw9s&s=${query}`,
    { mode: 'cors' }
  );
  const gifData = await response.json();
  console.log(gifData);
  img.src = gifData.data.images.original.url;
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
