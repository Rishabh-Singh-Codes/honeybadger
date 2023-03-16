import { Router } from 'express';
import { spamMessage } from '../controllers/spamController.js';

const router = Router();

router.post('/spamMessage', spamMessage);

export default router;
