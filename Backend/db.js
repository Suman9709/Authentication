const mongoose = require('mongoose');
require('dotenv').config();

const connection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "Authentication_test",
  })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(err => {
    console.error(`Failed to connect to database: ${err.message}`, err);
  });
  
};

module.exports = connection;
