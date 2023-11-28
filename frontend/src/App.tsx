// App.tsx
import React from "react";
import WordCloud from "./components/WordCloud";
import FileAndRssUpload from "./components/FileAndRssUpload";
import "./styles/tailwind.css"; // Import the tailwind.css file

const rawData = [
  { word: "apple", frequency: 12 },
  { word: "banana", frequency: 8 },
  { word: "orange", frequency: 15 },
  { word: "grape", frequency: 12 },
  { word: "kiwi", frequency: 7 },
  { word: "melon", frequency: 18 },
  { word: "strawberry", frequency: 5 },
  { word: "blueberry", frequency: 9 },
  { word: "pineapple", frequency: 14 },
  { word: "peach", frequency: 11 },
];
const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-5 bg-gray-100 p-5">
      <h1 className="text-3xl font-bold">Word Cloud Generator</h1>
      <div className="flex-shrink-0 w-full md:w-3/4 lg:w-3/4 h-96 bg-pink-100 rounded-2xl overflow-auto shadow-md m-5">
        <WordCloud rawData={rawData} />
      </div>
      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/2">
        <FileAndRssUpload />
      </div>
    </div>
  );
};

export default App;
