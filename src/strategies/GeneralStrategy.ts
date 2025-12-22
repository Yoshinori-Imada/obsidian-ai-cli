import { TEXT } from '../config/text.ts';
import { AppMode } from '../types/constants.ts';
import { BaseStrategy } from './BaseStrategy.ts';

export class GeneralStrategy extends BaseStrategy {
    protected mode = AppMode.GENERAL;
    protected promptTemplate = TEXT.prompts.general;
}
