var mongoose = require('mongoose');
var connectionString = "mongodb+srv://Goutham:Jyothi@123@cluster0.zv3at.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', function () {
    console.log("database connected");
})

const courselib = require('./backend/lib/courselib');
courselib.createcourse({ coursename: 'python' }, function (err, course) {
    console.log(course);
})