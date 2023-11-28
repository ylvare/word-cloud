// routes/challengeRoutes.ts
import express from 'express';
import { getChallengeMarkdown } from '../controllers/challengeController.js';
const router = express.Router();
router.get('/', getChallengeMarkdown);
export default router;
