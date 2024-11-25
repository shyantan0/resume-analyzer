import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const ScoreDisplay = ({ score, categories }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Resume Score
          </h2>
          <div className={`text-5xl font-bold mt-4 ${getScoreColor(score)}`}>
            {score}%
          </div>
        </div>

        <div className="space-y-4 mt-6">
          {categories?.map((category) => (
            <div 
              key={category.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                {category.score >= 70 ? (
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                ) : (
                  <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                )}
                <span className="text-gray-700 dark:text-gray-300">
                  {category.name}
                </span>
              </div>
              <span className={`font-medium ${getScoreColor(category.score)}`}>
                {category.score}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreDisplay; 