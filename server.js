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
const apiRouter = require('./backend/routes/apiRoutes');
const webRouter = require('./backend/routes/webRoutes');
const bodyParser = require('body-parser');
const app = express();
const CLIENT_ID= '445093466494-u1c7jg8178j553gv6o6ao8uohia3cja6.apps.googleusercontent.com';
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);
var mongoose = require('mongoose');
var connectionString = config.mongoConnectionString;
dbConnectLib.connect();
const crypto = require("crypto");
let request = 0;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.post('/login',function(req,res){
    let token=req.body.token;
    console.log(token);
    async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,  
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    console.log(payload);
  }
  verify()
  .then(()=>{
      res.cookie('session-token',token);
      res.send('success');
  }).catch(console.error);
})
app.get('/logout',function(req,res){
    res.clearCookie('session-token');
    res.redirect("/login");
})
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
app.use('/api',apiRouter);
app.use(webRouter);
app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.put("/crud/:idd", courselib.update);
app.post("/crud",courselib.addnewone);
app.get("/login1",regisl.getall);
app.post("/api/users",regisl.addnewone);
app.post("/api/regis",registration.addnewone);
/*app.get('/profile',checkAuthenticated,function(req,res){
    let user=req.user;
    res.render('dashboard',{user});
})*/
app.get('/dashboard',checkAuthenticated,function(req,res){
    let user=req.user;
    res.render('dashboard',{user});
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;


function checkAuthenticated(req,res,next){
    let token=req.cookies['session-token'];
    let user={};
    async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,  
    });
    const payload = ticket.getPayload();
    user.name=payload.name;
    user.email=payload.email;
    user.picture=payload.picture;
    //console.log(payload);
  }
  verify()
  .then(()=>{
      req.user=user;
      next();
  }).catch(err=>{
      res.redirect('/login');
  })
}
// Start the server
app.listen(config.webPort, function () {
    console.log("Server Starting running on http://localhost:" + PORT);
})