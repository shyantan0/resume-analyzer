const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeWithGPT = async (text) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Analyze this resume and provide:
    1. An overall score (0-100)
    2. Scores for different categories (Experience, Education, Skills, etc.)
    3. Specific suggestions for improvement
    
    Resume text:
    ${text}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysisText = response.text();

    // Parse the response into structured data
    // This is a simplified example - you'd want to make this more robust
    return {
      score: 75, // Extract from response
      categories: [
        { name: 'Experience', score: 80 },
        { name: 'Education', score: 70 },
        { name: 'Skills', score: 75 }
      ],
      suggestions: [
        'Add more quantifiable achievements',
        'Include relevant certifications',
        'Improve skills section formatting'
      ]
    };
  } catch (error) {
    console.error('GPT analysis error:', error);
    throw new Error('Error analyzing resume with GPT');
  }
};

module.exports = {
  analyzeWithGPT
}; 