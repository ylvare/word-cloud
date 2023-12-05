// App.tsx
import React, { useState } from "react";
import WordCloud from "./components/WordCloud";
import FileAndRssUpload from "./components/FileAndRssUpload";
import { CloudWordInput } from "../../interfaces/interfaces.js";
import CountDown from "./components/CountDown.js";
import "./styles/tailwind.css"; // Import the tailwind.css file
import { set } from "lodash";

const App: React.FC = () => {
  const [wordCloudData, setWordCloudData] = useState<CloudWordInput[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [initialCall, setInitialCall] = useState<boolean>(true);

  const handleUploadSuccess = (newData: CloudWordInput[]) => {
    setWordCloudData(newData);
    setLoading(false);
    setInitialCall(false);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-5 bg-gray-100 p-5">
      <h1 className="text-3xl font-bold">Word Cloud Generator</h1>
      <div className="w-full md:w-3/4 lg:w-3/4 h-96 bg-pink-100 rounded-2xl overflow-auto shadow-md m-5">
        {/* <CountDown initialCountdown={60} onComplete={() => setLoading(false)} /> */}
        {loading && initialCall ? (
          <CountDown
            initialCountdown={60}
            onComplete={() => setLoading(false)}
          />
        ) : (
          // Render WordCloud component when loading is false
          <WordCloud wordCloudData={wordCloudData} />
        )}
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2">
        <FileAndRssUpload
          onUploadSuccess={handleUploadSuccess}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
};

export default App;
