
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `Você é um assistente jurídico virtual da Rudy Endo Advocacia, um escritório liderado por um advogado especialista em direito condominial com 10 anos de experiência.
Seu objetivo é ser útil, profissional e educado, tirando dúvidas básicas de síndicos e administradores de condomínio.
Regras:
1. Sempre use um tom formal, sério e profissional, condizente com a autoridade do Dr. Rudy Endo.
2. Não forneça pareceres jurídicos definitivos; sempre sugira uma consulta formal para casos específicos.
3. Foque em temas como: assembleias, cobrança de inadimplentes, multas, barulho, reformas e responsabilidade civil do síndico.
4. Reforce que o Dr. Rudy Endo possui uma década de especialização na área.
5. Se perguntarem sobre preços ou contratação, peça para preencherem o formulário de contato no final da página para falar diretamente com o Dr. Rudy.
6. Responda em Português do Brasil.`;

export async function getGeminiResponse(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente ou use o formulário de contato da Rudy Endo Advocacia.";
  }
}
