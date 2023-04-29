import chalk from 'chalk';
import dedent from 'dedent-js';
 
   

export const logger = {
    success: (message) => console.log(chalk.bgGreen(`SUCCESS ${message}`)),
    
    help: () => console.log(dedent(`
    ${chalk.bgCyan(' HELP ')} 
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `)),

    error: (error) => console.log(chalk.bgRed(`ERROR ${error}`)),

    weatherInfo: (res, icon) => {
        console.log(dedent(`
        ${chalk.bgMagenta(' WEATHER ')} City: ${res.name} 
        ${icon}  ${res.weather[0].description}
        Temperature: ${res.main.temp} (feels like: ${res.main.feels_like})
        Humidity: ${res.main.humidity}%
        Wind speed: ${res.wind.speed}
        `))
    }
}