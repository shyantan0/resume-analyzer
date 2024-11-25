import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FileUpload from '../FileUpload';

describe('FileUpload Component', () => {
  const mockOnFileUpload = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders upload area correctly', () => {
    render(<FileUpload onFileUpload={mockOnFileUpload} />);
    expect(screen.getByText(/drag and drop/i)).toBeInTheDocument();
  });

  it('handles file upload correctly', async () => {
    render(<FileUpload onFileUpload={mockOnFileUpload} />);
    
    const file = new File(['dummy content'], 'resume.pdf', { type: 'application/pdf' });
    const dropzone = screen.getByText(/drag and drop/i).closest('div');

    Object.defineProperty(dropzone, 'files', {
      value: [file]
    });

    fireEvent.drop(dropzone);
    
    expect(mockOnFileUpload).toHaveBeenCalledWith(file);
  });

  it('shows error for non-PDF files', async () => {
    render(<FileUpload onFileUpload={mockOnFileUpload} />);
    
    const file = new File(['dummy content'], 'resume.doc', { type: 'application/msword' });
    const dropzone = screen.getByText(/drag and drop/i).closest('div');

    Object.defineProperty(dropzone, 'files', {
      value: [file]
    });

    fireEvent.drop(dropzone);
    
    expect(screen.getByText(/please upload a pdf file/i)).toBeInTheDocument();
    expect(mockOnFileUpload).not.toHaveBeenCalled();
  });
}); 