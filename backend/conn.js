const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGO_URI;

mongoose.connect(URL)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:", err.message);
  });

module.exports = mongoose;
