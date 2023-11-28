import { fetchRssFeed } from '../services/rssService.js';
async function getPostsFromRssFeedUrl(req, res) {
    try {
        const rssFeedUrl = req.query.rssFeedUrl;
        if (!rssFeedUrl) {
            res.status(400).json({ error: 'Missing RSS feed URL in the query parameters' });
            return;
        }
        const rssFeed = await fetchRssFeed(rssFeedUrl);
        // Process and send the RSS feed data as a response
        res.json(rssFeed);
    }
    catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
export { getPostsFromRssFeedUrl };
