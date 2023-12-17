import { MyAnswer } from './types';
import fsExtra from 'fs-extra';
import path from 'path';
import jsonfile from 'jsonfile';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

function mkdir(name: string) {
  const fullPath = path.resolve(process.cwd(), name);
  if (!fsExtra.existsSync(fullPath)) {
    fsExtra.mkdirSync(fullPath, { recursive: true });
  }
  return fullPath;
}

function write(filePath: string, targetPath: string) {
  return fsExtra.copy(filePath, targetPath);
}

function writePkgFile(targetDir: string) {
  const pkgFilePath = path.resolve(targetDir, 'package.json');
  if (fsExtra.existsSync(pkgFilePath)) {
    const json = jsonfile.readFileSync(pkgFilePath);
    json.main = 'plugin2';
    jsonfile.writeFileSync(pkgFilePath, json, { spaces: 2 });
  }
}

function writePluginJsonFile(targetDir: string) {
  const pluginJsonFilePath = path.resolve(targetDir, 'plugin.json');
  if (fsExtra.existsSync(pluginJsonFilePath)) {
    const json = jsonfile.readFileSync(pluginJsonFilePath);
    json.main = 'plugin2';
    jsonfile.writeFileSync(pluginJsonFilePath, json, { spaces: 2 });
  }
}

async function gen(answer: MyAnswer) {
  const targetDir = mkdir(answer.name);
  try {
    const templateDir = path.resolve(
      __dirname,
      answer.mode === 'normal' ? '../template-vue3' : '../template'
    );
    const files = await fsExtra.readdir(templateDir);

    const preloadFileName = `preload-${answer.mode}.js`;

    const tasks = files.map((f) => {
      const fPath = path.join(templateDir, f);
      let tPath = path.join(targetDir, f);

      if (f === preloadFileName) {
        tPath = path.join(targetDir, 'preload.js');
      } else if (f.startsWith('preload')) {
        return Promise.resolve();
      }

      return write(fPath, tPath);
    });

    await Promise.all(tasks);

    writePkgFile(targetDir);
    writePluginJsonFile(targetDir);
  } catch (e) {
    fsExtra.removeSync(targetDir);
    throw e;
  }
}

export { gen };
