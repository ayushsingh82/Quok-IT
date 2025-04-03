import React from 'react';

export default function Chart() {
  // Mock data for the line charts
  const nodesData = [
    { date: '03/12', value: 65 },
    { date: '06/12', value: 75 },
    { date: '09/12', value: 60 },
    { date: '12/12', value: 80 },
    { date: '15/12', value: 70 },
    { date: '18/12', value: 85 },
    { date: '21/12', value: 75 },
    { date: '24/12', value: 90 },
    { date: '27/12', value: 85 },
    { date: '30/12', value: 95 },
  ];

  const computeData = [
    { date: '03/12', value: 70 },
    { date: '06/12', value: 85 },
    { date: '09/12', value: 75 },
    { date: '12/12', value: 90 },
    { date: '15/12', value: 80 },
    { date: '18/12', value: 95 },
    { date: '21/12', value: 85 },
    { date: '24/12', value: 90 },
    { date: '27/12', value: 88 },
    { date: '30/12', value: 92 },
  ];

  const createLinePath = (data) => {
    const width = 100 / (data.length - 1);
    return data.map((point, i) => {
      const x = i * width;
      const y = 100 - point.value;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

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
              <div className="absolute left-8 top-0 h-full w-[2px] bg-gray-300"></div>
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
            <div className="ml-10 h-48 relative">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                  d={createLinePath(nodesData)}
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* X-axis line */}
            <div className="absolute bottom-12 left-10 right-0 h-[2px] bg-gray-300"></div>

            {/* X-axis labels - moved below the line */}
            <div className="ml-10 mt-6 flex justify-between absolute bottom-0 left-0 right-0">
              {nodesData.map((point, index) => (
                <div key={index} className="flex-1 text-center">
                  <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {point.date}
                  </span>
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
              <div className="absolute left-8 top-0 h-full w-[2px] bg-gray-300"></div>
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
            <div className="ml-10 h-48 relative">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                  d={createLinePath(computeData)}
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* X-axis line */}
            <div className="absolute bottom-12 left-10 right-0 h-[2px] bg-gray-300"></div>

            {/* X-axis labels - moved below the line */}
            <div className="ml-10 mt-6 flex justify-between absolute bottom-0 left-0 right-0">
              {computeData.map((point, index) => (
                <div key={index} className="flex-1 text-center">
                  <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {point.date}
                  </span>
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

      {/* New Incidents and Latest Tests Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* New Incidents Box */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
              New Incidents
            </h3>
            <a 
              href="#" 
              className="text-sm hover:underline"
              style={{ color: 'var(--primary)' }}
            >
              View all
            </a>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full mt-1.5" style={{ backgroundColor: 'var(--primary)' }}></div>
              <div className="flex-1">
                <h4 className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                  Node Connection Lost
                </h4>
                <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                  Node #234 disconnected unexpectedly
                </p>
                <span className="text-xs mt-2 inline-block" style={{ color: 'var(--text-secondary)' }}>
                  2 hours ago
                </span>
              </div>
            </div>
            <div className="border-t border-gray-100"></div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full mt-1.5" style={{ backgroundColor: 'var(--primary)' }}></div>
              <div className="flex-1">
                <h4 className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                  High Memory Usage
                </h4>
                <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                  Memory usage exceeded 90% threshold
                </p>
                <span className="text-xs mt-2 inline-block" style={{ color: 'var(--text-secondary)' }}>
                  3 hours ago
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Tests Box */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
              Latest Tests
            </h3>
            <a 
              href="#" 
              className="text-sm hover:underline"
              style={{ color: 'var(--primary)' }}
            >
              View all
            </a>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full mt-1.5 bg-green-500"></div>
              <div className="flex-1">
                <h4 className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                  Network Performance Test
                </h4>
                <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                  All 24 test cases passed successfully
                </p>
                <span className="text-xs mt-2 inline-block" style={{ color: 'var(--text-secondary)' }}>
                  1 hour ago
                </span>
              </div>
            </div>
            <div className="border-t border-gray-100"></div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full mt-1.5 bg-green-500"></div>
              <div className="flex-1">
                <h4 className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                  Node Health Check
                </h4>
                <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                  All nodes reporting optimal health
                </p>
                <span className="text-xs mt-2 inline-block" style={{ color: 'var(--text-secondary)' }}>
                  4 hours ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 