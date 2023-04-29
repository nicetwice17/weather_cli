
import axios from 'axios';
import { getKeyValue, STORAGE_DICTIONARY } from './storageService.js';

export const getWeatherIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};

export const getWeatherData = async (city) => {
    const token = await getKeyValue(STORAGE_DICTIONARY.token)

    if (!token) {
        throw new Error('Key of API undefined, set key by commend "-t [API_KEy]"')
    }

    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric'
        }
    })

    return data
}