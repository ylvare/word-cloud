// backend/routes/cloudDataRoute.ts
import express from 'express';
import { generateCloudDataController } from '../controllers/cloudDataController.js';
import { getPostsFromRssFeedUrl } from '../controllers/rssController.js';

const router = express.Router();


router.get('/api/clouddata/', generateCloudDataController);

export default router;