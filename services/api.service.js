
import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storageService.js';

export const getWeatherData = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token)

    if (!token) {
        throw new Error('Key of API undefined, set key by commend "-t [API_KEy]"')
    }

    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })

    return data
}