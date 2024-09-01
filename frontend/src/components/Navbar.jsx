import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({ setIsAuthenticated, handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      // Send a POST request to the backend logout endpoint
      await axios.post('http://localhost:8080/api/auth/logout');

      // Clear user data from localStorage
      localStorage.removeItem('user');

      // Set user as not authenticated
      setIsAuthenticated(false);

      // Call the handleLogout function passed as a prop
      handleLogout();

      // Navigate to the login page
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='bg-cyan-800 flex flex-row p-4 justify-between'>
      <h1 className='text-white text-2xl'>Habit Track</h1>
      <ul className='flex  flex-row gap-4 text-white text-lg'>
        <Link to={"/home"}><li>Home</li></Link>
        <Link to={"/about"}><li>About</li></Link>
        <Link to={"/contact"}><li>Contact</li></Link>
        
      </ul>
      <button className='text-white font-lg' onClick={handleLogoutClick}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
