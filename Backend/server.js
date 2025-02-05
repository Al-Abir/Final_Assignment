const express = require('express');
const path = require('path'); 
const connectDB = require('./config/dbConfig');

const app = express();
require('dotenv').config();
connectDB();

app.use(express.static(path.join(__dirname, 'client', 'dist'))); 

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on Port ${port}`); // Use correct backticks
});
