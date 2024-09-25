const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/PayTm");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = dbConnect;