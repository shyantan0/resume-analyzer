const Analysis = require('../models/analysis');
const geminiService = require('../services/geminiService');

exports.analyzeText = async (req, res) => {
  try {
    const { text } = req.body;
    const result = await geminiService.analyzeText(text);
    
    // Save to MongoDB
    const analysis = new Analysis({
      text,
      result
    });
    await analysis.save();

    res.json(result);
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ error: 'Analysis failed' });
  }
};

exports.getAnalysisHistory = async (req, res) => {
  try {
    const history = await Analysis.find().sort({ timestamp: -1 });
    res.json(history);
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ error: 'Failed to fetch analysis history' });
  }
}; 