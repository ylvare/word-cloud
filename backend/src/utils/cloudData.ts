// backend/utils/cloudData.ts
import * as d3 from 'd3';
import { englishStopWords } from '../stopWords/englishStopWords.js';
import { swedishStopWords } from '../stopWords/swedishStopWords.js';
import { mathematicalSymbols } from '../stopWords/mathematicalSymbols.js';
import { CloudWordInput, RawWordData } from "../../../interfaces/interfaces.js";



export function generateCloudData(rawData: RawWordData[]): CloudWordInput[] {

  const filteredData = rawData.filter((wordData) => 
  !englishStopWords.has(wordData.word.toLowerCase()) && 
  !swedishStopWords.has(wordData.word.toLowerCase()) &&
  !mathematicalSymbols.has(wordData.word.toLowerCase()) 
);

  const sortedData = filteredData
    .sort((a, b) => b.frequency - a.frequency);

  const sortedDataCapped = sortedData.slice(0, 50);
  const maxFrequency = sortedDataCapped[0]?.frequency || 1;
  const scale = d3.scaleLinear().domain([0, maxFrequency]).range([5, 20]);

  const cloudData: CloudWordInput[] = sortedDataCapped.map((wordData, index) => ({
    text: wordData.word,
    size: scale(wordData.frequency),
  }));

  return cloudData;
}
