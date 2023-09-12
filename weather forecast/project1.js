const weatherDataContainer = document.querySelector('.weather-data');

async function fetchWeatherData() {
  try {
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=84dbdbfeb8debd274ee06fbac1dc4124`);//calling the api key link of own apiKey
    if (url.ok) {
      const data = await url.json();
      const cityName = data.name;
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;

      const htmlTemplate = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
      `;

      weatherDataContainer.innerHTML = htmlTemplate;
    } 
    else {
      weatherDataContainer.innerHTML = 'Failed to fetch weather data.';
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherDataContainer.innerHTML = 'An error occurred while fetching weather data.';
  }
}

window.addEventListener('load', fetchWeatherData);
