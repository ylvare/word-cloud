import React, { useState } from "react";
import { CloudWordInput } from "../../../interfaces/interfaces.js";
import axios from "axios";
import { set } from "lodash";

axios.defaults.baseURL = "https://word-cloud-mvnj.onrender.com";

enum UploadOption {
  File,
  RSS,
}

interface FileAndRssUploadProps {
  onUploadSuccess: (newData: CloudWordInput[]) => void;
  setLoading: (loading: boolean) => void;
}

const FileAndRssUpload: React.FC<FileAndRssUploadProps> = ({
  onUploadSuccess,
  setLoading,
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

  const handleFileSubmit = async () => {
    try {
      if (file) {
        const content = await file.text();
        const requestBody = { content };
        const response = await axios.post("/api/textfile", requestBody, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        handleApiResponse(response);
      }
    } catch (error) {
      console.error("Failed to submit file", error);
    }
  };

  const handleRssSubmit = async () => {
    try {
      if (rssUrl) {
        const response = await axios.get(`/api/rss-feed/?rssFeedUrl=${rssUrl}`);
        handleApiResponse(response);
      }
    } catch (error) {
      console.error("Failed to submit RSS", error);
    }
  };

  const handleApiResponse = (response: any) => {
    if (response.status === 200) {
      getCloudData(onUploadSuccess);
      console.log("File uploaded successfully");
    } else {
      console.error("Failed to get cloud data");
    }
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>,
    setLoading: (loading: boolean) => void
  ) => {
    try {
      setLoading(true);
      if (uploadOption === UploadOption.File) {
        await handleFileSubmit();
      } else if (uploadOption === UploadOption.RSS) {
        await handleRssSubmit();
      }
    } catch (error) {
      console.error("Failed to submit", error);
    } finally {
      setLoading(false); // Ensure to set loading to false after the operation is complete or encounters an error
    }
  };

  const getDataSource = (): string =>
    uploadOption === UploadOption.File ? "textfile" : "rss";

  const getCloudData = async (onUploadSuccess: (arg0: any) => void) => {
    try {
      const dataSource = getDataSource();
      const cloudDataResponse = await axios.get(
        `/api/clouddata?dataSource=${dataSource}`
      );

      if (cloudDataResponse.status === 200) {
        onUploadSuccess(cloudDataResponse.data.cloudData);
      } else {
        console.error("Failed to retrieve updated word cloud data");
      }
    } catch (error) {
      console.error("Error generating cloud data:", error);
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
          onClick={(event) => handleSubmit(event, setLoading)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FileAndRssUpload;
