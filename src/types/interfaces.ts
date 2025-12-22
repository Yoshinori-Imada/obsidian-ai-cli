import { GoogleGenAI } from "@google/genai";
import { AppMode } from './constants.ts';
import { ObsidianService } from '../core/ObsidianService.ts';

export interface ObsidAXConfig {
    apiKey: string;
    vaultPath: string;
    inputData: string;
    mode: AppMode;
    date?: Date;
    instruction?: string;
    filePath?: string;
}

export interface ModeStrategy {
    execute(
        inputData: string,
        obsidian: ObsidianService,
        genAI: GoogleGenAI,
        fileInfo: { relativePath: string; fullPath: string },
        instruction?: string
    ): Promise<any>;
}

export interface XPostCandidate {
    content: string;
    hashtags: string[];
}
