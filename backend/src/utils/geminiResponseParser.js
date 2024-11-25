const validateAnalysis = (analysis) => {
  const requiredFields = ['score', 'categories', 'suggestions', 'strengths', 'improvements'];
  const missingFields = requiredFields.filter(field => !(field in analysis));

  if (missingFields.length > 0) {
    throw new Error(`Invalid analysis format. Missing fields: ${missingFields.join(', ')}`);
  }

  if (!Array.isArray(analysis.categories) || analysis.categories.length === 0) {
    throw new Error('Invalid analysis format. Categories must be a non-empty array');
  }

  // Validate score range
  if (analysis.score < 0 || analysis.score > 100) {
    throw new Error('Invalid score range. Score must be between 0 and 100');
  }

  return analysis;
};

const parseGeminiResponse = (responseText) => {
  try {
    const analysis = JSON.parse(responseText);
    return validateAnalysis(analysis);
  } catch (error) {
    console.error('Error parsing Gemini response:', error);
    throw new Error('Failed to parse AI response');
  }
};

module.exports = {
  parseGeminiResponse,
  validateAnalysis
}; 