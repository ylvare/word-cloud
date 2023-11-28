// App.tsx
import React from "react";
import WordCloud from "./components/WordCloud";
import FileAndRssUpload from "./components/FileAndRssUpload";
import "./styles/tailwind.css"; // Import the tailwind.css file

// const rawData = [
//   { word: "apple", frequency: 12 },
//   { word: "banana", frequency: 8 },
//   { word: "orange", frequency: 15 },
//   { word: "grape", frequency: 120 },
//   { word: "kiwi", frequency: 7 },
//   { word: "melon", frequency: 18 },
//   { word: "strawberry", frequency: 5 },
//   { word: "blueberry", frequency: 9 },
//   { word: "pineapple", frequency: 14 },
//   { word: "peach", frequency: 11 },
//   { word: "plum", frequency: 13 },
//   { word: "pear", frequency: 6 },
//   { word: "cherry", frequency: 8 },
//   { word: "raspberry", frequency: 9 },
//   { word: "blackberry", frequency: 100 },
//   { word: "watermelon", frequency: 11 },
//   { word: "mango", frequency: 7 },
//   { word: "pomegranate", frequency: 150 },
//   { word: "apricot", frequency: 10 },
//   { word: "nectarine", frequency: 12 },
//   { word: "coconut", frequency: 10 },
//   { word: "kiwi", frequency: 9 },
//   { word: "passionfruit", frequency: 14 },
//   { word: "dragonfruit", frequency: 8 },
//   { word: "guava", frequency: 7 },
//   { word: "avocado", frequency: 6 },
//   { word: "fig", frequency: 11 },
//   { word: "date", frequency: 13 },
//   { word: "persimmon", frequency: 12 },
//   { word: "papaya", frequency: 10 },
//   { word: "apricot", frequency: 9 },
//   { word: "cranberry", frequency: 12 },
//   { word: "boysenberry", frequency: 10 },
//   { word: "elderberry", frequency: 9 },
//   { word: "lime", frequency: 8 },
//   { word: "lemon", frequency: 14 },
//   { word: "grapefruit", frequency: 13 },
//   { word: "tangerine", frequency: 11 },
//   { word: "kumquat", frequency: 8 },
//   { word: "persimmon", frequency: 7 },
//   { word: "pomelo", frequency: 14 },
//   { word: "mandarin", frequency: 13 },
//   { word: "cantaloupe", frequency: 11 },
//   { word: "honeydew", frequency: 10 },
//   { word: "plantain", frequency: 6 },
//   { word: "kiwi", frequency: 14 },
//   { word: "passionfruit", frequency: 13 },
//   { word: "cucumber", frequency: 11 },
//   { word: "zucchini", frequency: 8 },
//   { word: "carrot", frequency: 7 },
//   { word: "broccoli", frequency: 14 },
//   { word: "spinach", frequency: 13 },
//   { word: "kale", frequency: 11 },
//   { word: "lettuce", frequency: 8 },
//   { word: "cabbage", frequency: 7 },
//   { word: "tomato", frequency: 6 },
//   { word: "bell pepper", frequency: 14 },
//   { word: "onion", frequency: 13 },
//   { word: "garlic", frequency: 11 },
//   { word: "ginger", frequency: 8 },
//   { word: "cilantro", frequency: 7 },
//   { word: "basil", frequency: 60 },
//   { word: "parsley", frequency: 14 },
//   { word: "thyme", frequency: 13 },
//   { word: "rosemary", frequency: 11 },
//   { word: "oregano", frequency: 8 },
//   { word: "sage", frequency: 7 },
//   { word: "mint", frequency: 14 },
//   { word: "dill", frequency: 13 },
//   { word: "chives", frequency: 11 },
//   { word: "coriander", frequency: 8 },
//   { word: "bay leaf", frequency: 7 },
//   { word: "cinnamon", frequency: 14 },
//   { word: "nutmeg", frequency: 13 },
//   { word: "vanilla", frequency: 11 },
//   { word: "cardamom", frequency: 8 },
//   { word: "cloves", frequency: 7 },
//   { word: "cumin", frequency: 6 },
//   { word: "turmeric", frequency: 14 },
//   { word: "paprika", frequency: 13 },
//   { word: "chili powder", frequency: 11 },
//   { word: "cayenne", frequency: 8 },
//   { word: "black pepper", frequency: 7 },
//   { word: "salt", frequency: 6 },
//   { word: "sugar", frequency: 14 },
//   { word: "honey", frequency: 13 },
//   { word: "maple syrup", frequency: 11 },
//   { word: "molasses", frequency: 8 },
//   { word: "agave", frequency: 7 },
//   { word: "corn syrup", frequency: 14 },
//   { word: "ketchup", frequency: 13 },
//   { word: "mustard", frequency: 11 },
//   { word: "mayonnaise", frequency: 8 },
//   { word: "barbecue sauce", frequency: 7 },
//   { word: "soy sauce", frequency: 14 },
//   { word: "teriyaki sauce", frequency: 13 },
//   { word: "hoisin sauce", frequency: 11 },
//   { word: "sriracha", frequency: 8 },
//   { word: "wasabi", frequency: 7 },
//   { word: "vinegar", frequency: 14 },
//   { word: "olive oil", frequency: 13 },
//   { word: "vegetable oil", frequency: 11 },
//   { word: "butter", frequency: 8 },
//   { word: "margarine", frequency: 7 },
//   { word: "cream", frequency: 14 },
//   { word: "milk", frequency: 13 },
//   { word: "yogurt", frequency: 11 },
//   { word: "cheese", frequency: 8 },
//   { word: "egg", frequency: 7 },
//   { word: "chicken", frequency: 6 },
//   { word: "beef", frequency: 14 },
//   { word: "pork", frequency: 13 },
//   { word: "lamb", frequency: 11 },
//   { word: "fish", frequency: 8 },
//   { word: "shrimp", frequency: 7 },
//   { word: "lobster", frequency: 6 },
//   { word: "crab", frequency: 14 },
//   { word: "clam", frequency: 13 },
//   { word: "oyster", frequency: 11 },
//   { word: "mussel", frequency: 8 },
//   { word: "scallop", frequency: 7 },
//   { word: "squid", frequency: 14 },
//   { word: "octopus", frequency: 13 },
//   { word: "cuttlefish", frequency: 11 },
//   { word: "snail", frequency: 8 },
//   { word: "frog legs", frequency: 7 },
//   { word: "escargot", frequency: 14 },
//   { word: "gator", frequency: 13 },
//   { word: "venison", frequency: 11 },
//   { word: "rabbit", frequency: 8 },
//   { word: "buffalo", frequency: 7 },
//   { word: "quail", frequency: 6 },
//   { word: "duck", frequency: 14 },
//   { word: "goose", frequency: 13 },
//   { word: "turkey", frequency: 11 },
//   { word: "pheasant", frequency: 8 },
//   { word: "partridge", frequency: 7 },
//   { word: "ostrich", frequency: 14 },
//   { word: "emu", frequency: 13 },
//   { word: "kangaroo", frequency: 11 },
//   { word: "elk", frequency: 8 },
//   { word: "bison", frequency: 7 },
//   { word: "wild boar", frequency: 6 },
//   { word: "rabbit", frequency: 14 },
//   { word: "squirrel", frequency: 13 },
//   { word: "venison", frequency: 11 },
//   { word: "pheasant", frequency: 8 },
//   { word: "goose", frequency: 7 },
//   { word: "quail", frequency: 6 },
//   { word: "rabbit", frequency: 14 },
//   { word: "squirrel", frequency: 13 },
//   { word: "venison", frequency: 11 },
//   { word: "pheasant", frequency: 8 },
//   { word: "goose", frequency: 7 },
//   { word: "quail", frequency: 6 },
//   // ... (add more words as needed)
// ];

