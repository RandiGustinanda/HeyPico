import axios from 'axios';

export async function askOllama(question) {
  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'mistral',
      prompt: question,
      stream: false
    });

    return response.data.response;
  } catch (error) {
    console.error('Error calling Ollama API:', error.message);
    throw error;
  }
}
