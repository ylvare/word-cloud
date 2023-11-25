// routes/postRoutes.ts
import express from 'express';
import { getPostsFromRssFeedUrl } from '../controllers/postController.js';

const router = express.Router();


router.post('/rss-feed', getPostsFromRssFeedUrl);

export default router;
