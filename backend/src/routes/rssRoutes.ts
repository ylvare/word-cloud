import express from 'express';
import { getPostsFromRssFeedUrl } from '../controllers/rssController.js';

const router = express.Router();

router.get('/rss-feed', getPostsFromRssFeedUrl);

export default router;
