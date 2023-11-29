import { writeFile } from 'fs/promises';
import { fetchRssFeed } from '../services/rssService.js';
import { join } from 'path';
async function getPostsFromRssFeedUrl(req, res) {
    try {
        const rssFeedUrl = req.query.rssFeedUrl;
        if (!rssFeedUrl) {
            res.status(400).json({ error: 'Missing RSS feed URL in the query parameters' });
            return;
        }
        const rssFeed = await fetchRssFeed(rssFeedUrl);
        const filePath = join(process.cwd(), 'src/textfiles', 'rss-feed.xml');
        const rssFeedString = JSON.stringify(rssFeed);
        // Save the RSS feed to a file
        await writeFile(filePath, rssFeedString);
        console.log('RSS feed saved to file:', filePath);
        res.json({ message: 'RSS feed saved to file' });
    }
    catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
export { getPostsFromRssFeedUrl };
