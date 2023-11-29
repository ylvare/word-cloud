// controllers/textFileController.ts
import { Request, Response } from 'express';
import { readFile, writeFile } from "fs/promises";
import { join } from 'path';

async function getTextFileContent(req: Request, res: Response): Promise<void> {
  try {
    const filename = req.query.filename as string;
    if (!filename) {
      res.status(400).send("Missing 'filename' parameter");
      return;
    }

    const filePath = join(process.cwd(), 'src/textfiles', filename);
    const fileContent = await readFile(filePath, 'utf8');
    res.status(200).send(fileContent);
  } catch (error) {
    console.error(error);
    res.status(404).send('File not found');
  }
}

async function uploadTextFile(req: Request, res: Response): Promise<void> {
    try {
      const { content } = req.body;
      if (!content) {
        res.status(400).send('Missing file data');
        return;
      }
  
      const filePath = join(process.cwd(), 'src/textfiles', "inputTextFile.txt");
      await writeFile(filePath, content);
      res.status(200).send('File uploaded successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to upload file');
    }
  }
  
export { getTextFileContent, uploadTextFile };
