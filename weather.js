import { getArgs } from './helpers/args.js'
import { logger } from './services/logService.js'
import { getKeyValue, saveKeyValue } from './services/storageService.js'

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token)
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
}

initCli()