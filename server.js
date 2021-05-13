const express = require('express');
 
const app = express();
var arr=[{"name":"goutham","email":"mandlagouthamreddy@gmail.com"}]
app.use(express.static(__dirname+"/frontend"));
app.get("/resume",function(req,res){
let indexs=__dirname+"/frontend/html/resume.html";
res.sendFile(indexs);
});
app.get("/search",function(req,res){
let indexs=__dirname+"/frontend/html/search.html";
res.sendFile(indexs);
});
app.get("/",function(req,res){
let indexs=__dirname+"/frontend/html/basic.html";
res.sendFile(indexs);
});
app.get("/apple",function(req,res){
let indexs=__dirname+"/frontend/html/apple.html";
res.sendFile(indexs);
});
app.get("/todo",function(req,res){
let indexs=__dirname+"/frontend/html/todo.html";
res.sendFile(indexs);
});
app.get("/api/users", function(req, res){
   res.render('form');
});
app.post("/api/users",function(req,res){
var user=req.body;
res.json({user});
});
app.get("/color",function(req,res){
let indexs=__dirname+"/frontend/html/color.html";
res.sendFile(indexs);
});
 app.get("/login",function(req,res){
let indexs=__dirname+"/frontend/html/login.html";
res.sendFile(indexs);
});
app.get("/register",function(req,res){
let indexs=__dirname+"/frontend/html/registration.html";
res.sendFile(indexs);
});
app.get("/piechart",function(req,res){
let indexs=__dirname+"/frontend/html/piechart.html";
res.sendFile(indexs);
});
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
