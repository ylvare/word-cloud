// backend/controllers/cloudDataController.ts
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { join } from 'path';
import fs from 'fs';
import { generateCloudData } from '../utils/cloudData.js';

export interface RawWordData {
  word: string;
  frequency: number;
}

export interface CloudWord {
  text: string;
  size: number;
}

export const generateCloudDataController = (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response) => {
  try {
    const filePath = join(process.cwd(), 'src/textfiles', "inputTextFile.txt");
    const rawData: RawWordData[] = readRawDataFromFile(filePath);
    const cloudData: CloudWord[] = generateCloudData(rawData);
    res.json({ cloudData });
  } catch (error) {
    console.error('Error generating cloud data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

function readRawDataFromFile(filePath: string): RawWordData[] {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const words = fileContent.split(/\s+/);

    const wordCounts: Record<string, number> = {};

    for (const word of words) {
      if (wordCounts[word]) {
        wordCounts[word]++;
      } else {
        wordCounts[word] = 1;
      }
    }
  
    const wordOccurrences: RawWordData[] = [];
    for (const word in wordCounts) {
      wordOccurrences.push({ word, frequency: wordCounts[word] });
    }
  
    return wordOccurrences;
  } catch (error) {
    console.error('Error reading raw data from file:', error);
    throw error; 
  }
}
