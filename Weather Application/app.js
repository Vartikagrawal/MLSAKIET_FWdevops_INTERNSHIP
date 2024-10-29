const apiKey = '8d23d3f89c15423185a143929242710'; // Your WeatherAPI key

document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    fetchWeather(city);
});

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        if (!response.ok) {
            throw new Error('City not found or invalid API key');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather').innerText = error.message;
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h2>Weather in ${data.location.name}</h2>
        <p>Temperature: ${data.current.temp_c} °C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind Speed: ${data.current.wind_kph} kph</p>
    `;
}
