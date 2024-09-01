const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});
const saltRounds = parseInt(process.env.SALT, 10) || 10; // Ensure SALT is correctly parsed

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        try {
            this.password = await bcrypt.hash(this.password, saltRounds);
        } catch (err) {
            return next(err);
        }
    }
    next();
});


const User = mongoose.model('User', userSchema); 

const validate = (data) => {
  const schema = joi.object({
      firstname: joi.string().required().label("firstname"),
      lastname: joi.string().required().label("lastname"),
      email: joi.string().email().required().label("email"),
      password: passwordComplexity().required().label("password"),
  });
  return schema.validate(data);
}

module.exports = { User, validate };
