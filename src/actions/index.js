import axios from 'axios';

const API_KEY = '45cc7c048ea7524c26537ad6dd4fa471';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},br`;
  const request = axios.get(url);
  
  console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}