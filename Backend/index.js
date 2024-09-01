require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const connection = require('./db');
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/auth");
connection(); 

// Middleware
app.use(express.json());
app.use(cors()); 

// Routes
app.use('/api/users', userRouter); 
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
