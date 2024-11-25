import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { DocumentArrowUpIcon } from '@heroicons/react/24/outline';

const FileUpload = ({ onFileUpload, isLoading }) => {
  const [error, setError] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setError(null);
    const file = acceptedFiles[0];
    
    if (file && file.type === 'application/pdf') {
      onFileUpload(file);
    } else {
      setError('Please upload a PDF file');
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: false,
    disabled: isLoading
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`
          mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10
          ${isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          hover:bg-gray-50 dark:hover:bg-gray-800
        `}
      >
        <div className="text-center">
          <DocumentArrowUpIcon 
            className="mx-auto h-12 w-12 text-gray-400"
            aria-hidden="true"
          />
          <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-400">
            <input {...getInputProps()} />
            <span>Drag and drop your resume here, or click to select</span>
          </div>
          <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">
            PDF files only
          </p>
          {error && (
            <p className="mt-2 text-sm text-red-500">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload; 