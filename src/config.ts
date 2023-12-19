import { Config, MyAnswer } from './types';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function buildConfig(answer: MyAnswer) {
  const root = path.resolve(process.cwd(), answer.name);

  const config: Config = Object.assign({ root }, answer);

  const tempDir = `template-${config.mode === 'preset' ? 'preset' : config.temp}`;
  config.temp = path.resolve(__dirname, `../${tempDir}`);

  return config;
}

export {
  buildConfig
};
