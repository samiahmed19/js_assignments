const weatherData = document.querySelector('.weather-data');

async function getWeatherData() {
  try {
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=84dbdbfeb8debd274ee06fbac1dc4124`);//calling the api key link of own apiKey
    if (url.ok) {
      const data = await url.json();
      const cityName = data.name;
      const temperature = data.main.temp;
      const weatherDesc = data.weather[0].description;

      const htmlTemplate = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDesc}</p>
      `;

      weatherData.innerHTML = htmlTemplate;
    } 
    else {
      weatherData.innerHTML = 'Failed to fetch weather data.';
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherData.innerHTML = 'An error occurred while fetching weather data.';
  }
}

window.addEventListener('load', getWeatherData);
