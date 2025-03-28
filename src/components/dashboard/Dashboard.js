import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Stats from './Stats';
import Chart from './Chart';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1">
        <Navbar />
        <main className="container mx-auto px-6 py-8">
          <Stats />
          <div className="mt-8">
            <Chart />
          </div>
        </main>
      </div>
    </div>
  );
} 