const express = require('express');
const router = express.Router();
const { analyzeText, getAnalysisHistory } = require('../controllers/analyzeController');

router.post('/', analyzeText);
router.get('/history', getAnalysisHistory);

module.exports = router; 