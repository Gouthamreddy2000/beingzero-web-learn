const mongoose = require("mongoose");

const regisSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    
  },
  
})

const regisModel = mongoose.model("regis", regisSchema);

module.exports = regisModel;