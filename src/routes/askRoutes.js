import express from 'express';
import { handleAsk } from '../controllers/askController.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/ask', handleAsk);

export default router;
