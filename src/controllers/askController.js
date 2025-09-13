import { askOllama } from '../services/ollamaService.js';
import { extractPlacesAndLinks } from '../utils/mapsHelper.js';

export async function handleAsk(req, res) {
  const question = req.query.q;

  if (!question) {
    return res.status(400).json({ error: 'Missing query parameter: q' });
  }

  try {
    const llmAnswer = await askOllama(question);
    const places = extractPlacesAndLinks(llmAnswer);

    res.json({
      prompt: question,
      llm_answer: llmAnswer,
      places,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}
