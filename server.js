const express = require('express');
const cookieParser=require('cookie-parser');
const expressSession=require('express-session');
//const courseLib =require('./backend/lib/courselib.js');
const courselib = require('./backend/lib/courselib');
const config = require('./backend/config/config');
const regisl=require('./backend/lib/regisLib');
const user=require('./backend/model/registrationModel');
const registration=require('./backend/lib/registrationLib');
const dbConnectLib = require('./backend/lib/dbConnectLib');
//const table = require('./table')
const bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');
//var password=process.env.Mongo_atlas_password;
var connectionString = config.mongoConnectionString;
dbConnectLib.connect();

const crypto = require("crypto");
let request = 0;
const todo = [

];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: config.sessionSecret,
}));
app.use(function (req, res, next) {
    console.log("req came");
    request++;
    next();
});
app.use(express.static(__dirname + "/frontend"));
app.get("/resume", function (req, res) {
    let indexs = __dirname + "/frontend/html/resume.html";
    res.sendFile(indexs);
});
app.get("/search", function (req, res) {
    let indexs = __dirname + "/frontend/html/search.html";
    res.sendFile(indexs);
});
app.get("/", function (req, res) {
    let indexs = __dirname + "/frontend/html/basic.html";
    res.sendFile(indexs);
});
app.get("/apple", function (req, res) {
    let indexs = __dirname + "/frontend/html/apple.html";
    res.sendFile(indexs);
});
app.get("/todo", function (req, res) {
    let indexs = __dirname + "/frontend/html/todo.html";
    res.sendFile(indexs);
});
app.get("/crudm", function (req, res) {
    let indexs = __dirname + "/frontend/html/crud.html";
    res.sendFile(indexs);
});
app.get("/crudm", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.put("/crud/:idd", courselib.update);
app.post("/crud",courselib.addnewone);
//app.get('/api/courses', courseLib.getallcourses);
app.get("/color", function (req, res) {
    let indexs = __dirname + "/frontend/html/color.html";
    res.sendFile(indexs);
});
app.get("/login", function (req, res) {
    let indexs = __dirname + "/frontend/html/login.html";
    res.sendFile(indexs);
});
app.get("/tambola", function (req, res) {
    let indexs = __dirname + "/frontend/html/tambola.html";
    res.sendFile(indexs);
});
app.get("/register", function (req, res) {
    let indexs = __dirname + "/frontend/html/registration.html";
    res.sendFile(indexs);
});
app.get("/piechart", function (req, res) {
    let indexs = __dirname + "/frontend/html/piechart.html";
    res.sendFile(indexs);
});
app.get("/regis", function (req, res) {
    let indexs = __dirname + "/frontend/html/regis.html";
    res.sendFile(indexs);
});
app.get("/login1",regisl.getall);
app.get("/home",function(req,res){
    let indexs = __dirname + "/frontend/html/color.html";
    res.sendFile(indexs);
})
app.post("/users",regisl.addnewone);
app.post("/api/regis",registration.addnewone);
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(config.webPort, function () {
    console.log("Server Starting running on http://localhost:" + PORT);
})