import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={width}
        className="mr-2"
      >
        <path d="M21 12.92c-2.16 0-4.01-1.31-4.82-3.18C15.09 8.4 13.66 8 12 8s-3.09.4-4.18 1.74C7.01 11.61 5.16 12.92 3 12.92c-.55 0-1 .45-1 1s.45 1 1 1c1.71 0 3.19-.81 4.18-2.06C9.91 15.6 11.34 16 13 16s3.09-.4 4.18-1.74c.99.81 2.44 1.74 4.82 1.74c.55 0 1-.45 1-1s-.45-1-1-1zM3 10h2M19 10h2M3 14h2M19 14h2M5 18h14"></path>
      </svg>
      <span className="text-xl font-bold text-gray-900">Blogwave</span>
    </div>
  );
}

export default Logo;
