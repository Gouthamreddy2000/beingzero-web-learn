const express = require('express');
 
const app = express();
app.use(express.static(__dirname+"/frontend"));
app.get("/resume",function(req,res){
let indexs=__dirname+"/frontend/html/resume.html";
res.sendFile(indexs);
});
app.get("/search",function(req,res){
let indexs=__dirname+"/frontend/html/search.html";
res.sendFile(indexs);
});
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
