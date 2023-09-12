const countryInfo = document.querySelector('.country-info');
const newBtn = document.getElementById('new-btn');
async function getCountryInfo() {
  const url = await fetch('https://restcountries.com/v3.1/all');
    if (url.ok) {
      const data = await url.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomCountry = data[randomIndex];

      
      const countryName = randomCountry.name.common;
      const capital = randomCountry.capital[0];
      const population = randomCountry.population.toLocaleString();
      const area = randomCountry.area.toLocaleString();
      const region = randomCountry.region;

      const htmlTemplate = `
        <h2>${countryName}</h2>
        <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
        <p>Area: ${area} square kilometers</p>
        <p>Region: ${region}</p>
      `;

      // Update the HTML container with the country information
      countryInfo.innerHTML = htmlTemplate;
    } 
    else {
      countryInfo.innerHTML = 'Failed to fetch country information.';
    }
}

newBtn.addEventListener('click', getCountryInfo);
getCountryInfo()
