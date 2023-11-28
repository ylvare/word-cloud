// routes/textFileRoutes.ts
import express from 'express';
import { getTextFileContent, uploadTextFile } from '../controllers/textFileController.js';

const router = express.Router();

router.get('/api/textfile/', getTextFileContent);
router.post('/api/textfile/', uploadTextFile);

export default router;