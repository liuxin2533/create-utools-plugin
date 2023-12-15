import { PLAT_FORMS } from '../consts';

export type MyAnswer = {
  name: string;
  platform: (typeof PLAT_FORMS[number])[];
  mode: string;
  pkgTool: string;
}

export default {};
