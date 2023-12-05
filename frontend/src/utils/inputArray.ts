import { CloudWordInput } from "../../../interfaces/interfaces.js";


export const generateInputArray = (): CloudWordInput[] => {
  const words = ["Läs", "In", "Data"];

  const inputArray: CloudWordInput[] = [];

  for (let i = 0; i < 30; i++) {
    const wordIndex = i % words.length;
    const randomSize = Math.floor(Math.random() * 40) + 1; 
    inputArray.push({ text: words[wordIndex], size: randomSize });
  }
  return inputArray;
};