// const rawData = [
//   { word: "example", frequency: 10 },
//   { word: "cloud", frequency: 8 },
//   { word: "data", frequency: 15 },
//   { word: "programming", frequency: 12 },
//   { word: "algorithm", frequency: 7 },
//   { word: "javascript", frequency: 18 },
//   { word: "computer", frequency: 5 },
//   { word: "science", frequency: 9 },
//   { word: "development", frequency: 14 },
//   { word: "application", frequency: 11 },
//   { word: "code", frequency: 13 },
//   { word: "web", frequency: 6 },
//   { word: "interface", frequency: 8 },
//   { word: "framework", frequency: 9 },
//   { word: "library", frequency: 10 },
//   { word: "design", frequency: 11 },
//   { word: "database", frequency: 7 },
//   { word: "server", frequency: 15 },
//   { word: "network", frequency: 10 },
//   { word: "security", frequency: 12 },
//   { word: "testing", frequency: 6 },
//   { word: "debugging", frequency: 9 },
//   { word: "performance", frequency: 14 },
//   { word: "optimization", frequency: 8 },
//   { word: "version", frequency: 7 },
//   { word: "control", frequency: 11 },
//   { word: "repository", frequency: 13 },
//   { word: "agile", frequency: 12 },
//   { word: "scrum", frequency: 10 },
//   { word: "kanban", frequency: 9 },
//   { word: "sprint", frequency: 8 },
//   { word: "workflow", frequency: 7 },
//   { word: "responsive", frequency: 14 },
//   { word: "mobile", frequency: 13 },
//   { word: "user", frequency: 15 },
//   { word: "experience", frequency: 11 },
//   { word: "interface", frequency: 9 },
//   { word: "frontend", frequency: 12 },
//   { word: "backend", frequency: 10 },
//   { word: "full-stack", frequency: 8 },
//   { word: "deployment", frequency: 6 },
//   { word: "continuous", frequency: 14 },
//   { word: "integration", frequency: 13 },
//   { word: "deployment", frequency: 11 },
//   { word: "containerization", frequency: 9 },
//   { word: "microservices", frequency: 12 },
//   { word: "architecture", frequency: 15 },
//   { word: "scalability", frequency: 10 },
//   { word: "performance", frequency: 8 },
//   { word: "monitoring", frequency: 7 },
//   { word: "logging", frequency: 6 },
//   // Add more data as needed
// ];

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
  // ... (add more words as needed)
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
