import { MyAnswer } from './types';
import fsExtra from 'fs-extra';
import path from 'path';


function resolve(p: string = './') {
  return path.resolve(process.cwd(), p);
}

function mkdir(name: string) {
  const fullPath = resolve(name);
  if (!fsExtra.existsSync(fullPath)) {
    fsExtra.mkdirSync(fullPath, { recursive: true });
  }
  return fullPath;
}


function write(filePath: string, targetPath: string) {
  return fsExtra.copy(filePath, targetPath);
}

async function gen(answer: MyAnswer) {
  const targetDir = mkdir(answer.name);
  try {
    const templateDir = resolve(answer.mode === 'normal' ? 'template-web' : 'template');
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

  } catch (e) {
    fsExtra.removeSync(targetDir);
    throw e;
  }
}

export {
  gen
};
