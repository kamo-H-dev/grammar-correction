import { OpenAI } from 'openai';

class OpenAIClient {
  static instance = null;
  
  constructor() {
    
    if (OpenAIClient.instance) {
      return OpenAIClient.instance;
    }
    
    this.openAi = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    OpenAIClient.instance = this;
  }
  
  static getInstance() {
    if (!OpenAIClient.instance) {
      OpenAIClient.instance = new OpenAIClient();
    }
    return OpenAIClient.instance.openAi;
  }
}

export default OpenAIClient;
