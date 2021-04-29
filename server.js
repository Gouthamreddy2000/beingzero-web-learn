const express = require('express');
 
const app = express();
 
app.get("/home",function(req,res){
let indexs=__dirname+"/login.html";
res.sendFile(indexs);
});
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
