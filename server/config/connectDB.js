require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to DB');
  } catch (err) {
    console.log('error conection to DB ', err);
  }
};

module.exports = connectDB;