const express = require('express');
const path = require('path');
const dotenv = require('dotenv')

const portfolioRoutes = require('./routes/ProtfolioRoute');
const connectDB = require('./config/dbConfig');



//configure env
dotenv.config()

//database Confiq
connectDB();





const app = express();

// Connect to MongoDB

// Middleware
app.use(express.json());

// API Routes
app.use('/api/v1', portfolioRoutes);

// Serve static files for the frontend
app.use(express.static(path.join(__dirname, '../client', 'dist')));

// Catch-all route for serving the React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on Port ${port}`);
});
