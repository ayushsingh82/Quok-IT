'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/mockdata';

export default function Sidebar() {
  const [networkExpanded, setNetworkExpanded] = useState(true);
  const [activeNetwork, setActiveNetwork] = useState('akash');

  return (
    <div className="shadow-md w-64 flex flex-col h-screen bg-surface" style={{ backgroundColor: 'var(--surface)' }}>
      {/* Top Section with Logo */}
      <div className="p-4 border-b" style={{ borderColor: 'var(--border-light)' }}>
        <div className="flex items-center space-x-2">
          <div className="relative h-6 w-6">
            <Image
              src="/logo.webp"
              alt="Quok.it Logo"
              width={24}
              height={24}
              priority
              style={{ 
                objectFit: 'contain',
                objectPosition: 'left'
              }}
            />
          </div>
          <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
            Quok.it
          </h3>
        </div>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-grow p-4 overflow-y-auto">
        <ul className="space-y-1">
          
          
          {/* Network Section with Dropdown */}
          <li>
            <button 
              onClick={() => setNetworkExpanded(!networkExpanded)}
              className="w-full flex items-center justify-between p-3 rounded-md transition-colors duration-200"
              style={{ 
                color: 'var(--foreground)',
                ':hover': { backgroundColor: '#007b5f15' } // Light version of #007b5f
              }}
            >
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span>Network</span>
              </div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 transform transition-transform ${networkExpanded ? 'rotate-180' : ''}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Network Submenu */}
            {networkExpanded && (
              <ul className="ml-8 mt-2 space-y-1">
                <li>
                  <button 
                    onClick={() => setActiveNetwork('akash')}
                    className="w-full flex items-center space-x-3 p-2 rounded-md transition-colors duration-200"
                    style={{ 
                      backgroundColor: activeNetwork === 'akash' ? 'var(--primary)' : 'transparent',
                      color: activeNetwork === 'akash' ? 'white' : 'var(--foreground)',
                      ':hover': { backgroundColor: activeNetwork === 'akash' ? 'var(--primary)' : '#007b5f15' }
                    }}
                  >
                    <span className="text-sm">Akash</span>
                  </button>
                </li>
              
             
                <li>
                  <button 
                    onClick={() => setActiveNetwork('nvidia')}
                    className="w-full flex items-center space-x-3 p-2 rounded-md transition-colors duration-200"
                    style={{ 
                      backgroundColor: activeNetwork === 'nvidia' ? 'var(--primary)' : 'transparent',
                      color: activeNetwork === 'nvidia' ? 'white' : 'var(--foreground)',
                      ':hover': { backgroundColor: activeNetwork === 'nvidia' ? 'var(--primary)' : '#007b5f15' }
                    }}
                  >
                    <span className="text-sm">NVIDIA</span>
                  </button>
                </li>
              </ul>
            )}
          </li>
          
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-gray-700 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
              </svg>
              <span>Overview</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-gray-700 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Incidents</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-gray-700 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
              </svg>
              <span>Nodes</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-gray-700 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              <span>Node Groups</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-gray-700 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Staking</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-gray-700 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span>Tests</span>
            </a>
          </li>
        </ul>
      </nav>
      
      {/* Bottom Links */}
      <div className="p-4 border-t">
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-gray-700 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-gray-700 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span>Help</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-red-600 hover:bg-red-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
              </svg>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
} 