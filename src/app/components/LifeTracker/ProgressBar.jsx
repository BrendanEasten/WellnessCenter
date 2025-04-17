import React from 'react';

export default function ProgressBar({ value }) {
  return (
    <div className="progress-bar-container w-full bg-gray-200 rounded-full h-4 overflow-hidden mb-6">
      <div
        className="progress-bar bg-green-500 h-full rounded-full transition-all duration-300"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
