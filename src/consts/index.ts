const PLAT_FORMS = ['win32', 'darwin', 'linux'] as const;

const PLUGIN_MODES = [
  { name: 'web应用', value: 'web' },
  { name: 'utools预设模板应用', value: 'preset' },
] as const;

const PACKAGE_TOOLS = ['npm', 'yarn', 'pnpm'] as const;

export { PLAT_FORMS, PLUGIN_MODES, PACKAGE_TOOLS };
