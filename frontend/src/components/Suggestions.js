import React from 'react';
import { LightBulbIcon } from '@heroicons/react/24/outline';

const Suggestions = ({ suggestions }) => {
  if (!suggestions?.length) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
          <LightBulbIcon className="h-6 w-6 text-yellow-500 mr-2" />
          Improvement Suggestions
        </h2>
        
        <div className="mt-4 space-y-4">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index}
              className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {index + 1}
                </span>
              </div>
              <p className="text-sm">{suggestion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions; 