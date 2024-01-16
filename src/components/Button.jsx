import React from 'react';

// Reusable Button component with customizable styles
export default function Button({
  children, // Content inside the button
  type = 'button', // Button type (default is "button")
  bgColor = 'bg-blue-600', // Background color class (default is blue)
  textColor = 'text-white', // Text color class (default is white)
  className = '', // Additional custom class names for styling
  ...props // Any additional props that can be applied to a button
}) {
  // Render the button with dynamic classes based on provided or default values
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
