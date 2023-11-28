import React, { useState } from "react";

enum UploadOption {
  File,
  RSS,
}

const FileAndRssUpload: React.FC = () => {
  const [uploadOption, setUploadOption] = useState<UploadOption>(
    UploadOption.File
  );
  const [file, setFile] = useState<File | null>(null);
  const [rssUrl, setRssUrl] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0] || null;
    setFile(uploadedFile);
  };

  const handleSubmit = () => {
    // Handle submission based on the selected option
    if (uploadOption === UploadOption.File) {
      // Do something with the file
      console.log("File uploaded:", file);
    } else {
      // Do something with the entered RSS URL
      console.log("RSS URL entered:", rssUrl);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="flex flex-col justify-between lg:col-span-1">
        <label className="text-sm text-gray-600">Upload Type:</label>
        <select
          className="border rounded w-full h-full bg-slate-50"
          onChange={(e) =>
            setUploadOption(Number(e.target.value) as UploadOption)
          }
          value={uploadOption}
        >
          <option value={UploadOption.File}>File</option>
          <option value={UploadOption.RSS}>RSS</option>
        </select>
      </div>

      <div
        className={`flex flex-col justify-between lg:col-span-2 h-[52px] overflow-auto`}
      >
        {uploadOption === UploadOption.File && (
          <>
            <label htmlFor="fileInput" className="text-sm text-gray-600">
              Upload Text File:
            </label>
            <input
              className="border rounded w-full"
              type="file"
              id="fileInput"
              accept=".txt"
              onChange={handleFileUpload}
            />
          </>
        )}

        {uploadOption === UploadOption.RSS && (
          <>
            <label htmlFor="rssInput" className="text-sm text-gray-600">
              Enter RSS Stream:
            </label>
            <input
              className="border rounded w-full"
              type="text"
              id="rssInput"
              placeholder="Enter RSS URL"
              value={rssUrl}
              onChange={(e) => setRssUrl(e.target.value)}
            />
          </>
        )}
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
};

export default FileAndRssUpload;
