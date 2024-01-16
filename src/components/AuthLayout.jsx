import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Protected component for handling authentication checks
export default function Protected({ children, authentication = true }) {
  // React Router hook for navigation
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  // Redux selector to get the authentication status from the store
  const authStatus = useSelector((state) => state.auth.status);

  // useEffect hook to perform actions on component mount and when authStatus changes
  useEffect(() => {
    // Check if authentication is required and user is not authenticated
    if (authentication && !authStatus) {
      // Redirect to the login page
      navigate('/login');
    } else if (!authentication && authStatus) {
      // Redirect to the home page if authentication is not required and user is authenticated
      navigate('/');
    }

    // Set loader to false once authentication checks are complete
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
