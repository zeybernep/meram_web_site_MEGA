import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud } from '@fortawesome/free-solid-svg-icons';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=MERAM&appid=840cbea0d0552011de2436b418655625`
          
        );

        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  const getWeatherIcon = () => {
    if (!weatherData || !weatherData.weather || weatherData.weather.length === 0) {
      return null;
    }

    const weatherMain = weatherData.weather[0].main.toLowerCase();

    if (weatherMain.includes('clear')) {
      return <FontAwesomeIcon icon={faSun} className="weather-icon" />;
    } else if (weatherMain.includes('cloud')) {
      return <FontAwesomeIcon icon={faCloud} className="weather-icon" />;
    }

    return null;
  };

  const celsiusTemperature = weatherData ? weatherData.main.temp - 273.15 : null;

  return (
    <div className="weather-container">
      {getWeatherIcon()}
      {weatherData && (
        <>
          <h2>Hava durumu {weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <div className="temperature">
            <p className="temp">derece: {celsiusTemperature !== null ? Math.round(celsiusTemperature) : 'Loading'}°C</p>
            <p className="humidity">Nem: {weatherData.main.humidity}%</p>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherComponent;
