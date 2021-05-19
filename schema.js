const mongoose = require('mongoose');
const schema = mongoose.Schema;

const todoSchema = new schema({
    name : {
        type : String,
        required : true
    }
}, {timestamps : true})
const task = mongoose.model('task', todoSchema);
module.exports = task;