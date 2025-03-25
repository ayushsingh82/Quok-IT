import React from 'react';

export default function Chart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
      <div className="flex items-end h-64 space-x-2">
        {[60, 45, 80, 50, 65, 75, 40, 55, 70, 85, 60, 75].map((height, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-blue-500 rounded-t-md transition-all duration-300 hover:bg-blue-600"
              style={{ height: `${height}%` }}
            ></div>
            <span className="text-xs mt-1 text-gray-500">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 