// App.tsx
import React, { useState, useEffect } from "react";
import WordCloud from "./components/WordCloud";
import FileAndRssUpload from "./components/FileAndRssUpload";
import "./styles/tailwind.css"; // Import the tailwind.css file
import { generateInputArray } from "./utils/inputArray";

interface CloudWordInput {
  text: string;
  size: number;
}

const App: React.FC = () => {
  const [wordCloudData, setWordCloudData] = useState<CloudWordInput[]>([]);

  const handleUploadSuccess = (newData: CloudWordInput[]) => {
    setWordCloudData(newData);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-5 bg-gray-100 p-5">
      <h1 className="text-3xl font-bold">Word Cloud Generator</h1>
      <div className="flex-shrink-0 w-full md:w-3/4 lg:w-3/4 h-96 bg-pink-100 rounded-2xl overflow-auto shadow-md m-5">
        <WordCloud wordCloudData={wordCloudData} />
      </div>
      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/2">
        <FileAndRssUpload onUploadSuccess={handleUploadSuccess} />
      </div>
    </div>
  );
};

export default App;
