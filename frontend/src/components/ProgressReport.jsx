import React from 'react';

function ProgressReport({ habits, calculateProgress }) {
  return (
    <div className='progress-report flex justify-center p-4'>
      <div className='w-96 p-4 rounded-md'>
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
          <div key={day} className="flex flex-col mb-4">
            <label className="text-lg font-medium text-gray-900 dark:text-white">{day}</label>
            <input
              type="range"
              min="0"
              max="100"
              value={calculateProgress(day)}
              className="range-slider"
              readOnly
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">{calculateProgress(day).toFixed(2)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressReport;
