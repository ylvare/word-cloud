// App.tsx
import React from "react";
import WordCloud from "./components/WordCloud";

const App: React.FC = () => {
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

  return (
    <div>
      <WordCloud rawData={rawData} />
    </div>
  );
};

export default App;

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
