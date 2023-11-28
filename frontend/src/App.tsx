// App.tsx
import React from "react";
import WordCloud from "./components/WordCloud";
import FileAndRssUpload from "./components/FileAndRssUpload";
import "./styles/tailwind.css"; // Import the tailwind.css file

const rawData = [
  { word: "example", frequency: 10 },
  { word: "cloud", frequency: 8 },
  { word: "data", frequency: 15 },
  { word: "programming", frequency: 12 },
  { word: "algorithm", frequency: 7 },
  { word: "javascript", frequency: 18 },
  { word: "computer", frequency: 5 },
  { word: "science", frequency: 9 },
  { word: "development", frequency: 14 },
  { word: "application", frequency: 11 },
  { word: "code", frequency: 13 },
  { word: "web", frequency: 6 },
  { word: "interface", frequency: 8 },
  { word: "framework", frequency: 9 },
  { word: "library", frequency: 10 },
  { word: "design", frequency: 11 },
  { word: "database", frequency: 7 },
  { word: "server", frequency: 15 },
  { word: "network", frequency: 10 },
  { word: "security", frequency: 12 },
  { word: "testing", frequency: 6 },
  { word: "debugging", frequency: 9 },
  { word: "performance", frequency: 14 },
  { word: "optimization", frequency: 8 },
  { word: "version", frequency: 7 },
  { word: "control", frequency: 11 },
  { word: "repository", frequency: 13 },
  { word: "agile", frequency: 12 },
  { word: "scrum", frequency: 10 },
  { word: "kanban", frequency: 9 },
  { word: "sprint", frequency: 8 },
  { word: "workflow", frequency: 7 },
  { word: "responsive", frequency: 14 },
  { word: "mobile", frequency: 13 },
  { word: "user", frequency: 15 },
  { word: "experience", frequency: 11 },
  { word: "interface", frequency: 9 },
  { word: "frontend", frequency: 12 },
  { word: "backend", frequency: 10 },
  { word: "full-stack", frequency: 8 },
  { word: "deployment", frequency: 6 },
  { word: "continuous", frequency: 14 },
  { word: "integration", frequency: 13 },
  { word: "deployment", frequency: 11 },
  { word: "containerization", frequency: 9 },
  { word: "microservices", frequency: 12 },
  { word: "architecture", frequency: 15 },
  { word: "scalability", frequency: 10 },
  { word: "performance", frequency: 8 },
  { word: "monitoring", frequency: 7 },
  { word: "logging", frequency: 6 },
  // Add more data as needed
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

/* <WordCloud rawData={rawData} /> */

// import { useEffect, useState } from "react";
// import "./App.css";

// export function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<Error>();
//   const [html, setHtml] = useState("");

//   useEffect(() => {
//     fetch("api/textfile?filename=Ylva-Rehnberg_CV.txt")
//       .then((r) => {
//         console.log("in fetch!");
//         console.log(r);
//         return r.text();
//       })
//       .then(setHtml)
//       .catch(setError)
//       .finally(() => setIsLoading(false));
//   }, []);

//   if (error != null) {
//     console.error(error);
//     return <div>Error! Check console...</div>;
//   }

//   return (
//     <div className="App">
//       {isLoading ? "Loading..." : null}
//       <article dangerouslySetInnerHTML={{ __html: html }} />
//     </div>
//   );
// }
