const express = require('express');
 const bodyParser= require('body-parser');
const app = express();
const crypto = require("crypto");
let request=0;
const todo=[

];
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(function(req,res,next){
console.log("req came");
request++;
next();
});
var arr=[{"name":"goutham","email":"mandlagouthamreddy@gmail.com","userid":1}]
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
app.post("/api/users",function(req,res){
const course={
id:todo.length+1,
name:req.body
};
todo.push(course);
res.json(todo);
});
app.delete("/api/users/:id",function(req,res){
const to=todo.find(c=>c.id===parseInt(req.params.id));
var user=req.params.userid;
const index=todo.indexOf(to);
todo.splice(index,1);
res.send(todo);
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
