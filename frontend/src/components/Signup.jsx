import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); 
    try {
      // Send a POST request to the backend API to store user data
      const response = await axios.post('https://authentication-bzs5.onrender.com/api/users/register', {
        firstname: fname,  
        lastname: lname,   
        email,
        password,
      });
      console.log('Signup successful:', response.data); 

      // After successful signup, navigate to the login page
      navigate('/'); 
    } catch (error) {
      console.error('Registration failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='bg-cyan-300 w-screen h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col border-2 border-black p-4'>
        <h1 className='text-4xl font-semibold'>Create Your Account</h1>
        <form onSubmit={handleSubmit} className='justify-center flex flex-col gap-4 mt-4 border-white border-2 p-2'>
          <div className='flex gap-2'>
            <label  className='text-lg font-semibold' htmlFor='fname'>First Name:</label>
            <input
              type='text'
              id='fname'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
              className='text-lg font-semibold p-1 rounded-lg'
            />
          </div>
          <div className='flex gap-2'>
            <label className='text-lg font-semibold' htmlFor='lname'>Last Name:</label>

            <input
              type='text'
              id='lname'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
               className='text-lg font-semibold p-1 rounded-lg'
            />
          </div>

          <div className='flex gap-[48px]'>
            <label className='text-lg font-semibold' htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='text-lg font-semibold p-1 rounded-lg'
            />
          </div>

          <div className='flex gap-[16px]'>
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
            <button className='border-2 border-black rounded-lg p-2 flex items-center font-semibold' type='submit'>Sign Up</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Signup;
