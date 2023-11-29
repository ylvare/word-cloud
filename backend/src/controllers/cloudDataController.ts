// backend/controllers/cloudDataController.ts
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { join } from 'path';
import fs from 'fs';
import { generateCloudData } from '../utils/cloudData.js';
import {  RawWordData } from "../../../interfaces/interfaces.js";


export interface CloudWord {
  text: string;
  size: number;
}

export const generateCloudDataController = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response) => {
  try {
    const dataSource: string = req.query.dataSource as string || 'textfile';

    if (!dataSource) {
      return res.status(400).send("Missing 'dataSource' parameter");
    }

    let rawData: RawWordData[];
    let cloudData: CloudWord[];

    const filePath = getFilePath(dataSource);

    if (!filePath) {
      return res.status(400).json({ error: 'Invalid data source specified' });
    }

    if (dataSource === 'rss') {
      rawData = readRawDataFromRssFile(filePath);
    } else {
      rawData = readRawDataFromFile(filePath);
    }

    cloudData = generateCloudData(rawData);
    res.json({ cloudData });
  } catch (error) {
    console.error('Error generating cloud data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

function getFilePath(dataSource: string): string | null {
  const baseDir = join(process.cwd(), 'src/textfiles');
  const filePaths: { [key: string]: string } = {
    textfile: join(baseDir, 'inputTextFile.txt'),
    rss: join(baseDir, 'rss-feed.xml'),
  };

  return filePaths[dataSource] || null;
}

function readRawDataFromFile(filePath: string, cleanRegex?: RegExp): RawWordData[] {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const contentToProcess = cleanRegex ? cleanHtmlTags(fileContent, cleanRegex) : fileContent;

    const words = contentToProcess.split(/\s+/);

    const wordCounts: Record<string, number> = {};

    for (const word of words) {
      if (wordCounts[word]) {
        wordCounts[word]++;
      } else {
        wordCounts[word] = 1;
      }
    }

    const wordOccurrences: RawWordData[] = Object.entries(wordCounts).map(([word, frequency]) => ({ word, frequency }));

    return wordOccurrences;
  } catch (error) {
    console.error('Error reading raw data from file:', error);
    throw error;
  }
}

function cleanHtmlTags(content: string, regex: RegExp): string {
  return content.replace(regex, '');
}

function readRawDataFromRssFile(filePath: string): RawWordData[] {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    let allContent = '';

    data.items.forEach((item: any) => {
      if (item.content) {
        allContent += item.content;
      }
    });

    const cleanHtmlTagsRegex = /<[^>]+>/g;

    return readRawDataFromFile(filePath, cleanHtmlTagsRegex);
  } catch (error) {
    console.error('Error reading raw data from RSS file:', error);
    throw error;
  }
}

