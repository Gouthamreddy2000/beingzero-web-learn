const mongoose = require("mongoose");

const regis = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    
  },
  
});

const regisModel = mongoose.model("regis", regis);

module.exports = regisModel;