import React from 'react';
import Navbar from './Navbar'; // Adjust import path as needed

const MainPage = ({ handleLogout }) => {
  return (
    <div>
      <Navbar setIsAuthenticated={() => {}} handleLogout={handleLogout} />
      {/* Other content */}
      <div className='bg-cyan-300 h-screen flex justify-center items-center'>
      <h1 className='text-4xl font-semibold'>Welcome to My World!</h1>
      </div>
    </div>
  );
};

export default MainPage;
