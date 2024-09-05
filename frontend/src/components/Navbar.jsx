import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({ setIsAuthenticated, handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      await axios.post('https://authentication-bzs5.onrender.com/api/auth/logout');  
      localStorage.removeItem('user');
      setIsAuthenticated(false);
      handleLogout();

      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='bg-cyan-800 flex flex-row p-4 justify-between fixed top-0 left-0 right-0 z-50'>
        <h1 className='text-white text-2xl'>Habit Track</h1>
        <ul className='flex flex-row gap-4 text-white text-lg'>
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
