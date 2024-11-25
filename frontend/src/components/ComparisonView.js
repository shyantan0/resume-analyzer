import React from 'react';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

const ComparisonView = ({ analyses }) => {
  if (!analyses || analyses.length < 2) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center mb-6">
          <ArrowsRightLeftIcon className="h-6 w-6 text-primary-500 mr-2" />
          Resume Comparison
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {analyses.map((analysis, index) => (
            <div key={index} className="space-y-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Resume {index + 1}
                </h3>
                <div className={`text-3xl font-bold mt-2 ${
                  analysis.score >= 80 ? 'text-green-500' :
                  analysis.score >= 60 ? 'text-yellow-500' :
                  'text-red-500'
                }`}>
                  {analysis.score}%
                </div>
              </div>

              {analysis.categories.map((category) => (
                <div 
                  key={category.name}
                  className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <span className="text-gray-700 dark:text-gray-300">
                    {category.name}
                  </span>
                  <span className={`font-medium ${
                    category.score >= 80 ? 'text-green-500' :
                    category.score >= 60 ? 'text-yellow-500' :
                    'text-red-500'
                  }`}>
                    {category.score}%
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-primary-50 dark:bg-primary-900 rounded-lg">
          <h4 className="text-lg font-medium text-primary-900 dark:text-primary-100 mb-3">
            Key Differences
          </h4>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {analyses[0].categories.map((category, index) => {
              const diff = category.score - analyses[1].categories[index].score;
              if (Math.abs(diff) >= 10) {
                return (
                  <li key={category.name} className="flex items-center">
                    <span className="w-24 font-medium">{category.name}:</span>
                    <span className={`ml-2 ${diff > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {diff > 0 ? '+' : ''}{diff}%
                    </span>
                  </li>
                );
              }
              return null;
            }).filter(Boolean)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComparisonView; 