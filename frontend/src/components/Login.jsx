import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const response = await axios.post('https://authentication-bzs5.onrender.com/api/auth/login', {
        email: username,
        password,
      });

      const { token } = response.data;
      console.log('JWT Token:', token); 

      // Store token in localStorage (optional)
      // localStorage.setItem('user', JSON.stringify({ token }));

      // Set user as authenticated and navigate to home page
      setIsAuthenticated(true);
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center  flex-col  bg-cyan-600'>
      <div className='flex  flex-col items-center justify-center border-white border-2 p-4'>
        <h2 className='text-3xl font-semibold'>Login</h2>
        <form onSubmit={handleSubmit} className='justify-center flex flex-col gap-4 mt-4'>
          <div className='flex gap-2'>
            <label className='text-lg font-semibold' htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className='text-lg font-semibold p-1 rounded-lg'
            />

          </div>
          <div className='flex gap-3'>
            <label className='text-lg font-semibold' htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='text-lg font-semibold p-1 rounded-lg'
            />
          </div>

          <div className='flex items-center justify-center'>
            <button className='border-2 border-black rounded-lg p-2 flex items-center font-semibold' type='submit'>Login</button>
          </div>
        </form>
       <div className='flex flex-row mt-4 items-center'>
       <div className='font-semibold'>
          <h2>Signup to register</h2>
        </div>
        <div className='flex items-center justify-center '>
          <button className=' p-2 flex items-center font-semibold underline' onClick={() => navigate('/signup')}>Register</button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Login;
