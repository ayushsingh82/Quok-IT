import React from 'react';

export default function Card({ title, value, icon, color }) {
  return (
    <div className="p-6 rounded-lg shadow-md" style={{ 
      backgroundColor: 'var(--surface)',
      boxShadow: '0 4px 6px var(--shadow-color)'
    }}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{title}</h3>
          <p className="text-2xl font-bold mt-1" style={{ color: 'var(--foreground)' }}>{value}</p>
        </div>
        <div className="p-3 rounded-full" style={{ backgroundColor: `var(--${color === 'blue' ? 'primary' : color})` }}>
          {icon}
        </div>
      </div>
    </div>
  );
} 