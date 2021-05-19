const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tableSchema = new schema({
    name : {
        type : String,
        required : true
    },
    Articels : {
        type : String,
        required : true
    }
}, {timestamps : true})
const table = mongoose.model('crud', tableSchema);
module.exports = table;