#!/usr/bin/env node
import { printBanner } from './banner';
import { questions } from './questions';
import { buildConfig } from './config';
import { make } from './make';
import chalk from 'chalk';
import { $ } from 'execa';
import inquirer from 'inquirer';
import fsExtra from 'fs-extra';


async function main() {
  printBanner();

  const answers = await questions();
  const config = buildConfig(answers);

  if (fsExtra.existsSync(config.root)) {
    const prompt = inquirer.createPromptModule();
    const answer = await prompt([{ type: 'confirm', name: 'cover', message: '已存在同名目录, 是否覆盖？' }]);
    if (!answer.cover) {
      console.log(chalk.red('用户取消！'));
      return process.exit(1);
    }
  }

  console.log(chalk.blue('正在创建项目...'), chalk.green(config.root));
  await make(config);

  console.log(chalk.blue('正在安装依赖...'));
  await $({ cwd: config.root, stdio: 'inherit' })`${answers.pkgTool} install`;

  console.log('\n');
  console.log(chalk.blue('完成！'));
}

main().catch((e) => {
  console.error(e);
});
