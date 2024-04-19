document.addEventListener('DOMContentLoaded', function() {
    // Dynamically add student information
    document.getElementById('studentInfo').textContent = 'Name: Alexander Rothermel, Student ID: 1235416';

    const apiKey = 'bddf466aebfa7eda716dcd97abf3b1cc';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Barrie&appid=${apiKey}`;

    //  weather data from OpenWeatherMap
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tempCelsius = (data.main.temp - 273.15).toFixed(2);
            const weatherDescription = data.weather[0].main;
            let recommendation = "";

            if (weatherDescription.includes("Rain")) {
                recommendation = "It's rainy. Don't forget your umbrella!";
            } else if (weatherDescription.includes("Clear")) {
                recommendation = "It's clear and sunny. Stay hydrated and bring water!";
            } else {
                recommendation = "Enjoy your day!";
            }

            const weatherData = `Current temperature in ${data.name}: ${tempCelsius}°C. ${recommendation}`;
            document.getElementById('weather').textContent = weatherData;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
