import React, { useState } from "react";
import axios from "axios";

enum UploadOption {
  File,
  RSS,
}

interface CloudWordInput {
  text: string;
  size: number;
}

interface FileAndRssUploadProps {
  onUploadSuccess: (newData: CloudWordInput[]) => void;
}

const getCloudData = async (
  onUploadSuccess: (arg0: any) => void,
  uploadOption: UploadOption
) => {
  const dataSource = uploadOption === 0 ? "textfile" : "rss-feed";
  console.log("uploadOption", uploadOption);
  const cloudDataResponse = await axios.get(
    `/api/clouddata?dataSource=${dataSource}`
  );
  //const cloudDataResponse = await axios.get("/api/clouddata/");
  if (cloudDataResponse.status === 200) {
    onUploadSuccess(cloudDataResponse.data.cloudData);
  } else {
    console.error("Failed to retrieve updated word cloud data");
  }
};

const FileAndRssUpload: React.FC<FileAndRssUploadProps> = ({
  onUploadSuccess,
}) => {
  const [uploadOption, setUploadOption] = useState<UploadOption>(
    UploadOption.File
  );
  const [file, setFile] = useState<File | null>(null);
  const [rssUrl, setRssUrl] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0] || null;
    setFile(uploadedFile);
  };

  const handleSubmit = async () => {
    try {
      if (uploadOption === UploadOption.File && file) {
        const content = await file.text();
        const requestBody = { content };
        const response = await axios.post("/api/textfile", requestBody, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          getCloudData(onUploadSuccess, uploadOption);
          console.log("File uploaded successfully");
        } else {
          console.error("Failed to upload file");
        }
      } else if (uploadOption === UploadOption.RSS && rssUrl) {
        // Handle RSS URL submission
        console.log("RSS URL entered:", rssUrl);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="flex flex-col justify-between lg:col-span-1">
        <label className="text-sm text-gray-600">Upload Type:</label>
        <select
          className="border rounded w-full h-full"
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
        className={`flex flex-col justify-between lg:col-span-2 h-[55px] overflow-auto`}
      >
        {uploadOption === UploadOption.File && (
          <>
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
          </>
        )}

        {uploadOption === UploadOption.RSS && (
          <>
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
