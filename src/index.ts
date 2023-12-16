#!/usr/bin/env node
import { printBanner } from './banner';
import { questions } from './questions';
import { gen } from './gen';
import chalk from 'chalk';
import minimist from 'minimist';
import { execa } from 'execa';
import path from 'path';

const argv = minimist(process.argv.slice(2));

async function main() {
  const targetDir = argv._[0] || '.';
  const root = path.join(process.cwd(), targetDir);
  printBanner();
  const answers = await questions(root);

  const dir = path.join(root, answers.name);
  console.log(chalk.blue('正在创建项目...'), chalk.green(dir));
  await gen(answers);
  console.log(chalk.blue('正在安装依赖...'));
  execa(answers.pkgTool, [`i`], {
    cwd: dir,
  }).then(res=>{
    console.log(chalk.green('安装完成'));
  }).catch(err=>{
    console.error(err);
  })
}

main().catch(e => {
  console.error(e);
});
