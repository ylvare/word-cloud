//import { shuffle } from 'lodash'; // Import a utility function to shuffle the array if needed

const words = [
  { text: "Läs", size: 12 },
  { text: "In", size: 8 },
  { text: "Data", size: 15 },
];

interface CloudWordInput {
    text: string;
    size: number;
  }


export const generateInputArray = (): CloudWordInput[] => {
  const words = ["Läs", "In", "Data"];

  const inputArray: CloudWordInput[] = [];

  for (let i = 0; i < 30; i++) {
    const wordIndex = i % words.length;
    const randomSize = Math.floor(Math.random() * 40) + 1; // Random size between 1 and 21
    inputArray.push({ text: words[wordIndex], size: randomSize });
  }

  //return shuffle(inputArray);
  return inputArray;
};

// Example usage
const generatedArray = generateInputArray();
console.log("Generated Array:", generatedArray);
