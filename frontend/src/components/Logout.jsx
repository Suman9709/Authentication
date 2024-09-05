import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogoutButton = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call the logout API
      await axios.post('https://authentication-bzs5.onrender.com/api/auth/logout');
      
      // Clear authentication state (e.g., token, user data)
      setIsAuthenticated(false);

      // Redirect to the login page
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  );
};

export default LogoutButton;
