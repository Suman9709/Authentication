const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');




// const authenticate = async(req, res, next) =>{
// const token = req.header('Authorization');
// if(!token){
//   return res.status(401).json({ message: 'Access denied.' });
// }
// try{
//   const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//   req.user = decoded;
//   next();
// }
// catch(err){
//   return res.status(401).json({ message: 'Token is not valid.' });
// }
// };

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // console.log('Received email:', email);
  // console.log('Received password:', password);

  try {
      const user = await User.findOne({ email });
      console.log('User found:', user);

      if (!user) return res.status(400).send('Invalid email or password');

      const validPassword = await bcrypt.compare(password, user.password);
      console.log('Password valid:', validPassword);

      if (!validPassword) return res.status(400).send('Invalid email or password');

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES });
      // console.log('Token generated:', token);

      res.status(200).json({ token, message: 'Login successful' });
  } catch (err) {
      console.error('Error during login:', err.message);
      res.status(500).json({ error: err.message });
  }
});

router.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logout successful' });
});


module.exports = {router,authenticate};
