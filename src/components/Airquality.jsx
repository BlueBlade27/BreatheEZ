// Import necessary React hooks and axios for HTTP requests
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the Airquality component
const Airquality = () => {
  // State to store weather data and loading status
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch weather data when component mounts
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Make GET request to local API endpoint
        const response = await axios.get('http://localhost:5000/api/weather');
        // Update state with fetched weather data
        setWeatherData(response.data.weatherData);
        // Set loading to false once data is fetched
        setLoading(false);
      } catch (error) {
        // Log error and set loading to false if request fails
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    // Call the fetchWeather function
    fetchWeather();
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to determine background color based on AQI value
  const getAQIColor = (aqi) => {
    if (aqi <= 50) return 'bg-green-400';
    if (aqi <= 100) return 'bg-yellow-500';
    if (aqi <= 150) return 'bg-orange-500';
    if (aqi <= 200) return 'bg-red-500';
    return 'bg-purple-500';
  };

  // Function to determine AQI category based on AQI value
  const getAQICategory = (aqi) => {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 300) return 'Very Unhealthy';
    return 'Hazardous';
  };

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-t from-blue-400 to-blue-600">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  // Render the air quality report once data is loaded
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-t from-blue-400 to-blue-600">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg w-3/4 mx-auto mt-20">

      <h2 className="text-5xl font-bold text-white mb-8 bg-transparent text-center">Air Quality Report</h2>

<div className="grid grid-cols-2 gap-8">
  <div className="col-span-2">
    {/* Display AQI value with color-coded background */}
    <div className={`rounded-full h-48 w-48 flex items-center justify-center mx-auto ${getAQIColor(weatherData.aqi)}`}>
      <span className="text-6xl font-bold text-white bg-transparent">{Math.round(weatherData.aqi)}</span>
    </div>
    <p className="text-center text-gray-600 mt-4 text-xl">Air quality: AQI (PM2.5)</p>
    <p className="text-center text-gray-600  mt-2 text-2xl font-semibold">{getAQICategory(weatherData.aqi)}</p>
  </div>

  {/* Display temperature and wind information */}
  <div className="text-gray-600 pl-28">
    <p className="text-2xl mb-4"><i className="fas fa-thermometer-half mr-3"></i>Temperature: {weatherData.temperature}°C</p>
    <p className="text-2xl"><i className="fas fa-wind mr-3"></i>Wind: {weatherData.wind} kph</p>
  </div>

  {/* Display humidity and weather condition */}
  <div className="text-gray-600 pl-28">
    <p className="text-2xl mb-4"><i className="fas fa-tint mr-3"></i>Humidity: {weatherData.humidity}%</p>
    <p className="text-2xl"><i className="fas fa-cloud mr-3"></i>Condition: {weatherData.condition}</p>
  </div>
</div>

      </div>
    </div>
  );
};

// Export the Airquality component
export default Airquality;
