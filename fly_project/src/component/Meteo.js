import React, { useState, useEffect } from 'react';

export default function Meteo() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {

    const fetchWeatherData = async () => {

        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?lat=43.608960&lon=3.871079&appid=52450e76024150e4311adcc543b76a38'
        );

        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          console.error('Erreur lors de la récupération des données météo');
        }
        
    };

    fetchWeatherData();
  }, []);

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(0);
  };

  const noeudsToKmh = (noeuds) => {
    return (noeuds * 2).toFixed(0);
  }

  return (
    <div>
      <h1>Météo</h1>
      {weatherData ? (
        <div>
          <p>Ville: {weatherData.name}</p>
          <p>Température: {kelvinToCelsius(weatherData.main.temp)} °C</p>
          <p>Vitesse du vent: {noeudsToKmh(weatherData.wind.speed)}km/h</p>
        </div>
      ) : (
        <p>Chargement ....</p>
      )}
    </div>
  );
}
