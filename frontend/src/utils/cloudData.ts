// utils/cloudData.ts
import * as d3 from "d3";

interface RawWordData {
    word: string;
    frequency: number;
  }
  
  interface CloudWord {
    text: string;
    size: number;
  }

  export function generateCloudData(rawData: RawWordData[]): CloudWord[] {
    const sortedData = rawData.sort((a, b) => b.frequency - a.frequency);
  
    const maxFrequency = sortedData[0]?.frequency || 1;
    const scale = d3.scaleLinear().domain([0, maxFrequency]).range([5, 20]);
  
    const cloudData: CloudWord[] = sortedData.map((wordData, index) => ({
      text: wordData.word,
      size: scale(wordData.frequency),
    }));
  
    return cloudData;
  }
  