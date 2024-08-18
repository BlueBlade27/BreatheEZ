const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 5000;

const API_KEY = '18e15d19cd114c97976231948241708'; // Replace with your WeatherAPI key
const WEATHER_ENDPOINT = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Toronto&aqi=yes`; // Use WeatherAPI endpoint with air quality

app.use(cors()); // Use the cors middleware

app.get('/api/weather', async (req, res) => {
  try {
    const response = await axios.get(WEATHER_ENDPOINT);
    const data = response.data;

    // Extract the necessary weather and air quality information
    const weatherData = {
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
      wind: data.current.wind_kph,
      humidity: data.current.humidity,
      aqi: data.current.air_quality.pm2_5, // Example for PM2.5 AQI value
    };

    res.json({ weatherData });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).send('Error fetching weather data');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
