const rateLimit = require('express-rate-limit');

const resumeAnalysisLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    error: 'Too many analysis requests. Please try again later.',
    waitTime: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = {
  resumeAnalysisLimiter
}; 