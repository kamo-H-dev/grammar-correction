'use server';

import { incorrectWordsResponseFormat } from '@/app/constants';
import  OpenAIClient  from '@/app/lib/getOpenAiInstance';

export async function checkTextGrammar(text) {
  
  const openAi = OpenAIClient.getInstance();
  
  if (!text) {
    return {
      success: false,
    };
  }
  //TODO: suggestion, save user`s incorrect words in db and if user again wrote the same words don`t send it to AI for check, but use it from db
  
  const prompt = `Identify all incorrect or misspelled words in the following text. Provide the output as an array of incorrect words.
   Do not include any other information. Text: ${text}`;

  const response = await openAi.chat.completions.create({
    messages: [{ role: 'user', content: prompt}],
    model: 'gpt-4o-mini',
    response_format: incorrectWordsResponseFormat
  });

  if (response.error) {
    return {
      success: false,
    };
  }
  
  const result = JSON.parse(response.choices[0].message.content).incorrect_words;
  
  return {
    success: true,
    result
  };
}
