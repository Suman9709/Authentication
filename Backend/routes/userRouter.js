const express = require('express');
const router = express.Router(); 
const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const { error } = validate({ firstname, lastname, email, password });
  if (error) return res.status(400).send(error.details[0].message);

  try {
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).send('User already exists');

      const user = new User({ firstname, lastname, email, password });
      await user.save();

      res.status(201).send('User registered successfully');
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

router.get('/users', async (req, res) => {
  try {
      const users = await User.find();
      res.status(200).json(users);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});
module.exports = router;
