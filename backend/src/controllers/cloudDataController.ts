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
    const dataSource: string = req.query.dataSource as string || 'textfile';

    if (!dataSource) {
      res.status(400).send("Missing 'filename' parameter");
      return;
    }

    let rawData: RawWordData[];
    let cloudData: CloudWord[];

    if (dataSource === 'textfile') {
      console.log("in data source textfile")
      const filePath = join(process.cwd(), 'src/textfiles', 'inputTextFile.txt');
      rawData = readRawDataFromTextFile(filePath);
      cloudData= generateCloudData(rawData);
      res.json({ cloudData });
    } else if (dataSource === 'rss') {
      const filePath = join(process.cwd(), 'src/textfiles', 'rss-feed.xml');
      rawData = readRawDataFromRssFile(filePath);
      cloudData= generateCloudData(rawData);
      console.log(cloudData)
      res.json({ cloudData });
    } else {
      res.status(400).json({ error: 'Invalid data source specified' });
      return;
    }

    

  } catch (error) {
    console.error('Error generating cloud data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

function readRawDataFromTextFile(filePath: string): RawWordData[] {
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

function readRawDataFromRssFile(filePath: string): RawWordData[] {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const data = JSON.parse(fileContent);

    let allContent: string = "";
    
    data.items.forEach((item: any) => {
      if (item.content) {
        allContent += item.content;
      }
    });

    const clean = /<\/?[^>]+(>|$)/g;
    const filteredContent = allContent.replace(clean, '');

    const words = filteredContent.split(/\s+/);
    
  
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
