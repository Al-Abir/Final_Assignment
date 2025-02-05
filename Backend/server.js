const express = require('express');
const connectDB = require('./config/dbConfig'); // Use require instead of import

const app = express();
require('dotenv').config();
connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on Port ${port}`);
});