// routes/textFileRoutes.ts
import express from 'express';
import { getTextFileContent, uploadTextFile } from '../controllers/textFileController.js';

const router = express.Router();

router.get('/', getTextFileContent);
router.post('/', uploadTextFile);

export default router;