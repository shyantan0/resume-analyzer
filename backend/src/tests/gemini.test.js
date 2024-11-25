const { analyzeResume, GeminiAPIError } = require('../services/geminiService');
const { validateAnalysis } = require('../utils/geminiResponseParser');

describe('Gemini Resume Analysis', () => {
  const mockResume = `
    John Doe
    Software Engineer
    
    Experience:
    - Senior Developer at Tech Corp (2018-Present)
    - Software Engineer at StartUp Inc (2015-2018)
    
    Education:
    - BS in Computer Science
    
    Skills:
    - JavaScript, React, Node.js
    - Team Leadership
  `;

  it('should analyze a valid resume', async () => {
    const result = await analyzeResume(mockResume);
    
    expect(result).toHaveProperty('score');
    expect(result).toHaveProperty('categories');
    expect(result).toHaveProperty('suggestions');
    expect(result.score).toBeGreaterThanOrEqual(0);
    expect(result.score).toBeLessThanOrEqual(100);
  });

  it('should handle empty resume text', async () => {
    await expect(analyzeResume('')).rejects.toThrow(GeminiAPIError);
  });

  it('should validate analysis response structure', () => {
    const invalidAnalysis = {
      score: 75,
      // missing required fields
    };

    expect(() => validateAnalysis(invalidAnalysis)).toThrow();
  });

  it('should handle API errors gracefully', async () => {
    // Temporarily invalidate API key to test error handling
    process.env.GEMINI_API_KEY = 'invalid_key';
    
    await expect(analyzeResume(mockResume)).rejects.toThrow(GeminiAPIError);
    
    // Restore API key
    process.env.GEMINI_API_KEY = process.env.BACKUP_GEMINI_API_KEY;
  });
}); 