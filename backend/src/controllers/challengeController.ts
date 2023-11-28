// controllers/textFileController.ts
import { Request, Response } from 'express';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { marked } from "marked";

async function getChallengeMarkdown(req: Request, res: Response): Promise<void> {
  try {
    const challengeMarkdownPath = join(
      fileURLToPath(import.meta.url),
      //'../../../../CHALLENGE.md'
      '../../../../WORDCLOUD.md'
    );
    const challengeMarkdown = await readFile(challengeMarkdownPath, 'utf8');
    const html = marked(challengeMarkdown);
    res.status(200).send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

export { getChallengeMarkdown };
