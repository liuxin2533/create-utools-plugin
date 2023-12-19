import path from 'path';
import {fileURLToPath} from 'url';
import fsExtra from 'fs-extra';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

fsExtra.copy(path.resolve(__dirname, '../template-preset'),
    path.resolve(__dirname, '../template-preset1'));
