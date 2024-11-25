import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Resume Analyzer</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-lg mb-4">
          Welcome to the Resume Analyzer! Upload your resume to get detailed feedback and analysis.
        </p>
        {/* Add your resume upload component here */}
      </div>
    </div>
  );
}

export default Home; 