import React from 'react';
import Navbar from './Navbar';
import Stats from './Stats';
import Chart from './Chart';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">Overview</h2>
        <Stats />
        <div className="mt-8">
          <Chart />
        </div>
      </main>
    </div>
  );
} 