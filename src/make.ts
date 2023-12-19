import { Config } from './types';
import fsExtra from 'fs-extra';
import path from 'path';
import jsonfile from 'jsonfile';

function mkdir(dir: string) {
  if (!fsExtra.existsSync(dir)) {
    fsExtra.mkdirSync(dir, { recursive: true });
  } else {
    fsExtra.emptydirSync(dir);
  }
  return dir;
}

function writePkgFile(config: Config) {
  const pkgFilePath = path.resolve(config.root, 'package.json');
  if (fsExtra.existsSync(pkgFilePath)) {
    const json = jsonfile.readFileSync(pkgFilePath);
    json.name = config.name;
    jsonfile.writeFileSync(pkgFilePath, json, { spaces: 2 });
  }
}

function writePluginJsonFile(config: Config) {
  const pkgFilePath = path.resolve(config.root, 'plugin.json');
  if (fsExtra.existsSync(pkgFilePath)) {
    const json = jsonfile.readFileSync(pkgFilePath);
    json.pluginName = config.name;
    jsonfile.writeFileSync(pkgFilePath, json, { spaces: 2 });
  }
}

async function make(config: Config) {
  try {
    mkdir(config.root);
    fsExtra.copySync(config.temp, config.root);
    writePkgFile(config);
    writePluginJsonFile(config);
  } catch (e) {
    if (fsExtra.existsSync(config.root)) {
      fsExtra.removeSync(config.root);
    }
    throw e;
  }
}

export { make };
