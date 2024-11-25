const FILE_SIZE_LIMIT = 5 * 1024 * 1024; // 5MB

export const validateFile = (file) => {
  const errors = [];

  if (!file) {
    errors.push('No file selected');
    return errors;
  }

  // Check file type
  if (file.type !== 'application/pdf') {
    errors.push('Only PDF files are accepted');
  }

  // Check file size
  if (file.size > FILE_SIZE_LIMIT) {
    errors.push('File size must be less than 5MB');
  }

  return errors;
}; 