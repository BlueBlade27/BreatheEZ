import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Airquality = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/weather');
        setWeatherData(response.data.weatherData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getAQIColor = (aqi) => {
    if (aqi <= 50) return 'bg-green-500';
    if (aqi <= 100) return 'bg-yellow-500';
    if (aqi <= 150) return 'bg-orange-500';
    if (aqi <= 200) return 'bg-red-500';
    return 'bg-purple-500';
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-t from-blue-400 to-blue-600">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-t from-blue-400 to-blue-600">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-6">Air Quality Report</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className={`rounded-full h-40 w-40 flex items-center justify-center mx-auto ${getAQIColor(weatherData.aqi)}`}>
              <span className="text-5xl font-bold text-white">{Math.round(weatherData.aqi)}</span>
            </div>
            <p className="text-center text-white mt-2">Air quality: AQI (PM2.5)</p>
          </div>
          <div className="text-white">
            <p className="text-lg"><i className="fas fa-thermometer-half mr-2"></i>temperature: {weatherData.temperature}°C</p>
            <p className="text-lg"><i className="fas fa-wind mr-2"></i> wind: {weatherData.wind} kph</p>
          </div>
          <div className="text-white">
            <p className="text-lg"><i className="fas fa-tint mr-2"></i>humidity: {weatherData.humidity}%</p>
            <p className="text-lg"><i className="fas fa-cloud mr-2"></i>condition: {weatherData.condition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airquality;
