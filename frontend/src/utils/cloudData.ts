// utils/cloudData.ts
import * as d3 from "d3";

interface RawWordData {
    word: string;
    frequency: number;
    // Add any other properties from your raw data
  }
  
  interface CloudWord {
    text: string;
    size: number;
  }

  export function generateCloudData(rawData: RawWordData[]): CloudWord[] {
    // Example: Sort data by frequency, you may adjust based on your needs
    const sortedData = rawData.sort((a, b) => b.frequency - a.frequency);
  
    // Example: Scale the frequency values to determine word sizes
    const maxFrequency = sortedData[0]?.frequency || 1;
    const scale = d3.scaleLinear().domain([0, maxFrequency]).range([5, 20]);
  
    // Map the raw data to the format expected by d3-cloud
    const cloudData: CloudWord[] = sortedData.map((wordData, index) => ({
      text: wordData.word,
      size: scale(wordData.frequency),
    }));
  
    return cloudData;
  }
  