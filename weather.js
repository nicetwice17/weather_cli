import { getArgs } from './helpers/args.js'
import { getWeatherData } from './services/api.service.js'
import { logger } from './services/logService.js'
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storageService.js'

const saveToken = async (token) => {
    if (!token.length) {
        logger.error('Token not transferred')
    }

    try { 
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        logger.success('Token saved')
    } catch (error) {
        logger.error(error.message)
    }
}

const initCli = () => {
    const args = getArgs(process.argv)

    if (args.s) {
        // Return city
    } 

    if (args.h) {
        // Return help
        logger.help()
    }

    if (args.t) {
        // Save token
        return saveToken(args.t)
        // getKeyValue()
    }

    // Return weather
    getWeatherData('moscow')
}

initCli()