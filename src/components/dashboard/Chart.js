import React from 'react';

export default function Chart() {
  return (
    <div className="space-y-6">
      {/* Graphs Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Nodes Graph */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Nodes</h2>
          <div className="relative h-64">
            {/* Y-axis */}
            <div className="absolute left-0 top-0 h-48 flex flex-col justify-between">
              {[100, 80, 60, 40, 20, 0].map((value) => (
                <div key={value} className="flex items-center h-0">
                  <span className="text-xs w-6 text-right mr-2" style={{ color: 'var(--text-secondary)' }}>
                    {value}
                  </span>
                  <div className="w-[calc(100%+24rem)] h-[1px] bg-gray-100"></div>
                </div>
              ))}
            </div>

            {/* Graph Content */}
            <div className="ml-10 h-48">
              <div className="flex items-end h-full space-x-4">
                {[75, 60, 85, 70, 65, 80, 75, 85, 70, 90].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full rounded-t-md transition-all duration-300"
                      style={{ 
                        height: `${height}%`,
                        backgroundColor: 'var(--primary)',
                        ':hover': { backgroundColor: 'var(--primary-dark)' }
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* X-axis */}
            <div className="ml-10 mt-2 flex justify-between">
              {['03/12', '06/12', '09/12', '12/12', '15/12', '18/12', '21/12', '24/12', '27/12', '30/12'].map((label, index) => (
                <div key={index} className="flex-1 text-center">
                  <span className="text-xs -rotate-45 inline-block transform origin-top-left" style={{ color: 'var(--text-secondary)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compute Graph */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Compute</h2>
          <div className="relative h-64">
            {/* Y-axis */}
            <div className="absolute left-0 top-0 h-48 flex flex-col justify-between">
              {[100, 80, 60, 40, 20, 0].map((value) => (
                <div key={value} className="flex items-center h-0">
                  <span className="text-xs w-6 text-right mr-2" style={{ color: 'var(--text-secondary)' }}>
                    {value}
                  </span>
                  <div className="w-[calc(100%+24rem)] h-[1px] bg-gray-100"></div>
                </div>
              ))}
            </div>

            {/* Graph Content */}
            <div className="ml-10 h-48">
              <div className="flex items-end h-full space-x-4">
                {[65, 80, 70, 85, 75, 90, 80, 85, 75, 95].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full rounded-t-md transition-all duration-300"
                      style={{ 
                        height: `${height}%`,
                        backgroundColor: 'var(--primary)',
                        ':hover': { backgroundColor: 'var(--primary-dark)' }
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* X-axis */}
            <div className="ml-10 mt-2 flex justify-between">
              {['03/12', '06/12', '09/12', '12/12', '15/12', '18/12', '21/12', '24/12', '27/12', '30/12'].map((label, index) => (
                <div key={index} className="flex-1 text-center">
                  <span className="text-xs -rotate-45 inline-block transform origin-top-left" style={{ color: 'var(--text-secondary)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Boxes Section */}
      <div className="grid grid-cols-4 gap-6">
        {/* Open Incidents */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
            Open Incidents
          </h3>
          <p className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>4</p>
        </div>

        {/* Critical Incidents */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
            Critical Incidents
          </h3>
          <p className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>2</p>
        </div>

        {/* Active Tests */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
            Active Tests
          </h3>
          <p className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>9</p>
        </div>

        {/* Test Success Rate */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
            Test Success Rate
          </h3>
          <p className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>98.4%</p>
        </div>
      </div>
    </div>
  );
} 