import React, { useState } from "react";

const FileAndRssUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [rssUrl, setRssUrl] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0] || null;
    setFile(uploadedFile);
  };

  const handleSubmit = () => {
    // Do something with the entered RSS URL (stored in rssUrl)
    console.log("Do something");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
      <div className="flex flex-col justify-between lg:col-span-2">
        <label htmlFor="fileInput" className="text-sm text-gray-600">
          Upload Text File:
        </label>
        <input
          className="border rounded w-full h-full"
          type="file"
          id="fileInput"
          accept=".txt"
          onChange={handleFileUpload}
        />
      </div>

      <div className="flex flex-col justify-between lg:col-span-2">
        <label htmlFor="rssInput" className="text-sm text-gray-600">
          Enter RSS Stream:
        </label>
        <input
          className="border rounded w-full h-full"
          type="text"
          id="rssInput"
          placeholder="Enter RSS URL"
          value={rssUrl}
          onChange={(e) => setRssUrl(e.target.value)}
        />
      </div>

      <div className="flex flex-col space-y-2 justify-end md:col-span-2 lg:col-span-1">
        <button
          className="px-4 py-1 bg-pink-500 text-white rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );

  //   return (
  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  //       <div className="flex flex-col justify-between">
  //         <label htmlFor="fileInput" className="text-sm text-gray-600">
  //           Upload Text File:
  //         </label>
  //         <input
  //           className="border rounded w-full h-full"
  //           type="file"
  //           id="fileInput"
  //           accept=".txt"
  //           onChange={handleFileUpload}
  //         />
  //       </div>

  //       <div className="flex flex-col justify-between">
  //         <label htmlFor="rssInput" className="text-sm text-gray-600">
  //           Enter RSS Stream:
  //         </label>
  //         <input
  //           className="border rounded w-full h-full"
  //           type="text"
  //           id="rssInput"
  //           placeholder="Enter RSS URL"
  //           value={rssUrl}
  //           onChange={(e) => setRssUrl(e.target.value)}
  //         />
  //       </div>

  //       <div className="flex flex-col space-y-2 justify-end">
  //         <button
  //           className="px-4 py-2 bg-pink-500 text-white rounded"
  //           onClick={handleSubmit}
  //         >
  //           Submit
  //         </button>
  //       </div>
  //     </div>
  //   );

  //   return (
  //     <div className="flex flex-row space-x-5">
  //       <div className="flex flex-col justify-between">
  //         <label htmlFor="fileInput" className="text-sm text-gray-600">
  //           Upload Text File:
  //         </label>
  //         <input
  //           className="border rounded w-full h-full"
  //           type="file"
  //           id="fileInput"
  //           accept=".txt"
  //           onChange={handleFileUpload}
  //         />
  //       </div>

  //       <div className="flex flex-col justify-between">
  //         <label htmlFor="rssInput" className="text-sm text-gray-600">
  //           Enter RSS Stream:
  //         </label>
  //         <input
  //           className="border rounded w-full h-full"
  //           type="text"
  //           id="rssInput"
  //           placeholder="Enter RSS URL"
  //           value={rssUrl}
  //           onChange={(e) => setRssUrl(e.target.value)}
  //         />
  //       </div>
  //       <div className="flex flex-col space-y-2 justify-end">
  //         <button
  //           className="px-4 py-2 bg-pink-500 text-white rounded w-full"
  //           onClick={handleSubmit}
  //         >
  //           Submit
  //         </button>
  //       </div>
  //     </div>
  //   );
};

export default FileAndRssUpload;
