import { TEXT as JA } from './locales/ja.ts';
import { TEXT as EN } from './locales/en.ts';

const lang = process.env.APP_LANG || 'ja';

export const TEXT = lang === 'en' ? EN : JA;
