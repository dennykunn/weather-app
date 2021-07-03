import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_key = '84cc140457e5550e7bf93f5255a0d0f5';
export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params : {
            q: query, 
            units: 'metric',
            APPID: API_key,
        }
    });

    return data;
}