const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log('dataBase conected hello ');
        
      
    } catch (error) {
        console.log(`Error in MongoDB: ${error}`);
    }
};

module.exports = connectDB; // Use module.exports instead of export default