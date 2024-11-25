const pdf = require('pdf-parse');

class PDFParseError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'PDFParseError';
    this.code = code;
  }
}

const extractTextFromPdf = async (buffer) => {
  try {
    const options = {
      // Preserve formatting and layout
      preserveFormatting: true,
      // Skip empty lines
      skipEmptyLines: true,
      // Custom rendering to handle tables and columns
      pagerender: function(pageData) {
        return pageData.getTextContent()
          .then(function(textContent) {
            let lastY, text = '';
            for (let item of textContent.items) {
              if (lastY != item.transform[5]) {
                text += '\n';
              }
              text += item.str;
              lastY = item.transform[5];
            }
            return text;
          });
      }
    };

    const data = await pdf(buffer, options);
    const text = data.text.trim();

    if (!text) {
      throw new PDFParseError('No text content found in PDF', 'EMPTY_PDF');
    }

    return {
      text,
      metadata: {
        pageCount: data.numpages,
        info: data.info,
        version: data.version
      }
    };
  } catch (error) {
    if (error instanceof PDFParseError) {
      throw error;
    }
    if (error.message.includes('Invalid PDF')) {
      throw new PDFParseError('Invalid or corrupted PDF file', 'INVALID_PDF');
    }
    throw new PDFParseError('Error extracting text from PDF', 'PARSE_ERROR');
  }
};

module.exports = {
  extractTextFromPdf,
  PDFParseError
}; 