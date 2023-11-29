import { join } from 'path';
import fs from 'fs';
import { generateCloudData } from '../utils/cloudData.js';
export const generateCloudDataController = async (req, res) => {
    try {
        const dataSource = req.query.dataSource || 'textfile';
        if (!dataSource) {
            return res.status(400).send("Missing 'dataSource' parameter");
        }
        let rawData;
        let cloudData;
        const filePath = getFilePath(dataSource);
        if (!filePath) {
            return res.status(400).json({ error: 'Invalid data source specified' });
        }
        if (dataSource === 'rss') {
            rawData = readRawDataFromRssFile(filePath);
        }
        else {
            rawData = readRawDataFromFile(filePath);
        }
        cloudData = generateCloudData(rawData);
        res.json({ cloudData });
    }
    catch (error) {
        console.error('Error generating cloud data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
function getFilePath(dataSource) {
    const baseDir = join(process.cwd(), 'src/textfiles');
    const filePaths = {
        textfile: join(baseDir, 'inputTextFile.txt'),
        rss: join(baseDir, 'rss-feed.xml'),
    };
    return filePaths[dataSource] || null;
}
function readRawDataFromFile(filePath, cleanRegex) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const contentToProcess = cleanRegex ? cleanHtmlTags(fileContent, cleanRegex) : fileContent;
        const words = contentToProcess.split(/\s+/);
        const wordCounts = {};
        for (const word of words) {
            if (wordCounts[word]) {
                wordCounts[word]++;
            }
            else {
                wordCounts[word] = 1;
            }
        }
        const wordOccurrences = Object.entries(wordCounts).map(([word, frequency]) => ({ word, frequency }));
        return wordOccurrences;
    }
    catch (error) {
        console.error('Error reading raw data from file:', error);
        throw error;
    }
}
function cleanHtmlTags(content, regex) {
    return content.replace(regex, '');
}
function readRawDataFromRssFile(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(fileContent);
        let allContent = '';
        data.items.forEach((item) => {
            if (item.content) {
                allContent += item.content;
            }
        });
        const cleanHtmlTagsRegex = /<[^>]+>/g;
        return readRawDataFromFile(filePath, cleanHtmlTagsRegex);
    }
    catch (error) {
        console.error('Error reading raw data from RSS file:', error);
        throw error;
    }
}
