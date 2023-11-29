// rssService.ts
import Parser from 'rss-parser';
const parser = new Parser();
async function fetchRssFeed(url) {
    try {
        const feed = await parser.parseURL(url);
        return feed;
    }
    catch (error) {
        throw error;
    }
}
export { fetchRssFeed };
