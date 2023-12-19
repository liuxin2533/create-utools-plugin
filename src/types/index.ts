import { PLAT_FORMS } from '../consts';

export type MyAnswer = {
  name: string;
  platform: (typeof PLAT_FORMS)[number][];
  mode: string;
  temp: string;
  pkgTool: string;
};

export type Config = {
  root: string;
} & MyAnswer;

export default {};
