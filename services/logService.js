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

    error: (error) => console.log(chalk.bgRed(`ERROR ${error}`))
}