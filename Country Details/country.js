const countryDetails = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => showCountryDetails(data));
};

const singleDetails = (country) => {
  url = `https://restcountries.com/v3.1/name/${country}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displaySingleDetails(data);
    });
};

const displaySingleDetails = (detail) => {
  let languages = '';
  const singleDetailsCard = document.getElementById('singleDetailsCard');
  console.log(detail[0].languages);
  for (const language in detail[0].languages) {
    //console.log(detail[0].languages[language]);
    languages += detail[0].languages[language] + ' ';
  }
  singleDetailsCard.innerHTML = `<img src="${detail[0].flags.svg}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${detail[0].name.common}</h5>
          <p class="card-text">Region: ${detail[0].region}</p>
          <p class="card-text">Capital: ${detail[0].capital}</p>
          <p class="card-text">Language: ${languages}</p>
        </div>`;
};

const showCountryDetails = (details) => {
  console.log(details);
  const detailsDiv = document.getElementById('detailsDiv');
  for (const detail of details) {
    //console.log(detail);
    const divForDetails = document.createElement('div');
    divForDetails.innerHTML = `<div class="col">
            <div class="card">
              <img src="${detail.flags.svg}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${detail.name.common}</h5>
                <p class="card-text">
                 Region : ${detail.region}
                </p>
                <button onClick="singleDetails('${detail.name.common}')" class="btn btn-primary">Details</button>
              </div>
            </div>
          </div>`;
    detailsDiv.appendChild(divForDetails);
  }
};

const showAllCountry = document.getElementById('showAll');

showAllCountry.addEventListener('click', countryDetails);
