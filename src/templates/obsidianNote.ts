import { AppMode } from '../types/constants.ts';
import { TEXT } from '../config/text.ts';

export interface NoteData {
    date: Date;
    mode: AppMode;
    inputData: string;
}

export const createNoteContent = (data: NoteData): string => {
    return `---
date: ${data.date.toLocaleString()}
mode: ${data.mode}
tags: ["ai/output", "terminal/pipe"]
---

${TEXT.markdown.originalDataHeader}
\`\`\`text
${data.inputData}
\`\`\`

---
`;
};
