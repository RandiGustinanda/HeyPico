import { askOllama } from '../services/ollamaService.js';
import { extractPlacesAndLinks } from '../utils/mapsHelper.js';

export async function handleAsk(req, res) {
  const question = req.query.q;
  if (!question) return res.redirect('/');

  try {
    console.log('[ASK]', question); 

    const llmAnswer = await askOllama(question); 
    console.log('[LLM ANSWER]', llmAnswer); 

    const places = extractPlacesAndLinks(llmAnswer); 
    console.log('[PLACES]', places); 

    res.render('index', {
      llm_answer: llmAnswer,
      places
    });
  } catch (error) {
    console.error('[ERROR]', error); 
    res.status(500).send('Terjadi kesalahan'); 
  }
}
