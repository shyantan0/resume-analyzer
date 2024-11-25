const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeResume = async (resumeText) => {
  try {
    // Add check to ensure resumeText is a string
    if (!resumeText || typeof resumeText !== 'string') {
      throw new Error('Resume text must be a string');
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `Analyze this resume and provide feedback on:
    1. Overall impression
    2. Key strengths
    3. Areas for improvement
    4. Format and presentation
    5. Specific recommendations
    
    Resume:
    ${resumeText.trim()}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error in analyzeResume service:', error);
    throw error;
  }
};

module.exports = analyzeResume; 