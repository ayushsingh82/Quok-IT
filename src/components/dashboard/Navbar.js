import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-3 shadow-md" style={{ 
      backgroundColor: 'var(--surface)', 
      boxShadow: '0 1px 3px var(--shadow-color)' 
    }}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>Overview</h1>
        </div>

        {/* Right Section with Search, Notifications, and Profile */}
        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for anything in Quok.it"
              className="w-[320px] h-9 pl-10 pr-4 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-200"
              style={{ 
                borderColor: 'var(--border-light)',
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                '::placeholder': { color: 'var(--text-secondary)' },
                ':focus': { 
                  borderColor: 'var(--primary)',
                  ringColor: 'var(--primary-hover)'
                }
              }}
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4.5 w-4.5" 
                style={{ color: 'var(--text-secondary)' }}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
          </div>

          {/* Notification Button */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" style={{ color: 'var(--text-secondary)' }} viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>

          {/* Profile Avatar */}
          <div className="h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-medium" style={{ backgroundColor: 'var(--primary)' }}>
            U
          </div>
        </div>
      </div>
    </nav>
  );
} 