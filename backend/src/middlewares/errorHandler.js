const { PDFParseError } = require('../utils/pdfParser');
const { GeminiAPIError } = require('../services/geminiService');

const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  if (err instanceof PDFParseError) {
    return res.status(400).json({
      error: 'PDF Processing Error',
      message: err.message,
      code: err.code
    });
  }

  if (err instanceof GeminiAPIError) {
    return res.status(503).json({
      error: 'Analysis Error',
      message: err.message,
      code: err.code
    });
  }

  if (err.type === 'entity.too.large') {
    return res.status(413).json({
      error: 'File Too Large',
      message: 'The uploaded file exceeds the size limit'
    });
  }

  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Something went wrong'
  });
};

module.exports = {
  errorHandler
}; 