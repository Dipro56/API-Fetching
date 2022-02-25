const quoteFetch = () => {
  fetch('https://api.kanye.rest')
    .then((res) => res.json())
    .then((data) => showQuote(data));
};

function showQuote(data) {
  console.log(data);
  const quote = document.getElementById('quote');
  quote.innerHTML = data.quote;
  quote.style.display = 'block';
}

const getQuoteButton = document.getElementById('getQuoteButton');
getQuoteButton.addEventListener('click', quoteFetch);
