import { getArgs } from './helpers/args.js';
import { getWeatherData, getWeatherIcon } from './services/api.service.js';
import { logger } from './services/logService.js';
import { getKeyValue, saveKeyValue, STORAGE_DICTIONARY } from './services/storageService.js';

const saveToken = async (token) => {
    if (!token.length) {
        logger.error('Token not found')
    }

    try { 
        await saveKeyValue(STORAGE_DICTIONARY.token, token)
        logger.success('Token saved')
    } catch (error) {
        logger.error(error.message)
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        logger.error('City not found')
    }

    try { 
        await saveKeyValue(STORAGE_DICTIONARY.city, city)
        logger.success('City saved')
    } catch (error) {
        logger.error(error.message)
    }
}

const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(STORAGE_DICTIONARY.city)
        const weatherData = await getWeatherData(city)

        logger.weatherInfo(weatherData, getWeatherIcon(weatherData.weather[0].icon))

    } catch (error) {
        if (error?.response?.status === 404) {
            logger.error('City not found')
        } else if (error?.response?.status === 401) {
            logger.error('Autharization token error')
        } else {
            logger.error(error.message)
        }
    }
}

const initCli = () => {
    const args = getArgs(process.argv)

    if (args.s) {
        // For do this you must write to line command node weather.js -t <city name>
        return saveCity(args.s)
    } 

    if (args.h) {
        // For do this you must write to line command node weather.js -h
        logger.help()
    }

    if (args.t) {
        // For do this you must write to line command node weather.js -t <token name>
        return saveToken(args.t)
    }

    // Return weather
    getForecast()
}

initCli()