import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const analyzeText = async (text) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/analyze`, { text });
    return response.data;
  } catch (error) {
    throw new Error('Analysis failed');
  }
};

export const getAnalysisHistory = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/analyze/history`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch analysis history');
  }
}; 