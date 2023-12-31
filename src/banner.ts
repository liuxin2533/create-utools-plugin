import { version } from '../package.json';
import chalk from 'chalk';

export function printBanner() {
  console.log(chalk.blue(`
 _   _| |_ ___   ___ | |___       _ __ | |_   _  __ _(_)_ __         ___| (_)
| | | | __/ _ \\ / _ \\| / __|_____| '_ \\| | | | |/ _\` | | '_ \\ _____ / __| | |
| |_| | || (_) | (_) | \\__ \\_____| |_) | | |_| | (_| | | | | |_____| (__| | |
 \\__,_|\\__\\___/ \\___/|_|___/     | .__/|_|\\__,_|\\__, |_|_| |_|      \\___|_|_|
                                 |_|            |___/                        
                                                   
                                                                  v${version}
    `));
}
