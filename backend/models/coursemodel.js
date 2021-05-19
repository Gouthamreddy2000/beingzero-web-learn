const mongoose = require('mongoose');
var courseSchema = new mongoose.Schema({
    coursename: String,
    articles: Number,
    isDeleted: Boolean
});

var courseModel = mongoose.model('course', courseSchema);
module.exports = courseModel;