// rssService.ts
import Parser from 'rss-parser';
const parser = new Parser();
async function fetchRssFeed(url) {
    try {
        const feed = await parser.parseURL(url);
        // Process the feed data as needed
        return feed;
    }
    catch (error) {
        // Handle errors
        throw error;
    }
}
export { fetchRssFeed };
