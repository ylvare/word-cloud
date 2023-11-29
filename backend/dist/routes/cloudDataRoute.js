// backend/routes/cloudDataRoute.ts
import express from 'express';
import { generateCloudDataController } from '../controllers/cloudDataController.js';
const router = express.Router();
router.get('/api/clouddata/', generateCloudDataController);
export default router;
