import inquirer, { Answers, CheckboxQuestion, InputQuestion, ListQuestion } from 'inquirer';
import { PACKAGE_TOOLS, PLAT_FORMS, PLUGIN_MODES } from './consts';
import fsExtra from 'fs-extra';
import path from 'path';
import { MyAnswer } from './types';

const prompt = inquirer.createPromptModule();

export async function questions(root: string) {
  function resolve(p: string) {
    return path.resolve(root, p);
  }

  const name: InputQuestion = {
    type: 'input',
    name: 'name',
    validate: async (value: string) => {
      if (fsExtra.existsSync(resolve(value))) {
        return '已存在同名目录, 请重新输入...';
      }
      return true;
    },
    message: '插件名称:'
  };
  const platform: CheckboxQuestion = {
    type: 'checkbox',
    name: 'platform',
    message: '插件支持的平台:',
    default: () => {
      return PLAT_FORMS;
    },
    validate: (input: string[]) => {
      if (input.length === 0) {
        return '请至少选择一个平台...';
      }
      return true;
    },
    choices: PLAT_FORMS
  };
  const mode: ListQuestion = {
    type: 'list',
    name: 'mode',
    message: '插件运行模式:',
    choices: PLUGIN_MODES
  };
  const pkgTool: ListQuestion = {
    type: 'list',
    name: 'pkgTool',
    message: '选择包管理器:',
    choices: PACKAGE_TOOLS
  };

  const answer: Answers = await prompt([
    name,
    platform,
    mode,
    pkgTool
  ]);
  return answer as MyAnswer;
}
