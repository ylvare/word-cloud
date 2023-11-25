// postController.ts
import { Request, Response } from 'express';
import { fetchRssFeed } from '../services/rssService.js';

async function getPostsFromRssFeedUrl(req: Request, res: Response): Promise<void> {
  try {
    const rssFeedUrl: string = req.body.rssFeedUrl; // Assuming the URL is sent in the request body

    if (!rssFeedUrl) {
      res.status(400).json({ error: 'RSS feed URL is required' });
      return;
    }

    const rssFeed = await fetchRssFeed(rssFeedUrl);
    // Process and send the RSS feed data as a response
    res.json(rssFeed);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export { getPostsFromRssFeedUrl };
