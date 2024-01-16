import React, { useId } from 'react';

// React.forwardRef is used to forward the ref from the parent to the input element
const Input = React.forwardRef(function Input(
  {
    label, // Label for the input
    type = 'text', // Type of the input (default is "text")
    className = '', // Additional custom class names for styling
    ...props // Any additional props that can be applied to an input element
  },
  ref
) {
  // useId is a utility hook that generates a unique ID for accessibility
  const id = useId();

  // Render the input component
  return (
    <div className="w-full">
      {/* Render label if provided */}
      {label && (
        <label className="inline-block pl-1 mb-1" htmlFor={id}>
          {label}
        </label>
      )}

      {/* Input element with dynamic classes and ref forwarding */}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref} // Forwarded ref
        {...props} // Spread additional props
        id={id} // Unique ID for accessibility
      />
    </div>
  );
});

export default Input;
