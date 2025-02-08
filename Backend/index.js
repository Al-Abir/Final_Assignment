const express = require('express');
const path = require('path');
const dotenv = require('dotenv')

const portfolioRoutes = require('./routes/ProtfolioRoute');
const connectDB = require('./config/dbConfig');
const cors  =require("cors");


//configure env
dotenv.config()

//database Confiq
connectDB();





const app = express();

// Connect to MongoDB

// Middleware
app.use(express.json());

app.use(cors({
    origin: '*', // Allow all origins (replace with your frontend URL in production)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
    
app.get("/", (req, res) => {
    res.send("Hello, Vercel!");
});

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
