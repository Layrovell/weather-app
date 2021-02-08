/* eslint-disable arrow-body-style */
const API_BASE = 'https://api.openweathermap.org/data/2.5/';
const apikey = 'be2e56e9809ab02e33a32ab7bba23488';

export const fetchWeather = (query) => {
  return fetch(`${API_BASE}weather?q=${query}&units=metric&APPID=${apikey}`)
    .then(res => res.json());
};

export const addLocation = (result, callback, setQuery) => {
  const newLocation = {
    id: result.id,
    name: result.name,
    temp: result.main.temp,
    feels: result.main.feels_like,
    wind: result.wind.speed,
    humidity: result.main.humidity,
    pressure: result.main.pressure,
    tempMax: result.main.temp_max,
    tempMin: result.main.temp_min,
    country: result.sys.country,
    sunrise: result.sys.sunrise,
    sunset: result.sys.sunset,
    description: result.weather[0].description,
    icon: result.weather[0].icon,
    title: result.weather[0].main,
  };

  callback(newLocation);
  if (setQuery) {
    setQuery('');
  }
};
