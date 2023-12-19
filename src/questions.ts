import inquirer, { CheckboxQuestion, InputQuestion, ListQuestion, } from 'inquirer';
import { PACKAGE_TOOLS, PLAT_FORMS, PLUGIN_MODES } from './consts';
import { MyAnswer } from './types';

const prompt = inquirer.createPromptModule();

export async function questions() {
  const name: InputQuestion = {
    type: 'input',
    name: 'name',
    message: '插件名称:',
    validate: (input: string) => {
      if (!input) {
        return '输入插件名称';
      }
      return true;
    },
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
    choices: PLAT_FORMS,
  };
  const mode: ListQuestion = {
    type: 'list',
    name: 'mode',
    message: '插件运行模式:',
    choices: PLUGIN_MODES,
  };
  const temp: ListQuestion = {
    type: 'list',
    name: 'temp',
    message: '选择WEB模板:',
    choices: ['vue3'],
    when: (answer) => {
      return answer.mode === 'web';
    },
  };
  const pkgTool: ListQuestion = {
    type: 'list',
    name: 'pkgTool',
    message: '选择包管理器:',
    choices: PACKAGE_TOOLS,
  };

  return prompt<MyAnswer>([name, platform, mode, temp, pkgTool]);
}
