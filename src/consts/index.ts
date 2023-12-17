const PLAT_FORMS = ['win32', 'darwin', 'linux'] as const;

const PLUGIN_MODES = [
  { name: '普通模式', value: 'normal' },
  { name: '无UI模式', value: 'no-ui' },
  { name: '列表模式', value: 'list' },
  { name: '文档模式', value: 'doc' },
] as const;

const PACKAGE_TOOLS = ['npm', 'yarn', 'pnpm'] as const;

export { PLAT_FORMS, PLUGIN_MODES, PACKAGE_TOOLS };
