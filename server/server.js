//modules
const express = require("express");
const cors = require("cors");
const passport = require('passport');
const passportlocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();

//files
const databaseCalls = require("./database.js");
const User = require('./user');

//variables
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: "secretcode",
  resave: true,
  saveUninitialized: true //could turn this back to false for login when someoen leaves the site
}));
app.use(cookieParser("secretcode"));

//database connection
mongoose.connect("mongodb+srv://databaseadmin:admin123@casino.jytkg.mongodb.net/Casino?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log("Mongoose is connected!");
})

//Routes 
app.post("/register", (req, res) => {
  User.findOne({email: req.body.email}, async (err, doc) => {
    if(err) throw err
    else if(doc) res.status(405).send("Email is taken!")
    else {
      const newUser = new User({
        email: req.body.email, 
        username: req.body.username,
        password: req.body.password,
        verified: false
      });
      await newUser.save();
      res.status(202).send("Account created");
    }
  })
});



//Helpers 
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}


app.listen(HTTP_PORT, onHttpStart);



/**
 *

app.post("/register", (req, res) => {
//search if user is aleady created with this email
databaseCalls.searchUserByEmail(req.body.email).then((userData) => {
  if(userData == undefined){
    //add user if not taken
    databaseCalls.createUser(req.body).then((result) => {
      console.log(result + " - " + Date.now());
      res.status(202).send("user data accepted");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('database error');
    });

  }else{
    console.log("Email was taken");
    res.status(405).send('Email Was Taken');
  }
}).catch((err)=>{
  console.log(err);
  res.status(400).send('bad');
});
});

app.post("/login", (req, res)=>{
console.log(req.body);
databaseCalls.findUserAndLogin(req.body.email, req.body.password).then((userData) =>{
  console.log(userData);
  res.status(200).send("user logged in");
}).catch((err)=>{
  console.log(err);
  res.status(500);
})
})

app.get("/user", (req,res)=>{

})


databaseCalls
.initialize()
.then((res) => {
  console.log(res);
  app.listen(HTTP_PORT, onHttpStart);
})
.catch((err) => {
  console.log(err);
});
 */
