import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const analyzeResume = async (file) => {
  try {
    const formData = new FormData();
    formData.append('resume', file);

    const response = await axios.post(`${API_URL}/analyze`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error analyzing resume');
  }
};

export const getAnalysisHistory = async () => {
  try {
    const response = await axios.get(`${API_URL}/history`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching history');
  }
}; 