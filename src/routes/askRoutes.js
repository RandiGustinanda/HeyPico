import express from 'express';
import { handleAsk } from '../controllers/askController.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    llm_answer: '',     // <== wajib kirim, meskipun kosong
    places: []          // <== aman untuk loop <%= places %>
  });
});

router.get('/ask', handleAsk);

export default router;
